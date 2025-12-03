# Guia de Monetização - BioLeanLab

Este guia explica como configurar e usar AdSense e links de afiliado ClickBank no blog.

## 📋 Índice

1. [Configuração do Google AdSense](#google-adsense)
2. [Configuração de Links de Afiliado](#links-de-afiliado)
3. [Estrutura de Componentes](#componentes)
4. [Boas Práticas](#boas-práticas)

---

## 🎯 Google AdSense

### Configuração Rápida

1. **Obter Publisher ID**
   - Acesse https://www.google.com/adsense
   - Copie seu Publisher ID (formato: `ca-pub-XXXXXXXXXXXXXXXX`)

2. **Configurar no código**
   - Abra `components/GoogleAdSense.tsx`
   - Substitua `ca-pub-XXXXXXXXXXXXXXXX` pelo seu ID real

3. **Criar unidades de anúncio**
   - No painel do AdSense, crie 5 unidades de anúncio
   - Anote os Ad Slot IDs de cada uma

4. **Atualizar slots**
   - Abra `lib/affiliateLinks.ts`
   - Substitua os valores em `adSenseSlots` pelos seus IDs reais

5. **Substituir placeholders**
   - Substitua `<AdBlock />` por `<GoogleAdSense />` nos arquivos:
     - `pages/blog/[slug].tsx`
     - `components/Sidebar.tsx`

📖 **Guia completo**: Veja `ADSENSE_SETUP.md`

---

## 💰 Links de Afiliado (ClickBank)

### Configuração Rápida

1. **Obter links de afiliado**
   - Acesse sua conta ClickBank
   - Copie os links dos produtos que deseja promover

2. **Configurar no código**
   - Abra `lib/affiliateLinks.ts`
   - Substitua os URLs placeholder pelos seus links reais
   - Personalize nomes, descrições e CTAs

3. **Usar nos componentes**
   ```tsx
   // Opção 1: Usar chave do produto (recomendado)
   <AffiliateCTA productKey="metabolismSupplement" />
   
   // Opção 2: Personalizado
   <AffiliateCTA 
     productName="Meu Produto"
     affiliateUrl="https://meu-link.com"
   />
   ```

📖 **Guia completo**: Veja `AFFILIATE_SETUP.md`

---

## 🧩 Componentes Disponíveis

### GoogleAdSense
Componente para exibir anúncios do Google AdSense.

```tsx
import GoogleAdSense from "../components/GoogleAdSense";
import { adSenseSlots } from "../lib/affiliateLinks";

<GoogleAdSense adSlot={adSenseSlots.contentTop} />
```

### AffiliateCTA
Componente destacado para links de afiliado.

```tsx
import AffiliateCTA from "../components/AffiliateCTA";

<AffiliateCTA productKey="metabolismSupplement" />
```

### Sidebar
Sidebar com anúncios e produtos recomendados (já configurada).

### Disclaimer
Banner de disclaimer legal (já incluído nos posts).

---

## ✅ Boas Práticas

### AdSense
- ✅ Máximo de 3 anúncios por página (já configurado)
- ✅ Espaçamento mínimo de 300px entre anúncios
- ✅ Não colocar anúncios muito próximos de CTAs de afiliado
- ✅ Usar formato responsivo (`data-full-width-responsive="true"`)

### Links de Afiliado
- ✅ Sempre usar `rel="sponsored"` (já configurado)
- ✅ Incluir disclaimer de afiliado (já incluído)
- ✅ Máximo de 2-3 CTAs por post
- ✅ Colocar CTAs de forma natural no conteúdo
- ✅ Testar diferentes posições

### Legal
- ✅ Privacy Policy (`/privacy-policy`) ✅ Criada
- ✅ Terms of Use (`/terms-of-use`) ✅ Criada
- ✅ Contact (`/contact`) ✅ Criada
- ✅ Disclaimer nos posts ✅ Incluído
- ✅ Disclaimer no footer ✅ Incluído

---

## 📍 Locais dos Anúncios

### Sidebar (3 slots)
- Top: Após o header
- Middle: Entre produtos e newsletter
- Bottom: Final da sidebar

### Posts (2 slots)
- Top: Após o header do post
- Bottom: Antes do footer

---

## 🚀 Próximos Passos

1. ✅ Configurar Publisher ID do AdSense
2. ✅ Criar unidades de anúncio no AdSense
3. ✅ Atualizar Ad Slot IDs em `lib/affiliateLinks.ts`
4. ✅ Substituir `AdBlock` por `GoogleAdSense`
5. ✅ Adicionar seus links de afiliado em `lib/affiliateLinks.ts`
6. ✅ Testar em produção

---

## 📞 Suporte

Para dúvidas sobre:
- **AdSense**: Consulte `ADSENSE_SETUP.md`
- **Afiliados**: Consulte `AFFILIATE_SETUP.md`
- **Componentes**: Veja os comentários nos arquivos `.tsx`

