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
