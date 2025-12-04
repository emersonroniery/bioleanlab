# Guia Completo: Como Adicionar Links de Afiliado nos Artigos

## 📋 Visão Geral

Este guia explica como adicionar links de afiliado (ClickBank, etc.) nos artigos Markdown do BioLeanLab.

## ✅ Funcionalidades Automáticas

O sistema **automaticamente**:
- ✅ Detecta links de afiliado (ClickBank, etc.)
- ✅ Adiciona `rel="sponsored"` (requerido pelo Google)
- ✅ Adiciona `rel="noopener noreferrer"` (segurança)
- ✅ Adiciona `target="_blank"` (abre em nova aba)

## 🔗 Como Adicionar Links de Afiliado

### Método 1: Link Direto no Markdown (Recomendado)

Simplesmente adicione o link diretamente no texto do artigo:

```markdown
👉 **Check price, discounts, and scientific references on the official website**  
https://hop.clickbank.net/?affiliate=SEU-ID&vendor=PRODUTO&tid=TRACKING
```

**Resultado HTML**:
```html
👉 <strong>Check price, discounts, and scientific references on the official website</strong><br>
<a href="https://hop.clickbank.net/?affiliate=SEU-ID&vendor=PRODUTO&tid=TRACKING" 
   rel="noopener noreferrer sponsored" 
   target="_blank">
   https://hop.clickbank.net/?affiliate=SEU-ID&vendor=PRODUTO&tid=TRACKING
</a>
```

### Método 2: Link com Texto Personalizado

Use a sintaxe Markdown padrão para criar links com texto personalizado:

```markdown
👉 [Check price and discounts on the official website](https://hop.clickbank.net/?affiliate=SEU-ID&vendor=PRODUTO&tid=TRACKING)
```

**Resultado HTML**:
```html
👉 <a href="https://hop.clickbank.net/?affiliate=SEU-ID&vendor=PRODUTO&tid=TRACKING" 
   rel="noopener noreferrer sponsored" 
   target="_blank">
   Check price and discounts on the official website
</a>
```

### Método 3: Link em Botão/CTA

Para criar um botão visualmente destacado:

```markdown
👉 **[Check Official Website →](https://hop.clickbank.net/?affiliate=SEU-ID&vendor=PRODUTO&tid=TRACKING)**
```

**Resultado**: Link em negrito que será estilizado pelo CSS do site.

## 📝 Exemplos Práticos

### Exemplo 1: Link Simples no Final do Artigo

```markdown
## Final Verdict

Ikaria Lean Belly Juice is **not** a miracle formula — but it is a **high-quality, well-designed supplement**.

👉 **Check price, discounts, and scientific references on the official website**  
https://hop.clickbank.net/?affiliate=SEU-ID&vendor=ikaria&tid=review-page
```

### Exemplo 2: Link Integrado no Texto

```markdown
## Should you use supplements?

Some people use natural supplements for appetite control or metabolic support. They are **not magic**, but certain formulas may help when combined with diet and exercise.

If you're curious, review the ingredient list of this natural metabolism-supporting supplement that has been trending in the US: 👉 **[See details and ingredients here](https://hop.clickbank.net/?affiliate=SEU-ID&vendor=produto&tid=article-link)**
```

### Exemplo 3: Múltiplos Links de Afiliado

```markdown
## Which One Should You Choose?

### Choose **Ikaria** if:
- You want metabolism + energy support
- You feel slow or sluggish
- You want antioxidant protection

👉 [Check Ikaria Official Website](https://hop.clickbank.net/?affiliate=SEU-ID&vendor=ikaria&tid=comparison)

### Choose **LeanBiome** if:
- Your main issue is bloating and cravings
- You suspect gut imbalance

👉 [Check LeanBiome Official Website](https://hop.clickbank.net/?affiliate=SEU-ID&vendor=leanbiome&tid=comparison)
```

## 🎯 Domínios de Afiliado Suportados

O sistema detecta automaticamente links de afiliado dos seguintes domínios:

- ✅ `clickbank.net`
- ✅ `hop.clickbank.net`
- ✅ `clkbank.com`
- ✅ `clkbk.com`
- ✅ `clkbank.net`

**Nota**: Se você usar outros domínios de afiliado, adicione-os em `lib/htmlUtils.ts` na lista `AFFILIATE_DOMAINS`.

## 🔒 Segurança e Compliance

### Atributos Automáticos Adicionados

Todos os links de afiliado recebem automaticamente:

1. **`rel="sponsored"`** - Indica ao Google que é um link de afiliado (requerido)
2. **`rel="noopener noreferrer"`** - Segurança (previne ataques)
3. **`target="_blank"`** - Abre em nova aba (melhor UX)

### Compliance com Google AdSense

- ✅ Links de afiliado têm `rel="sponsored"` (requerido)
- ✅ Disclosure de afiliado na página Reviews Policy
- ✅ Links não são enganosos ou spam

## 📋 Checklist para Adicionar Links

- [ ] Obter HopLink do ClickBank (ou outro afiliado)
- [ ] Adicionar link no artigo Markdown usando um dos métodos acima
- [ ] Verificar se o link funciona corretamente
- [ ] Testar se abre em nova aba
- [ ] Verificar se `rel="sponsored"` está presente (inspecionar HTML)

## 🛠️ Como Obter Seu HopLink do ClickBank

1. Acesse sua conta ClickBank
2. Vá em **Account Settings** → **My Site**
3. Clique em **Create HopLink**
4. Selecione o produto que deseja promover
5. Copie o HopLink gerado
6. Cole no artigo substituindo `SEU-HOPLINK-AQUI`

**Formato do HopLink**:
```
https://hop.clickbank.net/?affiliate=SEU-ID&vendor=PRODUTO&tid=TRACKING
```

## 📝 Substituindo Placeholders Existentes

Se você já tem artigos com `SEU-HOPLINK-AQUI`, simplesmente substitua:

**Antes**:
```markdown
👉 **Check price, discounts, and scientific references on the official website**  
https://SEU-HOPLINK-AQUI
```

**Depois**:
```markdown
👉 **Check price, discounts, and scientific references on the official website**  
https://hop.clickbank.net/?affiliate=SEU-ID&vendor=ikaria&tid=review-page
```

## 🎨 Estilização dos Links

Os links de afiliado são automaticamente estilizados pelo CSS do site:

- Cor padrão: `text-emerald-600` (verde)
- Hover: `text-emerald-700` (verde mais escuro)
- Sublinhado no hover
- Transição suave

Você pode personalizar em `styles/globals.css` se necessário.

## ⚠️ Boas Práticas

1. **Não exagere**: Use 1-3 links de afiliado por artigo
2. **Contexto relevante**: Coloque links onde faz sentido no conteúdo
3. **Texto claro**: Use texto descritivo, não apenas "clique aqui"
4. **Disclosure**: Mantenha a página Reviews Policy atualizada
5. **Teste**: Sempre teste os links antes de publicar

## 🚀 Próximos Passos

1. Obtenha seus HopLinks do ClickBank
2. Substitua os placeholders `SEU-HOPLINK-AQUI` nos artigos
3. Teste os links localmente (`npm run dev`)
4. Faça deploy e verifique se funcionam corretamente

## 📚 Recursos Adicionais

- [ClickBank Affiliate Guide](https://support.clickbank.com/hc/en-us/articles/115001250454-How-to-Create-a-HopLink)
- [Google AdSense Affiliate Links Policy](https://support.google.com/adsense/answer/1346295)
- [FTC Disclosure Guidelines](https://www.ftc.gov/tips-advice/business-center/guidance/ftcs-endorsement-guides-what-people-are-asking)

## ❓ FAQ

**P: Posso usar links de outros afiliados além do ClickBank?**  
R: Sim! Adicione o domínio em `lib/htmlUtils.ts` na lista `AFFILIATE_DOMAINS`.

**P: Preciso adicionar `rel="sponsored"` manualmente?**  
R: Não! O sistema adiciona automaticamente para links de afiliado detectados.

**P: Como sei se o link está funcionando corretamente?**  
R: Inspecione o HTML gerado (F12 → Elements) e verifique se tem `rel="sponsored"`.

**P: Posso usar links de afiliado em todos os artigos?**  
R: Sim, mas mantenha relevância e não exagere na quantidade.

