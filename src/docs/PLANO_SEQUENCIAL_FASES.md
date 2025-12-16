# PLANO SEQUENCIAL DE IMPLEMENTAÇÃO - CRIAHUB
## Fases 6-87: Roadmap Detalhado

**Data de Criação:** Dezembro 2025  
**Última Atualização:** FASE 32 concluída  
**Progresso:** 32/87 fases (37%)

---

## ✅ FASES CONCLUÍDAS (1-32)

### FASE 1-4: Funcionalidades Base
- ✅ Estrutura básica do sistema
- ✅ Design system implementado
- ✅ Dark/Light mode funcional

### FASE 5: Campo "Premiações" ✅
- ✅ Adicionar campo `premiacoes` na interface Animal
- ✅ Dados mockados com contadores de premiações
- ✅ Exibição na listagem (visualização list)
- ✅ Movido para seção correta no perfil do animal

### FASE 6: Campo "Chip" (RFID) ✅
- ✅ Campo `chip` já estava na interface Animal
- ✅ Adicionados chips mockados para todos os animais (formato ISO 15 dígitos)
- ✅ Exibição na visualização list (quando disponível)
- ✅ Placeholder de busca atualizado para incluir "chip"

### FASE 7: Exibir "Filhos" no Card Grid View ✅
**Seção:** 1.1 Listagem de Plantel  
**Descrição:** Adicionar contador de filhos visível no card da visualização grid

**Tarefas:**
- [x] Adicionar badge/tag com contador de filhos no `AnimalCard`
- [x] Posicionar abaixo do status ou ao lado
- [x] Usar ícone 👶 ou 🐴
- [x] Exemplo: "12 filhos" ou ícone + número

**Arquivos a modificar:**
- `/components/breeder/BreederPlantelContent.tsx` (AnimalCard component)

---

### FASE 8: Exibir "Marca" no Card Grid View ✅
**Seção:** 1.1 Listagem de Plantel  
**Descrição:** Adicionar número da marca/ferro visível no card grid

**Tarefas:**
- [x] Adicionar badge/tag com marca no `AnimalCard`
- [x] Exemplo: "Marca: VV-001"
- [x] Posicionar junto com outras informações secundárias

**Arquivos a modificar:**
- `/components/breeder/BreederPlantelContent.tsx` (AnimalCard component)

---

### FASE 9: Campo "Nascimento" (Data) ✅
**Seção:** 1.1 Listagem de Plantel  
**Descrição:** Adicionar campo de data de nascimento

**Tarefas:**
- [x] Adicionar campo `birthDate?: string` na interface Animal
- [x] Adicionar datas mockadas para todos os animais
- [x] Exibir na visualização list
- [x] Opcional: mostrar idade calculada automaticamente

**Arquivos a modificar:**
- `/components/breeder/BreederPlantelContent.tsx`

---

### FASE 10: Link "Ver Genealogia" na Listagem ✅
**Seção:** 1.1 Listagem de Plantel  
**Descrição:** Adicionar link/botão rápido para ver genealogia

**Tarefas:**
- [x] Adicionar botão "Ver Genealogia" no `AnimalListItem`
- [x] Ao clicar, abrir aba de genealogia diretamente
- [x] Ícone sugerido: 🌳 ou cone de árvore

**Arquivos a modificar:**
- `/components/breeder/BreederPlantelContent.tsx` (AnimalListItem)
- `/components/breeder/BreederAnimalDetails.tsx` (adicionar prop para abrir aba específica)

---

### FASE 11: Filtro de Busca por Chip ✅
**Seção:** 1.1 Filtros  
**Descrição:** Implementar busca funcional por chip

**Tarefas:**
- [x] Adicionar state para termo de busca
- [x] Implementar lógica de filtro por nome, registro, chip ou haras
- [x] Filtro deve ser case-insensitive
- [x] Atualizar lista de animais exibidos dinamicamente

**Arquivos a modificar:**
- `/components/breeder/BreederPlantelContent.tsx`

---

### FASE 12: Filtro de Nascimento (Data Range) ✅
**Seção:** 1.1 Filtros  
**Descrição:** Adicionar filtro de data de nascimento

**Tarefas:**
- [x] Adicionar NativeSelect ou DatePicker para data range
- [x] Opções: "Todos", "Menos de 1 ano", "1-3 anos", "3-5 anos", "Mais de 5 anos"
- [x] Implementar lógica de filtro

**Arquivos a modificar:**
- `/components/breeder/BreederPlantelContent.tsx`

---

### FASE 13: Filtro de Categoria Expandido ✅
**Seção:** 1.1 Filtros  
**Descrição:** Adicionar categorias específicas: Matriz/Doadora/Receptora/Garanhão/Castrado

**Tarefas:**
- [x] Expandir opções do filtro "Todas as Categorias"
- [x] Adicionar: Matriz, Doadora, Receptora, Garanhão, Castrado
- [x] Implementar lógica de filtro

**Arquivos a modificar:**
- `/components/breeder/BreederPlantelContent.tsx`

---

### FASE 14: Filtro "Tem Filhos" ✅
**Seção:** 1.1 Filtros  
**Descrição:** Adicionar filtro booleano para animais com filhos

**Tarefas:**
- [x] Adicionar NativeSelect com opções: "Todos", "Com Filhos", "Sem Filhos"
- [x] Implementar lógica de filtro baseado no campo `filhos`

**Arquivos a modificar:**
- `/components/breeder/BreederPlantelContent.tsx`

---

### FASE 15: Filtro "Tem Premiações" ✅
**Seção:** 1.1 Filtros  
**Descrição:** Adicionar filtro booleano para animais com premiações

**Tarefas:**
- [x] Adicionar NativeSelect com opções: "Todos", "Com Premiações", "Sem Premiações"
- [x] Implementar lógica de filtro baseado no campo `premiacoes`

**Arquivos a modificar:**
- `/components/breeder/BreederPlantelContent.tsx`

---

### FASE 16: Ação "Visualizar Genealogia (Quick)" ✅
**Seção:** 1.1 Ações por Linha  
**Descrição:** Adicionar botão para visualização rápida da genealogia

**Tarefas:**
- [x] Adicionar botão com ícone de árvore no `AnimalListItem`
- [x] Criar modal/popover com visualização compacta da genealogia
- [x] Mostrar: Pai, Mãe, 4 Avós

**Arquivos a criar:**
- `/components/breeder/QuickGenealogyModal.tsx`

**Arquivos a modificar:**
- `/components/breeder/BreederPlantelContent.tsx`

---

### FASE 17: Ação "Ver Vídeos" ✅
**Seção:** 1.1 Ações por Linha  
**Descrição:** Adicionar botão para ir direto para aba de vídeos

**Tarefas:**
- [x] Adicionar botão "Ver Vídeos" no dropdown de ações
- [x] Ao clicar, abrir detalhes do animal na aba "Vídeos"
- [x] Ícone sugerido: 📹

**Arquivos a modificar:**
- `/components/breeder/BreederPlantelContent.tsx`
- `/components/breeder/BreederAnimalDetails.tsx`

---

### FASE 18: Ação "Deletar Animal" ✅
**Seção:** 1.1 Ações por Linha  
**Descrição:** Adicionar funcionalidade de deletar animal

**Tarefas:**
- [x] Adicionar botão "Deletar" no dropdown de ações
- [x] Modal de confirmação com advertência
- [x] Simular deleção (remover do estado local)
- [x] Feedback de sucesso

**Arquivos a modificar:**
- `/components/breeder/BreederPlantelContent.tsx`

---

### FASE 19-21: Completar Seção "Informações Básicas" ✅
**Seção:** 1.2 Perfil do Animal - Informações Básicas  
**Descrição:** Adicionar campos faltantes

**FASE 19: Adicionar Sexo, Categoria e Haras de Origem**
**Tarefas:**
- [x] Adicionar campo `sex: 'Macho' | 'Fêmea'` na interface
- [x] Adicionar campo `harasOrigem?: string`
- [x] Exibir na seção "Informações Básicas"

**FASE 20: Adicionar campo Nascimento**
**Tarefas:**
- [x] Usar campo `birthDate` criado na FASE 9
- [x] Exibir formatado: DD/MM/YYYY
- [x] Calcular idade automaticamente

**FASE 21: Reorganizar Layout da Seção**
**Tarefas:**
- [x] Grid 2 colunas para informações
- [x] Design limpo e legível
- [x] Dark mode compatível

**Arquivos a modificar:**
- `/components/breeder/BreederAnimalDetails.tsx`

---

### FASE 22-24: Expandir Seção Genealogia ✅

**FASE 22: Adicionar Bisavós (8 cards)**
**Seção:** 1.2 Perfil do Animal - Genealogia  
**Descrição:** Adicionar visualização de 8 bisavós

**Tarefas:**
- [x] Criar dados mockados de bisavós para os animais principais
- [x] Criar grid 4x2 ou 8 cards em linha
- [x] Cards clicáveis (navegar para perfil do bisavô se existir)
- [x] Design responsivo (2x4 no mobile)

**FASE 23: Botão "Ver Árvore Genealógica Completa"**
**Tarefas:**
- [x] Criar componente de árvore genealógica visual
- [x] Mostrar 4 gerações: Animal → Pais → Avós → Bisavós
- [x] Layout tipo organograma/diagrama
- [x] Modal fullscreen ou página dedicada

**FASE 24: Adicionar Tataravós (4ª geração)** ✅
**Tarefas:**
- [x] Adicionar dados mockados de tataravós (16 animais)
- [x] Expandir árvore genealógica para 4 gerações completas
- [x] Scroll horizontal implementado
- [x] Toggle para mostrar/ocultar tataravós

**Arquivos criados:**
- `/components/breeder/GenealogyTree.tsx` ✅

**Arquivos modificados:**
- `/components/breeder/BreederAnimalDetails.tsx` ✅

---

### FASE 25-27: Seção Reprodução ✅

**FASE 25: Criar Seção "Reprodução" no Perfil** ✅
**Seção:** 1.2 Perfil do Animal - Reprodução  
**Descrição:** Nova seção para dados reprodutivos

**Tarefas:**
- [x] Adicionar campo `reproductionType?: 'Doadora' | 'Matriz' | 'Garanhão' | 'Castrado' | 'Receptora'`
- [x] Adicionar campo `activeForReproduction: boolean`
- [x] Adicionar campo `coverageCount?: number`
- [x] Criar layout da seção na aba "Visão Geral"
- [x] Grid responsivo 2 colunas com informações

**FASE 26: Adicionar Contador de Coberturas** ✅
**Tarefas:**
- [x] Exibir número de coberturas realizadas
- [x] Link para lista detalhada de coberturas
- [x] Design destacado com contador grande

**FASE 27: Adicionar "Último Evento Reprodutivo"** ✅
**Tarefas:**
- [x] Exibir último evento (data + tipo)
- [x] Implementado com exemplos: "Coleta de Embrião: 15/11/2024" e "Cobertura Natural: 10/12/2024"
- [x] Link para ver evento completo
- [x] Card destacado com informações do evento

**Arquivos modificados:**
- `/components/breeder/BreederAnimalDetails.tsx` ✅
- `/components/breeder/BreederPlantelContent.tsx` ✅

---

### FASE 28-29: Aba "Filhos" ✅

**FASE 28: Criar Aba "Filhos"** ✅
**Seção:** 1.2 Perfil do Animal - Filhos  
**Descrição:** Nova aba para listar descendentes

**Tarefas:**
- [x] Sistema de tabs já existente - adicionada nova aba dinamicamente
- [x] Adicionar aba "Filhos (2)" (só aparece se `filhos > 0`)
- [x] Grid responsivo 3 colunas com cards completos dos filhos
- [x] Cards incluem: Foto | Nome | Registro | Data Nascimento | Sexo | Categoria | Status
- [x] Botão "Ver Perfil Completo" em cada card
- [x] Cards clicáveis (navegam para perfil do filho)

**FASE 29: Filtros na Aba Filhos** ✅
**Tarefas:**
- [x] Filtro por sexo (Todos | Machos | Fêmeas)
- [x] Filtro por categoria (Todos | Potros | Reprodutores | Reprodutoras)
- [x] Filtro por status (Todos | Ativos | Gestantes | Vendidos)
- [x] Contador total atualizado dinamicamente ("Mostrando X de Y filhos")
- [x] Filtros funcionais com lógica implementada
- [x] Mensagem quando não há resultados

**Funcionalidade Extra Implementada:**
- [x] Botão "Ver Filhos" na seção Reprodução agora funcional (navega para aba Filhos)
- [x] Dados mockados: Estrela Mangalarga (2 filhos), Relâmpago Negro (1 filho)

**Arquivos modificados:**
- `/components/breeder/BreederAnimalDetails.tsx` ✅ (aba completa implementada inline)

---

### FASE 30-32: Aba "Vídeos" ✅

**FASE 30: Criar Aba "Vídeos"** ✅
**Seção:** 1.2 + Seção 5 (Galeria de Vídeos)  
**Descrição:** Nova aba para galeria de vídeos do animal

**Tarefas:**
- [x] Adicionar campo `videos?: Video[]` na interface Animal
- [x] Interface Video completa: { id, title, url, type, thumbnail, duration, uploadDate, visibility, source }
- [x] Grid responsivo 3 colunas com thumbnails reais
- [x] Play button overlay com hover effect
- [x] Badge de duração e visibilidade
- [x] Mostrar título, tipo e data de upload
- [x] Mensagem quando não há vídeos
- [x] Botão "Adicionar Vídeo" funcional

**FASE 31: Modal "Adicionar Vídeo"** ✅
**Tarefas:**
- [x] Modal responsivo com 2 métodos: Upload OU Link externo
- [x] Seleção visual dos métodos (cards clicáveis)
- [x] Campos: Título, URL/Upload, Tipo, Visibilidade
- [x] Tipos implementados: 🐴 Marcha | 🏆 Competição | 💖 Personalidade | 📊 Genealogia | 📹 Outro
- [x] Suporte para YouTube e Vimeo (campo URL)
- [x] Area de upload simulado (drag & drop visual, máx 500MB)
- [x] Validação de campos obrigatórios
- [x] Botões Cancelar e Adicionar

**FASE 32: Player de Vídeo** ✅
**Tarefas:**
- [x] Modal fullscreen (z-50, fundo preto)
- [x] Header com título, tipo e botão fechar
- [x] Player area centralizado com aspect-ratio
- [x] Placeholder para YouTube, Vimeo e Upload
- [x] Barra de controles inferior
- [x] Botões funcionais: Editar, Compartilhar, Deletar
- [x] Indicador de tempo/duração
- [x] Responsivo (funciona em mobile e desktop)
- [x] Transições suaves de abertura/fechamento

**Dados Mockados Implementados:**
- 3 vídeos de exemplo com thumbnails reais
- Demonstração de Marcha (YouTube, Público, 2:45)
- Campeonato Regional 2023 (YouTube, Público, 5:20)
- Interação com Potros (Upload, Privado, 1:30)

**Arquivos modificados:**
- `/components/breeder/BreederAnimalDetails.tsx` ✅ (tudo implementado inline - 3 componentes em um)

---

### FASE 33: Aba "Premiações" Completa
**Seção:** 1.2 Perfil do Animal - Premiações  
**Descrição:** Expandir seção de premiações com tabela detalhada

**Tarefas:**
- [ ] Criar interface Award: { evento, data, colocacao, pontos, fonte }
- [ ] Adicionar campo `awards?: Award[]` na interface Animal
- [ ] Tabela com colunas: Evento | Data | Colocação | Pontos | Fonte (ABCCMM/Manual)
- [ ] Estatísticas: Total de premiações, pontos acumulados
- [ ] Botão "Importar Premiações ABCCMM" (mockado)
- [ ] Modal mostrando dados importados

**Arquivos a criar:**
- `/components/breeder/AnimalAwardsTab.tsx`
- `/components/breeder/ImportAwardsModal.tsx`

**Arquivos a modificar:**
- `/components/breeder/BreederAnimalDetails.tsx`

---

### FASE 34-35: Seção Saúde/Ocorrências

**FASE 34: Criar Seção "Saúde"**
**Seção:** 1.2 Perfil do Animal - Saúde  
**Descrição:** Nova seção para histórico de saúde

**Tarefas:**
- [ ] Lista de últimas ocorrências (5 mais recentes)
- [ ] Tipos: Vacinação, Tratamento, Ferimento, Check-up, Outro
- [ ] Exibir: Data, Tipo, Descrição, Veterinário responsável

**FASE 35: Botão "Registrar Ocorrência"**
**Tarefas:**
- [ ] Modal para registrar nova ocorrência de saúde
- [ ] Campos: Tipo, Data, Descrição, Veterinário, Medicamentos (opcional)
- [ ] Anexar documentos/fotos (mockado)

**Arquivos a criar:**
- `/components/breeder/AnimalHealthSection.tsx`
- `/components/breeder/AddHealthEventModal.tsx`

**Arquivos a modificar:**
- `/components/breeder/BreederAnimalDetails.tsx`

---

### FASE 36-38: Seção Venda

**FASE 36: Campo "Animal à Venda?"**
**Seção:** 1.2 + Seção 6 (Perfil para Venda)  
**Descrição:** Adicionar opção de marcar animal como à venda

**Tarefas:**
- [ ] Adicionar campos na interface Animal:
  - `forSale: boolean`
  - `salePrice?: number`
  - `saleDescription?: string`
  - `highlightedGenetics?: string`
- [ ] Toggle "Animal à Venda?"
- [ ] Se ativo, mostrar campos obrigatórios: Valor, Descrição, Genética Destacada
- [ ] Links para complementar: Vídeos, Filhos, Premiações, Genealogia, Histórico de Pistas

**FASE 37: Card de Venda (Marketing)** 
**Tarefas:**
- [ ] Botão "Gerar Card de Venda"
- [ ] Layout marketing-friendly
- [ ] Inclui: Foto principal, nome, idade, genealogia resumida
- [ ] Destaques: Prêmios, Filhos, Vídeos, Pedigree
- [ ] Valor de venda em destaque
- [ ] Botões: "Ver Detalhes Completos", "Agendar Visita"
- [ ] Opção de download como imagem ou PDF

**FASE 38: Modal "Visualizar Premiações Detalhadas"**
**Tarefas:**
- [ ] Modal com tabela completa de premiações
- [ ] Total de premiações e pontos acumulados
- [ ] Botão "Importar Novas Premiações ABCCMM"

**Arquivos a criar:**
- `/components/breeder/AnimalSaleSection.tsx`
- `/components/breeder/SaleCardGenerator.tsx`
- `/components/breeder/AwardsDetailModal.tsx`

**Arquivos a modificar:**
- `/components/breeder/BreederAnimalDetails.tsx`

---

### FASE 39-40: Seção Localização

**FASE 39: Criar Seção "Localização"**
**Seção:** 1.2 Perfil do Animal - Localização  
**Descrição:** Nova seção para localização e sociedade

**Tarefas:**
- [ ] Exibir localização atual: Baia/Pasto/Serviço
- [ ] Se Serviço, mostrar tipo: Reprodução/Trabalho/Repouso/Outro
- [ ] Campo para Sócios e porcentagem de propriedade
- [ ] Exemplo: "João Silva - 50%", "Maria Santos - 50%"

**FASE 40: Histórico de Localização**
**Tarefas:**
- [ ] Tabela com mudanças de localização
- [ ] Colunas: Data | Local Anterior | Local Novo | Motivo | Registrado por
- [ ] Botão "Registrar Mudança de Localização"
- [ ] Modal para registrar nova mudança

**Arquivos a criar:**
- `/components/breeder/AnimalLocationSection.tsx`
- `/components/breeder/LocationChangeModal.tsx`

**Arquivos a modificar:**
- `/components/breeder/BreederAnimalDetails.tsx`

---

### FASE 41: Seção Documentos
**Seção:** 1.2 Perfil do Animal - Documentos  
**Descrição:** Nova seção para documentos do animal

**Tarefas:**
- [ ] Lista de documentos anexados
- [ ] Tipos: Contratos, Certificados, Exames, Outros
- [ ] Botão "+ Adicionar Documento"
- [ ] Upload mockado (PDF, imagens)
- [ ] Preview e download

**Arquivos a criar:**
- `/components/breeder/AnimalDocumentsSection.tsx`
- `/components/breeder/AddDocumentModal.tsx`

**Arquivos a modificar:**
- `/components/breeder/BreederAnimalDetails.tsx`

---

## 📋 FASES PENDENTES - MÓDULO 2: REPRODUÇÃO

### FASE 42: Criar Aba "Reprodução - Sequência Automática"
**Seção:** 2.1 Nova Aba Reprodução  
**Descrição:** Dashboard principal de reprodução

**Tarefas:**
- [ ] Nova aba no menu "Reprodução"
- [ ] Sub-aba "Sequência Automática"
- [ ] Dashboard com próximos eventos automáticos
- [ ] Cards de ações rápidas: Registrar Ovulação, Registrar Inseminação, Confirmar Gestação

**Arquivos a criar:**
- `/components/breeder/ReproductionAutomationTab.tsx`

---

### FASE 43-44: Fluxo Ovulação → Coleta

**FASE 43: Modal "Registrar Ovulação"**
**Seção:** 2.2 Ovulação  
**Descrição:** Registrar ovulação e auto-agendar coleta

**Tarefas:**
- [ ] Modal com campos: Égua (dropdown), Data/Hora, Observações
- [ ] Ao confirmar, criar evento "Ovulação"
- [ ] **AUTOMÁTICO:** Criar evento "Coleta de Embrião" em Data + 8 dias
- [ ] Evento automático com prioridade Alta e notificação 48h antes

**FASE 44: Card de Confirmação Ovulação**
**Tarefas:**
- [ ] Card de confirmação mostrando:
  - ✅ Ovulação Registrada: [Data]
  - ⏰ Próximo passo: Coleta em [Data] (8 dias)
- [ ] Botão "Ver no Calendário"
- [ ] Visual diferenciado no calendário (ícone 🔵 ovulação, 📋 coleta auto)

**Arquivos a criar:**
- `/components/breeder/RegisterOvulationModal.tsx`
- `/components/breeder/OvulationConfirmationCard.tsx`

**Arquivos a modificar:**
- `/components/breeder/BreederReproductionContent.tsx`

---

### FASE 45-46: Fluxo Inseminação → Coleta

**FASE 45: Modal "Registrar Inseminação"**
**Seção:** 2.3 Inseminação  
**Descrição:** Registrar inseminação e auto-agendar coleta baseada no tipo de sêmen

**Tarefas:**
- [ ] Modal com campos: Égua Doadora, Garanhão, Data, Tipo de Sêmen (Radio: Fresco/Resfriado/Congelado), Observações
- [ ] Lógica automática:
  - Sêmen Resfriado → Coleta em 8 dias
  - Sêmen Congelado → Coleta em 9 dias
  - Sêmen Fresco → Sem coleta automática

**FASE 46: Card de Confirmação Inseminação**
**Tarefas:**
- [ ] Card mostrando tipo de sêmen e data da coleta agendada
- [ ] Intervalo correto (8 ou 9 dias)

**Arquivos a criar:**
- `/components/breeder/RegisterInseminationModal.tsx`
- `/components/breeder/InseminationConfirmationCard.tsx`

**Arquivos a modificar:**
- `/components/breeder/BreederReproductionContent.tsx`

---

### FASE 47-48: Fluxo Gestação → P4

**FASE 47: Modal "Confirmar Gestação"**
**Seção:** 2.4 Gestação  
**Descrição:** Confirmar gestação e auto-agendar série de P4

**Tarefas:**
- [ ] Modal com campos: Receptora, Embrião de (pré-preenchido), Data Diagnóstico, Intervalo P4 (Radio: 7 ou 14 dias)
- [ ] Lógica automática:
  - Primeira aplicação: Dia 15 após diagnóstico
  - Próximas: A cada 7 ou 14 dias
  - Duração: Até dia 120 (parto previsto)
- [ ] Criar série de eventos P4 automaticamente

**FASE 48: Card de Confirmação Gestação**
**Tarefas:**
- [ ] Card mostrando:
  - ✅ Gestação Confirmada
  - Receptora e embrião de (doadora + garanhão)
  - 💉 Série de P4: X aplicações (intervalo)
  - Primeira e última aplicação
  - Parto previsto
- [ ] Botão "Ver Cronograma Completo"
- [ ] Visual no calendário: eventos P4 em roxo/lavanda, numerados "P4 #1 de 12"

**Arquivos a criar:**
- `/components/breeder/ConfirmGestationModal.tsx`
- `/components/breeder/GestationConfirmationCard.tsx`
- `/components/breeder/P4ScheduleView.tsx`

**Arquivos a modificar:**
- `/components/breeder/BreederReproductionContent.tsx`
- `/components/breeder/BreederAgendaContent.tsx` (adicionar P4 no calendário)

---

### FASE 49-52: Tabs de Reprodução

**FASE 49: Tab "Coberturas"**
**Seção:** 2.5 Visualização de Reprodução  
**Descrição:** Lista de todas as coberturas

**Tarefas:**
- [ ] Tabela/grid com filtros: Data, Animal, Status
- [ ] Colunas: Data | Doadora | Garanhão | Tipo Sêmen | Status
- [ ] Status: Pendente | Realizada | Cancelada
- [ ] Ação: "+ Registrar Nova Cobertura"

**FASE 50: Tab "Óvulos"**
**Tarefas:**
- [ ] Lista com filtros: Data, Animal
- [ ] Colunas: Data | Animal | Qualidade | Status
- [ ] Ação: "+ Registrar Novo Óvulo"

**FASE 51: Tab "Embriões"**
**Tarefas:**
- [ ] Lista com filtros: Data, Doadora, Receptora, Status
- [ ] Colunas: Data | Doadora | Receptora | Qualidade | Status
- [ ] Status: Criado | Congelado | Transferido | Viável | Inviável
- [ ] Ação: "+ Registrar Novo Embrião"

**FASE 52: Tab "Gestações"**
**Tarefas:**
- [ ] Lista com filtros: Data, Animal, Status
- [ ] Colunas: Data | Receptora | Mãe Biológica | Dias | Data Prevista | Status
- [ ] Status: Confirmada | Em Acompanhamento | Abortada | Parida
- [ ] Badge especial "TRANSFERÊNCIA" se Receptora ≠ Mãe
- [ ] Ação: "+ Confirmar Gestação"

**Arquivos a criar:**
- `/components/breeder/CoveragesTab.tsx`
- `/components/breeder/OvumTab.tsx`
- `/components/breeder/EmbryosTab.tsx`
- `/components/breeder/GestationsTab.tsx`

**Arquivos a modificar:**
- `/components/breeder/BreederReproductionContent.tsx`

---

### FASE 53: Modal de Edição Pós-Registro
**Seção:** 2.6 Modal de Edição  
**Descrição:** Permitir editar evento recém-criado

**Tarefas:**
- [ ] Após registrar evento, mostrar modal de edição
- [ ] Campos do evento pré-preenchidos
- [ ] Botão "Editar Próximo Evento" (se houver evento automático)
- [ ] Permite ajustar data/horário do evento automático
- [ ] Botões: "Ver no Calendário", "Fechar"

**Arquivos a criar:**
- `/components/breeder/EditEventModal.tsx`

---

## 📋 FASES PENDENTES - MÓDULO 3: EXPOSIÇÕES

### FASE 54: Aba "Pistas/Exposições"
**Seção:** 3.1 Nova Aba Pistas  
**Descrição:** Lista de exposições e competições

**Tarefas:**
- [ ] Nova aba "Pistas" na Agenda
- [ ] Filtros: Data (range), Tipo (Prova/Leilão/Exposição/Todas), Status (Próximas/Concluídas/Canceladas)
- [ ] Cards/Lista: Nome, Data, Local, Tipo, Origem (ABCCMM ou Customizada), Status
- [ ] Badge visual por status: Próximas (azul), Em andamento (laranja), Concluída (verde)
- [ ] Botões: "Registrar Participação" (se próxima), "Ver Resultados" (se concluída)
- [ ] Estado vazio: "Nenhuma pista registrada. Deseja importar da ABCCMM?"

**Arquivos a criar:**
- `/components/breeder/ShowsTab.tsx`
- `/components/breeder/ShowCard.tsx`

**Arquivos a modificar:**
- `/components/breeder/BreederAgendaContent.tsx`

---

### FASE 55: Modal "Registrar Participação em Exposição"
**Seção:** 3.2 Registrar Participação  
**Descrição:** Modal para registrar que animal(is) vai(ão) participar

**Tarefas:**
- [ ] Modal com campos: Exposição (auto-preenchido), Data (auto), Tipo de Tropa (dropdown com tropas existentes + criar nova)
- [ ] Seleção de animais: Multi-select com grid de fotos + checkboxes
- [ ] Campo: Apresentador/Criador (dropdown)
- [ ] Observações (textarea)
- [ ] Confirmação após salvar mostrando resumo

**Arquivos a criar:**
- `/components/breeder/RegisterShowParticipationModal.tsx`

---

### FASE 56: Resultados de Exposição
**Seção:** 3.3 Resultados  
**Descrição:** Visualizar e editar resultados após exposição

**Tarefas:**
- [ ] Tela "Ver Resultados" após evento concluído
- [ ] Cards dos animais participantes
- [ ] Para cada animal: Foto, Nome, Colocação (1º/2º/3º/Participante/Desclassificado), Pontos
- [ ] Link "Atualizar Resultado" por animal
- [ ] Botão "Importar Resultados ABCCMM" (mockado)

**Arquivos a criar:**
- `/components/breeder/ShowResultsView.tsx`
- `/components/breeder/UpdateResultModal.tsx`

---

### FASE 57: Histórico de Pistas (Perfil Animal)
**Seção:** 3.4 Histórico no Perfil  
**Descrição:** Nova aba no perfil do animal mostrando participações

**Tarefas:**
- [ ] Aba "Pistas" no perfil do animal
- [ ] Tabela/Cards: Data | Exposição | Colocação | Pontos | Prêmios
- [ ] Filtros: Por ano, por tipo, por resultado
- [ ] Estatísticas: Total participações, Melhor colocação, Pontos acumulados, Prêmios conquistados
- [ ] Botão "Importar Resultados ABCCMM"

**Arquivos a criar:**
- `/components/breeder/AnimalShowsHistoryTab.tsx`

**Arquivos a modificar:**
- `/components/breeder/BreederAnimalDetails.tsx`

---

## 📋 FASES PENDENTES - MÓDULO 4: STATUS DOS ANIMAIS

### FASE 58: Sub-opções de Serviço
**Seção:** 4.1 Perfil do Animal - Status  
**Descrição:** Expandir opções quando status = "Serviço"

**Tarefas:**
- [ ] Quando selecionar "Serviço", mostrar radio buttons:
  - Reprodução
  - Trabalho
  - Repouso
  - Outro (campo texto)
- [ ] Salvar `servicoTipo` no animal
- [ ] Data da última alteração (automática)

**Arquivos a modificar:**
- `/components/breeder/BreederEditarAnimal.tsx`
- `/components/breeder/BreederAnimalDetails.tsx`

---

### FASE 59: Dashboard - Filtro por Status
**Seção:** 4.2 Dashboard Filtros  
**Descrição:** Cards de filtro rápido por localização

**Tarefas:**
- [ ] Cards clicáveis com contadores:
  - 🟦 Em Baia: X animais
  - 🟩 Em Pasto: X animais
  - 🟧 Em Serviço: X animais (com detalhamento: Reprodução, Trabalho, Repouso)
  - ⚪ Inativos: X animais
  - Total do Plantel: X animais
- [ ] Ao clicar, filtrar listagem automaticamente

**Arquivos a modificar:**
- `/components/breeder/BreederDashboardContent.tsx` ou criar filtros no plantel

---

### FASE 60: Mobile - Status Visual em Cards
**Seção:** 4.3 Mobile Badges  
**Descrição:** Badges coloridos de status no mobile

**Tarefas:**
- [ ] Badge de status com cor no topo do card (mobile)
- [ ] Cores: 🟦 Azul = Baia, 🟩 Verde = Pasto, 🟧 Laranja = Serviço, ⚪ Cinza = Inativo
- [ ] Texto do status legível

**Arquivos a modificar:**
- `/components/breeder/BreederPlantelContent.tsx` (AnimalCard)

---

### FASE 61: Histórico de Mudanças de Status
**Seção:** 4.4 Histórico Status  
**Descrição:** Nova aba no perfil mostrando histórico

**Tarefas:**
- [ ] Aba "Histórico" no perfil do animal
- [ ] Tabela: Data | Status Anterior | Status Novo | Motivo | Registrado por
- [ ] Ordenação: Mais recente primeiro

**Arquivos a criar:**
- `/components/breeder/AnimalStatusHistoryTab.tsx`

**Arquivos a modificar:**
- `/components/breeder/BreederAnimalDetails.tsx`

---

## 📋 FASES PENDENTES - MÓDULO 5: VÍDEOS

### Já cobertas nas FASES 30-32
_(Ver Aba Vídeos no Módulo 1)_

---

## 📋 FASES PENDENTES - MÓDULO 6: VENDA

### Já cobertas nas FASES 36-38
_(Ver Seção Venda no Módulo 1)_

---

## 📋 FASES PENDENTES - MÓDULO 7: BOTTOM NAVIGATION (MOBILE)

### FASE 68: Implementar Bottom Navigation
**Seção:** 7.1 Bottom Nav  
**Descrição:** Menu inferior fixo para mobile

**Tarefas:**
- [ ] Componente BottomNav fixo no rodapé
- [ ] 5 ícones: 🏠 Home | 📊 Dashboard | 🐴 Plantel | 🔧 Menu | 👤 Perfil
- [ ] Ícone ativo: cor laranja/primary
- [ ] Ícones inativos: cinza
- [ ] Labels pequenos opcionais
- [ ] Navegação entre telas

**Arquivos a criar:**
- `/components/mobile/BottomNavigation.tsx`

**Arquivos a modificar:**
- `/App.tsx` (adicionar bottom nav no mobile)

---

### FASE 69: Comportamento com Modais
**Seção:** 7.2 Comportamento  
**Descrição:** Bottom nav desabilitada quando modal aberto

**Tarefas:**
- [ ] Quando modal/dialog abrir: Bottom nav opacidade reduzida, cliques desabilitados
- [ ] Ao fechar modal: volta ao normal

---

### FASE 70: Comportamento com Keyboard
**Seção:** 7.2 Comportamento  
**Descrição:** Bottom nav oculta/reduzida quando teclado abrir

**Tarefas:**
- [ ] Detectar abertura de teclado virtual
- [ ] Ocultar ou reduzir bottom nav
- [ ] Restaurar ao fechar teclado

---

## 📋 FASES PENDENTES - MÓDULO 8: IMPORTAÇÃO ABCCMM

### FASE 71-72: Tela de Importação

**FASE 71: Criar Tela "Importar ABCCMM"**
**Seção:** 8.1 Tela de Importação  
**Descrição:** Interface para importar planilhas oficiais

**Tarefas:**
- [ ] Rota: Configurações > Dados e Importação > Importar ABCCMM
- [ ] Informação sobre ABCCMM
- [ ] Advertência: "Dados ABCCMM não podem ser editados manualmente"
- [ ] Seleção de 5 arquivos: Animais Principais (obrigatório), Pais (obrigatório), Avós, Bisavós, Tataravós (opcionais)
- [ ] Drag and drop OU clique para selecionar
- [ ] Preview dos dados após seleção
- [ ] Contador de animais encontrados
- [ ] Validação de arquivos

**FASE 72: Duplicatas e Conflitos**
**Tarefas:**
- [ ] Detectar duplicatas (mockado)
- [ ] Opções: "Ignorar duplicatas" ou "Sobrescrever"
- [ ] Lista de duplicatas encontradas
- [ ] Advertências de dados incompletos

**Arquivos a criar:**
- `/components/admin/ImportABCCMMPage.tsx`
- `/components/admin/FileUploadZone.tsx`
- `/components/admin/ImportPreview.tsx`

---

### FASE 73: Processo de Importação (Feedback Visual)
**Seção:** 8.2 Processo de Importação  
**Descrição:** Feedback durante importação

**Tarefas:**
- [ ] Modal de progresso durante importação
- [ ] Barra de progresso: "Processing: X de Y"
- [ ] Etapas: Validando registros, Importando filiação, Sincronizando genealogia
- [ ] Tempo estimado
- [ ] Card de sucesso: Animais importados, novos, atualizados, duplicatas ignoradas
- [ ] Botões: "Ir para Plantel", "Ver Relatório Completo"

**Arquivos a criar:**
- `/components/admin/ImportProgressModal.tsx`
- `/components/admin/ImportSuccessCard.tsx`

---

### FASE 74: Histórico de Importações
**Seção:** 8.3 Histórico  
**Descrição:** Tela com histórico de importações realizadas

**Tarefas:**
- [ ] Rota: Configurações > Importações
- [ ] Tabela: Data | Arquivo Principal | Quantidade | Status | Ações
- [ ] Status: ✅ Sucesso | ⚠️ Com alertas | ❌ Erro
- [ ] Ação: "Ver Detalhes" (abre relatório completo)
- [ ] Botão "+ Importar Novo"

**Arquivos a criar:**
- `/components/admin/ImportHistoryPage.tsx`
- `/components/admin/ImportReportModal.tsx`

---

## 📋 FASES PENDENTES - MÓDULO 9: AGENDA (SERVIÇOS vs EVENTOS)

### FASE 75-76: Separação Serviços e Eventos

**FASE 75: Criar Abas Separadas na Agenda**
**Seção:** 9.1 Agenda - Abas  
**Descrição:** Separar Serviços Internos e Eventos Públicos

**Tarefas:**
- [ ] Aba 1: "Serviços" (default) - Ícone 🔧
  - Vacinações, Partos, Coletas, Atendimento Veterinário, etc.
  - Visibilidade: Apenas haras
- [ ] Aba 2: "Eventos Públicos" - Ícone 🏆
  - Provas de Marcha, Leilões, Exposições
  - Visibilidade: Pode ser pública
- [ ] Aba 3: "Meus Eventos" (apenas web/criador)
  - Eventos cadastrados pelo criador

**FASE 76: Filtros por Aba**
**Tarefas:**
- [ ] Filtros específicos por tipo de aba
- [ ] Data, Status, Tipo de serviço/evento
- [ ] Contador de eventos por aba

**Arquivos a modificar:**
- `/components/breeder/BreederAgendaContent.tsx`

---

### FASE 77: Modal Novo Evento - Diferenciar Tipo
**Seção:** 9.1 Modal Diferenciado  
**Descrição:** Radio button para escolher tipo ao criar evento

**Tarefas:**
- [ ] Radio button no topo: "Serviço Interno" OU "Evento Público"
- [ ] Se "Serviço Interno":
  - Campos: Data, Tipo (dropdown), Animal, Descrição, Veterinário
  - Visibilidade: Apenas haras
- [ ] Se "Evento Público":
  - Campos: Data, Tipo (Prova/Leilão/Exposição), Local, Link público
  - Toggle: "Mostrar no calendário público"
  - Campos extras: Custo, Link transmissão ao vivo

**Arquivos a modificar:**
- `/components/breeder/AddEventForm.tsx`

---

### FASE 78: Mobile - Ícones Diferenciados
**Seção:** 9.3 Visual Mobile  
**Descrição:** Ícones e cores diferentes no calendário mobile

**Tarefas:**
- [ ] Serviço: 🔧 ou 📋 (cor azul)
- [ ] Evento: 🏆 ou 🎪 (cor laranja)
- [ ] Visual diferenciado no calendário

**Arquivos a modificar:**
- `/components/breeder/BreederAgendaContent.tsx` (visualização mobile)

---

## 📋 FASES PENDENTES - MÓDULO 10: LOGIN E PERFIS

### FASE 79-80: Tela de Login com Seleção de Perfil

**FASE 79: Criar Tela "Qual é o seu perfil?"**
**Seção:** 10.1 Login - Seleção  
**Descrição:** Tela antes das credenciais para selecionar perfil

**Tarefas:**
- [ ] Tela com título "Qual é o seu perfil?"
- [ ] 4 cards em carrossel (mobile) ou grid (web):
  - 👨‍🌾 PEÃO: "Operações de campo"
  - 💊 VETERINÁRIO: "Gestão de saúde e reprodução"
  - 👔 ADMIN: "Gestão completa do haras"
  - 🏆 CRIADOR: "Gestão e visualização do plantel"
- [ ] Ao selecionar, ir para tela de credenciais com hint do perfil

**FASE 80: Implementar Navegação de Perfil**
**Tarefas:**
- [ ] State para perfil selecionado
- [ ] Passar perfil para tela de login
- [ ] Mostrar perfil selecionado no topo da tela de credenciais

**Arquivos a criar:**
- `/components/auth/ProfileSelection.tsx`
- `/components/auth/ProfileCard.tsx`

**Arquivos a modificar:**
- `/App.tsx` ou arquivo de roteamento de autenticação

---

### FASE 81-84: Onboarding Pós-Login

**FASE 81: Onboarding para Peão**
**Seção:** 10.2 Post-Login  
**Descrição:** Tutorial específico para Peão

**Tarefas:**
- [ ] Tela mostrando módulos disponíveis:
  - Dashboard
  - Nascimentos
  - Ocorrências
  - Sincronização
- [ ] Opção "Pular Tutorial"
- [ ] Carrousel de onboarding

**FASE 82: Onboarding para Veterinário**
**Tarefas:**
- [ ] Módulos: Dashboard, Serviços, Vacinação, Agenda, Reprodução

**FASE 83: Onboarding para Admin**
**Tarefas:**
- [ ] Módulos: Todos os módulos disponíveis

**FASE 84: Onboarding para Criador**
**Tarefas:**
- [ ] Módulos: Dashboard, Plantel, Financeiro, Relatórios, Configurações

**Arquivos a criar:**
- `/components/onboarding/PeaoOnboarding.tsx`
- `/components/onboarding/VetOnboarding.tsx`
- `/components/onboarding/AdminOnboarding.tsx`
- `/components/onboarding/BreederOnboarding.tsx`

---

### FASE 85: Web - Admin Login e Impersonação
**Seção:** 10.3 Admin Login  
**Descrição:** Login web para administrador

**Tarefas:**
- [ ] Tela de login padrão sem seleção de perfil
- [ ] Após login, menu "Impersonar Usuário"
- [ ] Dropdown para selecionar usuário/perfil a impersonar
- [ ] Banner indicando modo de impersonação
- [ ] Botão "Sair da Impersonação"

**Arquivos a criar:**
- `/components/admin/ImpersonationBanner.tsx`
- `/components/admin/ImpersonationSelector.tsx`

**Arquivos a modificar:**
- `/App.tsx`

---

## 📊 RESUMO DO PLANO

### Módulos e Estimativas

| Módulo | Fases | Status | Prioridade |
|--------|-------|--------|-----------|
| **1. Plantel - Expansão de Campos** | 7-41 (35 fases) | ⏳ Pendente | 🔴 Alta |
| **2. Reprodução - Automação** | 42-53 (12 fases) | ⏳ Pendente | 🟡 Média |
| **3. Exposições e Pistas** | 54-57 (4 fases) | ⏳ Pendente | 🟡 Média |
| **4. Status dos Animais** | 58-61 (4 fases) | ⏳ Pendente | 🟡 Média |
| **5. Vídeos** | 30-32 (3 fases) | ⏳ Pendente | 🟢 Baixa |
| **6. Venda** | 36-38 (3 fases) | ⏳ Pendente | 🟢 Baixa |
| **7. Bottom Navigation** | 68-70 (3 fases) | ⏳ Pendente | 🟡 Média |
| **8. Importação ABCCMM** | 71-74 (4 fases) | ⏳ Pendente | 🟡 Média |
| **9. Agenda (Separação)** | 75-78 (4 fases) | ⏳ Pendente | 🟡 Média |
| **10. Login e Perfis** | 79-85 (7 fases) | ⏳ Pendente | 🟢 Baixa |

**TOTAL RESTANTE:** 81 fases

---

## 🎯 RECOMENDAÇÃO DE EXECUÇÃO

### PRIORIDADE 1 (Fases 7-20): Core do Plantel
Completar visualização e filtros básicos do plantel - funcionalidade mais usada.

### PRIORIDADE 2 (Fases 21-41): Perfil Completo do Animal
Expandir perfil do animal com todas as seções e abas necessárias.

### PRIORIDADE 3 (Fases 42-61): Módulos Operacionais
Reprodução, Exposições e Status - funcionalidades operacionais diárias.

### PRIORIDADE 4 (Fases 62-85): Recursos Avançados
Vídeos, Venda, Mobile Nav, Importação, Login - recursos complementares.

---

## 📝 NOTAS IMPORTANTES

1. **Manter compatibilidade:** Todas as fases devem manter compatibilidade com dark/light mode
2. **Mobile-first:** Sempre considerar experiência mobile
3. **Dados realistas:** Usar dados mockados realistas e representativos
4. **Incremental:** Cada fase deve ser testada antes de prosseguir
5. **Documentação:** Atualizar este arquivo após cada fase concluída

---

## 🚀 PRÓXIMA FASE

**FASE 23:** Botão "Ver Árvore Genealógica Completa"

**Preparação necessária:**
- Estrutura de árvore genealógica já existe ✅
- Dados mockados já existem ✅
- Apenas precisa adicionar o botão e modal ✅