// Lista de Jogos com escudos dos times
const matches = [
    {
        league: "UEFA Champions League",
        time: "17:00",
        platform: "Max (HBO)",
        team1: { 
            name: "Real Madrid", 
            flag: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" 
        },
        team2: { 
            name: "Man. City", 
            flag: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg" 
        }
    },
    {
        league: "Brasileirão Série A",
        time: "19:30",
        platform: "Globoplay / Premiere",
        team1: { 
            name: "Flamengo", 
            flag: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg" 
        },
        team2: { 
            name: "Palmeiras", 
            flag: "https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg" 
        }
    },
    {
        league: "Premier League",
        time: "13:00",
        platform: "Star+ / ESPN",
        team1: { 
            name: "Arsenal", 
            flag: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg" 
        },
        team2: { 
            name: "Chelsea", 
            flag: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg" 
        }
    },
    {
        league: "Copa Libertadores",
        time: "21:30",
        platform: "Paramount+",
        team1: { 
            name: "Boca Juniors", 
            flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Boca_Juniors_logo13.svg" 
        },
        team2: { 
            name: "River Plate", 
            flag: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Escudo_del_C_A_River_Plate.svg" 
        }
    }
];

// Função que cria os cards dos jogos no site
function loadMatches() {
    const container = document.getElementById('matchesContainer');
    if (!container) return;
    
    container.innerHTML = ''; // Limpa antes de renderizar

    matches.forEach(match => {
        const card = document.createElement('div');
        card.className = 'match-card';

        // Monta a estrutura bonita do jogo com imagens e textos
        card.innerHTML = 
            '<div class="league-name">' + match.league + '</div>' +
            '<div class="teams-container">' +
                '<div class="team">' +
                    '<img src="' + match.team1.flag + '" alt="' + match.team1.name + '">' +
                    '<span>' + match.team1.name + '</span>' +
                '</div>' +
                '<div class="versus">VS</div>' +
                '<div class="team">' +
                    '<img src="' + match.team2.flag + '" alt="' + match.team2.name + '">' +
                    '<span>' + match.team2.name + '</span>' +
                '</div>' +
            '</div>' +
            '<div class="match-info">' +
                '<span><i class="far fa-clock"></i> ' + match.time + '</span>' +
                '<span class="platform-tag"><i class="fas fa-tv"></i> ' + match.platform + '</span>' +
            '</div>';

        container.appendChild(card);
    });
}

// Executa a função assim que a página carregar
document.addEventListener('DOMContentLoaded', loadMatches);
