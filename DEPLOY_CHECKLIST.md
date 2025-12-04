# Checklist de Deploy - BioLeanLab

## ✅ Pré-Deploy

### 1. Variáveis de Ambiente
- [ ] Configurar `NEXT_PUBLIC_SITE_URL=https://bioleanlab.com` no Vercel
- [ ] Verificar que está configurado para Production, Preview e Development

### 2. Imagem OG
- [ ] Criar imagem OG (`/public/og-image.jpg` - 1200x630px)
- [ ] Ou usar placeholder SVG (`/public/og-image.svg`)
- [ ] Testar em [Facebook Debugger](https://developers.facebook.com/tools/debug/)

### 3. Build Local
- [ ] Executar `npm run build` localmente
- [ ] Verificar que não há erros
- [ ] Verificar que todas as páginas geram corretamente

### 4. Testes Locais
- [ ] Verificar todas as páginas principais
- [ ] Testar responsividade mobile
- [ ] Verificar links internos funcionando
- [ ] Verificar imagens carregando

## 🚀 Deploy

### 1. Commit e Push
```bash
git add .
git commit -m "Otimizações completas: Performance, SEO, Acessibilidade"
git push origin main
```

### 2. Monitorar Deploy no Vercel
- [ ] Acompanhar build no dashboard Vercel
- [ ] Verificar que build passa sem erros
- [ ] Aguardar deploy completar

### 3. Verificar em Produção
- [ ] Acessar `https://bioleanlab.com`
- [ ] Verificar que site carrega corretamente
- [ ] Testar navegação entre páginas

## 🧪 Pós-Deploy

### 1. Testes Lighthouse
- [ ] Executar Lighthouse no Chrome DevTools
- [ ] Verificar scores:
  - Performance: 90-100 ✅
  - Accessibility: 90-100 ✅
  - Best Practices: 90-100 ✅
  - SEO: 90-100 ✅

### 2. Verificar SEO
- [ ] Testar `/sitemap.xml` está acessível
- [ ] Testar `/robots.txt` está acessível
- [ ] Verificar meta tags com DevTools
- [ ] Testar Open Graph no [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Testar Twitter Cards no [Twitter Validator](https://cards-dev.twitter.com/validator)

### 3. Verificar Performance
- [ ] Testar velocidade de carregamento
- [ ] Verificar imagens otimizadas
- [ ] Verificar lazy loading funcionando
- [ ] Testar em diferentes dispositivos

### 4. Verificar Acessibilidade
- [ ] Testar navegação por teclado
- [ ] Verificar contraste de cores
- [ ] Verificar alt text em imagens
- [ ] Testar com leitor de tela (opcional)

## 📋 Páginas para Testar

Teste estas páginas após deploy:

- [ ] `/` - Home
- [ ] `/blog` - Blog listing
- [ ] `/blog/[slug]` - Post individual (testar vários)
- [ ] `/about` - About
- [ ] `/reviews` - Reviews
- [ ] `/reviews-policy` - Reviews Policy
- [ ] `/contact` - Contact
- [ ] `/privacy-policy` - Privacy Policy
- [ ] `/terms-of-use` - Terms of Use
- [ ] `/sitemap.xml` - Sitemap
- [ ] `/robots.txt` - Robots.txt

## 🔧 Problemas Comuns

### Build Falha
- Verificar logs no Vercel
- Verificar variáveis de ambiente
- Verificar dependências no `package.json`

### Imagens Não Carregam
- Verificar caminhos em `/public/images/`
- Verificar formato de arquivo (JPG/PNG)
- Verificar otimização de imagens

### SEO Não Funciona
- Verificar `NEXT_PUBLIC_SITE_URL` está configurado
- Verificar meta tags estão presentes
- Verificar sitemap.xml está acessível

### Performance Baixa
- Verificar imagens estão otimizadas
- Verificar lazy loading está ativo
- Verificar fontes estão com `font-display: swap`

## 📊 Métricas Esperadas

Após deploy e otimizações:

| Métrica | Esperado | Status |
|---------|----------|--------|
| Performance | 95-100 | ⏳ |
| Accessibility | 95-100 | ⏳ |
| Best Practices | 95-100 | ⏳ |
| SEO | 95-100 | ⏳ |
| First Contentful Paint | < 1.8s | ⏳ |
| Largest Contentful Paint | < 2.5s | ⏳ |
| Time to Interactive | < 3.8s | ⏳ |

## ✅ Próximos Passos Após Deploy

1. **Monitorar Analytics** (se configurado)
   - Acompanhar tráfego
   - Verificar páginas mais visitadas
   - Monitorar taxa de rejeição

2. **Adicionar Imagens de Capa**
   - Seguir `COVER_IMAGES_GUIDE.md`
   - Adicionar imagens para os 8 posts restantes

3. **Otimizações Contínuas**
   - Monitorar Lighthouse regularmente
   - Ajustar conforme necessário
   - Adicionar mais conteúdo

4. **Marketing**
   - Compartilhar nas redes sociais
   - Verificar Open Graph funcionando
   - Monitorar compartilhamentos

## 📝 Notas

- Todas as otimizações já foram aplicadas no código
- Basta fazer deploy e configurar variáveis de ambiente
- Imagens OG e de capa podem ser adicionadas gradualmente
- Lighthouse deve mostrar scores altos após deploy

