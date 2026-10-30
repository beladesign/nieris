NIERIS v12.9 — liquid mouse-follow otimizado

Base: Nieris v12.8, preservando a identidade v12.6, páginas independentes e traduções.

Alteração solicitada: removidos o cursor reactive gradient pesado, três gradientes
que seguiam o cursor e o reflexo reativo dos cards. Em seu lugar, apenas UMA
mancha líquida pequena, sutil e suave que segue o mouse com atraso delicado.
O acompanhamento usa apenas transform GPU/compositor, sem bibliotecas externas
nem filtros blur. A animação JS para quando não há movimento.

A textura granulada permanece, agora com um pequeno tile PNG estático em vez
de calcular filtro SVG de ruído sobre a tela inteira. Mobile e preferência
"reduzir movimento" não ativam efeito mouse-follow.

Glitch dos títulos, números piscando, indicador verde/vermelho do áudio,
layout, fontes, cores, imagens, galerias, navegação e idiomas: INALTERADOS.
MÚSICAS: music.html, styles.css, script.js, music-legacy.css, signal-effects.*,
arquivos de música e player permanecem byte a byte idênticos aos da v12.8.

Publique o conteúdo do ZIP na raiz do domínio nieris.com.br (GitHub Pages).
Os caminhos de arquivo absolutos (/) são do site original.


NIERIS v12.11 — 3 novas fanarts
Galeria anterior preservada. Novas artes: Nie_choro_20261025231523
por Infinity Void; Nie_fanart_1.3 e Nie_fanart_1.2 por blacksthe12.
Imagens otimizadas em WebP, com créditos na galeria e no visualizador.
Somente fanarts.html, styles.css, script.js e README.txt foram alterados;
3 imagens foram adicionadas em assets/fanarts/. Outras páginas permanecem intactas.

NIERIS v12.12: fanarts em uma unica fileira (4 por linha em desktop; arraste horizontal em mobile/tablet); espaco entre artista e categoria. Apenas styles.css foi alterado.


NIERIS v12.13 — reforço de segurança em código (base v12.12)
- Content-Security-Policy adicionada diretamente ao HTML das 7 páginas:
  scripts, imagens e áudios limitados à própria origem; bloqueio de objects,
  iframes incorporados e formulários; sem execução de scripts inline ou eval.
- Trusted Types ativado onde disponível. Os quatro usos de innerHTML no JS
  foram trocados por criação segura de elementos, sem mudar sua aparência.
- Referrer-Policy: no-referrer nas páginas, para não revelar a URL de origem
  quando um visitante segue links externos. Links externos já eram seguros.
- Proteção existente contra arrastar / menu de contexto de imagens PRESERVADA.
- Fanarts otimizadas WebP preservadas; todas as músicas em qualidade original.
- O layout, player, efeitos, textos e navegação não foram redesenhados.

AVISO: Estas medidas protegem contra certas injeções e exposições involuntárias
de navegação; NÃO bloqueiam downloads ou cópias de arquivos públicos.
Para proteção de hotlink, cabeçalhos HTTP, desafios de bots e controle de acesso,
é necessária configuração de hospedagem/CDN (não possível só com HTML/JS
estático no GitHub Pages).
