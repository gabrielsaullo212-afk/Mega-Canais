// Aguarda o documento carregar
document.addEventListener("DOMContentLoaded", () => {
    carregarJogosDoDia();
});

// Dados simulados da IA para atualização diária de jogos
function carregarJogosDoDia() {
    const containerJogos = document.getElementById("games-list");

    const jogos = [
        {
            campeonato: "Brasileirão - Série A",
            timeCasa: "Flamengo",
            timeFora: "Fluminense",
            horario: "20:00"
        },
        {
            campeonato: "UEFA Champions League",
            timeCasa: "Real Madrid",
            timeFora: "Manchester City",
            horario: "16:00"
        },
        {
            campeonato: "Copa do Brasil",
            timeCasa: "Palmeiras",
            timeFora: "São Paulo",
            horario: "21:30"
        }
    ];

    // Limpa a mensagem de carregando
    containerJogos.innerHTML = "";

    // Renderiza cada card de jogo
    jogos.forEach(jogo => {
        const cardHTML = `
            <div class="game-card">
                <div class="game-championship">${jogo.campeonato}</div>
                <div class="game-teams">
                    <div class="team">
                        <span>${jogo.timeCasa}</span>
                    </div>
                    <span class="versus">VS</span>
                    <div class="team">
                        <span>${jogo.timeFora}</span>
                    </div>
                </div>
                <div class="game-time">
                    <i class="fa-regular fa-clock"></i> Hoje às ${jogo.horario}
                </div>
            </div>
        `;
        containerJogos.innerHTML += cardHTML;
    });
}

        `;
        containerJogos.innerHTML += cardHTML;
    });
}
