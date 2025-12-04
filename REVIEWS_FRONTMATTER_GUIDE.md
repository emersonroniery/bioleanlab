# Guia de Frontmatter para Reviews

## 📋 Formato Padrão

Todos os reviews devem estar em arquivos `.md` na pasta `/posts` e incluir a tag `"reviews"` ou `"review"` no frontmatter.

## ✅ Frontmatter Obrigatório

```yaml
---
title: "Nome do Review (ex: Product Name Review 2025)"
date: "2025-01-15"  # Formato YYYY-MM-DD
tags: ["reviews", "supplements", "weight loss"]  # DEVE incluir "reviews" ou "review"
---
```

## 🎯 Frontmatter Opcional (Recomendado)

```yaml
---
title: "SleepLean Review 2025 — Does It Really Work?"
date: "2025-02-10"
tags: ["reviews", "weight loss", "supplement"]

# Campos específicos de review
productName: "SleepLean"                    # Nome do produto sendo revisado
rating: 4.5                                 # Rating de 0 a 5 (pode ser decimal)
affiliateLink: "https://hop.clickbank.net/?affiliate=SEU-ID&vendor=produto"  # Link de afiliado
summary: "Uma análise crítica e baseada em evidências sobre o suplemento SleepLean para perda de peso."  # Resumo curto

# Campos compartilhados com posts
description: "Descrição completa para SEO e meta tags"
featured: true                              # Se deve aparecer em destaque
coverImage: "/images/covers/sleeplean-review.jpg"  # Imagem de capa (opcional)
---
```

## 📝 Exemplo Completo

```markdown
---
title: "Ikaria Lean Belly Juice Review 2025: Ingredients, Pros, Cons, and What to Expect"
description: "A science-informed, honest review of Ikaria Lean Belly Juice in 2025. Benefits, ingredients, pros, cons, who it's for, and whether it's worth it."
date: "2025-01-08"
tags: ["reviews", "supplements", "weight loss", "metabolism"]
productName: "Ikaria Lean Belly Juice"
rating: 4.5
affiliateLink: "https://hop.clickbank.net/?affiliate=SEU-ID&vendor=ikaria&tid=review-page"
summary: "A comprehensive review of Ikaria Lean Belly Juice, analyzing its ingredients, effectiveness, and value for money."
featured: true
coverImage: "/images/covers/ikaria-review.jpg"
---

[Conteúdo do review em Markdown...]
```

## 🔍 Como o Sistema Identifica Reviews

O sistema identifica um arquivo como review se:

1. Está na pasta `/posts`
2. Tem extensão `.md`
3. O frontmatter contém `tags` com `"reviews"` ou `"review"` (case-insensitive)

**Exemplo válido**:
```yaml
tags: ["reviews", "supplements"]  # ✅ Válido
tags: ["review", "weight loss"]   # ✅ Válido
tags: ["Review", "supplements"]    # ✅ Válido (case-insensitive)
```

**Exemplo inválido**:
```yaml
tags: ["supplements", "weight loss"]  # ❌ Não é review (falta "reviews"/"review")
```

## 📊 Campos Detalhados

### `title` (obrigatório)
- Título do review
- Aparece como H1 na página
- Usado em SEO e meta tags

### `date` (obrigatório)
- Data de publicação
- Formato: `YYYY-MM-DD`
- Usado para ordenação (mais recente primeiro)

### `tags` (obrigatório)
- Array de strings
- **DEVE incluir** `"reviews"` ou `"review"` para ser identificado como review
- Outras tags são opcionais (ex: `["reviews", "supplements", "weight loss"]`)

### `productName` (opcional, recomendado)
- Nome do produto sendo revisado
- Aparece em destaque no `ReviewSummaryBox`
- Usado no JSON-LD Schema.org

### `rating` (opcional)
- Rating numérico de 0 a 5
- Pode ser decimal (ex: `4.5`)
- Renderizado com componente `StarRating`
- Usado no JSON-LD Schema.org

### `affiliateLink` (opcional)
- Link de afiliado (ClickBank, etc.)
- Aparece como botão "Visit Official Website" no `ReviewSummaryBox`
- Automaticamente recebe `rel="sponsored"` via `processExternalLinks`

### `summary` (opcional)
- Resumo curto do review
- Usado na listagem (`ReviewCard`)
- Se não fornecido, é gerado automaticamente a partir do conteúdo

### `description` (opcional)
- Descrição completa para SEO
- Usado em meta tags e Open Graph
- Se não fornecido, usa `summary` como fallback

### `featured` (opcional)
- Boolean (`true`/`false`)
- Indica se o review deve aparecer em destaque
- Por enquanto não tem efeito visual específico, mas pode ser usado no futuro

### `coverImage` (opcional)
- Caminho para imagem de capa
- Formato: `"/images/covers/nome-do-arquivo.jpg"`
- Exibida no `ReviewCard` e na página individual

## 🚀 Como Adicionar um Novo Review

1. **Criar arquivo** em `/posts/nome-do-review.md`

2. **Adicionar frontmatter** seguindo o padrão acima

3. **Escrever conteúdo** em Markdown

4. **Garantir que tem tag `"reviews"`** no frontmatter

5. **Build e deploy** - o sistema automaticamente:
   - Detecta o review
   - Adiciona à listagem `/reviews`
   - Cria rota `/reviews/[slug]`
   - Processa links de afiliado automaticamente

## 📝 Exemplo Mínimo

```markdown
---
title: "Product X Review 2025"
date: "2025-01-15"
tags: ["reviews"]
---

Conteúdo do review aqui...
```

## 📝 Exemplo Completo com Todos os Campos

```markdown
---
title: "SleepLean Review 2025 — Does It Really Work?"
description: "A comprehensive, science-based review of SleepLean supplement. We analyze ingredients, effectiveness, safety, and value for money."
date: "2025-02-10"
tags: ["reviews", "weight loss", "supplement", "sleep"]
productName: "SleepLean"
rating: 4.0
affiliateLink: "https://hop.clickbank.net/?affiliate=SEU-ID&vendor=sleeplean&tid=review"
summary: "SleepLean combines natural ingredients to support weight loss through improved sleep quality. Here's what the science says."
featured: true
coverImage: "/images/covers/sleeplean-review.jpg"
---

[Conteúdo completo do review em Markdown...]
```

## ✅ Checklist para Novo Review

- [ ] Arquivo criado em `/posts/nome-do-review.md`
- [ ] Frontmatter completo com `title`, `date`, `tags`
- [ ] Tag `"reviews"` ou `"review"` incluída em `tags`
- [ ] `productName` definido (recomendado)
- [ ] `rating` definido se aplicável (recomendado)
- [ ] `affiliateLink` adicionado se houver (recomendado)
- [ ] `summary` ou `description` preenchido (recomendado)
- [ ] Conteúdo escrito em Markdown
- [ ] Build testado localmente (`npm run build`)
- [ ] Verificado que aparece em `/reviews`

## 🔗 Links Relacionados

- [Guia de Links de Afiliado](./GUIA_LINKS_AFILIADO.md)
- [Reviews Policy](/reviews-policy)

