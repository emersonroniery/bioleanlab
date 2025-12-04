// lib/htmlUtils.ts

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bioleanlab.com";

// Domínios de afiliados conhecidos (ClickBank, etc.)
const AFFILIATE_DOMAINS = [
  'clickbank.net',
  'hop.clickbank.net',
  'clkbank.com',
  'clkbk.com',
  'clkbank.net',
];

/**
 * Verifica se um link é de afiliado
 */
function isAffiliateLink(href: string): boolean {
  if (!href) return false;
  
  // Verifica domínios conhecidos de afiliados
  return AFFILIATE_DOMAINS.some(domain => href.includes(domain));
}

/**
 * Processa HTML para adicionar rel="noopener noreferrer" em links externos
 * e rel="sponsored" em links de afiliado
 */
export function processExternalLinks(html: string): string {
  // Regex para encontrar links <a> que apontam para domínios externos
  const linkRegex = /<a\s+([^>]*href=["']([^"']+)["'][^>]*)>/gi;

  return html.replace(linkRegex, (match, attributes, href) => {
    // Verifica se é um link externo
    const isExternal = href && (
      href.startsWith("http://") ||
      href.startsWith("https://")
    ) && !href.startsWith(SITE_URL);

    if (isExternal) {
      const isAffiliate = isAffiliateLink(href);
      let relValues: string[] = [];

      // Adiciona noopener noreferrer para todos os links externos
      relValues.push('noopener', 'noreferrer');

      // Adiciona sponsored para links de afiliado
      if (isAffiliate) {
        relValues.push('sponsored');
      }

      // Verifica se já tem rel
      if (attributes.includes('rel=')) {
        // Extrai valores existentes de rel
        const relMatch = attributes.match(/rel=["']([^"']*)["']/);
        if (relMatch) {
          const existingRels = relMatch[1].split(/\s+/).filter(Boolean);
          // Combina valores existentes com novos, removendo duplicatas
          const allRels = [...new Set([...existingRels, ...relValues])];
          return match.replace(/rel=["']([^"']*)["']/, `rel="${allRels.join(' ')}"`);
        }
      } else {
        // Adiciona rel com todos os valores
        return match.replace(/>$/, ` rel="${relValues.join(' ')}">`);
      }
    }

    return match;
  });
}
