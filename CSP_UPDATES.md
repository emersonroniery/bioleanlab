# Atualizações da Content Security Policy (CSP)

## 🔧 Correções Aplicadas

### Problema 1: Google Funding Choices
**Erro**: `Refused to load the script 'https://fundingchoicesmessages.google.com/...'`

**Solução**: Adicionado `https://fundingchoicesmessages.google.com` ao `script-src`, `connect-src` e `frame-src`

### Problema 2: Google Ad Traffic Quality (ep1)
**Erro**: `Refused to connect to 'https://ep1.adtrafficquality.google/...'`

**Solução**: Adicionado `https://ep1.adtrafficquality.google` ao `connect-src`

### Problema 3: Google Ad Traffic Quality (ep2) - Scripts
**Erro**: `Refused to load the script 'https://ep2.adtrafficquality.google/sodar/sodar2.js'`

**Solução**: Adicionado `https://ep2.adtrafficquality.google` ao `script-src` e `connect-src`

## 📋 CSP Final Configurada

```typescript
content="default-src 'self'; 
  script-src 'self' 'unsafe-inline' 'unsafe-eval' 
    https://pagead2.googlesyndication.com 
    https://www.googletagmanager.com 
    https://fundingchoicesmessages.google.com 
    https://ep1.adtrafficquality.google 
    https://ep2.adtrafficquality.google; 
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
  font-src 'self' https://fonts.gstatic.com; 
  img-src 'self' data: https: blob:; 
  connect-src 'self' 
    https://pagead2.googlesyndication.com 
    https://www.google-analytics.com 
    https://fundingchoicesmessages.google.com 
    https://ep1.adtrafficquality.google 
    https://ep2.adtrafficquality.google; 
  frame-src 'self' 
    https://googleads.g.doubleclick.net 
    https://fundingchoicesmessages.google.com;"
```

## ✅ Domínios Permitidos

### Scripts (`script-src`)
- ✅ `pagead2.googlesyndication.com` (Google AdSense)
- ✅ `www.googletagmanager.com` (Google Tag Manager)
- ✅ `fundingchoicesmessages.google.com` (Google Funding Choices)
- ✅ `ep1.adtrafficquality.google` (Google Ad Traffic Quality)
- ✅ `ep2.adtrafficquality.google` (Google Ad Traffic Quality - SODAR)

### Conexões (`connect-src`)
- ✅ `pagead2.googlesyndication.com`
- ✅ `www.google-analytics.com`
- ✅ `fundingchoicesmessages.google.com`
- ✅ `ep1.adtrafficquality.google`
- ✅ `ep2.adtrafficquality.google`

### Frames (`frame-src`)
- ✅ `googleads.g.doubleclick.net`
- ✅ `fundingchoicesmessages.google.com`

## 🧪 Como Verificar

Após deploy:
1. Abrir DevTools → Console
2. Verificar que não há mais erros de CSP relacionados ao Google AdSense
3. Verificar que scripts do AdSense carregam corretamente

## 📝 Notas

- Google AdSense usa múltiplos subdomínios para diferentes funcionalidades
- `ep1` e `ep2` são usados para Ad Traffic Quality e SODAR (Same-Origin Detection and Reporting)
- Esses domínios são necessários para o funcionamento completo do AdSense

