# 🧪 Guia de Teste - Sistema de Status Ativo/Inativo

## Como Testar a Implementação Completa

### 1️⃣ Testar Filtros no Módulo Plantel

**Caminho:** Criador → Módulo Plantel

1. **Visualizar badge de contagem:**
   - Badge deve mostrar: "Todos (10)" inicialmente
   
2. **Clicar no botão de filtro "Todos (10)":**
   - Dropdown deve abrir com 3 opções
   - ✅ Todos (10)
   - ✅ Ativos (8)  
   - ✅ Inativos (2)

3. **Selecionar "Ativos":**
   - Badge muda para: "Ativos (8)"
   - Lista exibe apenas 8 animais
   - Animais: Diamante Negro, Safira, Trovão, Serena, Estrela Mangalarga, Relâmpago Negro, Lua Dourada, Vento Sul, Bella Vista, Trovão Branco, Noite Estrelada, Sol Nascente

4. **Selecionar "Inativos":**
   - Badge muda para: "Inativos (2)"
   - Lista exibe apenas 2 animais
   - Animais: Estrela da Manhã, Trovão Negro
   - Ambos com ícone de círculo cinza

5. **Voltar para "Todos":**
   - Badge volta para: "Todos (10)"
   - Lista exibe todos os 10 animais

---

### 2️⃣ Testar Perfil de Animal Ativo

**Caminho:** Plantel → Clicar em qualquer animal ativo (ex: Estrela Mangalarga)

1. **Na seção "Informações Básicas":**
   - Campo **"Situação"** deve exibir: "Ativo" em **verde**
   - Não deve haver campos de motivo ou data de inativação

2. **Rolar até o final da aba "Visão Geral":**
   - Deve aparecer botão vermelho: **"Marcar como Inativo"**
   - Botão com ícone X à esquerda

3. **Clicar no botão "Marcar como Inativo":**
   - Modal deve abrir imediatamente
   - Título: "Marcar Animal como Inativo"
   - Texto explicativo com nome do animal

4. **No modal, verificar campos:**
   - ✅ Seletor "Motivo da Inativação" com 4 opções:
     - Vendido (padrão)
     - Óbito
     - Doado
     - Transferido
   - ✅ Campo de data (data atual pré-preenchida)
   - ✅ Aviso em vermelho sobre ação permanente

5. **Testar fechamento do modal:**
   - Clicar no X → Modal fecha
   - Abrir novamente e pressionar ESC → Modal fecha
   - Abrir novamente e clicar em "Cancelar" → Modal fecha

6. **Testar seleção de motivo:**
   - Selecionar "Óbito" → Dropdown atualiza
   - Selecionar "Doado" → Dropdown atualiza
   - Selecionar "Transferido" → Dropdown atualiza
   - Voltar para "Vendido"

7. **Testar seleção de data:**
   - Clicar no campo de data
   - Escolher uma data diferente
   - Verificar que atualiza

8. **Clicar em "Confirmar Inativação":**
   - Console deve mostrar: `Marcar como inativo: { animalId: 1, motivo: 'Vendido', data: '2024-12-18' }`
   - Modal fecha
   - *(Nota: Salvamento real ainda não implementado)*

---

### 3️⃣ Testar Perfil de Animal Inativo

**Caminho:** Plantel → Filtrar por "Inativos" → Clicar em "Estrela da Manhã"

1. **Na seção "Informações Básicas":**
   - Campo **"Situação"** deve exibir: "Inativo" em **vermelho**
   - Campo **"Motivo"** deve exibir: "Vendido"
   - Campo **"Data da Inativação"** deve exibir: "20/11/2024"

2. **Procurar seção "Histórico de Mudanças de Status":**
   - Seção deve aparecer ANTES da seção "Reprodução"
   - Card com borda esquerda colorida (primary/white)
   - Conteúdo:
     - Status: "Ativo → Inativo" (Ativo em vermelho, Inativo em vermelho)
     - Motivo: "Vendido"
     - Data: "20/11/2024"
     - Usuário: "João Silva (Criador)"

3. **Verificar que NÃO há botão "Marcar como Inativo":**
   - Rolar até o final da página
   - Botão vermelho não deve aparecer

4. **Testar com segundo animal inativo:**
   - Voltar → Filtrar "Inativos" → Clicar em "Trovão Negro"
   - Verificar:
     - Situação: "Inativo" (vermelho)
     - Motivo: "Vendido"
     - Data: "05/10/2024"
     - Histórico com data 05/10/2024

---

### 4️⃣ Testar Responsividade

**Em Desktop (>768px):**
- Botão "Marcar como Inativo" deve ter largura automática
- Modal deve ter max-width de 28rem
- Botões do modal em linha (lado a lado)

**Em Mobile (<768px):**
- Botão "Marcar como Inativo" deve ocupar largura total
- Modal deve ter padding de 1rem (p-4)
- Botões do modal empilhados verticalmente

---

### 5️⃣ Testar Dark Mode

**Ativar Dark Mode:**

1. **Filtros no Plantel:**
   - Fundo do dropdown: `#1a1a1a`
   - Texto: branco
   - Hover: `#0d0d0d`

2. **Perfil do Animal:**
   - Campo "Situação" em verde/vermelho mantém contraste
   - Cards de histórico com fundo `#0d0d0d`

3. **Modal de Inativação:**
   - Fundo: `#1a1a1a`
   - Borda: `rgba(255,255,255,0.1)`
   - Inputs com fundo `#0d0d0d`
   - Aviso vermelho: fundo `red-900/20`, texto `red-200`

---

### 6️⃣ Testar Integração com Filtros Existentes

**Caminho:** Plantel → Aplicar múltiplos filtros

1. **Filtro de Status + Filtro de Busca:**
   - Filtrar por "Ativos"
   - Buscar por "Estrela"
   - Deve mostrar apenas "Estrela Mangalarga"

2. **Filtro de Status + Filtro de Categoria:**
   - Filtrar por "Ativos"
   - Filtrar categoria "Reprodutor"
   - Deve mostrar apenas Relâmpago Negro e Trovão Branco

3. **Filtro de Status Inativo + Busca:**
   - Filtrar por "Inativos"
   - Buscar por "Trovão"
   - Deve mostrar apenas "Trovão Negro"

---

## ✅ Checklist de Validação

- [ ] Filtros exibem contagem correta (Todos: 10, Ativos: 8, Inativos: 2)
- [ ] Animais ativos mostram "Situação: Ativo" em verde
- [ ] Animais inativos mostram "Situação: Inativo" em vermelho
- [ ] Motivo e data de inativação aparecem apenas em inativos
- [ ] Histórico de status aparece apenas em animais com histórico
- [ ] Botão "Marcar como Inativo" aparece apenas em ativos
- [ ] Modal abre/fecha corretamente (X, ESC, Cancelar)
- [ ] Seletores de motivo e data funcionam
- [ ] Console.log ao confirmar inativação
- [ ] Dark mode funciona em todos os componentes
- [ ] Responsividade OK em mobile e desktop
- [ ] Filtros combinados funcionam corretamente

---

## 🐛 Problemas Conhecidos / Limitações

1. **Salvamento não implementado:** 
   - Ao confirmar inativação, apenas um `console.log` é executado
   - Dados não são persistidos (aguardando integração com backend)

2. **Reativação não implementada:**
   - Não há opção para marcar animal inativo como ativo novamente
   - Funcionalidade sugerida para versão futura

3. **Validação de data:**
   - Não há validação se data é futura
   - Aceita qualquer data selecionada

---

## 📊 Dados de Teste

### Animais Ativos (8):
1. Diamante Negro (ID 201)
2. Safira (ID 202)
3. Trovão (ID 203)
4. Serena (ID 204)
5. Estrela Mangalarga (ID 1)
6. Relâmpago Negro (ID 2)
7. Lua Dourada (ID 3)
8. Vento Sul (ID 4)
9. Bella Vista (ID 5)
10. Trovão Branco (ID 6)
11. Noite Estrelada (ID 7)
12. Sol Nascente (ID 8)

### Animais Inativos (2):
1. **Estrela da Manhã** (ID 9)
   - Motivo: Vendido
   - Data: 20/11/2024
   
2. **Trovão Negro** (ID 10)
   - Motivo: Vendido
   - Data: 05/10/2024

---

**Última atualização:** 18/12/2024  
**Versão do teste:** 1.0
