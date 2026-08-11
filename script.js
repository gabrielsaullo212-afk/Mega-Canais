/*
  MEGA CANAIS — JavaScript do front-end
  ----------------------------------------------------
  Para jogos reais, o navegador consulta /api/jogos.
  O servidor deve guardar as chaves da API esportiva/IA.
  Nunca coloque chaves privadas diretamente neste arquivo.
*/

const CONFIG = {
  API_URL: "/api/jogos",

  // Troque pelo seu número comercial, somente dígitos e código do país.
  WHATSAPP_NUMBER: "5500000000000",

  // Se o backend estiver indisponível, usamos dados demonstrativos.
  DEMO_MODE: true
};

const state = {
  games: [],
  filter: "all"
};

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  setBrazilDate();
  setupMenu();
  setupFilters();
  setupPlanButtons();
  setupWhatsApp();
  loadGames();
});

function setupMenu() {
  const toggle = $("#menuToggle");
  const nav = $("#nav");
  toggle?.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.innerHTML = nav.classList.contains("open")
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });
  nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
}

function setupFilters() {
  $("#filters")?.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;

    document.querySelectorAll("#filters button").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    state.filter = button.dataset.filter;
    renderGames();
  });
}

function setupPlanButtons() {
  document.querySelectorAll(".plan-btn").forEach(button => {
    button.addEventListener("click", () => {
      const plan = button.dataset.plan || "Plano Mega Canais";
      const message = `Olá! Vim pelo site Mega Canais e quero informações sobre o ${plan}.`;
      const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      button.href = url;
      button.target = "_blank";
      button.rel = "noopener";
    });
  });
}

function setupWhatsApp() {
  const button = $("#whatsappBtn");
  if (!button) return;
  const message = "Olá! Vim pelo site Mega Canais e gostaria de saber mais sobre os planos.";
  button.href = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function setBrazilDate() {
  const now = new Date();
  const date = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(now);

  $("#heroDate").textContent = date.slice(0, 5);
  $("#gamesDate").textContent = `Hoje • ${date}`;
}

async function loadGames() {
  showLoading();

  try {
    const response = await fetch(`${CONFIG.API_URL}?t=${Date.now()}`, {
      headers: { "Accept": "application/json" }
    });

    if (!response.ok) throw new Error(`Servidor respondeu ${response.status}`);

    const data = await response.json();
    state.games = Array.isArray(data) ? data : (data.games || []);

    setAIStatus(true, `${state.games.length} jogos recebidos do servidor.`);
  } catch (error) {
    console.warn("Mega Canais: backend indisponível.", error);

    if (CONFIG.DEMO_MODE) {
      state.games = demoGames();
      setAIStatus(false, "Modo demonstração. Conecte /api/jogos para dados reais.");
    } else {
      state.games = [];
      setAIStatus(false, "Não foi possível carregar a programação.");
    }
  }

  renderGames();
  renderHeroMatch();
}

$("#refreshGames")?.addEventListener("click", loadGames);

function setAIStatus(online, message) {
  const status = $("#aiStatus");
  const text = $("#aiMessage");
  if (text) text.textContent = message;

  if (status) {
    status.innerHTML = online
      ? "<span></span> IA CONECTADA"
      : "<span></span> MODO DEMO";
    status.style.color = online ? "var(--lime)" : "var(--cyan)";
  }
}

function showLoading() {
  $("#gamesGrid").innerHTML = `
    <div class="loading-card">
      <div class="loader"></div>
      <p>Buscando jogos...</p>
    </div>`;
}

function renderGames() {
  const grid = $("#gamesGrid");
  let games = [...state.games];

  if (state.filter === "futebol") {
    games = games.filter(g => (g.type || "futebol").toLowerCase() === "futebol");
  }

  if (state.filter === "ao-vivo") {
    games = games.filter(g => Boolean(g.live));
  }

  games.sort((a, b) => {
    const liveA = a.live ? 0 : 1;
    const liveB = b.live ? 0 : 1;
    return liveA - liveB || (a.timestamp || 0) - (b.timestamp || 0);
  });

  if (!games.length) {
    grid.innerHTML = `
      <div class="loading-card">
        <i class="fa-regular fa-calendar-xmark" style="font-size:25px;color:var(--cyan)"></i>
        <p>Nenhum jogo encontrado para este filtro.</p>
      </div>`;
    return;
  }

  grid.innerHTML = games.map(gameCard).join("");
}

function gameCard(game) {
  const homeLogo = safeImage(game.homeLogo);
  const awayLogo = safeImage(game.awayLogo);
  const home = escapeHTML(game.home || "Mandante");
  const away = escapeHTML(game.away || "Visitante");
  const league = escapeHTML(game.league || "Futebol");
  const time = escapeHTML(game.time || "--:--");
  const status = escapeHTML(game.statusText || (game.live ? "Ao vivo" : "Hoje"));
  const live = Boolean(game.live);

  return `
    <article class="game-card">
      <div class="game-top">
        <span>${league}</span>
        <span class="game-status ${live ? "live" : ""}">
          ${live ? "● AO VIVO" : status}
        </span>
      </div>

      <div class="game-main">
        <div class="team">
          <img src="${homeLogo}" alt="${home}" loading="lazy"
               onerror="this.onerror=null;this.src='assets/team-placeholder.svg'">
          <b>${home}</b>
        </div>

        <div class="match-center">
          <strong>${time}</strong>
          <small>VS</small>
        </div>

        <div class="team">
          <img src="${awayLogo}" alt="${away}" loading="lazy"
               onerror="this.onerror=null;this.src='assets/team-placeholder.svg'">
          <b>${away}</b>
        </div>
      </div>

      <div class="game-bottom">
        <span><i class="fa-solid fa-location-dot"></i> ${escapeHTML(game.country || "Mundo")}</span>
        <span>${escapeHTML(game.channel || "Transmissão a confirmar")}</span>
      </div>
    </article>`;
}

function renderHeroMatch() {
  const target = $("#heroMatch");
  if (!target || !state.games.length) return;

  const game = state.games.find(g => g.live) || state.games[0];
  target.innerHTML = `
    <div class="club">
      <img src="${safeImage(game.homeLogo)}" alt="${escapeHTML(game.home || "")}">
      <b>${escapeHTML(shortName(game.home || "Mandante"))}</b>
    </div>
    <strong>${escapeHTML(game.time || "VS")}</strong>
    <div class="club">
      <img src="${safeImage(game.awayLogo)}" alt="${escapeHTML(game.away || "")}">
      <b>${escapeHTML(shortName(game.away || "Visitante"))}</b>
    </div>`;
}

function shortName(name) {
  return name.length > 17 ? name.slice(0, 16) + "…" : name;
}

function safeImage(url) {
  return /^https:\/\//i.test(String(url || ""))
    ? url
    : "assets/team-placeholder.svg";
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function demoGames() {
  // Demonstração visual: substitua por /api/jogos em produção.
  return [
    {
      id: 1, type: "futebol", league: "Exemplo • Futebol",
      country: "Brasil", home: "Time da Casa", away: "Time Visitante",
      time: "19:00", statusText: "Hoje", live: false,
      homeLogo: "", awayLogo: "", channel: "Transmissão a confirmar"
    },
    {
      id: 2, type: "futebol", league: "Exemplo • Campeonato",
      country: "Mundo", home: "Equipe Azul", away: "Equipe Verde",
      time: "21:30", statusText: "Hoje", live: false,
      homeLogo: "", awayLogo: "", channel: "Transmissão a confirmar"
    }
  ];
}
