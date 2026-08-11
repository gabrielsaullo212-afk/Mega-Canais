<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mega Canais - Filmes, Séries e Esportes Ao Vivo</title>
    <link rel="stylesheet" href="style.css">
    <!-- FontAwesome para ícones das marcas e esportes -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>

    <!-- Header / Nav -->
    <header>
        <div class="logo">
            <i class="fas fa-play-circle logo-icon"></i>
            <h2>Mega <span>Canais</span></h2>
        </div>
        <nav>
            <ul>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#plataformas">Plataformas</a></li>
                <li><a href="#jogos">Jogos de Hoje</a></li>
                <li><a href="#planos">Planos</a></li>
            </ul>
        </nav>
        <a href="https://wa.me/5561981389486?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20do%20Mega%20Canais!" target="_blank" class="btn-whatsapp nav-btn">
            <i class="fab fa-whatsapp"></i> Assinar Agora
        </a>
    </header>

    <!-- Hero Section -->
    <section id="inicio" class="hero">
        <div class="hero-bg-overlay"></div>
        <div class="hero-container">
            <div class="hero-image-box">
                <!-- Certifique-se de salvar a imagem enviada como 'capa.jpg' na mesma pasta -->
                <img src="capa.jpg" alt="Mega Canais Capa" id="capaImg" onerror="this.src='https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1000&auto=format&fit=crop'">
            </div>
            <div class="hero-content">
                <span class="badge-live"><i class="fas fa-circle"></i> TRANSMISSÃO EM 4K</span>
                <h1>Sua Experiência Definitiva de Entretenimento</h1>
                <p>Canais Ao Vivo, Filmes, Séries e o melhor do Futebol Mundial em um só lugar.</p>
                <div class="hero-buttons">
                    <a href="#planos" class="btn-primary"><i class="fas fa-rocket"></i> Ver Planos</a>
                    <a href="https://wa.me/5561981389486?text=Quero%20testar%20o%20Mega%20Canais%20gr%C3%A1tis" target="_blank" class="btn-secondary">
                        <i class="fab fa-whatsapp"></i> Teste Grátis
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Plataformas com Ícones e Cores Personalizadas -->
    <section id="plataformas" class="platforms-section">
        <h2><i class="fas fa-layer-group"></i> Todas as plataformas inclusas</h2>
        <p class="sub-title">Acesse os melhores conteúdos sem pagar várias assinaturas</p>
        
        <div class="platforms-grid">
            <div class="platform-card netflix">
                <i class="fas fa-film"></i>
                <span>Netflix</span>
            </div>
            <div class="platform-card globoplay">
                <i class="fas fa-globe"></i>
                <span>Globoplay</span>
            </div>
            <div class="platform-card paramount">
                <i class="fas fa-mountain"></i>
                <span>Paramount+</span>
            </div>
            <div class="platform-card hbo">
                <i class="fas fa-tv"></i>
                <span>Max (HBO)</span>
            </div>
            <div class="platform-card telecine">
                <i class="fas fa-ticket-alt"></i>
                <span>Telecine</span>
            </div>
            <div class="platform-card starplus">
                <i class="fas fa-star"></i>
                <span>Star+</span>
            </div>
            <div class="platform-card appletv">
                <i class="fab fa-apple"></i>
                <span>Apple TV+</span>
            </div>
            <div class="platform-card aovivo">
                <i class="fas fa-broadcast-tower"></i>
                <span>+ Canais Ao Vivo</span>
            </div>
        </div>
    </section>

    <!-- Jogos AO VIVO -->
    <section id="jogos" class="matches-section">
        <div class="section-title">
            <h2><i class="fas fa-futbol"></i> Programação de Jogos do Dia</h2>
            <p>Monitore os principais confrontos de hoje transmitidos nas plataformas</p>
        </div>
        
        <div class="matches-container" id="matchesContainer">
            <!-- Os jogos serão inseridos via JavaScript -->
        </div>
    </section>

    <!-- Tabela de Preços de Planos -->
    <section id="planos" class="pricing-section">
        <h2>Escolha o Seu Plano</h2>
        <p class="sub-title">Sem fidelidade, cancele quando quiser</p>

        <div class="pricing-grid">
            
            <!-- Plano Mensal -->
            <div class="price-card">
                <div class="card-header">
                    <h3>Mensal</h3>
                    <p>Acesso completo por 30 dias</p>
                </div>
                <div class="price">R$ 35,00 <span>/mês</span></div>
                <ul>
                    <li><i class="fas fa-check-circle"></i> + de 2.000 Canais Ao Vivo</li>
                    <li><i class="fas fa-check-circle"></i> Filmes e Séries On Demand</li>
                    <li><i class="fas fa-check-circle"></i> Qualidade Full HD / 4K</li>
                    <li><i class="fas fa-check-circle"></i> Suporte rápido no WhatsApp</li>
                </ul>
                <a href="https://wa.me/5561981389486?text=Quero%20assinar%20o%20Plano%20Mensal%20(R$35,00)" target="_blank" class="btn-card">Assinar Plano Mensal</a>
            </div>

            <!-- Plano Semestral (Destaque) -->
            <div class="price-card featured">
                <div class="badge">O MAIS VENDIDO</div>
                <div class="card-header">
                    <h3>Semestral</h3>
                    <p>Economia inteligente por 6 meses</p>
                </div>
                <div class="price">R$ 120,00 <span>/6 meses</span></div>
                <ul>
                    <li><i class="fas fa-check-circle"></i> Todos os benefícios do Mensal</li>
                    <li><i class="fas fa-check-circle"></i> <strong>Economize R$ 90,00</strong></li>
                    <li><i class="fas fa-check-circle"></i> Acesso em até 2 telas</li>
                    <li><i class="fas fa-check-circle"></i> Atendimento Prioritário</li>
                </ul>
                <a href="https://wa.me/5561981389486?text=Quero%20assinar%20o%20Plano%20Semestral%20(R$120,00)" target="_blank" class="btn-card featured-btn">Assinar Plano Semestral</a>
            </div>

            <!-- Plano Anual -->
            <div class="price-card">
                <div class="card-header">
                    <h3>Anual</h3>
                    <p>A melhor opção a longo prazo</p>
                </div>
                <div class="price">R$ 170,00 <span>/ano</span></div>
                <ul>
                    <li><i class="fas fa-check-circle"></i> Acesso por 1 ano completo</li>
                    <li><i class="fas fa-check-circle"></i> <strong>Máxima Economia</strong></li>
                    <li><i class="fas fa-check-circle"></i> Atualizações diárias de conteúdo</li>
                    <li><i class="fas fa-check-circle"></i> Suporte VIP 24h</li>
                </ul>
                <a href="https://wa.me/5561981389486?text=Quero%20assinar%20o%20Plano%20Anual%20(R$170,00)" target="_blank" class="btn-card">Assinar Plano Anual</a>
            </div>

        </div>
    </section>

    <!-- Botão Flutuante do WhatsApp -->
    <a href="https://wa.me/5561981389486?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." class="whatsapp-float" target="_blank" title="Fale no WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>

    <footer>
        <p>&copy; 2026 Mega Canais. Todos os direitos reservados.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
