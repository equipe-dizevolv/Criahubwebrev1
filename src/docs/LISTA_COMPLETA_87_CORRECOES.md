# LISTA COMPLETA DE CORREÇÕES PARA O MAKE
## Telas, Fluxos e Funcionalidades - Vibe Coding (Design System + Protótipo Interativo)

**Versão:** 1.0 Completa  
**Data:** Dezembro 2025  
**Status:** Pronto para Implementação  
**Foco:** Telas e Fluxos (sem alterações de stack tecnológico)

---

## 1. MÓDULO PLANTEL - EXPANSÃO DE CAMPOS

### 1.1 Listagem de Plantel (Web)
**Status Atual:** Parcialmente implementado  
**Correção Necessária:** Expandir colunas e filtros  
**Tela:** Dashboard > Plantel > Lista

#### Novos campos na tabela/grid:
- ✅ Foto (manter)
- ✅ Nome (manter)
- ✅ Registro ABCCMM (manter)
- ✅ Sexo (manter)
- ❌ Chip (NOVO) - Número do chip RFID
- ❌ Filhos (NOVO) - Contador de descendentes (ex: "12 filhos")
- ✅ Premiações (NOVO) - Contador de prêmios importados (ex: "3 prêmios") **[CONCLUÍDO FASE 5]**
- ❌ Marca (NOVO) - Número da marca/ferro
- ❌ Nascimento (NOVO) - Data de nascimento
- ❌ Genealogia (NOVO) - Link visual: "Ver Genealogia"
- ✅ Status (manter, mas com novos valores: Baia/Pasto/Serviço)

#### Filtros para adicionar:
- Chip (busca)
- Nascimento (data range)
- Categoria (Matriz/Doadora/Receptora/Garanhão/Castrado)
- Tem Filhos (sim/não)
- Tem Premiações (sim/não)

#### Ações por linha:
- Ver Perfil Completo
- Editar
- Visualizar Genealogia (quick)
- Ver Vídeos
- Deletar

---

### 1.2 Perfil do Animal - Visão Geral (Web + Mobile)
**Tela:** Plantel > [Nome do Animal] > Detalhes Completos

#### Estrutura de abas/seções:

```
┌─ Header com Foto + Nome + Status
├─ INFORMAÇÕES BÁSICAS
│  ├─ Sexo: [Macho/Fêmea]
│  ├─ Categoria: [Garanhão/Castrado/Matriz/Doadora/Receptora]
│  ├─ Nascimento: [DD/MM/YYYY]
│  ├─ Registro ABCCMM: [####-###]
│  ├─ Número do Chip: [###############]
│  ├─ Número da Marca: [###]
│  └─ Haras de Origem: [Nome Haras]
│
├─ GENEALOGIA
│  ├─ Pai: [Nome + Link]
│  ├─ Mãe: [Nome + Link]
│  ├─ Avós: [4 cards com nomes]
│  ├─ Bisavós: [8 cards com nomes]
│  └─ Botão: "Ver Árvore Genealógica Completa"
│
├─ REPRODUÇÃO (se aplicável)
│  ├─ Tipo: [Doadora/Matriz/Garanhão]
│  ├─ Ativo para reprodução: [Sim/Não]
│  ├─ Coberturas realizadas: [Contador]
│  ├─ Filhos: [Contador - link]
│  └─ Último evento: [Data + tipo]
│
├─ FILHOS (nova aba - se for fêmea/garanhão)
│  ├─ Grid/Tabela de filhos
│  ├─ Colunas: Foto | Nome | Data Nascimento | Sexo | Categoria
│  ├─ Filtros: Por sexo, por categoria, por status
│  └─ Contador total
│
├─ VÍDEOS (nova aba - se houver)
│  ├─ Grid de thumbnails de vídeos
│  ├─ Botão: "+ Adicionar Vídeo"
│  └─ Player ao clicar
│
├─ PREMIAÇÕES (nova aba - se houver)
│  ├─ Lista de prêmios importados da ABCCMM
│  ├─ Colunas: Evento | Data | Colocação | Pontos
│  └─ Botão: "Importar Premiações ABCCMM"
│
├─ SAÚDE/OCORRÊNCIAS
│  ├─ Últimas ocorrências
│  ├─ Vacinações
│  ├─ Tratamentos
│  └─ Botão: "Registrar Ocorrência"
│
├─ VENDA (se ativo para venda)
│  ├─ Valor de venda
│  ├─ Descrição
│  ├─ Link de vídeos para venda
│  ├─ Link de filhos
│  ├─ Link de premiações
│  └─ Botão: "Gerar Card de Venda"
│
├─ LOCALIZAÇÃO
│  ├─ Localização atual: [Baia/Pasto/Serviço]
│  ├─ Histórico de localização
│  ├─ Sócios e porcentagem
│  └─ Botão: "Registrar Mudança"
│
└─ DOCUMENTOS
   ├─ Contratos
   ├─ Certificados
   └─ Botão: "Adicionar Documento"
```

---

## 2. MÓDULO REPRODUÇÃO - AUTOMAÇÃO DE FLUXOS

### 2.1 Nova Aba: "Reprodução - Sequência Automática"
**Tela:** Reprodução > Dashboard  
**Funcionalidade:** Fluxo Automático de Eventos

O sistema deve reconhecer ações e criar automaticamente próximos passos.

---

### 2.2 Registrar Ovulação → Auto-agendar Coleta
**Ação do Usuário:** Veterinária registra "Égua ovulou"

#### Fluxo:

```
1. Botão "Registrar Ovulação" (Mobile + Web)
   ↓
2. Modal abre com campos:
   - Égua: [Dropdown com seleção]
   - Data/Hora: [Seletor de data/hora]
   - Observações: [Texto livre - opcional]
   ↓
3. Ao clicar "Confirmar":
   ✅ Evento criado: "Ovulação - [Nome Égua]"
      - Tipo: Serviço Interno
      - Data: [Selecionada]
      - Atribuído: Veterinário
   
   ✅ SISTEMA CRIA AUTOMATICAMENTE:
      - Evento: "Coleta de Embrião - [Nome Égua]"
      - Data: Data Ovulação + 8 dias
      - Tipo: Serviço Interno
      - Atribuído: Veterinário
      - Descrição: "Coleta de embrião. Origem: Ovulação registrada em [data]"
      - Prioridade: Alta
      - Notificação: Lembrete com 48 horas
   ↓
4. Confirmação visual mostra:
   ✅ Ovulação Registrada: [Data]
   ⏰ Próximo passo agendado: Coleta de Embrião em [Data] (8 dias)
```

#### Card de Confirmação:

```
┌──────────────────────────────┐
│ ✅ OVULAÇÃO REGISTRADA       │
├──────────────────────────────┤
│ Égua: Bella Vista            │
│ Data: 15/12/2025 às 14:30    │
│                              │
│ 📋 Próximo passo agendado:   │
│ Coleta de Embrião            │
│ Data: 23/12/2025             │
│ (em 8 dias)                  │
│                              │
│ [ Ver no Calendário ]        │
└──────────────────────────────┘
```

**Visual no Calendário:**
- Ovulação: Ícone 🔵 (azul)
- Coleta automática: Ícone 📋 (laranja com badge "Auto")

---

### 2.3 Registrar Inseminação → Auto-agendar Coleta de Embrião
**Ação do Usuário:** Veterinária registra "Égua foi inseminada"

#### Fluxo:

```
1. Botão "Registrar Inseminação" (Mobile + Web)
   ↓
2. Modal com campos:
   - Égua (Doadora): [Dropdown]
   - Garanhão: [Dropdown]
   - Data da Inseminação: [Seletor]
   - Tipo de Sêmen: (Radio Buttons)
      ○ Fresco
      ○ Resfriado  ← Coleta em 8 dias
      ○ Congelado  ← Coleta em 9 dias
   - Observações: [Texto livre]
   ↓
3. LÓGICA AUTOMÁTICA:
   
   IF Tipo = "Resfriado" THEN
      Sistema cria: Coleta de Embrião + 8 dias
   
   IF Tipo = "Congelado" THEN
      Sistema cria: Coleta de Embrião + 9 dias
   ↓
4. Confirmação mostra intervalo correto:
   Tipo: Sêmen Resfriado
   Coleta agendada: 23/12/2025 (em 8 dias)
   
   OU
   
   Tipo: Sêmen Congelado
   Coleta agendada: 24/12/2025 (em 9 dias)
```

#### Card de Confirmação:

```
┌──────────────────────────────┐
│ ✅ INSEMINAÇÃO REGISTRADA    │
├──────────────────────────────┤
│ Égua: Lua de Prata           │
│ Garanhão: Trovão Negro       │
│ Tipo: Sêmen Resfriado        │
│ Data: 15/12/2025             │
│                              │
│ ⏰ Coleta em 8 dias:         │
│ 23/12/2025                   │
│ [ Ver no Calendário ]        │
└──────────────────────────────┘
```

---

### 2.4 Confirmar Gestação → Auto-agendar P4
**Ação do Usuário:** Veterinária confirma gestação em receptora

#### Fluxo:

```
1. Botão "Confirmar Gestação" (após coleta de embrião)
   ↓
2. Modal com campos:
   - Receptora: [Dropdown]
   - Embrião de: [Égua Doadora - pré-preenchido]
   - Data do Diagnóstico: [Seletor]
   - Intervalo P4: (Radio Buttons)
      ○ A cada 7 dias
      ○ A cada 14 dias
   ↓
3. LÓGICA AUTOMÁTICA:
   Sistema cria série de eventos P4:
   
   - Primeira aplicação: Dia 15 após diagnóstico
   - Próximas: A cada 7 ou 14 dias (conforme seleção)
   - Duração: Até dia 120 de gestação (parto previsto)
   
   Exemplo (intervalo 7 dias):
   • P4 #1: 30/12/2025 (dia 15)
   • P4 #2: 06/01/2026 (dia 22)
   • P4 #3: 13/01/2026 (dia 29)
   • [... continua até dia 120 ...]
   ↓
4. Todos os eventos criados com:
   - Tipo: Serviço Interno
   - Prioridade: Alta
   - Atribuído: Veterinário
   - Notificação: 24 horas antes
```

#### Card de Confirmação:

```
┌──────────────────────────────────┐
│ ✅ GESTAÇÃO CONFIRMADA           │
├──────────────────────────────────┤
│ Receptora: Bella Vista           │
│ Embrião de: Lua de Prata + Trovão│
│ Data Diagnóstico: 15/12/2025     │
│                                  │
│ 💉 Série de P4 agendada:         │
│ 12 aplicações (a cada 7 dias)    │
│ Primeira: 30/12/2025 (dia 15)    │
│ Última: 02/04/2026 (dia 120)     │
│                                  │
│ Parto previsto: 13/04/2026       │
│ [ Ver Cronograma Completo ]      │
└──────────────────────────────────┘
```

**Visual no Calendário:**
- Todos os eventos P4 aparecem com ícone 💉
- Série aparece em cor diferente (roxo/lavanda)
- Ao expandir, mostra "P4 #1 de 12", "P4 #2 de 12", etc.

---

### 2.5 Visualização de Reprodução - Tabs com Categorias
**Tela:** Reprodução > [Tabs]

```
┌─ Reprodução
├─ Tab 1: COBERTURAS
│  ├─ Lista com filtros: Data, Animal, Status
│  ├─ Colunas: Data | Doadora | Garanhão | Tipo Sêmen | Status
│  ├─ Status: Pendente | Realizada | Cancelada
│  └─ Ação: "+ Registrar Nova Cobertura"
│
├─ Tab 2: ÓVULOS
│  ├─ Lista com filtros: Data, Animal
│  ├─ Colunas: Data | Animal | Qualidade | Status
│  └─ Ação: "+ Registrar Novo Óvulo"
│
├─ Tab 3: EMBRIÕES
│  ├─ Lista com filtros: Data, Doadora, Receptora, Status
│  ├─ Colunas: Data | Doadora | Receptora | Qualidade | Status
│  ├─ Status: Criado | Congelado | Transferido | Viável | Inviável
│  └─ Ação: "+ Registrar Novo Embrião"
│
└─ Tab 4: GESTAÇÕES
   ├─ Lista com filtros: Data, Animal, Status
   ├─ Colunas: Data | Receptora | Mãe Biológica | Dias | Data Prevista | Status
   ├─ Status: Confirmada | Em Acompanhamento | Abortada | Parida
   ├─ Cards especiais: Se Receptora ≠ Mãe, mostra badge "TRANSFERÊNCIA"
   └─ Ação: "+ Confirmar Gestação"
```

---

### 2.6 Modal de Edição Pós-Registro
Após registrar qualquer evento de reprodução:

```
Modal: "Editar [Tipo Evento] - [Nome Animal]"
├─ Campos do evento (pré-preenchidos)
├─ Botão: "Editar Próximo Evento" 
│  └─ Se houver evento automático, permite ajustar data/horário
├─ Botão: "Ver no Calendário"
└─ Botão: "Fechar"
```

---

## 3. MÓDULO DE EXPOSIÇÕES E TROPA DE PISTA

### 3.1 Nova Aba: Agenda > "Pistas/Exposições"
**Tela:** Agenda > Aba "Pistas" (Web + Mobile)

```
┌─ Filtros: 
│  ├─ Data (range)
│  ├─ Tipo: [Prova | Leilão | Exposição | Todas]
│  └─ Status: [Próximas | Concluídas | Canceladas]
│
├─ Cards/Lista de Exposições:
│  ├─ 🏆 Nome da Exposição
│  ├─ 📅 Data
│  ├─ 📍 Local
│  ├─ 🎪 Tipo (Prova de Marcha | Leilão | Exposição)
│  ├─ Origem: ABCCMM (públicas) | Customizada (privada)
│  ├─ Status: Próxima | Em Andamento | Concluída
│  ├─ Botão: "Registrar Participação" (se próxima)
│  └─ Botão: "Ver Resultados" (se concluída)
│
└─ Se nenhuma exposição:
   └─ "Nenhuma pista registrada. Deseja importar da ABCCMM?"
```

**Badge Visual:**
- 📅 Próximas: Fundo azul
- ⏳ Em andamento: Fundo laranja
- ✅ Concluída: Fundo verde

---

### 3.2 Modal: "Registrar Participação em Exposição"
Acionado por: Botão "Registrar Participação" em card de exposição

```
┌─ Exposição: [Nome Auto-preenchido]
├─ Data: [Data Auto-preenchida]
├─ Tipo de Tropa: [Dropdown]
│  ├─ Tropa 1: [Lista de animais já existentes]
│  ├─ Tropa 2: [...]
│  └─ + Criar Nova Tropa
├─ Seleção de Animais: [Multi-select]
│  └─ Grid com checkboxes + fotos dos animais
├─ Apresentador/Criador: [Dropdown]
├─ Observações: [Texto livre]
├─ [ Salvar ] [ Cancelar ]
```

**Após salvar:**

```
Confirmação:
✅ Participação registrada
   Exposição: [Nome]
   Tropa: [Número de animais]
   Data: [Data]
   [ Ir para Calendário ]
```

---

### 3.3 Resultados de Exposição
**Tela:** Agenda > Pista > "Ver Resultados" (após evento)

```
┌─ Exposição: [Nome]
├─ Data: [Data Realizada]
├─ Cards de Animais Participantes:
│  ├─ Foto
│  ├─ Nome
│  ├─ Colocação: [1º | 2º | 3º | Participante | Desclassificado]
│  ├─ Pontos: [Se aplicável]
│  └─ Link: "Atualizar Resultado"
└─ Botão: "Importar Resultados ABCCMM"
```

---

### 3.4 Perfil do Animal - Histórico de Pistas
**Tela:** Plantel > [Animal] > Aba "Pistas" (Web)

```
┌─ Histórico de Participações em Pistas
├─ Tabela/Cards:
│  ├─ Data | Exposição | Colocação | Pontos | Prêmios
│  └─ Filtrar por: Ano, Tipo, Resultado
│
├─ Estatísticas (se houver):
│  ├─ Total de participações: [N]
│  ├─ Melhor colocação: [1º lugar em X eventos]
│  ├─ Pontos acumulados: [Total]
│  └─ Prêmios conquistados: [N]
│
└─ Botão: "Importar Resultados ABCCMM"
```

---

## 4. NOVOS STATUS DE ANIMAIS: BAIA / PASTO / SERVIÇO

### 4.1 Perfil do Animal - Campo de Status
**Tela:** Plantel > [Animal] > Seção "Informações"

Alteração do campo "Status":

```
Status Atual: [Ativo ▼]
├─ Se seleção = "Ativo":
│  ├─ Localização: (Radio Buttons)
│  │  ├─ ⬜ Baia
│  │  ├─ ⬜ Pasto
│  │  └─ ⬜ Serviço → Se selecionado, sub-opções:
│  │     ├─ Reprodução
│  │     ├─ Trabalho
│  │     ├─ Repouso
│  │     └─ Outro: [Campo texto]
│  └─ Data da última alteração: [Auto-preenchido]
│
└─ Inativo: [Motivo] (Vendido | Falecido | Transferido | Outro)
```

---

### 4.2 Dashboard - Filtro por Status
**Tela:** Plantel > Dashboard ou Listagem Principal (Web)

```
┌─ Filtros Rápidos (Cards com números):
│  ├─ 🟦 Em Baia: 10 animais
│  ├─ 🟩 Em Pasto: 5 animais
│  ├─ 🟧 Em Serviço: 3 animais
│  │  └─ Detalhamento:
│  │     ├─ Reprodução: 2
│  │     ├─ Trabalho: 1
│  │     └─ Repouso: 0
│  ├─ ⚪ Inativos: 2 animais
│  └─ Total do Plantel: 20 animais
│
└─ Ao clicar em card, filtra listagem automaticamente
```

---

### 4.3 Mobile - Status Visual em Cards
**Tela:** Plantel > Lista (Mobile)

Cada animal mostra badge de status:

```
Card Animal:
┌─────────────────────┐
│ 📷 Foto              │
├─────────────────────┤
│ 🟦 BAIA              │ ← Badge com cor
│ Bella Vista          │
│ Reg: 2020-001        │
│ [ Ver Detalhes ]     │
└─────────────────────┘
```

**Cores:**
- 🟦 Azul = Baia
- 🟩 Verde = Pasto
- 🟧 Laranja = Serviço
- ⚪ Cinza = Inativo

---

### 4.4 Histórico de Mudanças de Status
**Tela:** Plantel > [Animal] > Aba "Histórico" (Web)

```
┌─ Histórico de Status
├─ Tabela:
│  ├─ Data | Status Anterior | Status Novo | Motivo | Registrado por
│  └─ Exemplo:
│     15/12/2025 | Pasto → Serviço | Reprodução | Admin
│     10/12/2025 | Baia → Pasto | Recuperação | Veterinário
│
└─ Ordenação: Mais recente primeiro
```

---

## 5. GALERIA DE VÍDEOS DOS ANIMAIS

### 5.1 Perfil do Animal - Aba "Vídeos"
**Tela:** Plantel > [Animal] > Aba "Vídeos" (Web + Mobile)

```
┌─ Header: "Vídeos de [Nome Animal]"
├─ Botão: "+ Adicionar Vídeo" (Web)
│
├─ Grid de Vídeos:
│  ├─ Cards de Vídeo:
│  │  ├─ Thumbnail (com play button)
│  │  ├─ Título
│  │  ├─ Duração: [MM:SS]
│  │  ├─ Data Upload: [DD/MM/YYYY]
│  │  ├─ Tipo: [Badge com tipo]
│  │  │  ├─ 🐴 Marcha
│  │  │  ├─ 🏆 Pista/Competição
│  │  │  ├─ 💖 Personalidade
│  │  │  └─ 📊 Genealogia
│  │  └─ Ações: (ícones pequenos)
│  │     ├─ Play (ao clicar thumbnail)
│  │     ├─ Editar
│  │     └─ Deletar
│  │
│  └─ Se mobile: Scroll horizontal
│
└─ Se vazio: "Nenhum vídeo adicionado. Adicione um para destacar este animal!"
```

---

### 5.2 Modal: "Adicionar Vídeo"
Acionado por: Botão "+ Adicionar Vídeo"

```
┌─ Título do Modal: "Adicionar Vídeo - [Nome Animal]"
├─ Opção 1: Upload de Arquivo
│  ├─ [ Clique ou arraste arquivo aqui ]
│  ├─ Formatos aceitos: MP4, MOV, AVI
│  └─ Tamanho máximo: 500MB
│
├─ OU
│
├─ Opção 2: Link Externo
│  ├─ [ https://youtube.com/... ]
│  └─ Suporta: YouTube | Vimeo
│
├─ Campo: "Título do Vídeo" [Obrigatório]
├─ Campo: "Descrição" (opcional)
├─ Campo: "Tipo de Vídeo": (Dropdown)
│  ├─ 🐴 Demonstração de Marcha
│  ├─ 🏆 Pista/Competição
│  ├─ 💖 Personalidade
│  ├─ 📊 Genealogia Visual
│  └─ 📹 Outro
│
├─ Campo: "Visibilidade":
│  ├─ 👁️ Público (aparece em perfil de venda)
│  └─ 🔒 Privado (apenas haras vê)
│
├─ [ Salvar ] [ Cancelar ]
```

---

### 5.3 Player de Vídeo
Ao clicar no vídeo em miniatura:

```
┌─ Modal/Lightbox Fullscreen
├─ Player de vídeo grande
├─ Controles: Play | Pause | Volume | Fullscreen
├─ Título e descrição do vídeo abaixo
├─ Botões: Editar | Compartilhar | Deletar
└─ Botão: X para fechar (canto superior)
```

**Mobile:**
- Player adapta ao tamanho da tela
- Modo portrait e landscape

---

## 6. PERFIL DO ANIMAL PARA VENDA - VERSÃO PÚBLICA

### 6.1 Campo "Animal à Venda?"

```
CAMPO: "Animal à Venda?"
├─ ☑️ Sim, à venda
└─ ☐ Não, não está à venda

SE MARCADO "SIM":
├─ Campo: "Valor de Venda" [Obrigatório]
│  └─ R$ [Número com máscara]
│
├─ Campo: "Descrição de Venda" [Obrigatório]
│  └─ [Texto rico - até 500 caracteres]
│
├─ Campo: "Genética Destacada" [Obrigatório]
│  └─ [Textarea - mencione características principais]
│
├─ LINKS PARA COMPLEMENTAR:
│  ├─ 📹 Vídeos
│  │  └─ "Adicionar vídeos de marcha e competições"
│  │     └─ Link para aba Vídeos (seção 5)
│  │
│  ├─ 👶 Filhos
│  │  └─ "Mostrar genealogia e descendentes"
│  │     └─ Link para aba Filhos (seção 1.2)
│  │
│  ├─ 🏆 Premiações
│  │  └─ "Importar resultados de competições"
│  │     └─ Link para aba Premiações (seção 1.2)
│  │
│  ├─ 📊 Genealogia Completa
│  │  └─ "Ver 4 gerações: Pais, Avós, Bisavós, Tataravós"
│  │     └─ Link para aba Genealogia (seção 1.2)
│  │
│  └─ 🎯 Histórico de Pistas
│     └─ "Participações e colocações em competições"
│        └─ Link para aba Pistas (seção 3.4)
│
└─ [ Salvar ] [ Cancelar ]
```

---

### 6.2 Card de Venda (Marketing/Compartilhável)
**Tela:** Plantel > [Animal] > Aba "Venda" > Botão "Gerar Card de Venda"

Gera versão simplificada para compartilhar:

```
┌─────────────────────────────────┐
│ 🐴 CRIAHUA - ANIMAL À VENDA     │
├─────────────────────────────────┤
│                                 │
│  📷 Foto Principal do Animal    │
│  (grande e destaque)            │
│                                 │
├─────────────────────────────────┤
│ BELLA VISTA                     │
│ Fêmea Matriz - 8 anos           │
│                                 │
│ Genealogia:                     │
│ Pai: Trovão Negro               │
│ Mãe: Lua de Prata               │
│ Avó Materna: Estrela Mangalarga │
│                                 │
├─────────────────────────────────┤
│ DESTAQUES:                      │
│ 🏆 3 Prêmios ABCCMM             │
│ 👶 12 Filhos Registrados        │
│ 📹 4 Vídeos de Marcha           │
│ 📊 Pedigree Completo            │
│                                 │
├─────────────────────────────────┤
│ Valor: R$ 150.000,00            │
│                                 │
│ "Genética de qualidade para     │
│  reprodução e competição"       │
│                                 │
├─────────────────────────────────┤
│ [ Ver Detalhes Completos ]      │
│ [ Agendar Visita ]              │
└─────────────────────────────────┘
```

---

### 6.3 Modal: "Visualizar Premiações Importadas"
**Tela:** Plantel > [Animal] > Aba "Venda" > Link "Premiações"

```
TÍTULO: "Premiações de [Nome Animal]"
TABELA/LISTA:
├─ Coluna 1: Evento
├─ Coluna 2: Data
├─ Coluna 3: Colocação
├─ Coluna 4: Pontos (se aplicável)
├─ Coluna 5: Fonte (ABCCMM / Manual)
│
EXEMPLOS:
├─ Prova de Marcha - Nacional | 15/09/2024 | 1º Lugar | 100pts | ABCCMM
├─ Exposição Manga Larga | 03/08/2024 | 2º Lugar | 80pts | ABCCMM
└─ Campeonato Regional | 22/07/2024 | Campeã | 150pts | ABCCMM

TOTAL: 3 Premiações - 330 pontos acumulados

[ Importar Novas Premiações ABCCMM ] [ Fechar ]
```

---

## 7. MENU INFERIOR (BOTTOM NAVIGATION) - MOBILE NATIVO

### 7.1 Bottom Navigation - Layout e Componentes
**Tela:** Mobile - Qualquer página (sempre visível)  
**Status:** ❌ Não implementado

#### ESTRUTURA (sempre no rodapé):

```
┌─────────────────────────────────┐
│ Conteúdo da Página              │
│                                 │
│                                 │
├─────────────────────────────────┤
│  🏠   📊   🐴   🔧   👤         │  ← Bottom Nav (5 ícones)
│ Home Dashboard Plantel Menu Perf│
└─────────────────────────────────┘
```

#### Ícones e Rotas:

1. **🏠 HOME**
   - Dashboard com resumo rápido do dia
   
2. **📊 DASHBOARD**
   - Métricas, próximas ações, status geral
   
3. **🐴 PLANTEL**
   - Lista de animais com filtros
   
4. **🔧 MENU** (Expandir/Contraír)
   - 🧬 Reprodução
   - 📅 Agenda
   - 📋 Ocorrências
   - 📹 Vídeos
   - ⚙️ Configurações
   
5. **👤 PERFIL**
   - Dados do usuário, logout, configurações

---

### 7.2 Comportamento da Bottom Navigation

#### Propriedades:

**SEMPRE ATIVO:**
- Fixo no rodapé (nunca sai da tela)
- Ícone ativo tem cor principal (laranja/orange)
- Ícones inativos: cor cinza
- Labels pequenos/opcionais abaixo do ícone
- Toque/click navega entre telas

**COMPORTAMENTO COM MODAIS:**
- Quando modal/dialog abrir: Bottom nav fica desabilitada
- Aparência atenuada (opacidade reduzida)
- Cliques não funcionam
- Ao fechar modal: volta ao normal

**COMPORTAMENTO COM KEYBOARD:**
- Se teclado virtual abrir: Bottom nav pode ser ocultada
- Ou permanece visível com espaço reduzido
- Implementação por app/browser

---

### 7.3 Visualização Mobile - Exemplo de Tela
**Tela:** Mobile > Plantel com Bottom Navigation

```
┌─────────────────────────────────┐
│ 🏠 CriaHub                  ⋮   │ ← Header
├─────────────────────────────────┤
│ Meu Plantel                     │
├─────────────────────────────────┤
│ Filtros: [Ativo ▼] [Baia ▼]    │
├─────────────────────────────────┤
│ 🐴 Bella Vista                  │ ← Animal card
│ Fêmea Matriz - 8 anos           │
│ [ Ver Detalhes ]                │
│                                 │
│ 🐴 Trovão Negro                 │ ← Animal card
│ Macho Garanhão - 12 anos        │
│ [ Ver Detalhes ]                │
│                                 │
│ 🐴 Lua de Prata                 │ ← Animal card
│ Fêmea Matriz - 6 anos           │
│ [ Ver Detalhes ]                │
│                                 │
├─────────────────────────────────┤
│  🏠   📊   🐴🟠 🔧   👤         │ ← Bottom Nav
│ Home Dash Plantel Menu Perfil   │
└─────────────────────────────────┘
                ↑
    Ícone ativo (laranja) em Plantel
```

---

## 8. IMPORTAÇÃO DE PLANILHAS ABCCMM

### 8.1 Tela de Importação (Admin/Web)
**Tela:** Configurações > "Dados e Importação" > "Importar ABCCMM"  
**Status:** ❌ Não implementado

```
┌─ TÍTULO: "Importar Dados ABCCMM"
│
├─ INFORMAÇÃO:
│  "Importe dados oficiais da ABCCMM (Associação Brasileira de Criadores
│   de Cavalos Mangalarga Marchador). O sistema fará validação automática
│   e criará registro de todos os animais na plataforma."
│
├─ ADVERTÊNCIA:
│  ⚠️ "Dados importados da ABCCMM não podem ser editados manualmente.
│      Para modificações, entre em contato com a ABCCMM."
│
├─ SELEÇÃO DE PLANILHAS:
│  "Selecione os 5 arquivos necessários (formato .xlsx ou .csv):"
│  ├─ [ ] Arquivo 1: Animais Principais (obrigatório)
│  ├─ [ ] Arquivo 2: Pais e Filiação (obrigatório)
│  ├─ [ ] Arquivo 3: Avós (opcional)
│  ├─ [ ] Arquivo 4: Bisavós (opcional)
│  └─ [ ] Arquivo 5: Tataravós (opcional)
│
│  OU
│
│  [ 📁 Clique para selecionar arquivos ]
│  ou arraste os 5 arquivos aqui
│
├─ VALIDAÇÃO:
│  Se todos os arquivos selecionados:
│  ├─ Mostrar preview dos dados
│  ├─ Contador de animais: "X animais encontrados"
│  ├─ Validação: "✅ Arquivo válido"
│  └─ Advertências (se houver):
│     "⚠️ 5 registros com dados incompletos"
│
├─ DUPLICATAS E CONFLITOS:
│  "Duplicatas encontradas: 12"
│  ├─ [ ] Ignorar duplicatas (manter dados existentes)
│  └─ [ ] Sobrescrever (atualizar com dados ABCCMM)
│
├─ [ 📥 Importar ] [ Cancelar ]
│
└─ HISTÓRICO DE IMPORTAÇÕES RECENTES:
   ├─ 15/12/2025 - 390 animais - ✅ Sucesso
   ├─ 10/12/2025 - 150 animais - ✅ Sucesso
   └─ 05/12/2025 - 280 animais - ⚠️ Com advertências
```

---

### 8.2 Processo de Importação - Feedback Visual

**Durante importação:**

```
┌──────────────────────────────┐
│ ⏳ IMPORTANDO...             │
├──────────────────────────────┤
│ Processing: 150 de 390       │
│ ████████░░░░░░░░░░ 38%       │
│                              │
│ Processando:                 │
│ • Validando registros...     │
│ • Importando filiação...     │
│ • Sincronizando genealogia...│
│                              │
│ Tempo estimado: 2 min        │
└──────────────────────────────┘
```

**Após sucesso:**

```
┌──────────────────────────────┐
│ ✅ IMPORTAÇÃO CONCLUÍDA      │
├──────────────────────────────┤
│ Animais importados: 390      │
│ Novos: 280                   │
│ Atualizados: 110             │
│ Duplicatas ignoradas: 12     │
│                              │
│ Data/Hora: 15/12/2025 14:32  │
│                              │
│ [ Ir para Plantel ]          │
│ [ Ver Relatório Completo ]   │
└──────────────────────────────┘
```

---

### 8.3 Tela de Histórico de Importações
**Tela:** Configurações > "Importações"

```
HISTÓRICO DE IMPORTAÇÕES ABCCMM
TABELA:
├─ Coluna 1: Data
├─ Coluna 2: Arquivo Principal
├─ Coluna 3: Quantidade Importada
├─ Coluna 4: Status
├─ Coluna 5: Ações

EXEMPLOS:
├─ 15/12/2025 | Animais_Principais_Dez2025.xlsx | 390 | ✅ Sucesso | Ver Detalhes
├─ 10/12/2025 | Animais_Principais_Dez2025.xlsx | 150 | ✅ Sucesso | Ver Detalhes
└─ 05/12/2025 | Animais_Principais_Dez2025.xlsx | 280 | ⚠️ Com alertas | Ver Detalhes

[ + Importar Novo ]
```

---

## 9. SEPARAÇÃO ENTRE SERVIÇOS E EVENTOS

### 9.1 Agenda - Abas Separadas
**Tela:** Agenda > [Abas principais] (Web + Mobile)  
**Status:** ⚠️ Parcialmente implementado

**Requisito do Cliente (Transcrições - Reunião October 27):**
- **Mel:** "A gente separaria dessas eventos e serviços?"
- **Ric:** "separar essas duas [tipos], né, o calendário"
- **Alberto:** "desacoplado pra poder não interferir"
- **Mel:** "Serviço: registros de atividades internas (vacinação, parto, etc.)"
- **Ric:** "Evento: competições públicas, pistas, provas do Manga Larga"

#### Telas Necessárias:

**Agenda - Separação em Abas (Mobile e Web)**

1. **Aba 1: Serviços** (default)
   - Título: "Serviços Internos"
   - Eventos: Vacinações, Partos, Coletas de Sêmen, Atendimento Veterinário, etc.
   - Ícone: 🔧

2. **Aba 2: Eventos Públicos**
   - Título: "Competições e Pistas"
   - Eventos: Provas de Marcha, Leilões, Exposições do Manga Larga, etc.
   - Ícone: 🏆

3. **Aba 3: Meus Eventos** (apenas web/criador)
   - Eventos que o criador cadastrou para aparecer publicamente

---

### 9.2 Modal/Tela de Novo Evento - Diferenciar Tipo

Radio button: "Serviço Interno" ou "Evento Público"

**Se "Serviço Interno":**
- Campos: Data, Tipo de Serviço (dropdown), Animal, Descrição, Veterinário responsável
- Visibilidade: Apenas para usuários do haras

**Se "Evento Público":**
- Campos: Data, Tipo de Evento (Prova, Leilão, Exposição), Local, Link público
- Toggle: "Mostrar no calendário público"
- Campos extras: Custo (opcional), Link de transmissão ao vivo

---

### 9.3 Mobile - Ícones Diferenciados

- **Serviço:** 🔧 ou 📋
- **Evento:** 🏆 ou 🎪
- Cor diferente no calendário (azul para serviços, laranja para eventos públicos)

---

## 10. TELA DE LOGIN - SELEÇÃO DE PERFIL MAIS CLARA

**Requisito do Cliente (Transcrições - Reunião November 13):**
- **Manuela:** Diferentes onboardings para cada perfil
- Sistema deve diferenciar Peão vs. Veterinário vs. Administrador vs. Criador no login

**Status Atual:**
- ✅ Mobile Make tem seleção de perfil
- ⚠️ Poderia ser mais clara e visual

---

### 10.1 Tela de Login - Antes de Credenciais

**Título:** "Qual é o seu perfil?"

Cards em carrossel (mobile) ou um abaixo do outro:

```
┌─────────────────┐  ┌─────────────────┐ ┌─────────────────┐
│ 👨‍🌾            │  │ 💊              │ │ 💊              │
│ PEÃO            │  │ VETERINÁRIO     │ │ CRIADOR         │
│ Operações de    │  │ Gestão de saúde │ │ Gestão e        │
│ campo           │  │ e reprodução    │ │ visualização do │
│                 │  │                 │ │ plantel         │
└─────────────────┘  └─────────────────┘ └─────────────────┘
```

Ao selecionar, vai para credenciais com hint do perfil no topo

---

### 10.2 Post-Login - Onboarding Separado

**Para Peão:** 
- Tela mostrando módulos (Dashboard, Nascimentos, Ocorrências, Sincronização)

**Para Veterinário:** 
- Tela mostrando módulos (Dashboard, Serviços, Vacinação, Agenda)

**Para Admin:** 
- Tela mostrando módulos correspondentes

**Para Criador:** 
- Tela mostrando módulos correspondentes

Opção: "Pular Tutorial" em ambos

---

### 10.3 Web - Admin Login

- Tela padrão sem seleção de perfil (acesso admin é único)
- Após login, pode "Impersonar" outros usuários para teste

---

## STATUS DAS FASES

- ✅ **FASE 1-4:** Funcionalidades base implementadas
- ✅ **FASE 5:** Campo "Premiações" implementado e movido para seção correta
- ⏳ **FASE 6-87:** Aguardando implementação sequencial

---

## NOTAS IMPORTANTES

1. Cada fase deve ser implementada e testada antes de prosseguir para a próxima
2. Manter compatibilidade com design system existente (cor primária #333333, dark/light mode)
3. Todas as interfaces devem ser mobile-first
4. Dados mockados devem ser realistas e representativos
5. Funcionalidades offline serão implementadas posteriormente com FlutterFlow + Supabase
