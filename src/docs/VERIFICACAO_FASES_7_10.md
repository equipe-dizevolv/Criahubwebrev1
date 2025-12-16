# VERIFICAÇÃO DAS FASES 7-10
## DE-PARA: Estado Atual vs Implementação Necessária

**Data:** Dezembro 2025  
**Análise:** Fases 7, 8, 9 e 10

---

## FASE 7: Filhos - Contador Clicável

### Estado Atual ✅🔄
- ✅ Campo `filhos?: number` existe na interface Animal
- ✅ Dados mockados existem para animais da genealogia (Ouro: 12, Aurora: 8, Hércules: 23, etc.)
- ✅ Exibição na visualização LIST (AnimalListItem mostra contador)
- ❌ **NÃO exibido no GRID view (AnimalCard)**
- ❌ **NÃO é clicável** - não abre modal/aba com lista de descendentes
- ❌ **Falta:** Modal ou aba com grid de filhos

### O Que Implementar ✅
1. Adicionar badge/tag de filhos no `AnimalCard` (grid view)
2. Tornar contador clicável (tanto em grid quanto em list)
3. Criar modal `OffspringModal` com:
   - Grid de fotos dos filhos
   - Informações básicas (nome, sexo, idade, categoria)
   - Filtros (sexo, categoria, status)
   - Link para perfil de cada filho

**Arquivos a modificar:**
- `/components/breeder/BreederPlantelContent.tsx`

**Arquivos a criar:**
- `/components/breeder/OffspringModal.tsx` (opcional - pode ser inline)

---

## FASE 8: Marca - Exibir no Grid View

### Estado Atual ✅🔄
- ✅ Campo `marca?: string` existe na interface Animal
- ✅ Dados mockados existem para TODOS os animais (VV-001, VV-002, etc.)
- ✅ Exibição na visualização LIST (AnimalListItem mostra marca)
- ❌ **NÃO exibido no GRID view (AnimalCard)**

### O Que Implementar ✅
1. Adicionar exibição de `marca` no `AnimalCard`
2. Formato sugerido: Badge pequeno ou texto: "Marca: VV-001"
3. Posicionar abaixo do registro ou junto com categoria

**Arquivos a modificar:**
- `/components/breeder/BreederPlantelContent.tsx` (AnimalCard component)

---

## FASE 9: Nascimento - Adicionar Campo de Data

### Estado Atual ❌
- ❌ Campo `birthDate` NÃO existe na interface Animal
- ❌ Nenhum dado mockado de datas de nascimento
- ❌ Não exibido em nenhuma visualização

### O Que Implementar ✅
1. Adicionar campo `birthDate?: string` na interface Animal
2. Adicionar datas mockadas para todos os animais (formato: DD/MM/YYYY ou ISO)
3. Calcular idade automaticamente a partir da data
4. Exibir na visualização LIST
5. Opcional: Exibir no GRID view
6. Exibir no perfil do animal (seção Informações Básicas)

**Arquivos a modificar:**
- `/components/breeder/BreederPlantelContent.tsx`
- `/components/breeder/BreederAnimalDetails.tsx` (adicionar na seção Informações Básicas)

---

## FASE 10: Genealogia - Link "Ver Genealogia" na Listagem

### Estado Atual ❌
- ❌ Não existe botão/link "Ver Genealogia" na listagem
- ✅ Seção de genealogia existe no perfil do animal (BreederAnimalDetails)
- ✅ Navegação para genealogia funciona ao clicar no animal e depois navegar para aba
- ❌ **Falta:** Link direto na listagem que abre diretamente a aba de genealogia

### O Que Implementar ✅
1. Adicionar botão "Ver Genealogia" no `AnimalListItem` (visualização list)
2. Adicionar ícone 🌳 ou similar
3. Ao clicar:
   - Opção A: Abrir modal popup com genealogia compacta (Pai, Mãe, Avós)
   - Opção B: Abrir perfil do animal diretamente na aba "Genealogia"
4. **Recomendação:** Opção B (abrir perfil na aba genealogia)

**Arquivos a modificar:**
- `/components/breeder/BreederPlantelContent.tsx` (AnimalListItem - adicionar botão)
- `/components/breeder/BreederAnimalDetails.tsx` (aceitar prop para abrir aba específica)

**Arquivos a criar (opcional):**
- `/components/breeder/QuickGenealogyModal.tsx` (se escolher Opção A)

---

## RESUMO DA IMPLEMENTAÇÃO

| Fase | Status Atual | Complexidade | Prioridade |
|------|--------------|--------------|------------|
| FASE 7: Filhos Clicável | 🔄 Parcial (50%) | Média | Alta |
| FASE 8: Marca no Grid | 🔄 Parcial (80%) | Baixa | Alta |
| FASE 9: Data Nascimento | ❌ Não iniciada (0%) | Média | Alta |
| FASE 10: Link Genealogia | ❌ Não iniciada (0%) | Média | Média |

---

## ORDEM DE IMPLEMENTAÇÃO RECOMENDADA

### 1️⃣ FASE 8: Marca no Grid (MAIS FÁCIL)
**Tempo estimado:** 5 minutos  
**Modificações:** 1 linha de código no AnimalCard

### 2️⃣ FASE 9: Data de Nascimento
**Tempo estimado:** 15 minutos  
**Modificações:** 
- Adicionar campo na interface
- Adicionar dados mockados (15 animais)
- Função para calcular idade
- Exibir em list e perfil

### 3️⃣ FASE 7: Filhos Clicável
**Tempo estimado:** 20 minutos  
**Modificações:**
- Adicionar no grid view
- Tornar clicável
- Modal com lista de filhos mockados

### 4️⃣ FASE 10: Link Genealogia
**Tempo estimado:** 15 minutos  
**Modificações:**
- Botão na listagem
- Prop para abrir aba específica
- Lógica de navegação

---

## DADOS MOCKADOS NECESSÁRIOS

### FASE 7: Filhos (offspring)
```typescript
// Criar array de filhos mockados para animais com filhos > 0
const mockOffspring = {
  101: [ // Ouro (12 filhos)
    { id: 1001, name: 'Ouro Jr.', sex: 'Macho', category: 'Potro', birthDate: '2023-01-15', image: '...' },
    { id: 1002, name: 'Dourado', sex: 'Macho', category: 'Reprodutor', birthDate: '2021-03-20', image: '...' },
    // ... mais 10
  ],
  102: [ // Aurora (8 filhos)
    { id: 2001, name: 'Aurora Bela', sex: 'Fêmea', category: 'Potra', birthDate: '2023-05-10', image: '...' },
    // ... mais 7
  ],
  // etc.
};
```

### FASE 9: Datas de Nascimento
```typescript
const birthDates = {
  1: '2020-01-15',   // Estrela Mangalarga (4 anos)
  2: '2018-03-20',   // Relâmpago Negro (6 anos)
  3: '2019-06-12',   // Lua Dourada (5 anos)
  4: '2023-02-28',   // Vento Sul (1 ano)
  5: '2021-08-05',   // Bella Vista (3 anos)
  6: '2019-11-18',   // Trovão Branco (5 anos)
  7: '2022-04-22',   // Noite Estrelada (2 anos)
  8: '2020-07-30',   // Sol Nascente (4 anos)
  101: '2016-05-10', // Ouro (8 anos)
  102: '2017-09-14', // Aurora (7 anos)
  201: '2012-02-18', // Hércules (12 anos)
  202: '2013-07-25', // Safira (11 anos)
  203: '2014-12-03', // Trovão (10 anos)
  204: '2015-10-09', // Serena (9 anos)
};

// Função para calcular idade
function calculateAge(birthDate: string): number {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}
```

---

## PRÓXIMOS PASSOS

✅ **APROVADO PARA IMPLEMENTAÇÃO**

Implementar na ordem:
1. FASE 8 (Marca)
2. FASE 9 (Nascimento)
3. FASE 7 (Filhos)
4. FASE 10 (Genealogia)
