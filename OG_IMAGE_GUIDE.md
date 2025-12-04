# Guia para Criar Imagem OG (Open Graph)

## Especificações Técnicas

- **Dimensões**: 1200x630 pixels (proporção 1.91:1)
- **Formato**: JPG ou PNG
- **Tamanho máximo**: 8MB (recomendado: < 200KB)
- **Localização**: `/public/og-image.jpg`

## Conteúdo Recomendado

A imagem OG deve incluir:

1. **Logo/Brand**: "BioLeanLab" (com "Lab" em verde/emerald)
2. **Tagline**: "Science-Based Weight Loss & Supplements"
3. **Visual**: Design limpo, profissional, relacionado a saúde/ciência
4. **Cores**: 
   - Background: `#f8fafc` (slate-50)
   - Texto principal: `#0f172a` (slate-900)
   - Destaque: `#10b981` (emerald-600)

## Opções para Criar

### Opção 1: Usar Ferramentas Online
- **Canva**: Template "Open Graph Image" (1200x630)
- **Figma**: Criar design customizado
- **Adobe Express**: Template gratuito

### Opção 2: Usar IA (Recomendado)
- **DALL-E**: "Professional blog header image for BioLeanLab, science-based weight loss blog, clean modern design, 1200x630"
- **Midjourney**: Similar prompt
- **Stable Diffusion**: Similar prompt

### Opção 3: Contratar Designer
- Fiverr
- 99designs
- Upwork

## Template SVG Temporário

Já existe um arquivo `/public/og-image.svg` como placeholder temporário.

Para usar como imagem OG:
1. Converta o SVG para JPG/PNG (usando ferramentas online ou ImageMagick)
2. Ou renomeie para `og-image.jpg` após conversão

## Como Testar

1. Após criar a imagem, faça upload para `/public/og-image.jpg`
2. Teste usando:
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Exemplo de Prompt para IA

```
Create a professional Open Graph image (1200x630px) for BioLeanLab, 
a science-based weight loss and supplement blog. 

Design elements:
- Clean, modern, minimalist design
- Background: light gray (#f8fafc)
- Logo text: "BioLeanLab" with "Lab" in emerald green (#10b981)
- Tagline: "Science-Based Weight Loss & Supplements"
- Subtle scientific/health-related visual elements
- Professional typography
- High contrast for readability
```

## Após Criar

1. Salve como `og-image.jpg` em `/public/`
2. Verifique o tamanho do arquivo (< 200KB ideal)
3. Teste em redes sociais
4. Commit e push para produção

