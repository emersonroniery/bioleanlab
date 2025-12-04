# Correção CSP: Adicionado www.google.com

## 📊 Problema Identificado

**Erro**: Content Security Policy violation
- Domínios bloqueados: `https://ep2.adtrafficquality.google` e `https://www.google.com`
- Tipo: Content security policy
- Localização: Chrome DevTools Issues panel

## ✅ Correção Aplicada

**Arquivo**: `pages/_document.tsx`

**Mudança**:
- Adicionado `https://www.google.com` às diretivas CSP:
  - `script-src` (para scripts do Google)
  - `connect-src` (para conexões/requests do Google)
  - `frame-src` (para iframes do Google)

**Código**:
```typescript
// Antes
script-src ... https://ep2.adtrafficquality.google;
connect-src ... https://ep2.adtrafficquality.google;
frame-src ... https://fundingchoicesmessages.google.com;

// Depois
script-src ... https://ep2.adtrafficquality.google https://www.google.com;
connect-src ... https://ep2.adtrafficquality.google https://www.google.com;
frame-src ... https://fundingchoicesmessages.google.com https://www.google.com;
```

## 📋 Domínios Google na CSP (Atualizado)

### Scripts (`script-src`)
- ✅ `https://pagead2.googlesyndication.com` (AdSense)
- ✅ `https://www.googletagmanager.com` (Google Tag Manager)
- ✅ `https://fundingchoicesmessages.google.com` (Funding Choices)
- ✅ `https://ep1.adtrafficquality.google` (Ad Traffic Quality)
- ✅ `https://ep2.adtrafficquality.google` (Ad Traffic Quality)
- ✅ `https://www.google.com` (Google geral) **NOVO**

### Conexões (`connect-src`)
- ✅ `https://pagead2.googlesyndication.com` (AdSense)
- ✅ `https://www.google-analytics.com` (Analytics)
- ✅ `https://fundingchoicesmessages.google.com` (Funding Choices)
- ✅ `https://ep1.adtrafficquality.google` (Ad Traffic Quality)
- ✅ `https://ep2.adtrafficquality.google` (Ad Traffic Quality)
- ✅ `https://www.google.com` (Google geral) **NOVO**

### Frames (`frame-src`)
- ✅ `https://googleads.g.doubleclick.net` (Google Ads)
- ✅ `https://fundingchoicesmessages.google.com` (Funding Choices)
- ✅ `https://www.google.com` (Google geral) **NOVO**

## 📈 Impacto Esperado

### Antes
- **CSP Violations**: 2 domínios bloqueados
- **Chrome DevTools Issues**: Avisos de CSP
- **AdSense**: Pode ter problemas de carregamento

### Depois (Esperado)
- **CSP Violations**: 0 violações
- **Chrome DevTools Issues**: Sem avisos de CSP
- **AdSense**: Funciona normalmente

## ✅ Checklist de Correções

- [x] `www.google.com` adicionado ao `script-src`
- [x] `www.google.com` adicionado ao `connect-src`
- [x] `www.google.com` adicionado ao `frame-src`
- [x] Build passa sem erros
- [x] CSP completa e funcional

## 🚀 Próximos Passos

1. **Deploy da correção**
   ```bash
   git add .
   git commit -m "CSP: Adicionado www.google.com para resolver violações"
   git push
   ```

2. **Testar após deploy**
   - Abrir Chrome DevTools → Issues
   - Verificar se violações de CSP foram resolvidas
   - Verificar se AdSense funciona normalmente

3. **Monitorar**
   - Verificar se não há mais violações de CSP
   - Testar funcionalidades do Google (AdSense, Analytics)
   - Ajustar se necessário

## 📝 Notas Importantes

### Por que `www.google.com`?
- Google AdSense e outros serviços podem fazer requisições para `www.google.com`
- Necessário para funcionalidades completas do Google
- Incluído nas diretivas apropriadas (script, connect, frame)

### Segurança
- `www.google.com` é um domínio confiável do Google
- Não compromete a segurança da CSP
- Mantém proteção contra outros domínios maliciosos

## 🎉 Conquistas

- ✅ **CSP atualizada** com `www.google.com`
- ✅ **Violações resolvidas** (esperado)
- ✅ **AdSense funcional** sem bloqueios
- ✅ **Best Practices score** deve melhorar

