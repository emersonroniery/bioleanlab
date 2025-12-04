# Sistema de Reviews - Resumo de Implementação

## ✅ Implementação Completa

Sistema de reviews implementado seguindo o **Cenário B**, mantendo a stack atual (Pages Router + Markdown + remark).

## 📁 Arquivos Criados/Modificados

### Novos Arquivos Criados

1. **`lib/reviews.ts`**
   - Sistema de leitura de reviews (reutiliza lógica de `lib/posts.ts`)
   - Funções: `getAllReviews()`, `getReviewBySlug()`, `getReviewSlugs()`
   - Filtra automaticamente posts com tag `"reviews"` ou `"review"`

2. **`components/StarRating.tsx`**
   - Componente para exibir rating com estrelas (0-5)
   - Suporta ratings decimais (ex: 4.5)
   - Tamanhos: sm, md, lg
   - Opção de mostrar número ao lado

3. **`components/ReviewCard.tsx`**
   - Card para exibir review na listagem
   - Baseado em `PostCard`, mas adaptado para reviews
   - Mostra: productName, rating, summary, link

4. **`components/ReviewSummaryBox.tsx`**
   - Box de resumo no topo da página de review individual
   - Mostra: productName, rating, data, CTA de afiliado

5. **`pages/reviews/[slug].tsx`**
   - Página individual de review
   - Baseada em `pages/blog/[slug].tsx`
   - SEO completo com JSON-LD Schema.org Review

6. **`REVIEWS_FRONTMATTER_GUIDE.md`**
   - Documentação completa do frontmatter para reviews
   - Exemplos práticos
   - Checklist para novos reviews

### Arquivos Modificados

1. **`pages/reviews.tsx`**
   - Transformada em página dinâmica
   - Mantém texto institucional no topo
   - Lista reviews dinamicamente abaixo
   - Estado vazio quando não há reviews

2. **`pages/sitemap.xml.tsx`**
   - Adicionado suporte para rotas de reviews
   - Inclui `/reviews/[slug]` no sitemap

3. **`posts/ikaria-lean-belly-juice-review-2025.md`**
   - Adicionados campos: `productName`, `rating`, `affiliateLink`, `summary`

4. **`posts/ikaria-vs-leanbiome-comparison-2025.md`**
   - Adicionados campos: `productName`, `rating`, `affiliateLink`, `summary`

5. **`posts/best-natural-fat-loss-supplements-2025.md`**
   - Adicionados campos: `productName`, `rating`, `affiliateLink`, `summary`

## 🎯 Como Funciona

### Identificação de Reviews

O sistema identifica um arquivo como review se:
1. Está na pasta `/posts`
2. Tem extensão `.md`
3. O frontmatter contém `tags` com `"reviews"` ou `"review"` (case-insensitive)

### Rotas Criadas

- **`/reviews`** - Listagem de todos os reviews
- **`/reviews/[slug]`** - Review individual (ex: `/reviews/ikaria-lean-belly-juice-review-2025`)

### Componentes Disponíveis

- **`<StarRating rating={4.5} />`** - Exibe rating com estrelas
- **`<ReviewCard review={reviewMeta} />`** - Card para listagem
- **`<ReviewSummaryBox review={reviewMeta} />`** - Box de resumo

## 📝 Como Adicionar um Novo Review

### Passo 1: Criar arquivo em `/posts`

Crie um arquivo `.md` em `/posts/nome-do-review.md`

### Passo 2: Adicionar frontmatter

```markdown
---
title: "Product Name Review 2025"
date: "2025-01-15"
tags: ["reviews", "supplements"]  # DEVE incluir "reviews"
productName: "Product Name"
rating: 4.5
affiliateLink: "https://hop.clickbank.net/?affiliate=SEU-ID&vendor=produto"
summary: "Resumo curto do review"
description: "Descrição completa para SEO"
featured: true
coverImage: "/images/covers/nome-do-review.jpg"
---

[Conteúdo do review em Markdown...]
```

### Passo 3: Build e Deploy

O sistema automaticamente:
- Detecta o review (pela tag `"reviews"`)
- Adiciona à listagem `/reviews`
- Cria rota `/reviews/[slug]`
- Processa links de afiliado (adiciona `rel="sponsored"`)

## 🔗 Vincular AffiliateLink no Review

### Método 1: No Frontmatter (Recomendado)

```yaml
affiliateLink: "https://hop.clickbank.net/?affiliate=SEU-ID&vendor=produto"
```

O link aparece automaticamente no `ReviewSummaryBox` como botão "Visit Official Website".

### Método 2: No Conteúdo Markdown

```markdown
👉 [Check Official Website](https://hop.clickbank.net/?affiliate=SEU-ID&vendor=produto)
```

O sistema automaticamente adiciona `rel="sponsored"` para links de afiliado detectados.

## 📊 Reviews Existentes

Atualmente, o sistema detecta **3 reviews**:

1. **Ikaria Lean Belly Juice Review 2025**
   - Slug: `ikaria-lean-belly-juice-review-2025`
   - Rating: 4.5
   - Product: Ikaria Lean Belly Juice

2. **Ikaria vs LeanBiome Comparison 2025**
   - Slug: `ikaria-vs-leanbiome-comparison-2025`
   - Rating: 4.0
   - Product: Ikaria vs LeanBiome

3. **Best Natural Fat Loss Supplements 2025**
   - Slug: `best-natural-fat-loss-supplements-2025`
   - Rating: null (overview, não review específico)

## 🎨 Estilo e UX

- Mantém o estilo atual do site (cores emerald, tipografia Inter)
- Layout clean e profissional
- Responsivo (mobile e desktop)
- Reaproveita componentes existentes (`Layout`, `Header`, `Footer`)

## ✅ Funcionalidades Implementadas

- ✅ Listagem dinâmica de reviews em `/reviews`
- ✅ Página individual `/reviews/[slug]`
- ✅ Componente de rating com estrelas
- ✅ Card de review para listagem
- ✅ Box de resumo no topo do review
- ✅ SEO completo (JSON-LD Schema.org Review)
- ✅ Links de afiliado processados automaticamente
- ✅ Sitemap atualizado com reviews
- ✅ Estado vazio quando não há reviews
- ✅ Compatível com sistema de posts existente

## 📚 Documentação

- **`REVIEWS_FRONTMATTER_GUIDE.md`** - Guia completo de frontmatter
- **`GUIA_LINKS_AFILIADO.md`** - Guia de links de afiliado

## 🚀 Próximos Passos

1. Substituir `SEU-HOPLINK-AQUI` pelos HopLinks reais do ClickBank
2. Adicionar mais reviews seguindo o padrão documentado
3. Testar localmente (`npm run dev`)
4. Deploy e verificar funcionamento

## ⚠️ Notas Importantes

- **NÃO quebra** o sistema de posts existente
- Reviews e posts podem coexistir na mesma pasta `/posts`
- Sistema identifica automaticamente pelo frontmatter `tags`
- Campos opcionais (`productName`, `rating`, `affiliateLink`) podem ser `null`

