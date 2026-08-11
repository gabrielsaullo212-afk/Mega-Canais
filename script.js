// Dados simulados de partidas com escudos/bandeiras dos times
const matchesData = [
    {
        league: "UEFA Champions League",
        time: "16:00",
        platform: "HBO Max",
        team1: { name: "Real Madrid", flag: "https://media.api-sports.io/football/teams/541.png" },
        team2: { name: "Manchester City", flag: "https://media.api-sports.io/football/teams/50.png" }
    },
    {
        league: "Brasileirão Série A",
        time: "20:00",
        platform: "GloboPlay / Premiere",
        team1: { name: "Flamengo", flag: "https://media.api-sports.io/football/teams/127.png" },
        team2: { name: "Palmeiras", flag: "https://media.api-sports.io/football/teams/121.png" }
    },
    {
        league: "Premier League",
        time: "12:30",
        platform: "Star+ / ESPN",
        team1: { name: "Arsenal", flag: "https://media.api-sports.io/football/teams/42.png" },
        team2: { name: "Chelsea", flag: "https://media.api-sports.io/football/teams/49.png" }
    },
    {
        league: "Copa Libertadores",
        time: "21:30",
        platform: "Paramount+",
        team1: { name: "Boca Juniors", flag: "https://media.api-sports.io/football/teams/451.png" },
        team2: { name: "River Plate", flag: "https://media.api-sports.io/football/teams/435.png" }
    }
];

// Função para renderizar os jogos na tela
function renderMatches() {
    const container = document.getElementById('matchesContainer');
    container.innerHTML = '';

    matchesData.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';

        matchCard.innerHTML = `
            <div class="league-name">${match.league}</div>
            <div class="teams-container">
                <div class="team">
                    <img src="${match.team1.flag}" alt="${match.team1.name}">
                    <span>${match.team1.name}</span>
                </div>
                <div class="versus">VS</div>
                <div class="team">
                    <img src="${match.team2.flag}" alt="${match.team2.name}">
                    <span>${match.team2.name}</span>
                </div>
            </div>
            <div class="match-info">
                <span><i class="far fa-clock"></i> ${match.time}</span>
                <span class="platform-tag"><i class="fas fa-tv"></i> ${match.platform}</span>
            </div>
        `;

        container.appendChild(matchCard);
    });
}

// Inicializar carregamento dos jogos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderMatches();
});
