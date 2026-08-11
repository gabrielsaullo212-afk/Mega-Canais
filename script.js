const matches = [
    {
        league: "BRASILEIRÃO",
        home: "Brasil",
        away: "Argentina",
        homeFlag: "🇧🇷",
        awayFlag: "🇦🇷",
        time: "16:00",
        status: "HOJE"
    },

    {
        league: "CAMPEONATO",
        home: "Espanha",
        away: "França",
        homeFlag: "🇪🇸",
        awayFlag: "🇫🇷",
        time: "18:30",
        status: "HOJE"
    },

    {
        league: "ESPORTES",
        home: "Inglaterra",
        away: "Alemanha",
        homeFlag: "🇬🇧",
        awayFlag: "🇩🇪",
        time: "21:00",
        status: "HOJE"
    }
];


const matchesContainer =
    document.getElementById("matchesContainer");


function renderMatches() {

    matchesContainer.innerHTML = "";

    matches.forEach(match => {

        const card = document.createElement("article");

        card.className = "match reveal";

        card.innerHTML = `

            <div class="match-league">

                <span>
                    ${match.league}
                </span>

                <span class="match-live">
                    <i class="fa-solid fa-circle"></i>
                    ${match.status}
                </span>

            </div>

            <div class="teams">

                <div class="team">

                    <div class="team-logo flag">
                        ${match.homeFlag}
                    </div>

                    <strong>
                        ${match.home}
                    </strong>

                </div>

                <div class="match-time">

                    ${match.time}

                    <small>
                        programação
                    </small>

                </div>

                <div class="team">

                    <div class="team-logo flag">
                        ${match.awayFlag}
                    </div>

                    <strong>
                        ${match.away}
                    </strong>

                </div>

            </div>

        `;

        matchesContainer.appendChild(card);

    });

}

renderMatches();
