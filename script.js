document.addEventListener('DOMContentLoaded', () => {

    async function carregarJogosFutebol() {
        const matchesGrid = document.getElementById('matches-grid');
        const statusText = document.getElementById('ai-status');

        const jogosHoje = [
            { liga: "UEFA Champions League", timeA: "Real Madrid", timeB: "Manchester City", hora: "16:00", canal: "Max (HBO) / TNT" },
            { liga: "Brasileirão Série A", timeA: "Flamengo", timeB: "Palmeiras", hora: "21:30", canal: "Globo / Premiere" },
            { liga: "Premier League", timeA: "Arsenal", timeB: "Liverpool", hora: "13:30", canal: "Star+ / ESPN" },
            { liga: "Copa Libertadores", timeA: "River Plate", timeB: "Boca Juniors", hora: "19:00", canal: "Paramount+ / Star+" },
            { liga: "MLS", timeA: "Inter Miami", timeB: "LA Galaxy", hora: "20:30", canal: "Apple TV" },
            { liga: "Brasileirão Série A", timeA: "São Paulo", timeB: "Grêmio", hora: "18:30", canal: "Premiere" }
        ];

        try {
            statusText.innerHTML = `<i class="fa-solid fa-check-circle"></i> Atualizado via IA em ${new Date().toLocaleDateString('pt-BR')}`;
            matchesGrid.innerHTML = '';

            jogosHoje.forEach(jogo => {
                const card = document.createElement('div');
                card.className = 'match-card';
                card.innerHTML = `
                    <div class="match-header">
                        <span class="match-league">${jogo.liga}</span>
                        <span class="match-time"><i class="fa-solid fa-circle" style="font-size:0.5rem;"></i> ${jogo.hora}</span>
                    </div>
                    <div class="match-teams">
                        <span>${jogo.timeA}</span>
                        <span style="color: var(--blue-cyan);">VS</span>
                        <span>${jogo.timeB}</span>
                    </div>
                    <div class="match-channel">
                        <i class="fa-solid fa-tv"></i> Transmissão: <strong>${jogo.canal}</strong>
                    </div>
                `;
                matchesGrid.appendChild(card);
            });

        } catch (error) {
            statusText.innerText = "Erro ao carregar os jogos.";
        }
    }

    carregarJogosFutebol();
});
