# 📝 Atualização de Nomenclatura - Status vs Status no Plantel

## ✅ Alterações Realizadas

Para eliminar a duplicação e deixar clara a diferença entre os dois tipos de status, foram atualizados os seguintes títulos:

---

## 🔄 Mudanças no Perfil do Animal (BreederAnimalDetails.tsx)

### Antes:
- **"Status"** → Gestante, Em Cobertura, Ativo, etc.
- **"Situação"** → Ativo/Inativo no plantel

### Depois:
- **"Status Reprodutivo"** → Gestante, Em Cobertura, Ativo, etc.
- **"Status no Plantel"** → Ativo/Inativo no plantel

---

## 🔍 Mudanças nos Filtros do Plantel (BreederPlantelContent.tsx)

### Antes:
```
Dropdown: "Todos os Status"
Opções: Todos os Status / Ativos / Inativos
```

### Depois:
```
Dropdown: "Status no Plantel"
Opções: Status no Plantel / Ativos / Inativos
```

---

## 📋 Detalhamento das Alterações

### Arquivo: `/components/breeder/BreederAnimalDetails.tsx`

#### Linha ~708-714 (Seção Informações Básicas):
```tsx
// ANTES:
<InfoRow label="Status" value={animal.status} />
<InfoRow label="Situação" value={animal.statusAtividade || 'Ativo'} />

// DEPOIS:
<InfoRow label="Status Reprodutivo" value={animal.status} />
<InfoRow label="Status no Plantel" value={animal.statusAtividade || 'Ativo'} />
```

#### Linha ~63 (Comentário no tipo Animal):
```tsx
// ANTES:
statusAtividade?: 'Ativo' | 'Inativo'; // Status de atividade do animal

// DEPOIS:
statusAtividade?: 'Ativo' | 'Inativo'; // Status no Plantel
```

---

### Arquivo: `/components/breeder/BreederPlantelContent.tsx`

#### Linha ~708-716 (Filtro dropdown):
```tsx
// ANTES:
<option value="todos">Todos os Status</option>

// DEPOIS:
<option value="todos">Status no Plantel</option>
```

#### Linha ~49 (Comentário no tipo Animal):
```tsx
// ANTES:
statusAtividade: 'Ativo' | 'Inativo'; // Status de atividade do animal

// DEPOIS:
statusAtividade: 'Ativo' | 'Inativo'; // Status no Plantel
```

#### Linha ~559 (Comentário na lógica de filtro):
```tsx
// ANTES:
// Filtro de status (Ativos/Inativos)

// DEPOIS:
// Filtro de Status no Plantel (Ativos/Inativos)
```

---

## 🎯 Objetivo das Mudanças

### Clareza Semântica
- **"Status Reprodutivo"** indica claramente que se trata da condição reprodutiva do animal
- **"Status no Plantel"** indica claramente se o animal está ativo ou inativo no haras

### Evita Confusão
- Elimina a duplicação aparente de "Status" e "Situação"
- Torna óbvio que são dois conceitos diferentes

### Consistência
- Mesma nomenclatura em todos os lugares do sistema
- Facilita o entendimento para novos usuários

---

## 📊 Impacto Visual

### No Perfil do Animal:

```
┌─ Informações Básicas ──────────────────┐
│                                         │
│ Status Reprodutivo:    Gestante         │ ← Condição atual (reprodução)
│ Status no Plantel:     Ativo (verde)    │ ← Se está ativo no haras
│                                         │
└─────────────────────────────────────────┘
```

### No Filtro do Plantel:

```
┌─ Filtros ──────────────────────────────┐
│                                         │
│ [Buscar...]  [Machos/Fêmeas]           │
│                                         │
│ [Status no Plantel ▼]  [Filtros Av...] │
│   • Status no Plantel (todos)           │
│   • Ativos                              │
│   • Inativos                            │
│                                         │
└─────────────────────────────────────────┘
```

---

## ✨ Benefícios

1. **Usuário entende imediatamente a diferença:**
   - Status Reprodutivo = como está o animal reprodutivamente
   - Status no Plantel = se está ativo ou foi vendido/inativado

2. **Nomenclatura intuitiva:**
   - "Plantel" é termo familiar para criadores
   - "Reprodutivo" é autoexplicativo

3. **Escalabilidade:**
   - Se futuramente houver outros tipos de status, a nomenclatura já está clara

---

## 🔍 Verificação de Consistência

- ✅ Todos os comentários atualizados
- ✅ Todas as labels de UI atualizadas
- ✅ Nenhuma referência antiga restante
- ✅ Terminologia consistente em todo o sistema

---

**Data da Atualização:** 18/12/2024  
**Arquivos Modificados:** 2  
**Linhas Alteradas:** ~8 linhas  
**Breaking Changes:** Nenhum (apenas labels visuais)
