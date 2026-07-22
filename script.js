// --- ESTADO DO SISTEMA ---
let cardapio = JSON.parse(localStorage.getItem('tech_cardapio')) || [
    { id: 1, nome: "Cerveja Heineken 600ml", preco: 14.50, codigo: "78910001" },
    { id: 2, nome: "Chopp Artesanal 500ml", preco: 12.00, codigo: "78910002" },
    { id: 3, nome: "Red Bull Energy", preco: 16.00, codigo: "78910003" },
    { id: 4, nome: "Porção Batata Rústica", preco: 42.00, codigo: "" }
];

let totalCaixaDia = parseFloat(localStorage.getItem('tech_total_caixa')) || 0.00;
let modoAtual = 'balcao';
let itensBalcao = [];

let mesas = JSON.parse(localStorage.getItem('tech_mesas')) || [
    { id: 1, nome: "MESA 01", ocupada: false, itens: [] },
    { id: 2, nome: "MESA 02", ocupada: false, itens: [] },
    { id: 3, nome: "MESA 03", ocupada: false, itens: [] },
    { id: 4, nome: "MESA 04", ocupada: false, itens: [] }
];
let mesaSelecionadaId = null;

// --- SALVAMENTO E SINCRONIZAÇÃO ---
function salvarEstado() {
    localStorage.setItem('tech_cardapio', JSON.stringify(cardapio));
    localStorage.setItem('tech_mesas', JSON.stringify(mesas));
    localStorage.setItem('tech_total_caixa', totalCaixaDia.toString());
}

// --- NAVEGAÇÃO DE INTERFACE ---
function switchTab(tab) {
    document.getElementById('tab-cat').classList.toggle('active', tab === 'catalogo');
    document.getElementById('tab-cad').classList.toggle('active', tab === 'cadastro');
    document.getElementById('view-catalogo').classList.toggle('hidden', tab !== 'catalogo');
    document.getElementById('view-cadastro').classList.toggle('hidden', tab !== 'cadastro');
}

function switchMode(modo) {
    modoAtual = modo;
    document.getElementById('mode-balcao').classList.toggle('active', modo === 'balcao');
    document.getElementById('mode-mesas').classList.toggle('active', modo === 'mesas');
    document.getElementById('view-balcao').classList.toggle('hidden', modo !== 'balcao');
    document.getElementById('view-mesas').classList.toggle('hidden', modo !== 'mesas');
}

// --- CATALOGO E PRODUTOS ---
function renderCardapio(lista = cardapio) {
    const grid = document.getElementById('grid-produtos');
    if (!grid) return;
    
    if (lista.length === 0) {
        grid.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center; padding: 20px;">Nenhum produto cadastrado.</p>`;
        return;
    }

    grid.innerHTML = lista.map(p => `
        <div class="product-card" onclick="adicionarProdutoPorId(${p.id})">
            <button class="btn-del-prod" title="Remover" onclick="excluirProduto(event, ${p.id})">✕</button>
            <h4>${p.nome}</h4>
            <div class="price mono">R$ ${p.preco.toFixed(2)}</div>
            ${p.codigo ? `<span class="sku mono">SKU: ${p.codigo}</span>` : ''}
        </div>
    `).join('');
}

function filtrarCardapio() {
    const termo = document.getElementById('busca-produto').value.toLowerCase();
    const filtrados = cardapio.filter(p => p.nome.toLowerCase().includes(termo));
    renderCardapio(filtrados);
}

function cadastrarProduto(e) {
    e.preventDefault();
    const nome = document.getElementById('cad-nome').value.trim();
    const preco = parseFloat(document.getElementById('cad-preco').value);
    const codigo = document.getElementById('cad-codigo').value.trim();

    if (!nome || isNaN(preco)) return;

    cardapio.push({ id: Date.now(), nome, preco, codigo });
    salvarEstado();

    document.getElementById('cad-nome').value = '';
    document.getElementById('cad-preco').value = '';
    document.getElementById('cad-codigo').value = '';

    renderCardapio();
    switchTab('catalogo');
}

function excluirProduto(e, id) {
    e.stopPropagation();
    if (confirm("Remover este produto permanentemente do banco de dados?")) {
        cardapio = cardapio.filter(p => p.id !== id);
        salvarEstado();
        renderCardapio();
    }
}

// --- OPERAÇÃO DE SCANNER / CÓDIGO DE BARRAS ---
document.addEventListener('DOMContentLoaded', () => {
    const inputBarcode = document.getElementById('input-barcode');
    if (inputBarcode) {
        inputBarcode.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const codigoBipado = this.value.trim();
                if (codigoBipado) {
                    const produto = cardapio.find(p => p.codigo === codigoBipado || p.nome.toLowerCase().includes(codigoBipado.toLowerCase()));
                    if (produto) {
                        adicionarProdutoObjeto(produto);
                    } else {
                        alert(`Item não localizado no sistema.`);
                    }
                }
                this.value = '';
            }
        });
    }

    renderCardapio();
    renderMesas();
    document.getElementById('total-caixa-dia').innerText = `R$ ${totalCaixaDia.toFixed(2)}`;
});

// --- LÓGICA DO CARRINHO ---
function adicionarProdutoPorId(id) {
    const produto = cardapio.find(p => p.id === id);
    if (produto) adicionarProdutoObjeto(produto);
}

function adicionarProdutoObjeto(produto) {
    if (modoAtual === 'balcao') {
        const item = itensBalcao.find(i => i.id === produto.id);
        if (item) { item.qtd += 1; } else { itensBalcao.push({ ...produto, qtd: 1 }); }
        updateBalcao();
    } else {
        if (!mesaSelecionadaId) return alert("Selecione uma mesa ativa primeiro!");
        const mesa = mesas.find(m => m.id === mesaSelecionadaId);
        mesa.ocupada = true;
        const item = mesa.itens.find(i => i.id === produto.id);
        if (item) { item.qtd += 1; } else { mesa.itens.push({ ...produto, qtd: 1 }); }
        salvarEstado();
        renderMesas();
        updateMesaSelecionada();
    }
}

function changeQtyBalcao(id, delta) {
    const item = itensBalcao.find(i => i.id === id);
    if (!item) return;
    item.qtd += delta;
    if (item.qtd <= 0) itensBalcao = itensBalcao.filter(i => i.id !== id);
    updateBalcao();
}

function updateBalcao() {
    const container = document.getElementById('itens-balcao');
    const totalEl = document.getElementById('total-balcao');

    if (itensBalcao.length === 0) {
        container.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 20px;">Caixa Livre (Carrinho Vazio)</p>`;
        totalEl.innerText = "R$ 0,00";
        calculateChange('balcao');
        return;
    }

    container.innerHTML = itensBalcao.map(item => `
        <div class="cart-item">
            <div>
                <strong>${item.nome}</strong>
                <div style="font-size:0.7rem; color:var(--text-muted)">R$ ${item.preco.toFixed(2)} /un</div>
            </div>
            <div class="qty-controls">
                <button class="qty-btn" onclick="changeQtyBalcao(${item.id}, -1)">-</button>
                <span class="mono">${item.qtd}</span>
                <button class="qty-btn" onclick="changeQtyBalcao(${item.id}, 1)">+</button>
                <span class="mono" style="min-width: 60px; text-align: right; color: var(--primary-cyan)">R$ ${(item.preco * item.qtd).toFixed(2)}</span>
            </div>
        </div>
    `).join('');

    const total = itensBalcao.reduce((sum, item) => sum + (item.preco * item.qtd), 0);
    totalEl.innerText = `R$ ${total.toFixed(2)}`;
    calculateChange('balcao');
}

// --- REGRAS BANCÁRIAS E TROCO ---
function checkPaymentMethod(modo) {
    const forma = document.getElementById(`pagamento-${modo}`).value;
    const boxDinheiro = document.getElementById(`cash-box-${modo}`);
    if (boxDinheiro) {
        boxDinheiro.classList.toggle('hidden', forma !== 'Dinheiro');
    }
}

function calculateChange(modo) {
    const total = itensBalcao.reduce((sum, item) => sum + (item.preco * item.qtd), 0);
    const recebido = parseFloat(document.getElementById(`valor-recebido-${modo}`).value) || 0;
    const trocoEl = document.getElementById(`troco-valor-${modo}`);
    const troco = recebido - total;
    trocoEl.innerText = troco > 0 ? `R$ ${troco.toFixed(2)}` : `R$ 0,00`;
}

function fecharVendaBalcao() {
    if (itensBalcao.length === 0) return alert("Adicione itens para processar a venda.");
    const forma = document.getElementById('pagamento-balcao').value;
    const total = itensBalcao.reduce((sum, item) => sum + (item.preco * item.qtd), 0);

    totalCaixaDia += total;
    salvarEstado();
    document.getElementById('total-caixa-dia').innerText = `R$ ${totalCaixaDia.toFixed(2)}`;

    itensBalcao = [];
    document.getElementById('valor-recebido-balcao').value = '';
    updateBalcao();
    
    alert(`TRANSAÇÃO APROVADA!\n\nForma: ${forma}\nValor Total: R$ ${total.toFixed(2)}`);
}

// --- GESTÃO DE MESAS ---
function adicionarMesa() {
    const id = mesas.length + 1;
    mesas.push({ id, nome: `MESA ${id < 10 ? '0' + id : id}`, ocupada: false, itens: [] });
    salvarEstado();
    renderMesas();
}

function renderMesas() {
    const grid = document.getElementById('grid-mesas');
    if (!grid) return;
    grid.innerHTML = mesas.map(m => `
        <div class="table-card ${m.ocupada ? 'occupied' : ''} ${m.id === mesaSelecionadaId ? 'selected' : ''}" onclick="selectMesa(${m.id})">
            ${m.nome}
        </div>
    `).join('');
}

function selectMesa(id) {
    mesaSelecionadaId = id;
    renderMesas();
    updateMesaSelecionada();
}

function updateMesaSelecionada() {
    const details = document.getElementById('detalhes-mesa');
    if (!mesaSelecionadaId) { details.classList.add('hidden'); return; }

    details.classList.remove('hidden');
    const mesa = mesas.find(m => m.id === mesaSelecionadaId);
    document.getElementById('titulo-mesa-selecionada').innerText = mesa.nome;

    const container = document.getElementById('itens-mesa');
    const totalEl = document.getElementById('total-mesa');

    if (mesa.itens.length === 0) {
        container.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 15px;">Sem ordens em aberto.</p>`;
        totalEl.innerText = "R$ 0,00";
        return;
    }

    container.innerHTML = mesa.itens.map(item => `
        <div class="cart-item">
            <div><strong>${item.nome}</strong></div>
            <div class="qty-controls">
                <span class="mono">${item.qtd}x</span>
                <span class="mono" style="color:var(--primary-cyan)">R$ ${(item.preco * item.qtd).toFixed(2)}</span>
            </div>
        </div>
    `).join('');

    const total = mesa.itens.reduce((sum, item) => sum + (item.preco * item.qtd), 0);
    totalEl.innerText = `R$ ${total.toFixed(2)}`;
}

function fecharMesa() {
    if (!mesaSelecionadaId) return;
    const mesa = mesas.find(m => m.id === mesaSelecionadaId);
    if (mesa.itens.length === 0) return alert("Mesa sem consumo cadastrado.");

    const total = mesa.itens.reduce((sum, item) => sum + (item.preco * item.qtd), 0);
    totalCaixaDia += total;

    mesa.itens = [];
    mesa.ocupada = false;

    salvarEstado();
    document.getElementById('total-caixa-dia').innerText = `R$ ${totalCaixaDia.toFixed(2)}`;
    renderMesas();
    updateMesaSelecionada();
    
    alert(`CONTA ENCERRADA - ${mesa.nome}\nTotal Pago: R$ ${total.toFixed(2)}`);
}

// --- IMPRESSÃO / RECIBO FISCAL ---
function imprimirComprovante(tipo) {
    let lista = tipo === 'balcao' ? itensBalcao : (mesas.find(m => m.id === mesaSelecionadaId)?.itens || []);
    if (lista.length === 0) return alert("Sem dados para emissão de cupom.");

    const total = lista.reduce((sum, item) => sum + (item.preco * item.qtd), 0);
    const printArea = document.getElementById('area-cupom-impressao');

    printArea.innerHTML = `
        <div style="text-align: center; font-weight: bold;">*** COMPROVANTE NON-FISCAL ***</div>
        <div style="text-align: center;">CAIXALIVRE TECH PRO</div>
        <div>--------------------------------</div>
        <div>DATA: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</div>
        <div>--------------------------------</div>
        ${lista.map(i => `
            <div style="display:flex; justify-content:space-between;">
                <span>${i.qtd}x ${i.nome}</span>
                <span>R$ ${(i.preco * i.qtd).toFixed(2)}</span>
            </div>
        `).join('')}
        <div>--------------------------------</div>
        <div style="display:flex; justify-content:space-between; font-weight:bold;">
            <span>TOTAL:</span>
            <span>R$ ${total.toFixed(2)}</span>
        </div>
    `;

    window.print();
}