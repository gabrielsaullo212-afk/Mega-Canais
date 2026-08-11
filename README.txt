MEGA CANAIS — FRONT-END
========================

Arquivos:
- index.html
- style.css
- script.js
- assets/logo-mega-canais.jpg
- assets/team-placeholder.svg

O layout usa a logo enviada e as cores azul/ciano/lima/rosa da identidade.

JOGOS AUTOMÁTICOS
-----------------
O front-end consulta:
  /api/jogos

Esse endpoint deve ser fornecido por um backend. Não coloque chaves de API
esportiva ou de IA no script.js, porque elas ficariam expostas ao público.

Para dados reais:
1. Use um backend para consultar uma API esportiva.
2. Retorne um JSON com:
   home, away, homeLogo, awayLogo, time, league, country, live, statusText.
3. A documentação do API-Football mostra que os fixtures retornam equipes,
   logos, data/hora e status, e que os logos dos times estão disponíveis por ID.
4. Se usar IA, use-a no servidor para organizar/classificar os dados já obtidos.
5. Para mostrar "onde assistir", conecte uma fonte confiável de programação.
   Não invente plataformas de transmissão.

O arquivo script.js possui DEMO_MODE para que o site abra mesmo sem backend.

WHATSAPP
--------
Edite CONFIG.WHATSAPP_NUMBER no script.js.
