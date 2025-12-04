# Plano Operacional - BioLeanLab

## Status das Etapas

### ✅ ETAPA 1: Mais 5 artigos generalistas (COMPLETA)
- **Status**: ✅ Completo
- **Resultado**: 8 artigos no total (3 anteriores + 5 novos)
- **Arquivos criados**:
  - `is-metabolic-slowdown-real.md`
  - `high-protein-diet-beginners-guide.md`
  - `evening-habits-weight-management.md`
  - `why-you-cant-lose-weight-deficit.md`
  - `reduce-cravings-without-restrictive-diets.md`

### ⏳ ETAPA 2: 2 artigos de review para ClickBank (PENDENTE)
- **Status**: Aguardando conteúdo
- **Objetivo**: Criar reviews focados em conversão para afiliados
- **Estrutura sugerida**:
  - H1: Product Name Review 2025: Is It Worth It?
  - Introdução honesta
  - Seções: O que é, ingredientes, como usar, benefícios, pontos negativos, contraindicações
  - Veredito + CTA com HopLink
- **Slugs sugeridos**:
  - `ikaria-lean-belly-juice-review-2025.md`
  - `ikaria-vs-leanbiome-comparison.md`

### ✅ ETAPA 3: Imagens de capa (ESTRUTURA PRONTA)
- **Status**: Código implementado, pasta criada
- **Estrutura**: `public/images/covers/`
- **Como usar**:
  1. Gerar imagens (1200x630 ou 1280x720) com IA (Leonardo, Midjourney)
  2. Salvar em `public/images/covers/nome-do-artigo.jpg`
  3. Adicionar no frontmatter: `coverImage: "/images/covers/nome-do-artigo.jpg"`
- **Código**: Já implementado em `PostCard.tsx` e `lib/posts.ts`

### ✅ ETAPA 4: Links internos entre artigos (COMPLETA)
- **Status**: ✅ Completo
- **Implementação**: 2-3 links internos por artigo + seção "You may also like"
- **Clusters criados**:
  - **Metabolism**: is-metabolic-slowdown-real, top-10-metabolism-boosting-foods, evening-habits-weight-management, why-you-cant-lose-weight-deficit
  - **Protein & Diet**: high-protein-diet-beginners-guide, reduce-cravings-without-restrictive-diets
  - **Supplements**: best-natural-fat-loss-supplements-2025
  - **Belly Fat**: how-to-lose-belly-fat-after-30

## Próximos Passos

1. **Criar imagens de capa** (ETAPA 3)
   - Usar prompts tipo: "Minimalist illustration of [tema], health science, clean white background, editorial style, flat design"
   - Tamanho: 1200x630 ou 1280x720
   - Adicionar `coverImage` no frontmatter de cada post

2. **Escrever 2 reviews ClickBank** (ETAPA 2)
   - Escolher produtos no marketplace ClickBank
   - Seguir estrutura definida
   - Inserir HopLinks nos CTAs

3. **Otimização contínua**
   - Monitorar métricas no Google Search Console
   - Ajustar links internos conforme necessário
   - Adicionar mais artigos conforme crescimento

## Estrutura de Arquivos

```
bioleanlab/
├── posts/                    # Artigos Markdown
│   ├── *.md                 # 8 artigos atuais
│   └── [reviews].md         # 2 reviews (pendentes)
├── public/
│   └── images/
│       └── covers/          # Imagens de capa (criada)
├── lib/
│   └── posts.ts             # ✅ Suporta coverImage
├── components/
│   └── PostCard.tsx         # ✅ Renderiza coverImage
└── PLANO_OPERACIONAL.md     # Este arquivo
```

## Comandos Úteis

```bash
# Build local
npm run build

# Commit e push
git add .
git commit -m "Descrição das mudanças"
git push

# Deploy automático via Vercel (após push)
```

## Notas Importantes

- Todos os links internos usam caminhos absolutos (`/blog/slug`)
- Links são em inglês e naturais (não "clique aqui")
- Seção "You may also like" adicionada ao final de cada artigo
- Código já suporta `coverImage` - só falta criar/adicionar as imagens


