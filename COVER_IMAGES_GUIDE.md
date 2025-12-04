# Guia para Adicionar Imagens de Capa nos Posts

## Status Atual

### Posts com `coverImage` configurado:
- ✅ `ikaria-lean-belly-juice-review-2025.md` → `/images/covers/ikaria-review.jpg`
- ✅ `ikaria-vs-leanbiome-comparison-2025.md` → `/images/covers/ikaria-vs-leanbiome.jpg`

### Posts sem `coverImage` (precisam de imagens):
- ⚠️ `best-natural-fat-loss-supplements-2025.md`
- ⚠️ `evening-habits-weight-management.md`
- ⚠️ `high-protein-diet-beginners-guide.md`
- ⚠️ `how-to-lose-belly-fat-after-30.md`
- ⚠️ `is-metabolic-slowdown-real.md`
- ⚠️ `reduce-cravings-without-restrictive-diets.md`
- ⚠️ `top-10-metabolism-boosting-foods.md`
- ⚠️ `why-you-cant-lose-weight-deficit.md`

## Especificações Técnicas

- **Dimensões**: 1200x630 pixels (proporção 1.91:1) ou 1280x720 (16:9)
- **Formato**: JPG ou PNG
- **Tamanho**: < 200KB (otimizado)
- **Localização**: `/public/images/covers/[nome-do-post].jpg`

## Como Adicionar Imagem de Capa

### Passo 1: Criar/Obter a Imagem

Opções:
1. **Gerar com IA**: Use DALL-E, Midjourney ou Stable Diffusion
2. **Criar no Canva/Figma**: Template 1200x630
3. **Contratar designer**: Fiverr, 99designs

### Passo 2: Otimizar a Imagem

Use ferramentas online:
- [TinyPNG](https://tinypng.com/) - Comprime sem perder qualidade
- [Squoosh](https://squoosh.app/) - Otimização avançada
- [ImageOptim](https://imageoptim.com/) - Desktop app

### Passo 3: Salvar no Diretório Correto

```
public/
  images/
    covers/
      nome-do-post.jpg
```

### Passo 4: Adicionar no Frontmatter

Edite o arquivo `.md` do post e adicione `coverImage`:

```yaml
---
title: "Título do Post"
description: "Descrição do post"
date: "2025-01-08"
tags: ["tag1", "tag2"]
featured: false
coverImage: "/images/covers/nome-do-post.jpg"  # ← Adicione esta linha
---
```

## Exemplos de Nomes de Arquivo

| Post | Nome do Arquivo |
|------|----------------|
| `best-natural-fat-loss-supplements-2025.md` | `best-fat-loss-supplements.jpg` |
| `evening-habits-weight-management.md` | `evening-habits.jpg` |
| `high-protein-diet-beginners-guide.md` | `high-protein-diet.jpg` |
| `is-metabolic-slowdown-real.md` | `metabolic-slowdown.jpg` |
| `top-10-metabolism-boosting-foods.md` | `metabolism-foods.jpg` |

## Prompts para IA (Gerar Imagens)

### Exemplo 1: Best Natural Fat Loss Supplements
```
Create a professional blog cover image (1200x630px) showing natural supplements 
for fat loss. Clean, modern design with supplement bottles, green leaves, 
scientific elements. Background: light gray. Text overlay: "Best Natural 
Fat Loss Supplements 2025". Professional, trustworthy aesthetic.
```

### Exemplo 2: Evening Habits Weight Management
```
Create a professional blog cover image (1200x630px) for evening habits that 
support weight management. Show peaceful evening scene, healthy habits, 
relaxation. Clean, modern design. Background: warm tones. Text overlay: 
"Evening Habits for Better Weight Management". Calming, professional aesthetic.
```

### Exemplo 3: High Protein Diet Guide
```
Create a professional blog cover image (1200x630px) for high protein diet 
guide. Show protein-rich foods (chicken, eggs, fish, legumes). Clean, modern 
design. Background: light gray. Text overlay: "High-Protein Diet: Complete 
Beginner's Guide". Professional, appetizing aesthetic.
```

### Exemplo 4: Metabolic Slowdown
```
Create a professional blog cover image (1200x630px) about metabolic slowdown. 
Show scientific/medical elements, metabolism concept. Clean, modern design. 
Background: light gray with emerald green accents. Text overlay: "Is Metabolic 
Slowdown Real? Science Explained". Professional, scientific aesthetic.
```

## Checklist por Post

Para cada post sem `coverImage`:

- [ ] Criar/obter imagem (1200x630px)
- [ ] Otimizar imagem (< 200KB)
- [ ] Salvar em `/public/images/covers/`
- [ ] Adicionar `coverImage` no frontmatter
- [ ] Testar visualização no site
- [ ] Verificar se aparece no PostCard
- [ ] Verificar se aparece no Open Graph

## Testando

Após adicionar `coverImage`:

1. **Build local**:
   ```bash
   npm run build
   npm run start
   ```

2. **Verificar PostCard**: A imagem deve aparecer no card do post

3. **Verificar Post Individual**: A imagem deve aparecer no topo do artigo (se implementado)

4. **Verificar Open Graph**: Use [Facebook Debugger](https://developers.facebook.com/tools/debug/) para verificar se a imagem aparece ao compartilhar

## Estrutura de Diretórios

```
bioleanlab/
  public/
    images/
      covers/
        ikaria-review.jpg
        ikaria-vs-leanbiome.jpg
        best-fat-loss-supplements.jpg  ← Adicionar
        evening-habits.jpg             ← Adicionar
        high-protein-diet.jpg          ← Adicionar
        metabolic-slowdown.jpg         ← Adicionar
        ...
```

## Próximos Passos

1. ✅ Criar imagens para os 8 posts restantes
2. ✅ Otimizar todas as imagens
3. ✅ Adicionar `coverImage` no frontmatter de cada post
4. ✅ Testar visualização
5. ✅ Commit e push

## Nota Importante

As imagens de capa melhoram:
- **Engajamento**: Posts com imagens têm mais cliques
- **SEO**: Open Graph images melhoram compartilhamento
- **UX**: Visual mais profissional e confiável
- **Performance**: Imagens otimizadas não afetam performance

