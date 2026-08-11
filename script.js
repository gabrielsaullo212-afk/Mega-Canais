/* --- PALETA MEGA CANAIS (CIBERNÉTICA & STREAMING) --- */
:root {
    --bg-dark: #070A12;
    --bg-card: rgba(15, 23, 42, 0.75);
    
    --primary-neon: #10B981;     /* Verde Esmeralda */
    --primary-glow: rgba(16, 185, 129, 0.35);
    
    --secondary-cyan: #06B6D4;   /* Azul Ciano */
    --secondary-glow: rgba(6, 182, 212, 0.35);

    --accent-red: #EF4444;       /* Vermelho Live */
    
    --text-main: #F8FAFC;
    --text-muted: #94A3B8;
    
    --border-glow: rgba(16, 185, 129, 0.25);
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
    color: var(--text-main);
    line-height: 1.6;
    overflow-x: hidden;
    background-image: 
        radial-gradient(circle at 15% 15%, rgba(16, 185, 129, 0.1) 0%, transparent 40%),
        radial-gradient(circle at 85% 65%, rgba(6, 182, 212, 0.1) 0%, transparent 40%);
    background-attachment: fixed;
}

h1, h2, h3, h4 { font-family: 'Space Grotesk', sans-serif; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

.text-gradient {
    background: linear-gradient(135deg, var(--primary-neon) 0%, var(--secondary-cyan) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Header */
.header {
    position: sticky; top: 0;
    background: rgba(7, 10, 18, 0.85);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    z-index: 100; padding: 18px 0;
}
.nav-wrapper { display: flex; justify-content: space-between; align-items: center; }
.logo { display: flex; align-items: center; gap: 12px; font-size: 1.5rem; font-weight: 800; text-decoration: none; color: #FFF; }
.logo-icon {
    width: 42px; height: 42px; background: linear-gradient(135deg, var(--primary-neon), var(--secondary-cyan));
    color: var(--bg-dark); border-radius: 12px; display: flex; align-items: center; justify-content: center;
    box-shadow: 0 0 20px var(--primary-glow);
}
.nav-menu { display: flex; align-items: center; gap: 32px; list-style: none; }
.nav-link { text-decoration: none; color: var(--text-muted); font-weight: 600; font-size: 0.95rem; transition: var(--transition); }
.nav-link:hover { color: var(--primary-neon); }

/* Botões */
.btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 10px;
    padding: 12px 26px; font-size: 0.9rem; font-weight: 700; border-radius: var(--radius-full);
    text-decoration: none; transition: var(--transition); border: none; cursor: pointer;
    font-family: 'Space Grotesk', sans-serif; text-transform: uppercase;
}
.btn-neon { background: linear-gradient(135deg, var(--primary-neon), var(--secondary-cyan)); color: var(--bg-dark); box-shadow: 0 0 20px var(--primary-glow); }
.btn-neon:hover { transform: translateY(-2px); box-shadow: 0 0 30px var(--secondary-glow); }
.btn-outline { background: transparent; color: #FFF; border: 2px solid var(--secondary-cyan); }
.btn-outline:hover { background: var(--secondary-cyan); color: var(--bg-dark); }

/* Hero Section */
.hero { padding: 80px 0 60px; }
.hero-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 40px; align-items: center; }
.badge {
    display: inline-flex; align-items: center; gap: 8px; padding: 8px 18px;
    background: rgba(16, 185, 129, 0.1); border: 1px solid var(--primary-neon); color: var(--primary-neon);
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
.preview-card i { font-size: 2rem; color: var(--secondary-cyan); margin-bottom: 10px; }

/* Plataformas */
.platforms { padding: 60px 0; }
.section-header { text-align: center; max-width: 650px; margin: 0 auto 50px; }
.section-tag { color: var(--secondary-cyan); font-weight: 700; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.15em; }
.section-title { font-size: 2.2rem; font-weight: 800; margin-top: 8px; }

.platforms-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 16px; }
.platform-card {
    background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); padding: 24px;
    border-radius: var(--radius-md); text-align: center; display: flex; flex-direction: column;
    align-items: center; gap: 12px; transition: var(--transition);
}
.platform-card:hover { transform: translateY(-50px); border-color: var(--primary-neon); transform: translateY(-5px); }
.platform-card i { font-size: 2rem; }

/* Cores das Plataformas */
.globoplay i { color: #FF0000; }
.hbo i { color: #9933FF; }
.disney i { color: #0066FF; }
.paramount i { color: #0088FF; }
.telecine i { color: #FF3300; }
.apple i { color: #FFFFFF; }

/* Grade de Jogos Futebol IA */
.football-ai { padding: 60px 0; background: rgba(15, 23, 42, 0.3); border-y: 1px solid rgba(255, 255, 255, 0.05); }
.ai-status-text { font-size: 0.95rem; color: var(--primary-neon); margin-top: 8px; }

.matches-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; }
.match-card {
    background: var(--bg-card); border: 1px solid var(--border-glow); padding: 20px;
    border-radius: var(--radius-md); display: flex; flex-direction: column; gap: 12px;
}
.match-header { display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; color: var(--text-muted); }
.match-league { font-weight: 700; color: var(--secondary-cyan); }
.match-time { background: rgba(239, 68, 68, 0.2); color: var(--accent-red); padding: 4px 10px; border-radius: var(--radius-full); font-weight: 700; }

.match-teams { display: flex; justify-content: space-between; align-items: center; font-weight: 700; font-size: 1.1rem; padding: 10px 0; }
.match-channel { font-size: 0.85rem; color: var(--text-muted); border-top: 1px solid rgba(255, 255, 255, 0.05); pt: 10px; display: flex; align-items: center; gap: 8px; }

/* Catálogo */
.catalog { padding: 70px 0; }
.catalog-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
.catalog-card { border-radius: var(--radius-md); overflow: hidden; background: var(--bg-card); border: 1px solid rgba(255,255,255,0.08); position: relative; }
.catalog-card img { width: 100%; height: 200px; object-fit: cover; }
.catalog-card h3 { padding: 16px; font-size: 1.1rem; }
.catalog-tag { position: absolute; top: 12px; left: 12px; background: rgba(7, 10, 18, 0.8); color: var(--primary-neon); padding: 4px 12px; border-radius: var(--radius-full); font-size: 0.75rem; font-weight: 700; }

.footer { padding: 40px 0; border-top: 1px solid rgba(255, 255, 255, 0.08); text-align: center; color: var(--text-muted); }

@media (max-width: 800px) {
    .hero-grid { grid-template-columns: 1fr; }
    .hero-title { font-size: 2.3rem; }
    .nav-menu { display: none; }
}
