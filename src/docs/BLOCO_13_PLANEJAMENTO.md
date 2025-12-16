# BLOCO 13: FASES 63-67 - MÓDULO DE SAÚDE E VETERINÁRIA

**Foco:** Sistema completo de gestão de saúde veterinária dos animais  
**Progresso Atual:** 62/87 fases (71.3%)  
**Após BLOCO 13:** 67/87 fases (77.0%)

---

## FASES DO BLOCO 13

### FASE 63: Aba "Saúde" com Histórico Veterinário
**Arquivo:** `/components/breeder/HealthTab.tsx`

**Funcionalidades:**
- Nova aba "Saúde" na tela de detalhes do animal
- Visão geral do histórico veterinário completo
- Listagem cronológica de procedimentos
- Filtros por tipo de procedimento (consulta, cirurgia, emergência, exame)
- Filtros por período (últimos 30/60/90 dias, todos)
- **Estatísticas rápidas:**
  - Total de procedimentos
  - Última consulta
  - Próxima consulta agendada
  - Custo total em veterinária
- **Cards de procedimentos contendo:**
  - Data e hora
  - Tipo de procedimento
  - Veterinário responsável
  - Diagnóstico/motivo
  - Tratamento realizado
  - Medicamentos prescritos
  - Custo
  - Observações
  - Documentos anexados (laudos, receitas)
- Botão "+ Registrar Procedimento"
- Timeline visual opcional
- Estado vazio com CTA

**Design:**
- Dark mode 100% padronizado (cinza neutro)
- Cards expansíveis com detalhes
- Badges coloridos por tipo de procedimento
- Ícones do lucide-react (Stethoscope, Activity, FileText)

---

### FASE 64: Modal "Registrar Procedimento Veterinário"
**Arquivo:** `/components/breeder/RegisterVeterinaryProcedureModal.tsx`

**Funcionalidades:**
- Modal completo para registro de procedimentos
- **Campos do formulário:**
  - Data e hora do procedimento *
  - Tipo de procedimento * (select: Consulta, Cirurgia, Emergência, Exame, Vacinação, Vermifugação)
  - Veterinário responsável * (text ou select)
  - CRM do veterinário
  - Clínica/Hospital
  - Motivo/Queixa principal *
  - Diagnóstico
  - Procedimentos realizados
  - Medicamentos prescritos (lista dinâmica)
    - Nome do medicamento
    - Dosagem
    - Frequência
    - Duração
  - Exames solicitados (lista)
  - Recomendações
  - Próximo retorno (data)
  - Custo total
  - Observações
- Upload de documentos (laudos, receitas, exames)
- Validações de campos obrigatórios
- Preview dos documentos anexados
- Botões "Cancelar" e "Salvar Procedimento"

**Design:**
- Formulário em seções organizadas
- Campos de lista com botão "+ Adicionar"
- Upload drag-and-drop
- Dark mode 100% padronizado

---

### FASE 65: Calendário de Vacinas
**Arquivo:** `/components/breeder/VaccinationCalendarTab.tsx`

**Funcionalidades:**
- Aba dedicada ao controle de vacinação
- **Calendário de vacinas obrigatórias:**
  - Raiva
  - Tétano
  - Influenza Equina
  - Encefalomielite
  - Outras vacinas comuns
- **Visualização em formato de timeline/calendário**
- **Cards de vacinas contendo:**
  - Nome da vacina
  - Data de aplicação
  - Próxima dose (se aplicável)
  - Lote/fabricante
  - Veterinário responsável
  - Validade
  - Status (em dia, atrasada, próxima do vencimento)
- **Alertas visuais:**
  - Vacinas vencidas (vermelho)
  - Vacinas próximas do vencimento (amarelo)
  - Vacinas em dia (verde)
- Filtros por status
- Botão "+ Registrar Vacina"
- Histórico completo de vacinação
- Opção de gerar carteirinha de vacinação (PDF)
- Lembretes automáticos (mock)

**Design:**
- Timeline visual com badges de status
- Cores semafóricas (verde/amarelo/vermelho)
- Cards compactos e informativos
- Dark mode 100% padronizado

---

### FASE 66: Histórico de Exames
**Arquivo:** `/components/breeder/ExamsHistoryTab.tsx`

**Funcionalidades:**
- Aba dedicada ao histórico de exames
- Listagem de todos os exames realizados
- **Tipos de exames:**
  - Exames de sangue (hemograma, bioquímico)
  - Exames de imagem (raio-X, ultrassom, ressonância)
  - Exames laboratoriais
  - Exames ginecológicos/reprodutivos
  - Exames de marcha
  - Outros
- **Cards de exames contendo:**
  - Data do exame
  - Tipo de exame
  - Laboratório/clínica
  - Veterinário solicitante
  - Resultados (normal, alterado, crítico)
  - Laudos anexados (PDF, imagens)
  - Observações
- Filtros por tipo de exame e período
- Sistema de tags para facilitar busca
- Visualizador de PDFs e imagens inline
- Botão "+ Registrar Exame"
- Comparação de exames ao longo do tempo (mesmo tipo)
- Estado vazio com CTA

**Design:**
- Cards com preview de documentos
- Badges de status (normal/alterado/crítico)
- Visualizador modal para documentos
- Dark mode 100% padronizado

---

### FASE 67: Alertas de Saúde e Dashboard Resumido
**Arquivo:** `/components/breeder/HealthDashboard.tsx`

**Funcionalidades:**
- Dashboard resumido de saúde do animal
- Integração com todas as abas de saúde
- **Widgets principais:**
  - Status geral de saúde (visual com indicador)
  - Últimas consultas (3 mais recentes)
  - Vacinas pendentes/próximas
  - Exames pendentes
  - Medicações em andamento
  - Alertas de saúde (urgente/atenção/informativo)
- **Sistema de alertas:**
  - Vacinas vencidas
  - Consultas agendadas
  - Medicação em andamento
  - Resultados de exames críticos
  - Procedimentos pendentes
- **Gráfico de gastos com saúde:**
  - Por mês
  - Por tipo de procedimento
  - Total anual
- Atalhos rápidos para registrar procedimentos
- Exportação de relatório de saúde completo
- Impressão de histórico médico

**Design:**
- Layout de dashboard com widgets
- Sistema de alertas visual (badges numerados)
- Gráficos simples e informativos
- Cards clicáveis que levam às abas específicas
- Dark mode 100% padronizado

---

## ESTATÍSTICAS PREVISTAS

| Métrica | Estimativa |
|---------|------------|
| **Fases** | 5 fases |
| **Arquivos** | 5-7 arquivos |
| **Linhas de Código** | ~2.500 linhas |
| **Componentes** | 10-12 componentes |
| **Modais** | 2-3 modais |
| **Tabs** | 4 tabs |

---

## INTEGRAÇÃO

- Integrar as 4 novas abas na tela de detalhes do animal (BreederAnimalDetails.tsx)
- Tabs de saúde:
  1. Histórico Veterinário
  2. Calendário de Vacinas
  3. Histórico de Exames
  4. Dashboard de Saúde

---

## PADRÕES A SEGUIR

### Dark Mode Consistente
- Fundo principal: `dark:bg-[#1a1a1a]`
- Fundo secundário: `dark:bg-[#0d0d0d]`
- Inputs/Selects: `dark:bg-[#3a3a3a]`
- Bordas: `dark:border-[rgba(255,255,255,0.1)]` e `dark:border-[#333333]`
- Texto primário: `dark:text-white`
- Texto secundário: `dark:text-[#99a1af]`

### Sem Emojis
- Usar apenas ícones do lucide-react
- Elementos geométricos simples quando necessário
- Sem emojis em nenhuma parte do código

### UX/UI
- Formulários com validação em tempo real
- Estatísticas visuais com ícones coloridos
- Formatação de moeda brasileira
- Formatação de datas BR (dd/mm/yyyy)
- Status visuais (badges coloridos)
- Estados vazios informativos
- Feedback visual consistente
- Upload drag-and-drop

---

## DADOS MOCK

Criar dados realistas para:
- Procedimentos veterinários variados
- Histórico de vacinação completo
- Exames laboratoriais e de imagem
- Custos variados
- Diferentes veterinários
- Documentos anexados (mock)

---

## PRÓXIMOS BLOCOS APÓS O 13

**BLOCO 14: FASES 68-72** - Módulo de Relatórios e Exportação  
**BLOCO 15: FASES 73-77** - Módulo de Notificações e Alertas  
**BLOCO 16: FASES 78-82** - Módulo de Análises e Insights  
**BLOCO 17: FASES 83-87** - Finalização e Polimento

---

**Total após BLOCO 13:** 67/87 fases concluídas (77.0%)  
**Faltam:** 20 fases (23.0%)
