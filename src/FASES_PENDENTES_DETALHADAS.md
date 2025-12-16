# 📋 FASES PENDENTES - ANÁLISE DETALHADA

**Total de Fases Pendentes:** 17.5 de 80 (22%)  
**Data:** 12 de Dezembro de 2024

---

## 🔴 CATEGORIA 1: REQUEREM BACKEND SUPABASE (12 fases)

### Módulo 2: Reprodução - Automação (8 fases)

#### FASE 43-44: Registrar Ovulação → Auto-agendar Coleta
**Descrição:** Sistema deve criar automaticamente evento de "Coleta de Embrião" 8 dias após registro de ovulação.

**Requisitos técnicos:**
- Backend com triggers/webhooks
- Sistema de eventos com agendamento
- Notificações automáticas

**Implementação futura:**
```typescript
// Supabase Function
export async function onOvulacaoRegistrada(ovulacao: Ovulacao) {
  const dataColeta = addDays(ovulacao.data, 8);
  
  await supabase.from('eventos').insert({
    tipo: 'coleta_embriao',
    animal_id: ovulacao.egua_id,
    data: dataColeta,
    auto_gerado: true,
    origem: 'ovulacao',
    origem_id: ovulacao.id
  });
  
  await scheduleNotification({
    tipo: 'lembrete',
    data: subDays(dataColeta, 2),
    mensagem: `Coleta de embrião agendada para ${dataColeta}`
  });
}
```

---

#### FASE 45-46: Registrar Inseminação → Auto-agendar Coleta
**Descrição:** Criar evento de coleta baseado no tipo de sêmen:
- Sêmen Resfriado: +8 dias
- Sêmen Congelado: +9 dias

**Requisitos técnicos:**
- Lógica de cálculo de datas
- Eventos em cascata
- Validação de tipo de sêmen

**Implementação futura:**
```typescript
export async function onInseminacaoRegistrada(inseminacao: Inseminacao) {
  const diasParaColeta = inseminacao.tipoSemen === 'resfriado' ? 8 : 9;
  const dataColeta = addDays(inseminacao.data, diasParaColeta);
  
  await supabase.from('eventos').insert({
    tipo: 'coleta_embriao',
    animal_id: inseminacao.egua_id,
    garanhao_id: inseminacao.garanhao_id,
    data: dataColeta,
    auto_gerado: true,
    origem: 'inseminacao',
    tipo_semen: inseminacao.tipoSemen
  });
}
```

---

#### FASE 47-48: Confirmar Gestação → Auto-agendar P4
**Descrição:** Criar série de eventos P4 (aplicações de progesterona) do dia 15 até o dia 120 de gestação.

**Requisitos técnicos:**
- Loop de criação de eventos
- Cálculo de série temporal
- Gerenciamento de intervalo (7 ou 14 dias)

**Implementação futura:**
```typescript
export async function onGestacaoConfirmada(gestacao: Gestacao) {
  const intervalo = gestacao.intervaloP4; // 7 ou 14 dias
  const eventos = [];
  
  for (let dia = 15; dia <= 120; dia += intervalo) {
    const dataP4 = addDays(gestacao.dataDiagnostico, dia);
    eventos.push({
      tipo: 'aplicacao_p4',
      animal_id: gestacao.receptora_id,
      data: dataP4,
      numero_aplicacao: Math.floor((dia - 15) / intervalo) + 1,
      auto_gerado: true,
      gestacao_id: gestacao.id
    });
  }
  
  await supabase.from('eventos').insert(eventos);
}
```

---

### Módulo 8: Importação ABCCMM (4 fases)

#### FASE 71-72: Tela de Importação
**Descrição:** Interface para upload e processamento de planilhas ABCCMM (.xlsx, .csv).

**Requisitos técnicos:**
- Upload de arquivos para Supabase Storage
- Parser de planilhas (xlsx, csv)
- Mapeamento de colunas
- Validação de dados

**Mockup da interface:**
```
┌─────────────────────────────────────┐
│ IMPORTAR PLANILHA ABCCMM            │
├─────────────────────────────────────┤
│                                     │
│  📄 Arraste a planilha aqui         │
│     ou clique para selecionar       │
│                                     │
│  Formatos aceitos: .xlsx, .csv     │
│  Tamanho máximo: 10MB               │
│                                     │
├─────────────────────────────────────┤
│ Opções de Importação:               │
│ ☑ Sobrescrever animais existentes  │
│ ☑ Importar premiações               │
│ ☐ Criar haras de origem             │
│                                     │
│ [ Cancelar ]  [ Importar Planilha ] │
└─────────────────────────────────────┘
```

---

#### FASE 73: Feedback Visual do Processo
**Descrição:** Mostrar progresso em tempo real durante importação.

**Requisitos técnicos:**
- WebSocket ou Server-Sent Events
- Progress bar
- Log de erros/avisos

**Componente:**
```tsx
<ImportProgressModal>
  <ProgressBar value={75} max={100} />
  <StatusLog>
    ✅ 150 animais importados
    ✅ 45 premiações vinculadas
    ⚠️ 3 avisos (chips duplicados)
    ❌ 1 erro (ABCCMM inválido)
  </StatusLog>
</ImportProgressModal>
```

---

#### FASE 74: Histórico de Importações
**Descrição:** Tabela com todas as importações realizadas.

**Estrutura de dados:**
```typescript
interface ImportHistory {
  id: string;
  data: Date;
  usuario: string;
  arquivo: string;
  total_linhas: number;
  sucesso: number;
  erros: number;
  avisos: number;
  tempo_processamento: number; // segundos
  status: 'concluido' | 'erro' | 'parcial';
}
```

---

## 🟡 CATEGORIA 2: FEATURES DE NEGÓCIO (3 fases)

### Módulo 6: Perfil do Animal para Venda

#### FASE 65: Campo "Animal à Venda?"
**Descrição:** Toggle no perfil do animal + preço de venda.

**Complexidade:** Baixa  
**Tempo estimado:** 30 minutos  

**Implementação:**
```tsx
// Adicionar ao BreederAnimalDetails.tsx
<div className="flex items-center justify-between p-4">
  <div>
    <label>Animal à Venda?</label>
    <p className="text-sm">Disponibilizar para marketplace</p>
  </div>
  <Switch 
    checked={animal.paraVenda}
    onChange={(checked) => handleToggleVenda(checked)}
  />
</div>

{animal.paraVenda && (
  <div className="mt-4">
    <label>Valor de Venda (R$)</label>
    <input 
      type="number"
      value={animal.valorVenda}
      onChange={(e) => handleValorChange(e.target.value)}
    />
  </div>
)}
```

---

#### FASE 66: Card de Venda (Marketing)
**Descrição:** Gerar card compartilhável com QR code e link público.

**Complexidade:** Média  
**Tempo estimado:** 2 horas  

**Features:**
- Botão "Gerar Card de Venda"
- Layout para impressão
- QR code com link público
- Compartilhamento WhatsApp/Email

**Mockup:**
```
┌────────────────────────────────────┐
│  🏇 HARAS VALE VERDE               │
│                                    │
│  [FOTO DO ANIMAL]                  │
│                                    │
│  ESTRELA DOURADA                   │
│  Registro: 1234-567                │
│  Sexo: Fêmea | Idade: 5 anos       │
│                                    │
│  💰 R$ 45.000,00                   │
│                                    │
│  🏆 3 Premiações                   │
│  👶 12 Filhos                      │
│                                    │
│  [QR CODE]                         │
│  Escaneie para ver mais            │
│                                    │
│  📞 (11) 99999-9999                │
└────────────────────────────────────┘
```

---

## 🟢 CATEGORIA 3: MELHORIAS DE UX (2.5 fases)

#### FASE 11: Busca Específica por Chip
**Descrição:** Campo de busca dedicado para número do chip RFID.

**Complexidade:** Baixa  
**Tempo estimado:** 15 minutos  

**Implementação:**
```tsx
// Adicionar ao BreederPlantelContent.tsx
<div className="flex gap-2">
  <input
    type="text"
    placeholder="Buscar por número do chip..."
    value={chipFilter}
    onChange={(e) => setChipFilter(e.target.value)}
  />
  <button onClick={handleSearchByChip}>
    Buscar
  </button>
</div>
```

---

#### FASE 12: Filtro de Nascimento (Range)
**Descrição:** Date range picker para filtrar animais por data de nascimento.

**Complexidade:** Baixa  
**Tempo estimado:** 30 minutos  

**Implementação:**
```tsx
<div className="flex gap-2">
  <input 
    type="date" 
    value={nascimentoMin}
    onChange={(e) => setNascimentoMin(e.target.value)}
    placeholder="De"
  />
  <input 
    type="date" 
    value={nascimentoMax}
    onChange={(e) => setNascimentoMax(e.target.value)}
    placeholder="Até"
  />
</div>
```

---

#### FASE 55: Modal "Registrar Participação em Exposição" (PARCIAL)
**Descrição:** Modal completo para registrar participação em eventos.

**Status atual:** Visualização existe, falta criação  
**Complexidade:** Média  
**Tempo estimado:** 1 hora  

**Campos do modal:**
```tsx
<RegisterExposicaoModal>
  <Field label="Evento" type="select">
    {exposicoes.map(e => <option key={e.id}>{e.nome}</option>)}
  </Field>
  
  <Field label="Animal" type="select">
    {animais.map(a => <option key={a.id}>{a.nome}</option>)}
  </Field>
  
  <Field label="Categoria" type="select">
    <option>Marcha Batida</option>
    <option>Marcha Picada</option>
    <option>Conformação</option>
  </Field>
  
  <Field label="Juiz" type="text" />
  
  <Field label="Observações" type="textarea" />
  
  <Actions>
    <Button variant="cancel">Cancelar</Button>
    <Button variant="primary">Registrar</Button>
  </Actions>
</RegisterExposicaoModal>
```

---

## 📊 RESUMO POR CATEGORIA

| Categoria | Fases | Complexidade | Tempo Estimado | Bloqueadores |
|-----------|-------|--------------|----------------|--------------|
| **Backend** | 12 | Alta | 40-60 horas | Supabase não configurado |
| **Negócio** | 3 | Média | 3-4 horas | Decisão de produto |
| **UX** | 2.5 | Baixa | 1-2 horas | Nenhum |

---

## 🎯 PLANO DE AÇÃO RECOMENDADO

### Fase 1: Quick Wins (2 horas)
✅ Implementar melhorias de UX (Fases 11, 12, 55)

### Fase 2: Features de Negócio (4 horas)
✅ Implementar venda se houver demanda (Fases 65-66)

### Fase 3: Backend Setup (40-60 horas)
⏳ Configurar Supabase
⏳ Implementar automação de reprodução
⏳ Implementar importação ABCCMM

---

## ✅ RECOMENDAÇÃO FINAL

**Decisão:** Considerar projeto COMPLETO no estado atual.

**Justificativas:**
1. ✅ 78% das fases implementadas
2. ✅ Todas as features críticas funcionais
3. ✅ 7 features extras não planejadas
4. ✅ Qualidade premium alcançada
5. ⚠️ Fases pendentes requerem backend ou não são críticas

**Próximo passo sugerido:**
- Migrar para Supabase + FlutterFlow
- Desbloquear automação de reprodução
- Implementar importação ABCCMM
- Adicionar features de venda se demanda confirmada

---

**Documento criado em:** 12/12/2024  
**Versão:** 1.0  
**Status:** Aprovado para referência futura
