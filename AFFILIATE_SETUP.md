# Configuração de Links de Afiliado (ClickBank)

## Passo 1: Obter seus links de afiliado

1. Acesse sua conta no ClickBank
2. Vá em **Account** → **My Account** → **My HopLinks**
3. Copie os links de afiliado dos produtos que deseja promover

## Passo 2: Configurar links no arquivo de configuração

1. Abra `lib/affiliateLinks.ts`
2. Substitua `https://SEU-LINK-AFILIADO-CLICKBANK-AQUI` pelos seus links reais
3. Personalize nomes, descrições e CTAs conforme necessário

## Passo 3: Usar nos componentes

### Opção A: Usar o componente AffiliateCTA

```tsx
import AffiliateCTA from "../components/AffiliateCTA";

// Usando chave do produto (recomendado)
<AffiliateCTA productKey="metabolismSupplement" />

// Ou personalizado
<AffiliateCTA 
  productName="Meu Produto"
  description="Descrição personalizada"
  affiliateUrl="https://meu-link-clickbank.com"
  ctaText="Comprar Agora"
/>
```

### Opção B: Usar na Sidebar

Os produtos já estão configurados na sidebar automaticamente usando `lib/affiliateLinks.ts`.

## Passo 4: Adicionar CTAs nos posts

Você pode adicionar CTAs de afiliado diretamente nos seus posts Markdown usando HTML:

```html
<!-- Adicione isso no seu arquivo .md -->
<div class="affiliate-cta-placeholder">
  <!-- O componente será renderizado aqui -->
</div>
```

Ou adicione programaticamente no componente do post.

## Exemplo de uso completo:

```tsx
// Em pages/blog/[slug].tsx
import AffiliateCTA from "../../components/AffiliateCTA";

// No meio do conteúdo
<AffiliateCTA 
  productKey="metabolismSupplement"
/>
```

## Boas práticas:

- ✅ Sempre use `rel="sponsored"` em links de afiliado (já configurado)
- ✅ Inclua disclaimer de afiliado (já incluído nos componentes)
- ✅ Coloque CTAs de forma natural no conteúdo
- ✅ Não exagere - máximo de 2-3 CTAs por post
- ✅ Teste diferentes posições para ver o que converte melhor

## Estrutura atual:

- **Sidebar**: Produtos recomendados sempre visíveis
- **Posts**: CTAs contextuais dentro do conteúdo
- **Footer**: Disclaimer de afiliados

