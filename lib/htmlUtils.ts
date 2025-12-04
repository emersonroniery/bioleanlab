// lib/htmlUtils.ts

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bioleanlab.com";


/**

 * Processa HTML para adicionar rel="noopener noreferrer" em links externos

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

      // Verifica se já tem rel

      if (attributes.includes('rel=')) {

        // Adiciona noopener noreferrer se não existir

        if (!attributes.includes('noopener') && !attributes.includes('noreferrer')) {

          return match.replace(/rel=["']([^"']*)["']/, (relMatch, relValue) => {

            return `rel="${relValue} noopener noreferrer"`;

          });

        }

      } else {

        // Adiciona rel="noopener noreferrer"

        return match.replace(/>$/, ' rel="noopener noreferrer">');

      }

    }


    return match;

  });

}

