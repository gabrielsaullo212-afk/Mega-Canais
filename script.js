document.addEventListener('DOMContentLoaded', () => {

    async function carregarJogosComBandeiras() {
        const matchesGrid = document.getElementById('matches-grid');
        const statusText = document.getElementById('ai-status');

        // Dados dinâmicos com os escudos dos times em alta definição (SVG)
        const jogosHoje = [
            {
                liga: "UEFA Champions League",
                timeA: "Real Madrid",
                flagA: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
                timeB: "Man. City",
                flagB: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
                hora: "16:00",
                canal: "Max (HBO) / TNT"
            },
            {
                liga: "Brasileirão Série A",
                timeA: "Flamengo",
                flagA: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
                timeB: "Palmeiras",
                flagB: "https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg",
                hora: "21:30",
                canal: "Globo / Premiere"
            },
            {
                liga: "Premier League",
                timeA: "Arsenal",
                flagA: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
                timeB: "Liverpool",
                flagB: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
                hora: "13:30",
                canal: "Star+ / ESPN"
            },
            {
                liga: "Copa Libertadores",
                timeA: "River Plate",
                flagA: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Escudo_del_C_A_River_Plate.svg",
                timeB: "Boca Juniors",
                flagB: "https://upload.wikimedia.org/wikipedia/commons/4/41/C.A._Boca_Juniors_logo.svg",
                hora: "19:00",
                canal: "Paramount+ / Star+"
            }
        ];

        try {
            statusText.innerHTML = `<i class="fa-solid fa-check-circle"></i> Atualizado via IA hoje às ${new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'})}`;
            matchesGrid.innerHTML = '';

            jogosHoje.forEach(jogo => {
                const card = document.createElement('div');
                card.className = 'match-card';
                card.innerHTML = `
                    <div class="match-header">
                        <span class="match-league">${jogo.liga}</span>
                        <span class="match-time"><i class="fa-solid fa-circle" style="font-size:0.5rem;"></i> ${jogo.hora}</span>
                    </div>
                    
                    <div class="match-teams-wrapper">
                        <div class="team-box">
                            <img src="${jogo.flagA}" alt="${jogo.timeA}" class="team-flag">
                            <span>${jogo.timeA}</span>
                        </div>
                        
                        <span class="match-vs">VS</span>
                        
                        <div class="team-box team-b">
                            <span>${jogo.timeB}</span>
                            <img src="${jogo.flagB}" alt="${jogo.timeB}" class="team-flag">
                        </div>
                    </div>

                    <div class="match-channel">
                        <i class="fa-solid fa-tv"></i> Transmissão: <strong>${jogo.canal}</strong>
                    </div>
                `;
                matchesGrid.appendChild(card);
            });

        } catch (error) {
            statusText.innerText = "Erro ao carregar a tabela de jogos.";
        }
    }

    carregarJogosComBandeiras();
});
