/* --- PALETA CYBERPUNK MEGAN CANAIS --- */
:root {
    --bg-dark: #060913;
    --bg-card: rgba(12, 17, 34, 0.85);
    
    --neon-pink: #E026A5;
    --neon-cyan: #00F0FF;
    --neon-lime: #A3E635;
    
    --whatsapp-green: #25D366;
    
    --text-main: #FFFFFF;
    --text-muted: #A1A1AA;
    
    --border-glow: rgba(0, 240, 255, 0.25);
    --radius-md: 16px;
    --radius-lg: 24px;
    --radius-full: 9999px;
    --transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-dark);
    /* Fundo dinâmico usando a imagem fornecida */
    background-image: 
        linear-gradient(to bottom, rgba(6, 9, 19, 0.88), rgba(6, 9, 19, 0.95)),
        url('logo.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: var(--text-main);
    line-height: 1.6;
    overflow-x: hidden;
}

h1, h2, h3, h4 { font-family: 'Space Grotesk', sans-serif; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

.text-gradient {
    background: linear-gradient(135deg, var(--neon-cyan) 0%, var(--neon-pink) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.text-neon { color: var(--neon-cyan) !important; }

/* Header & Logo */
.header {
    position: sticky; top: 0;
    background: rgba(6, 9, 19, 0.92);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 100; padding: 12px 0;
}
.nav-wrapper { display: flex; justify-content: space-between; align-items: center; }

.logo-img {
    height: 48px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 240, 255, 0.3);
    object-fit: contain;
}

.nav-menu { display: flex; align-items: center; gap: 28px; list-style: none; }
.nav-link { text-decoration: none; color: var(--text-muted); font-weight: 600; font-size: 0.95rem; transition: var(--transition); }
.nav-link:hover { color: var(--neon-cyan); }

/* Botões */
.btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 10px;
    padding: 12px 26px; font-size: 0.9rem; font-weight: 700; border-radius: var(--radius-full);
    text-decoration: none; transition: var(--transition); border: none; cursor: pointer;
    font-family: 'Space Grotesk', sans-serif; text-transform: uppercase;
}
.btn-neon {
    background: linear-gradient(135deg, var(--neon-cyan), var(--neon-pink));
    color: #FFF; box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
}
.btn-neon:hover { transform: translateY(-2px); box-shadow: 0 0 30px rgba(224, 38, 165, 0.6); }
.btn-outline { background: rgba(255, 255, 255, 0.05); color: #FFF; border: 2px solid var(--neon-cyan); }
.btn-outline:hover { background: var(--neon-cyan); color: #000; }
.full-width { width: 100%; }

/* Hero */
.hero { padding: 80px 0 60px; }
.hero-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 40px; align-items: center; }
.badge {
    display: inline-flex; align-items: center; gap: 8px; padding: 8px 18px;
    background: rgba(0, 240, 255, 0.1); border: 1px solid var(--neon-cyan); color: var(--neon-cyan);
    border-radius: var(--radius-full); font-size: 0.85rem; font-weight: 700; margin-bottom: 20px;
}
.hero-title { font-size: 3.2rem; line-height: 1.15; font-weight: 800; margin-bottom: 20px; }
.hero-subtitle { font-size: 1.1rem; color: var(--text-muted); margin-bottom: 30px; }
.hero-actions { display: flex; gap: 16px; }

.hero-preview { display: grid; gap: 16px; }
.preview-card {
    background: var(--bg-card); border: 1px solid var(--border-glow); padding: 24px;
    border-radius: var(--radius-lg); text-align: center; backdrop-filter: blur(12px);
}
.preview-card i { font-size: 2rem; color: var(--neon-cyan); margin-bottom: 10px; }

/* Seção de Planos */
.plans-section { padding: 80px 0; background: rgba(6, 9, 19, 0.6); }
.section-header { text-align: center; max-width: 650px; margin: 0 auto 50px; }
.section-tag { color: var(--neon-pink); font-weight: 700; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.15em; }
.section-title { font-size: 2.4rem; font-weight: 800; margin-top: 8px; }
.section-subtitle { color: var(--text-muted); margin-top: 8px; }

.plans-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; align-items: center; }
.plan-card {
    background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-lg); padding: 36px 28px; position: relative;
    backdrop-filter: blur(16px); transition: var(--transition);
}
.plan-card:hover { transform: translateY(-8px); border-color: var(--neon-cyan); }
.plan-card.featured {
    border: 2px solid var(--neon-cyan);
    box-shadow: 0 0 30px rgba(0, 240, 255, 0.25);
    background: rgba(12, 17, 34, 0.95);
}

.plan-badge, .plan-badge-promo {
    position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
    padding: 6px 16px; border-radius: var(--radius-full); font-size: 0.75rem; font-weight: 800; letter-spacing: 0.05em;
}
.plan-badge { background: var(--neon-cyan); color: #000; }
.plan-badge-promo { background: var(--neon-pink); color: #FFF; }

.plan-title { font-size: 1.5rem; text-align: center; margin-bottom: 4px; }
.plan-period { text-align: center; color: var(--text-muted); font-size: 0.9rem; margin-bottom: 24px; }

.plan-price { text-align: center; margin-bottom: 24px; }
.old-price { text-decoration: line-through; color: var(--text-muted); font-size: 1.1rem; display: block; }
.current-price { font-size: 3rem; font-weight: 800; font-family: 'Space Grotesk', sans-serif; color: #FFF; }
.current-price .cents { font-size: 1.5rem; }
.savings { display: block; color: var(--neon-lime); font-size: 0.85rem; font-weight: 700; margin-top: 4px; }

.plan-features { list-style: none; margin-bottom: 30px; }
.plan-features li { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; font-size: 0.95rem; color: #E2E8F0; }
.plan-features i { color: var(--neon-cyan); }

/* Futebol com Escudos */
.football-ai { padding: 70px 0; }
.ai-status-text { font-size: 0.95rem; color: var(--neon-cyan); margin-top: 8px; }
.matches-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; }

.match-card {
    background: var(--bg-card); border: 1px solid var(--border-glow); padding: 20px;
    border-radius: var(--radius-md); display: flex; flex-direction: column; gap: 14px;
}
.match-header { display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; color: var(--text-muted); }
.match-league { font-weight: 700; color: var(--neon-cyan); }
.match-time { background: rgba(0, 240, 255, 0.15); color: var(--neon-cyan); padding: 4px 10px; border-radius: var(--radius-full); font-weight: 700; }

.match-teams-wrapper { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; }
.team-box { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 1rem; width: 42%; }
.team-box.team-b { justify-content: flex-end; }
.team-flag { width: 32px; height: 32px; object-fit: contain; filter: drop-shadow(0 0 5px rgba(255,255,255,0.2)); }

.match-vs { font-weight: 800; color: var(--neon-pink); font-size: 0.9rem; }
.match-channel { font-size: 0.85rem; color: var(--text-muted); border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px; display: flex; align-items: center; gap: 8px; }

/* Plataformas */
.platforms { padding: 60px 0; }
.platforms-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 16px; }
.platform-card {
    background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); padding: 24px;
    border-radius: var(--radius-md); text-align: center; display: flex; flex-direction: column;
    align-items: center; gap: 12px; transition: var(--transition);
}
.platform-card:hover { border-color: var(--neon-cyan); transform: translateY(-5px); }
.platform-card i { font-size: 2.2rem; }

/* Catálogo HD */
.catalog { padding: 70px 0; }
.catalog-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
.catalog-card { border-radius: var(--radius-md); overflow: hidden; background: var(--bg-card); border: 1px solid rgba(255,255,255,0.08); position: relative; }
.catalog-card img { width: 100%; height: 200px; object-fit: cover; }
.catalog-card h3 { padding: 16px; font-size: 1.1rem; }
.catalog-tag { position: absolute; top: 12px; left: 12px; background: rgba(6, 9, 19, 0.85); color: var(--neon-cyan); padding: 4px 12px; border-radius: var(--radius-full); font-size: 0.75rem; font-weight: 700; }

/* Botão WhatsApp */
.whatsapp-float {
    position: fixed; bottom: 30px; right: 30px;
    width: 60px; height: 60px; background-color: var(--whatsapp-green);
    color: #FFF; border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-size: 2rem; box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5); z-index: 1000;
    transition: var(--transition); text-decoration: none;
}
.whatsapp-float:hover { transform: scale(1.1); box-shadow: 0 6px 25px rgba(37, 211, 102, 0.8); }

.footer { padding: 40px 0; border-top: 1px solid rgba(255, 255, 255, 0.08); text-align: center; color: var(--text-muted); }

@media (max-width: 800px) {
    .hero-grid { grid-template-columns: 1fr; }
    .hero-title { font-size: 2.3rem; }
    .nav-menu { display: none; }
}
