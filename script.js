/* ==========================================================
   MEGA CANAIS
   Front-end
========================================================== */


/* ================= HEADER ================= */

const header =
    document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ================= MENU MOBILE ================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    document.body.classList.toggle("menu-open");

    const icon =
        menuButton.querySelector("i");


    if (
        mobileMenu.classList.contains("active")
    ) {

        icon.className =
            "fa-solid fa-xmark";

    } else {

        icon.className =
            "fa-solid fa-bars";

    }

});


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            document.body.classList.remove(
                "menu-open"
            );

            menuButton.querySelector("i").className =
                "fa-solid fa-bars";

        });

    });


/* ================= DATA DOS JOGOS ================= */

/*
    IMPORTANTE:

    Estes dados são apenas exemplos para
    demonstrar o funcionamento do layout.

    NÃO são jogos reais.

    Para colocar jogos reais automaticamente,
    substitua getGames() por uma chamada para
    uma API esportiva através do seu backend.
*/


const exampleGames = [

    {
        id: 1,

        competition:
            "Exemplo — Campeonato",

        home:
            "Time A",

        away:
            "Time B",

        homeLogo:
            "assets/team-a.png",

        awayLogo:
            "assets/team-b.png",

        time:
            "16:00",

        status:
            "upcoming",

        broadcast:
            "Transmissão não informada"

    },


    {
        id: 2,

        competition:
            "Exemplo — Futebol",

        home:
            "Time C",

        away:
            "Time D",

        homeLogo:
            "assets/team-c.png",

        awayLogo:
            "assets/team-d.png",

        time:
            "18:30",

        status:
            "upcoming",

        broadcast:
            "Transmissão não informada"

    },


    {
        id: 3,

        competition:
            "Exemplo — Campeonato",

        home:
            "Time E",

        away:
            "Time F",

        homeLogo:
            "assets/team-e.png",

        awayLogo:
            "assets/team-f.png",

        time:
            "21:00",

        status:
            "live",

        broadcast:
            "Transmissão não informada"

    }

];


/* ================= CONTAINER ================= */

const gamesContainer =
    document.getElementById(
        "gamesContainer"
    );


/* ================= RENDER ================= */

function renderGames(
    games = exampleGames,
    filter = "all"
) {

    gamesContainer.innerHTML = "";


    const filtered =
        games.filter(game => {

            if (filter === "all") {
                return true;
            }

            return game.status === filter;

        });


    if (!filtered.length) {

        gamesContainer.innerHTML = `

            <div class="no-games">

                <i class="fa-solid fa-futbol"></i>

                <h3>
                    Nenhum jogo encontrado
                </h3>

                <p>
                    Não existem partidas
                    para este filtro.
                </p>

            </div>

        `;

        return;

    }


    filtered.forEach(game => {

        const card =
            document.createElement("article");


        card.className =
            "game";


        const statusText =
            game.status === "live"
                ? "AO VIVO"
                : "PRÓXIMO";


        const statusClass =
            game.status === "live"
                ? "live"
                : "";


        card.innerHTML = `

            <div class="game-header">

                <span class="competition">
                    ${escapeHTML(
                        game.competition
                    )}
                </span>

                <span
                    class="game-status ${statusClass}"
                >
                    ${statusText}
                </span>

            </div>


            <div class="teams">

                <div class="team">

                    <div class="team-badge">

                        <img
                            src="${game.homeLogo}"
                            alt="${escapeHTML(
                                game.home
                            )}"
                            onerror="
                                this.src =
                                'https://dummyimage.com/100x100/14141c/ffffff&text=⚽';
                            "
                        >

                    </div>

                    <span class="team-name">
                        ${escapeHTML(
                            game.home
                        )}
                    </span>

                </div>


                <div class="game-time">

                    <strong>
                        ${game.time}
                    </strong>

                    <small>
                        HORÁRIO
                    </small>

                </div>


                <div class="team">

                    <div class="team-badge">

                        <img
                            src="${game.awayLogo}"
                            alt="${escapeHTML(
                                game.away
                            )}"
                            onerror="
                                this.src =
                                'https://dummyimage.com/100x100/14141c/ffffff&text=⚽';
                            "
                        >

                    </div>

                    <span class="team-name">
                        ${escapeHTML(
                            game.away
                        )}
                    </span>

                </div>

            </div>


            <div class="broadcast">

                <i class="fa-solid fa-tv"></i>

                <span>
                    ${escapeHTML(
                        game.broadcast
                    )}
                </span>

            </div>

        `;


        gamesContainer.appendChild(card);

    });

}


/* ================= FILTROS ================= */

let currentFilter =
    "all";


document
    .querySelectorAll(".filter")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".filter")
                    .forEach(btn =>
                        btn.classList.remove(
                            "active"
                        )
                    );


                button.classList.add(
                    "active"
                );


                currentFilter =
                    button.dataset.filter;


                renderGames(
                    currentGames,
                    currentFilter
                );

            }
        );

    });


/* ================= ESTATÍSTICAS ================= */

function updateStats(games) {

    const total =
        games.length;


    const live =
        games.filter(
            game =>
                game.status === "live"
        ).length;


    const upcoming =
        games.filter(
            game =>
                game.status === "upcoming"
        ).length;


    document.getElementById(
        "totalGames"
    ).textContent = total;


    document.getElementById(
        "liveGames"
    ).textContent = live;


    document.getElementById(
        "nextGames"
    ).textContent = upcoming;

}


/* ================= JOGOS ATUAIS ================= */

let currentGames =
    exampleGames;


/* ================= API ================= */

/*
    FUTURO:

    Aqui será feita a integração com
    sua API de futebol.

    Exemplo:

    async function getGames() {

        const response =
            await fetch(
                "/api/games"
            );

        return await response.json();

    }

    O navegador NÃO deve receber
    diretamente uma chave secreta
    da API.

    A chave deve ficar no backend.
*/


async function getGames() {

    /*
        Enquanto não existe API conectada,
        usamos os dados de demonstração.
    */

    return exampleGames;

}


/* ================= ATUALIZAÇÃO ================= */

async function updateGames() {

    try {

        const games =
            await getGames();


        currentGames =
            games;


        updateStats(games);


        renderGames(
            games,
            currentFilter
        );


        updateLastUpdate();


    } catch (error) {

        console.error(
            "Erro ao atualizar jogos:",
            error
        );

    }

}


function updateLastUpdate() {

    const element =
        document.getElementById(
            "lastUpdate"
        );


    const now =
        new Date();


    const time =
        now.toLocaleTimeString(
            "pt-BR",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );


    element.textContent =
        `Última atualização: ${time}`;

}


/*
    Atualiza ao abrir
*/

updateGames();


/*
    Atualiza a cada 5 minutos.

    Quando a API estiver conectada,
    os jogos serão buscados novamente.
*/

setInterval(
    updateGames,
    5 * 60 * 1000
);


/* ================= FAQ ================= */

document
    .querySelectorAll(".faq-question")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const faq =
                    button.closest(".faq");


                document
                    .querySelectorAll(".faq")
                    .forEach(item => {

                        if (item !== faq) {

                            item.classList.remove(
                                "active"
                            );

                        }

                    });


                faq.classList.toggle(
                    "active"
                );

            }
        );

    });


/* ================= DATA ================= */

function updateDate() {

    const date =
        new Date();


    document.getElementById(
        "currentDay"
    ).textContent =
        String(
            date.getDate()
        ).padStart(2, "0");


    const months = [
        "JAN",
        "FEV",
        "MAR",
        "ABR",
        "MAI",
        "JUN",
        "JUL",
        "AGO",
        "SET",
        "OUT",
        "NOV",
        "DEZ"
    ];


    document.getElementById(
        "currentMonth"
    ).textContent =
        months[
            date.getMonth()
        ];


    document.getElementById(
        "currentYear"
    ).textContent =
        date.getFullYear();

}


updateDate();


/* ================= ANO ================= */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();


/* ================= ESCAPE HTML ================= */

function escapeHTML(value) {

    return String(value)
        .replace(
            /[&<>"']/g,
            character => {

                const entities = {

                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#039;"

                };

                return entities[
                    character
                ];

            }
        );

}
