# Configuração do Google AdSense

## Passo 1: Obter seu Publisher ID

1. Acesse https://www.google.com/adsense
2. Faça login e obtenha seu **Publisher ID** (formato: `ca-pub-XXXXXXXXXXXXXXXX`)

## Passo 2: Configurar o componente GoogleAdSense

1. Abra `components/GoogleAdSense.tsx`
2. Substitua `ca-pub-XXXXXXXXXXXXXXXX` pelo seu Publisher ID real
3. Salve o arquivo

## Passo 3: Criar unidades de anúncio no AdSense

No painel do AdSense, crie as seguintes unidades de anúncio e anote os **Ad Slot IDs**:

- Sidebar Top
- Sidebar Middle  
- Sidebar Bottom
- Content Top (após o header do post)
- Content Bottom (antes do footer do post)

## Passo 4: Atualizar os slots

1. Abra `lib/affiliateLinks.ts`
2. Substitua os valores em `adSenseSlots` pelos seus Ad Slot IDs reais

## Passo 5: Adicionar script no _app.tsx

O componente `GoogleAdSense` já inclui o script necessário. Você só precisa substituir os placeholders pelos seus IDs reais.

## Passo 6: Substituir AdBlock por GoogleAdSense

Depois de configurar, você pode substituir os componentes `AdBlock` por `GoogleAdSense`:

```tsx
// Exemplo em pages/blog/[slug].tsx
import GoogleAdSense from "../../components/GoogleAdSense";

// Substitua:
<AdBlock slot="top" />

// Por:
<GoogleAdSense adSlot={adSenseSlots.contentTop} />
```

## Locais dos anúncios configurados:

1. **Sidebar Top** - `components/Sidebar.tsx`
2. **Sidebar Middle** - `components/Sidebar.tsx`
3. **Sidebar Bottom** - `components/Sidebar.tsx`
4. **Content Top** - `pages/blog/[slug].tsx` (após o header)
5. **Content Bottom** - `pages/blog/[slug].tsx` (antes do footer)

## Regras importantes:

- ✅ Máximo de 3 anúncios por página (já configurado)
- ✅ Espaçamento mínimo de 300px entre anúncios (já configurado)
- ✅ Não colocar anúncios muito próximos de CTAs de afiliado
- ✅ Usar `rel="sponsored"` em links de afiliado (já configurado)

