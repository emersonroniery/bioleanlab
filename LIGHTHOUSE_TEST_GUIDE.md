# Guia de Testes Lighthouse

## Pré-requisitos

1. Site deployado no Vercel (ou outro ambiente de produção)
2. URL pública acessível
3. Chrome/Edge instalado

## Método 1: Lighthouse no Chrome DevTools (Recomendado)

### Passos:

1. **Abrir o site em produção**
   ```
   https://bioleanlab.com
   ```

2. **Abrir DevTools**
   - Pressione `F12` ou `Ctrl+Shift+I` (Windows/Linux)
   - Ou `Cmd+Option+I` (Mac)

3. **Acessar Lighthouse**
   - Clique na aba "Lighthouse"
   - Se não aparecer, clique em `>>` e selecione "Lighthouse"

4. **Configurar Teste**
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
   - Selecione "Mobile" ou "Desktop"
   - Clique em "Analyze page load"

5. **Aguardar Resultados**
   - O Lighthouse executará os testes
   - Resultados aparecerão em ~30-60 segundos

6. **Verificar Scores**
   - **Performance**: Deve ser 90-100
   - **Accessibility**: Deve ser 90-100
   - **Best Practices**: Deve ser 90-100
   - **SEO**: Deve ser 90-100

## Método 2: Lighthouse CI (Automatizado)

### Instalar Lighthouse CI CLI

```bash
npm install -g @lhci/cli
```

### Executar Teste Local

```bash
lhci autorun --collect.url=https://bioleanlab.com --collect.numberOfRuns=3
```

### Configurar no GitHub Actions (Opcional)

Crie `.github/workflows/lighthouse.yml`:

```yaml
name: Lighthouse CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install -g @lhci/cli
      - run: lhci autorun
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
```

## Método 3: PageSpeed Insights (Online)

1. Acesse: https://pagespeed.web.dev/
2. Cole a URL: `https://bioleanlab.com`
3. Clique em "Analyze"
4. Revise os resultados

## Páginas para Testar

Teste estas páginas principais:

- [ ] Home (`/`)
- [ ] Blog Listing (`/blog`)
- [ ] Post Individual (`/blog/[slug]`)
- [ ] About (`/about`)
- [ ] Reviews (`/reviews`)
- [ ] Contact (`/contact`)

## Checklist de Otimizações

### Performance
- [ ] Imagens otimizadas (WebP/AVIF)
- [ ] Lazy loading em imagens abaixo da dobra
- [ ] Fontes com `font-display: swap`
- [ ] JavaScript não bloqueante
- [ ] CSS crítico inline (se necessário)

### Accessibility
- [ ] Todas imagens com `alt`
- [ ] Contraste de cores adequado (WCAG AA)
- [ ] Navegação por teclado funcional
- [ ] Headings hierárquicos (h1 → h2 → h3)
- [ ] Labels em formulários

### Best Practices
- [ ] HTTPS habilitado
- [ ] Links externos com `rel="noopener noreferrer"`
- [ ] Console sem erros
- [ ] Imagens com dimensões explícitas

### SEO
- [ ] Meta tags completas (title, description)
- [ ] Open Graph configurado
- [ ] Twitter Cards configurado
- [ ] JSON-LD implementado
- [ ] Sitemap.xml acessível
- [ ] Robots.txt configurado
- [ ] Canonical URLs

## Problemas Comuns e Soluções

### Performance < 90

**Problema**: Imagens grandes
- **Solução**: Otimizar imagens, usar formato WebP

**Problema**: JavaScript bloqueante
- **Solução**: Usar `async` ou `defer` em scripts

**Problema**: Fontes não otimizadas
- **Solução**: Adicionar `font-display: swap`

### Accessibility < 90

**Problema**: Contraste de cores baixo
- **Solução**: Ajustar cores para WCAG AA (4.5:1)

**Problema**: Imagens sem alt
- **Solução**: Adicionar `alt` descritivo

### SEO < 90

**Problema**: Meta tags faltando
- **Solução**: Verificar todas as páginas têm title e description

**Problema**: Sitemap não encontrado
- **Solução**: Verificar `/sitemap.xml` está acessível

## Script de Teste Rápido

Crie `scripts/test-lighthouse.sh`:

```bash
#!/bin/bash

URL="https://bioleanlab.com"

echo "Testing Lighthouse for: $URL"
echo ""

lhci autorun \
  --collect.url=$URL \
  --collect.numberOfRuns=3 \
  --upload.target=temporary-public-storage \
  --collect.settings.chromeFlags="--no-sandbox"
```

Execute:
```bash
chmod +x scripts/test-lighthouse.sh
./scripts/test-lighthouse.sh
```

## Resultados Esperados

Após todas as otimizações:

- ✅ **Performance**: 95-100
- ✅ **Accessibility**: 95-100
- ✅ **Best Practices**: 95-100
- ✅ **SEO**: 95-100

## Próximos Passos

1. Execute os testes após cada deploy
2. Monitore scores ao longo do tempo
3. Corrija problemas identificados
4. Documente melhorias contínuas

