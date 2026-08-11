// SIMULAÇÃO DE MECANISMO DE IA / ENDPOINT DA API DE JOGOS DO DIA
async function carregarJogosDoDia() {
    const gamesGrid = document.getElementById('games-grid');

    try {
        // Exemplo de requisição para o seu servidor ou API de Inteligência Artificial
        // const response = await fetch('/api/jogos');
        // const jogos = await response.json();

        // Dados simulados gerados pela IA para os jogos do dia:
        const jogos = [
            {
                campeonato: "Brasileirão Série A",
                timeCasa: "Flamengo",
                escudoCasa: "https://s.sde.globo.com/media/organizations/2018/04/10/Flamengo.svg",
                timeVisitante: "Palmeiras",
                escudoVisitante: "https://s.sde.globo.com/media/organizations/2019/07/06/Palmeiras.svg",
                horario: "20:00",
                canal: "Premiere / Sportv"
            },
            {
                campeonato: "Champions League",
                timeCasa: "Real Madrid",
                escudoCasa: "https://s.sde.globo.com/media/organizations/2018/03/11/real-madrid.svg",
                timeVisitante: "Barcelona",
                escudoVisitante: "https://s.sde.globo.com/media/organizations/2018/03/11/barcelona.svg",
                horario: "16:00",
                canal: "TNT / Max"
            },
            {
                campeonato: "Copa do Brasil",
                timeCasa: "São Paulo",
                escudoCasa: "https://s.sde.globo.com/media/organizations/2018/03/11/sao-paulo.svg",
                timeVisitante: "Corinthians",
                escudoVisitante: "https://s.sde.globo.com/media/organizations/2019/09/30/Corinthians.svg",
                horario: "21:30",
                canal: "Globo / Premiere"
            }
        ];

        // Limpa a mensagem de carregamento
        gamesGrid.innerHTML = '';

        // Renderiza os cards dos jogos
        jogos.forEach(jogo => {
            const cardHTML = `
                <div class="game-card">
                    <span class="game-league">${jogo.campeonato}</span>
                    <div class="teams-container">
                        <div class="team">
                            <img src="${jogo.escudoCasa}" alt="${jogo.timeCasa}">
                            <span class="team-name">${jogo.timeCasa}</span>
                        </div>
                        <div class="vs-info">
                            <span class="game-time">${jogo.horario}</span>
                        </div>
                        <div class="team">
                            <img src="${jogo.escudoVisitante}" alt="${jogo.timeVisitante}">
                            <span class="team-name">${jogo.timeVisitante}</span>
                        </div>
                    </div>
                    <div style="text-align: center;">
                        <span class="channel-tag">📺 Transmissão: ${jogo.canal}</span>
                    </div>
                </div>
            `;
            gamesGrid.innerHTML += cardHTML;
        });

    } catch (error) {
        gamesGrid.innerHTML = '<p>Erro ao carregar a programação dos jogos de hoje.</p>';
        console.error('Erro:', error);
    }
}

// Executa ao carregar a página
document.addEventListener('DOMContentLoaded', carregarJogosDoDia);
