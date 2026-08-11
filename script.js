/* =====================================================
   MEGA CANAIS
   Interações da página
===================================================== */


/* ================= HEADER ================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* ================= MENU MOBILE ================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");

    const icon = menuButton.querySelector("i");

    if (mobileMenu.classList.contains("active")) {
        icon.className = "fa-solid fa-xmark";
    } else {
        icon.className = "fa-solid fa-bars";
    }

});


document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");
        document.body.classList.remove("menu-open");

        menuButton.querySelector("i").className =
            "fa-solid fa-bars";

    });

});


/* ================= JOGOS ================= */

const matches = [

    {
        league: "FUTEBOL",
        home: "Time A",
        away: "Time B",
        homeIcon: "⚽",
        awayIcon: "⚽",
        time: "16:00",
        status: "HOJE"
    },

    {
        league: "CAMPEONATO",
        home: "Time C",
        away: "Time D",
        homeIcon: "🏆",
        awayIcon: "🏆",
        time: "18:30",
        status: "HOJE"
    },

    {
        league: "ESPORTES",
        home: "Time E",
        away: "Time F",
        homeIcon: "🔥",
        awayIcon: "🔥",
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

                    <div class="team-logo">
                        ${match.homeIcon}
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

                    <div class="team-logo">
                        ${match.awayIcon}
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


/* ================= FAQ ================= */

const faqButtons =
    document.querySelectorAll(".faq-question");


faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const faq = button.closest(".faq");

        document.querySelectorAll(".faq").forEach(item => {

            if (item !== faq) {
                item.classList.remove("active");
            }

        });

        faq.classList.toggle("active");

    });

});


/* ================= REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= CONTADORES ================= */

const counters =
    document.querySelectorAll("[data-counter]");


const counterObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) {
                return;
            }

            const element = entry.target;

            const target =
                Number(element.dataset.counter);

            let current = 0;

            const duration = 1200;

            const startTime = performance.now();


            function updateCounter(currentTime) {

                const elapsed =
                    currentTime - startTime;

                const progress =
                    Math.min(elapsed / duration, 1);

                const eased =
                    1 - Math.pow(1 - progress, 3);

                current =
                    Math.floor(target * eased);

                element.textContent =
                    current.toLocaleString("pt-BR");

                if (progress < 1) {

                    requestAnimationFrame(
                        updateCounter
                    );

                }

            }


            requestAnimationFrame(updateCounter);

            counterObserver.unobserve(element);

        });

    },
    {
        threshold: .7
    }
);


counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* ================= SMOOTH LINKS ================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetId =
            link.getAttribute("href");

        if (
            targetId === "#" ||
            !document.querySelector(targetId)
        ) {
            return;
        }

        event.preventDefault();

        document.querySelector(targetId)
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    });

});


/* ================= PLAY BUTTON ================= */

const playButton =
    document.querySelector(".play-button");


if (playButton) {

    playButton.addEventListener("click", () => {

        document.querySelector("#recursos")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}


/* ================= ANO AUTOMÁTICO ================= */

const footerYear =
    document.querySelector(".footer-bottom span");

if (footerYear) {

    footerYear.textContent =
        `© ${new Date().getFullYear()} Mega Canais. Todos os direitos reservados.`;

}


/* ================= PARALLAX SUTIL ================= */

const heroVisual =
    document.querySelector(".hero-visual");


if (heroVisual && window.matchMedia(
    "(min-width: 1000px)"
).matches) {

    window.addEventListener("mousemove", event => {

        const x =
            (event.clientX / window.innerWidth - .5) * 8;

        const y =
            (event.clientY / window.innerHeight - .5) * 8;

        const screen =
            heroVisual.querySelector(".screen");

        if (screen) {

            screen.style.transform =
                `perspective(1000px)
                 rotateY(${-5 + x}deg)
                 rotateX(${2 - y}deg)`;

        }

    });

}
