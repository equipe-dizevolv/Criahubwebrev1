# MAPEAMENTO DE IMPLEMENTAÇÃO - CRIAHUB
## Status das 87 Correções Necessárias

**Data:** Dezembro 2025  
**Última Atualização:** FASE 6 em andamento

---

## 📊 RESUMO EXECUTIVO

| Status | Quantidade | Percentual |
|--------|-----------|------------|
| ✅ Concluído | 6 | ~7% |
| 🔄 Em Andamento | 1 | ~1% |
| ⏳ Pendente | 80 | ~92% |

---

## 1. MÓDULO PLANTEL - EXPANSÃO DE CAMPOS

### 1.1 Listagem de Plantel (Web)

#### Campos na Tabela/Grid:

| Item | Status | Fase | Observações |
|------|--------|------|-------------|
| Foto | ✅ Implementado | - | Já existe no código |
| Nome | ✅ Implementado | - | Já existe no código |
| Registro ABCCMM | ✅ Implementado | - | Já existe no código |
| Sexo | ✅ Implementado | - | Campo existe na interface |
| **Chip (RFID)** | 🔄 **Em Andamento** | **FASE 6** | Interface pronta, faltam chips em animais 2-8 |
| **Filhos (Contador)** | ⏳ Pendente | **FASE 7** | Interface pronta, precisa exibir na visualização grid |
| **Premiações (Contador)** | ✅ **Concluído** | **FASE 5** | ✅ Implementado e exibindo corretamente |
| **Marca/Ferro** | ⏳ Pendente | **FASE 8** | Interface pronta, precisa exibir na visualização grid |
| **Nascimento (Data)** | ⏳ Pendente | **FASE 9** | Precisa adicionar campo à interface Animal |
| **Link Genealogia** | ⏳ Pendente | **FASE 10** | Precisa criar botão/link na listagem |
| Status (Baia/Pasto/Serviço) | ✅ Implementado | - | Já existe no código |

#### Filtros:

| Item | Status | Fase |
|------|--------|------|
| Busca por Chip | ⏳ Pendente | **FASE 11** |
| Nascimento (data range) | ⏳ Pendente | **FASE 12** |
| Categoria (Matriz/Doadora/etc) | ⏳ Pendente | **FASE 13** |
| Tem Filhos (sim/não) | ⏳ Pendente | **FASE 14** |
| Tem Premiações (sim/não) | ⏳ Pendente | **FASE 15** |

#### Ações por linha:

| Item | Status | Fase |
|------|--------|------|
| Ver Perfil Completo | ✅ Implementado | - |
| Editar | ✅ Implementado | - |
| Visualizar Genealogia (quick) | ⏳ Pendente | **FASE 16** |
| Ver Vídeos | ⏳ Pendente | **FASE 17** |
| Deletar | ⏳ Pendente | **FASE 18** |

---

### 1.2 Perfil do Animal - Visão Geral

#### Seções/Abas:

| Seção | Status | Fase |
|-------|--------|------|
| Header (Foto + Nome + Status) | ✅ Implementado | - |
| **INFORMAÇÕES BÁSICAS** | 🔄 Parcial | **FASE 19-21** |
| - Sexo | ⏳ Pendente | FASE 19 |
| - Categoria | ⏳ Pendente | FASE 19 |
| - Nascimento | ⏳ Pendente | FASE 19 |
| - Registro ABCCMM | ✅ Implementado | - |
| - Chip | ✅ Implementado | - |
| - Marca | ✅ Implementado | - |
| - Haras de Origem | ✅ Implementado | - |
| **GENEALOGIA** | 🔄 Parcial | **FASE 22-24** |
| - Pai/Mãe (com links) | ✅ Implementado | - |
| - Avós (4 cards) | ✅ Implementado | - |
| - Bisavós (8 cards) | ⏳ Pendente | FASE 22 |
| - Botão "Ver Árvore Completa" | ⏳ Pendente | FASE 23 |
| **REPRODUÇÃO** | ⏳ Pendente | **FASE 25-27** |
| **FILHOS** (nova aba) | ⏳ Pendente | **FASE 28-29** |
| **VÍDEOS** (nova aba) | ⏳ Pendente | **FASE 30-32** |
| **PREMIAÇÕES** (nova aba) | 🔄 Parcial | **FASE 33** |
| - Lista de prêmios | ✅ Exibe contador | - |
| - Tabela detalhada | ⏳ Pendente | FASE 33 |
| - Botão importar ABCCMM | ⏳ Pendente | FASE 33 |
| **SAÚDE/OCORRÊNCIAS** | ⏳ Pendente | **FASE 34-35** |
| **VENDA** | ⏳ Pendente | **FASE 36-38** |
| **LOCALIZAÇÃO** | ⏳ Pendente | **FASE 39-40** |
| **DOCUMENTOS** | ⏳ Pendente | **FASE 41** |

---

## 2. MÓDULO REPRODUÇÃO - AUTOMAÇÃO DE FLUXOS

| Funcionalidade | Status | Fase |
|----------------|--------|------|
| Aba "Sequência Automática" | ⏳ Pendente | **FASE 42** |
| Registrar Ovulação → Auto-agendar Coleta | ⏳ Pendente | **FASE 43-44** |
| Registrar Inseminação → Auto-agendar Coleta | ⏳ Pendente | **FASE 45-46** |
| Confirmar Gestação → Auto-agendar P4 | ⏳ Pendente | **FASE 47-48** |
| Tabs: Coberturas/Óvulos/Embriões/Gestações | ⏳ Pendente | **FASE 49-52** |
| Modal de Edição Pós-Registro | ⏳ Pendente | **FASE 53** |

---

## 3. MÓDULO EXPOSIÇÕES E TROPA DE PISTA

| Funcionalidade | Status | Fase |
|----------------|--------|------|
| Aba "Pistas/Exposições" | ⏳ Pendente | **FASE 54** |
| Modal "Registrar Participação" | ⏳ Pendente | **FASE 55** |
| Resultados de Exposição | ⏳ Pendente | **FASE 56** |
| Histórico de Pistas (Perfil Animal) | ⏳ Pendente | **FASE 57** |

---

## 4. NOVOS STATUS DE ANIMAIS

| Funcionalidade | Status | Fase |
|----------------|--------|------|
| Campo Status (Baia/Pasto/Serviço) | ✅ Interface pronta | - |
| Sub-opções Serviço | ⏳ Pendente | **FASE 58** |
| Dashboard - Filtro por Status | ⏳ Pendente | **FASE 59** |
| Mobile - Status Visual (badges) | ⏳ Pendente | **FASE 60** |
| Histórico de Mudanças de Status | ⏳ Pendente | **FASE 61** |

---

## 5. GALERIA DE VÍDEOS DOS ANIMAIS

| Funcionalidade | Status | Fase |
|----------------|--------|------|
| Aba "Vídeos" (Perfil Animal) | ⏳ Pendente | **FASE 62** |
| Modal "Adicionar Vídeo" | ⏳ Pendente | **FASE 63** |
| Player de Vídeo | ⏳ Pendente | **FASE 64** |

---

## 6. PERFIL DO ANIMAL PARA VENDA

| Funcionalidade | Status | Fase |
|----------------|--------|------|
| Campo "Animal à Venda?" | ⏳ Pendente | **FASE 65** |
| Card de Venda (Marketing) | ⏳ Pendente | **FASE 66** |
| Modal "Visualizar Premiações" | ⏳ Pendente | **FASE 67** |

---

## 7. MENU INFERIOR (BOTTOM NAVIGATION) - MOBILE

| Funcionalidade | Status | Fase |
|----------------|--------|------|
| Bottom Navigation - Layout | ⏳ Pendente | **FASE 68** |
| Comportamento com Modais | ⏳ Pendente | **FASE 69** |
| Comportamento com Keyboard | ⏳ Pendente | **FASE 70** |

---

## 8. IMPORTAÇÃO DE PLANILHAS ABCCMM

| Funcionalidade | Status | Fase |
|----------------|--------|------|
| Tela de Importação | ⏳ Pendente | **FASE 71-72** |
| Processo de Importação (Feedback Visual) | ⏳ Pendente | **FASE 73** |
| Histórico de Importações | ⏳ Pendente | **FASE 74** |

---

## 9. SEPARAÇÃO ENTRE SERVIÇOS E EVENTOS

| Funcionalidade | Status | Fase |
|----------------|--------|------|
| Agenda - Abas Separadas | ⏳ Pendente | **FASE 75-76** |
| Modal Novo Evento - Diferenciar Tipo | ⏳ Pendente | **FASE 77** |
| Mobile - Ícones Diferenciados | ⏳ Pendente | **FASE 78** |

---

## 10. TELA DE LOGIN - SELEÇÃO DE PERFIL

| Funcionalidade | Status | Fase |
|----------------|--------|------|
| Tela de Login - Seleção de Perfil | ⏳ Pendente | **FASE 79-80** |
| Post-Login - Onboarding Separado | ⏳ Pendente | **FASE 81-84** |
| Web - Admin Login | ⏳ Pendente | **FASE 85** |

---

## 📋 PLANO DE IMPLEMENTAÇÃO SEQUENCIAL

### ✅ FASES CONCLUÍDAS (1-5)
- FASE 1-4: Funcionalidades base
- FASE 5: Campo "Premiações" ✅

### 🔄 FASE ATUAL
- **FASE 6:** Campo "Chip" (Falta completar animais 2-8)

### ⏳ PRÓXIMAS FASES PRIORITÁRIAS (7-20)

**FASE 7:** Exibir contador "Filhos" no grid  
**FASE 8:** Exibir "Marca" no grid  
**FASE 9:** Adicionar campo "Nascimento" (data)  
**FASE 10:** Link "Ver Genealogia" na listagem  
**FASE 11:** Filtro de busca por Chip  
**FASE 12:** Filtro de Nascimento (data range)  
**FASE 13:** Filtro de Categoria  
**FASE 14:** Filtro "Tem Filhos"  
**FASE 15:** Filtro "Tem Premiações"  
**FASE 16:** Ação "Visualizar Genealogia (quick)"  
**FASE 17:** Ação "Ver Vídeos"  
**FASE 18:** Ação "Deletar" animal  
**FASE 19:** Completar seção "Informações Básicas" (Sexo, Categoria, Nascimento)  
**FASE 20:** Adicionar Bisavós (8 cards) na genealogia  

---

## 🎯 ESTIMATIVA DE CONCLUSÃO

- **Módulo 1 (Plantel):** ~41 fases (FASE 6-46)
- **Módulo 2 (Reprodução):** ~12 fases (FASE 42-53)
- **Módulo 3 (Exposições):** ~4 fases (FASE 54-57)
- **Módulo 4 (Status):** ~4 fases (FASE 58-61)
- **Módulo 5 (Vídeos):** ~3 fases (FASE 62-64)
- **Módulo 6 (Venda):** ~3 fases (FASE 65-67)
- **Módulo 7 (Mobile Nav):** ~3 fases (FASE 68-70)
- **Módulo 8 (Importação):** ~4 fases (FASE 71-74)
- **Módulo 9 (Agenda):** ~4 fases (FASE 75-78)
- **Módulo 10 (Login):** ~7 fases (FASE 79-85)

**TOTAL:** ~85 fases restantes

---

## 📝 NOTAS IMPORTANTES

1. **Prioridade Alta:** Fases 6-20 (Módulo Plantel básico)
2. **Prioridade Média:** Fases 42-64 (Reprodução, Exposições, Vídeos)
3. **Prioridade Baixa:** Fases 65-85 (Venda, Mobile Nav, Login)

4. **Dependências:**
   - FASE 33 depende de dados mockados de premiações
   - FASE 43-48 dependem de sistema de eventos
   - FASE 71-74 dependem de backend Supabase (futuro)

5. **Observações:**
   - Algumas fases podem ser agrupadas para otimização
   - Mobile-first em todas as implementações
   - Manter compatibilidade com dark/light mode
