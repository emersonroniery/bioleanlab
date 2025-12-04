# Configuração de Variáveis de Ambiente no Vercel

## Variável Necessária

```
NEXT_PUBLIC_SITE_URL=https://bioleanlab.com
```

## Como Configurar no Vercel

### Método 1: Via Dashboard (Recomendado)

1. **Acesse o Vercel Dashboard**
   - Vá para: https://vercel.com/dashboard
   - Faça login na sua conta

2. **Selecione o Projeto**
   - Clique no projeto "bioleanlab" (ou nome do seu projeto)

3. **Acesse Settings**
   - Clique na aba "Settings" no topo

4. **Vá para Environment Variables**
   - No menu lateral, clique em "Environment Variables"

5. **Adicione a Variável**
   - **Key**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://bioleanlab.com`
   - **Environment**: Selecione todas as opções:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
   - Clique em "Add"

6. **Redeploy**
   - Após adicionar, vá para a aba "Deployments"
   - Clique nos três pontos (...) do último deployment
   - Selecione "Redeploy"
   - Ou faça um novo commit/push para trigger automático

### Método 2: Via Vercel CLI

1. **Instalar Vercel CLI** (se ainda não tiver)
   ```bash
   npm i -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Adicionar Variável**
   ```bash
   vercel env add NEXT_PUBLIC_SITE_URL production
   ```
   - Quando solicitado, digite: `https://bioleanlab.com`

4. **Redeploy**
   ```bash
   vercel --prod
   ```

## Verificar Configuração

### 1. No Dashboard Vercel
- Settings → Environment Variables
- Deve aparecer `NEXT_PUBLIC_SITE_URL` com valor `https://bioleanlab.com`

### 2. No Código (Após Redeploy)
- A variável estará disponível em `process.env.NEXT_PUBLIC_SITE_URL`
- Usada em:
  - `lib/seo.ts` - Para gerar URLs canônicas e Open Graph
  - `pages/sitemap.xml.tsx` - Para gerar URLs do sitemap
  - Todas as páginas - Para meta tags e JSON-LD

### 3. Testar no Site
- Após redeploy, verifique:
  - Meta tags têm URLs corretas
  - Open Graph images têm URLs absolutas
  - Sitemap.xml tem URLs corretas
  - JSON-LD tem URLs corretas

## URLs por Ambiente

| Ambiente | URL |
|----------|-----|
| **Production** | `https://bioleanlab.com` |
| **Preview** | `https://bioleanlab-[hash].vercel.app` |
| **Development** | `http://localhost:3000` |

## Troubleshooting

### Problema: Variável não está sendo usada

**Solução**:
1. Verifique se o nome está correto: `NEXT_PUBLIC_SITE_URL` (case-sensitive)
2. Certifique-se de que redeploy foi feito após adicionar
3. Verifique se está selecionado para o ambiente correto (Production)

### Problema: URLs ainda usando localhost

**Solução**:
1. Limpe o cache do Next.js: `rm -rf .next`
2. Faça rebuild: `npm run build`
3. Redeploy no Vercel

### Problema: Variável não aparece no código

**Solução**:
- Variáveis `NEXT_PUBLIC_*` são expostas no cliente
- Verifique se está usando `process.env.NEXT_PUBLIC_SITE_URL` (não apenas `process.env.SITE_URL`)

## Arquivo .env.local (Desenvolvimento Local)

Para desenvolvimento local, crie `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**⚠️ Importante**: Não commite `.env.local` no Git (já está no `.gitignore`)

## Checklist

- [ ] Variável `NEXT_PUBLIC_SITE_URL` adicionada no Vercel
- [ ] Valor configurado: `https://bioleanlab.com`
- [ ] Ambiente selecionado: Production, Preview, Development
- [ ] Redeploy executado
- [ ] URLs verificadas no site em produção
- [ ] Meta tags verificadas (usando DevTools)
- [ ] Sitemap.xml verificado (`/sitemap.xml`)

## Próximos Passos

Após configurar:
1. ✅ Testar URLs em produção
2. ✅ Verificar Open Graph no Facebook Debugger
3. ✅ Verificar Twitter Cards
4. ✅ Verificar sitemap.xml
5. ✅ Monitorar logs do Vercel

