NIERIS SITE

Esta pasta contém o site inteiro.

Você pode substituir a pasta "nieris-site" inteira no repositório quando quiser atualizar o site.

Páginas:
- index.html = Home
- lore.html = Lore
- music.html = Músicas
- credits.html = Créditos
- fanarts.html = Fanarts
- nabis.html = Nabis
- moderation.html = Moderação
- socials.html = Socials

Arquivos compartilhados:
- styles.css
- script.js
- assets/
- _config.yml

As URLs públicas continuam limpas (/lore, /music, /credits etc.) porque o GitHub Pages faz o build via Jekyll.

V6.7: Home now uses an invisible structural card to truly center the hero content. The card has no background, border, shadow or visible limitation and exists only for alignment.

V6.8: Fixed Home centering bug. The hero was still inheriting the old two-column grid, so the content was centered inside the left column. Home now explicitly uses one full-width column.

V6.9: Added Nieris brand icons. Pink SVG is now the favicon on every page. White SVG is centered in every footer. Footer is standardized with © 2026 Nieris and all-rights-reserved text in PT-BR/EN-US. Black SVG is stored in assets for future use.

V7.1: Added credits media: Rubyfilia Discord Reactive GIF and Equidna Nieris logo image, each in the correct artist card.

V7.2: Added site-wide image download deterrence: images cannot be dragged or right-click saved through normal browser interactions. Links on credit images remain functional. This is deterrence only; any image displayed by a browser can still technically be retrieved through developer tools or screenshots.

V7.3: Credits media updated. GIF assets remain animated via IMG, the media fills the rectangle more cleanly, and a bottom purple-to-transparent gradient was added so titles stay readable over the artwork.

V7.7: Commission media cards now open an artist-specific zoom gallery. External profile CTA beside artist names remains unchanged.

V7.10: Removed Socials from the menu and deleted socials.html. X, Twitch, Discord, YouTube and TikTok now appear as linked icons in the footer of every page.

V7.11: Language selector redesigned as a visible pink segmented switch. The active language appears on a light pill, clearly separating the control from the main navigation.

V8.0: Polish layer — Plus Jakarta Sans body font, soft glow hovers, cursor-reactive background, click ripples, scroll reveals, smoother galleries with swipe, better focus states.

V7.12: Performance/package optimization. Music re-encoded to 128 kbps MP3; heavy PNG artwork converted to WebP quality 90. GIF remains unchanged. Visual layout and behavior preserved.

V8.1: Removed cursor-follow glow, spotlight and luminous click ripple. Hover light now rises subtly from the bottom of content surfaces. Background changed from bright glow to slow dark organic symbiosis independent of mouse movement.
