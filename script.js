/* ========================================
   LISTA DE PRESENTES DE CASAMENTO - JAVASCRIPT
   Mobile-First com Bootstrap 5
   Funcionalidades: Modais, PIX, Interações Touch
======================================== */

// ========================================
// DADOS DOS PRESENTES
// ========================================

const gifts = [
    {
        id: 1,
        name: "Ferro de passar",
        price: "R$ 120,00",
        image: "imagens/p1.png"
    },
    {
        id: 2,
        name: "Liquidificador",
        price: "R$ 130,00",
        image: "imagens/p2.png"
    },
    {
        id: 3,
        name: "Sanduicheira",
        price: "R$ 80,00",
        image: "imagens/p3.png"
    },
    {
        id: 4,
        name: "Primeiro lugar na fila do Buffet",
        price: "R$ 150,00",
        image: "imagens/p4.png"
    },
    {
        id: 5,
        name: "Processador de alimentos",
        price: "R$ 200,00",
        image: "imagens/p5.png"
    },
    {
        id: 6,
        name: "Jogo de facas",
        price: "R$ 55,00",
        image: "imagens/p6.png"
    },
    {
        id: 7,
        name: "Faqueiro",
        price: "R$ 78,00",
        image: "imagens/p7.png"
    },
    {
        id: 8,
        name: "1 ano de passe livre de sexta a noite da jogatina",
        price: "R$ 200,00",
        image: "imagens/p8.png"
    },
    {
        id: 9,
        name: "Pratos brancos",
        price: "R$ 75,00",
        image: "imagens/p9.png"
    },
    {
        id: 10,
        name: "Pratos transparentes",
        price: "R$ 53,00",
        image: "imagens/p10.png"
    },
        {
        id: 11,
        name: "Pratos de sobremesa",
        price: "R$ 51,00",
        image: "imagens/p11.png"
    },
    {
        id: 12,
        name: "Aparelho de Jantar",
        price: "R$ 290,00",
        image: "imagens/p12.png"
    },
    {
        id: 13,
        name: "Jogo de Tigelas",
        price: "R$ 182,00",
        image: "imagens/p13.png"
    },
    {
        id: 14,
        name: "Assadeiras de alumínio",
        price: "R$ 56,00",
        image: "imagens/p14.png"
    },
    {
        id: 15,
        name: "Formas de bolo",
        price: "R$ 56,00",
        image: "imagens/p15.png"
    },
    {
        id: 16,
        name: "Conchas de silicone",
        price: "R$ 70,00",
        image: "imagens/p16.png"
    },
    {
        id: 17,
        name: "Jogo de Panelas ",
        price: "R$ 380,00",
        image: "imagens/p17.png"
    },
    {
        id: 18,
        name: "Gela água",
        price: "R$ 700,00",
        image: "imagens/p18.png"
    },
    {
        id: 19,
        name: "Xícaras pequenas",
        price: "R$ 78,00",
        image: "imagens/p19.png"
    },
    {
        id: 20,
        name: "Frigideiras",
        price: "R$ 83,00",
        image: "imagens/p20.png"
    },    
    {
        id: 21,
        name: "Kit de utensílios",
        price: "R$ 58,00",
        image: "imagens/p21.png"
    },
    {
        id: 22,
        name: "Escorredor de pratos",
        price: "R$ 65,00",
        image: "imagens/p22.png"
    },
    {
        id: 23,
        name: "Cota de compra da geladeira",
        price: "R$ 250,00",
        image: "imagens/p23.png"
    },
    {
        id: 24,
        name: "Forno elétrico",
        price: "R$ 450,00",
        image: "imagens/p24.png"
    },
    {
        id: 25,
        name: "Tábua de passar roupa",
        price: "R$ 62,00",
        image: "imagens/p25.png"
    },
    {
        id: 26,
        name: "Mesas de cabeceira",
        price: "R$ 180,00",
        image: "imagens/p26.png"
    },
    {
        id: 27,
        name: "Cooktop",
        price: "R$ 450,00",
        image: "imagens/p27.png"
    },
    {
        id: 28,
        name: "Bacias vidro grandes",
        price: "R$ 144,00",
        image: "imagens/p28.png"
    },
    {
        id: 29,
        name: "Kit de bacias",
        price: "R$ 62,00",
        image: "imagens/p29.png"
    },
    {
        id: 30,
        name: "Suqueiras",
        price: "R$ 55,00",
        image: "imagens/p30.png"
    },
    {
        id: 31,
        name: "Potes de sobremesa",
        price: "R$ 50,00",
        image: "imagens/p31.png"
    },
    {
        id: 32,
        name: "Garrafa de café",
        price: "R$ 54,00",
        image: "imagens/p32.png"
    },
    {
        id: 33,
        name: "Potes de tempero",
        price: "R$ 80,00",
        image: "imagens/p33.png"
    },
    {
        id: 34,
        name: "Organizadores",
        price: "R$ 138,00",
        image: "imagens/p34.png"
    },
    {
        id: 35,
        name: " Mop de limpeza",
        price: "R$ 70,00",
        image: "imagens/p35.png"
    },
    {
        id: 36,
        name: "Jogo de taças",
        price: "R$ 70,00",
        image: "imagens/p36.png"
    },
    {
        id: 37,
        name: "Panela de pressão ",
        price: "R$ 130,00",
        image: "imagens/p37.png"
    }

    
];

// ========================================
// CONFIGURAÇÕES PIX
// ========================================

const pixConfig = {
    key: "seuemail@exemplo.com", // Substitua pela chave PIX real
    qrCode: "imagens/qrcode-pix.png" // Caminho para o QR Code
};

// ========================================
// VARIÁVEIS GLOBAIS
// ========================================

let currentGift = null;
let pixModal = null;
let isTouch = false;

// ========================================
// DETECÇÃO DE DISPOSITIVO TOUCH
// ========================================

function detectTouch() {
    isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
        document.body.classList.add('touch-device');
    }
    console.log('📱 Dispositivo touch detectado:', isTouch);
}

// ========================================
// INICIALIZAÇÃO DA PÁGINA
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Lista de Presentes carregada!');
    
    // Detectar dispositivo touch
    detectTouch();
    
    // Inicializar modal Bootstrap
    initializeModal();
    
    // Renderizar os presentes
    renderGifts();
    
    // Configurar eventos
    setupEventListeners();
    
    // Configurar efeito parallax (apenas desktop)
    if (!isTouch) {
        setupParallaxEffect();
    }
    
    // Configurar lazy loading para imagens
    setupLazyLoading();
    
    console.log(`📦 ${gifts.length} presentes carregados com sucesso!`);
});

// ========================================
// INICIALIZAÇÃO DO MODAL BOOTSTRAP
// ========================================

function initializeModal() {
    const modalElement = document.getElementById('pixModal');
    if (modalElement) {
        pixModal = new bootstrap.Modal(modalElement, {
            backdrop: true,
            keyboard: true,
            focus: true
        });
        
        // Eventos do modal
        modalElement.addEventListener('shown.bs.modal', function() {
            console.log('✅ Modal PIX aberto');
            // Foco no botão copiar para acessibilidade
            const copyBtn = document.getElementById('copyPixBtn');
            if (copyBtn) {
                copyBtn.focus();
            }
        });
        
        modalElement.addEventListener('hidden.bs.modal', function() {
            console.log('✅ Modal PIX fechado');
            currentGift = null;
        });
    }
}

// ========================================
// RENDERIZAÇÃO DOS PRESENTES
// ========================================

function renderGifts() {
    const giftsContainer = document.getElementById('giftsContainer');
    
    if (!giftsContainer) {
        console.error('❌ Container de presentes não encontrado!');
        return;
    }
    
    // Limpar container
    giftsContainer.innerHTML = '';
    
    // Criar cards para cada presente
    gifts.forEach((gift, index) => {
        const giftCard = createGiftCard(gift, index);
        giftsContainer.appendChild(giftCard);
    });
    
    console.log('✅ Cards de presentes renderizados');
}

function createGiftCard(gift, index) {
    // Criar coluna Bootstrap
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-lg-4 col-xl-3';
    col.style.animationDelay = `${index * 0.1}s`;
    
    // HTML do card
    col.innerHTML = `
        <div class="card gift-card h-100 border-0 shadow-sm">
            <div class="position-relative overflow-hidden">
                <img src="${gift.image}" 
                     alt="${gift.name}" 
                     class="card-img-top gift-image"
                     loading="lazy"
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjhGOUZBIi8+CjxwYXRoIGQ9Ik0xNjAgODBIMjQwVjEyMEgxNjBWODBaIiBmaWxsPSIjREREIi8+CjxwYXRoIGQ9Ik0xODAgMTAwSDIyMFYxMTBIMTgwVjEwMFoiIGZpbGw9IiNCQkIiLz4KPHR5cGUgeD0iMjAwIiB5PSIxNTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5OTkiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCI+UHJlc2VudGU8L3RleHQ+Cjwvc3ZnPgo='">
            </div>
            <div class="card-body gift-content d-flex flex-column">
                <h5 class="card-title gift-name">${gift.name}</h5>
                <p class="gift-price fw-bold mb-3">${gift.price}</p>
                <button class="btn gift-button mt-auto touch-target" 
                        onclick="openPixModal(${gift.id})"
                        data-gift-id="${gift.id}">
                    <i class="bi bi-gift me-2"></i>Presentear
                </button>
            </div>
        </div>
    `;
    
    return col;
}

// ========================================
// FUNCIONALIDADES DO MODAL PIX
// ========================================

function openPixModal(giftId) {
    // Encontrar o presente
    currentGift = gifts.find(gift => gift.id === giftId);
    
    if (!currentGift) {
        console.error('❌ Presente não encontrado:', giftId);
        showToast('Erro ao carregar presente', 'error');
        return;
    }
    
    console.log('🎁 Abrindo modal para:', currentGift.name);
    
    // Atualizar informações no modal
    updateModalContent();
    
    // Mostrar modal Bootstrap
    if (pixModal) {
        pixModal.show();
    }
    
    // Analytics/tracking (opcional)
    trackGiftClick(giftId, currentGift.name);
}

function updateModalContent() {
    if (!currentGift) return;
    
    // Atualizar nome do presente
    const giftNameModal = document.getElementById('giftNameModal');
    if (giftNameModal) {
        giftNameModal.textContent = currentGift.name;
    }
    
    // Atualizar valor
    const pixValue = document.getElementById('pixValue');
    if (pixValue) {
        pixValue.value = currentGift.price;
    }
    
    // Atualizar chave PIX
    const pixKey = document.getElementById('pixKey');
    if (pixKey) {
        pixKey.value = pixConfig.key;
    }
    
    console.log('✅ Conteúdo do modal atualizado');
}

// ========================================
// FUNCIONALIDADE COPIAR PIX
// ========================================

function setupEventListeners() {
    // Botão copiar PIX
    const copyBtn = document.getElementById('copyPixBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', copyPixKey);
    }
    
    // Eventos de teclado para acessibilidade
    document.addEventListener('keydown', function(e) {
        // Fechar modal com ESC
        if (e.key === 'Escape' && pixModal && pixModal._isShown) {
            pixModal.hide();
        }
    });
    
    console.log('✅ Event listeners configurados');
}

async function copyPixKey() {
    const pixKeyInput = document.getElementById('pixKey');
    const copyBtn = document.getElementById('copyPixBtn');
    
    if (!pixKeyInput || !copyBtn) {
        console.error('❌ Elementos de cópia não encontrados');
        return;
    }
    
    try {
        // Usar API moderna de clipboard se disponível
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(pixKeyInput.value);
            showCopySuccess(copyBtn);
            showToast('Chave PIX copiada!', 'success');
        } else {
            // Fallback para dispositivos mais antigos
            pixKeyInput.select();
            pixKeyInput.setSelectionRange(0, 99999); // Para mobile
            
            const successful = document.execCommand('copy');
            if (successful) {
                showCopySuccess(copyBtn);
                showToast('Chave PIX copiada!', 'success');
            } else {
                throw new Error('Comando de cópia falhou');
            }
        }
        
        console.log('✅ Chave PIX copiada:', pixKeyInput.value);
        
        // Analytics/tracking
        trackPixCopy(currentGift ? currentGift.name : 'Desconhecido');
        
    } catch (err) {
        console.error('❌ Erro ao copiar:', err);
        showToast('Erro ao copiar. Tente selecionar o texto manualmente.', 'error');
        
        // Selecionar texto como fallback
        pixKeyInput.select();
        pixKeyInput.focus();
    }
}

function showCopySuccess(button) {
    const originalHTML = button.innerHTML;
    const originalClass = button.className;
    
    // Mostrar feedback visual
    button.innerHTML = '<i class="bi bi-check-circle me-1"></i>Copiado!';
    button.className = button.className.replace('btn-outline-secondary', 'btn-success btn-success-feedback');
    
    // Restaurar após 2 segundos
    setTimeout(() => {
        button.innerHTML = originalHTML;
        button.className = originalClass;
    }, 2000);
}

// ========================================
// SISTEMA DE TOAST PARA FEEDBACK
// ========================================

function showToast(message, type = 'info') {
    // Criar toast container se não existir
    let toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toastContainer';
        toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
        toastContainer.style.zIndex = '9999';
        document.body.appendChild(toastContainer);
    }
    
    // Criar toast
    const toastId = 'toast-' + Date.now();
    const iconClass = type === 'success' ? 'bi-check-circle-fill text-success' : 
                     type === 'error' ? 'bi-exclamation-triangle-fill text-danger' : 
                     'bi-info-circle-fill text-primary';
    
    const toastHTML = `
        <div id="${toastId}" class="toast align-items-center border-0 shadow-lg" role="alert">
            <div class="d-flex">
                <div class="toast-body d-flex align-items-center">
                    <i class="bi ${iconClass} me-2"></i>
                    ${message}
                </div>
                <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast"></button>
            </div>
        </div>
    `;
    
    toastContainer.insertAdjacentHTML('beforeend', toastHTML);
    
    // Inicializar e mostrar toast
    const toastElement = document.getElementById(toastId);
    const toast = new bootstrap.Toast(toastElement, {
        autohide: true,
        delay: 3000
    });
    
    toast.show();
    
    // Remover elemento após esconder
    toastElement.addEventListener('hidden.bs.toast', function() {
        toastElement.remove();
    });
}

// ========================================
// EFEITO PARALLAX (APENAS DESKTOP)
// ========================================

function setupParallaxEffect() {
    const heroSection = document.querySelector('.hero-section');
    
    if (!heroSection || isTouch) return;
    
    let ticking = false;
    
    function updateParallax() {
        const scrollTop = window.pageYOffset;
        const rate = scrollTop * -0.3;
        
        // Aplicar transformação apenas se o elemento estiver visível
        if (scrollTop < window.innerHeight) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    // Listener otimizado para scroll
    window.addEventListener('scroll', requestTick, { passive: true });
    
    console.log('✅ Efeito parallax configurado (desktop)');
}

// ========================================
// LAZY LOADING PARA IMAGENS
// ========================================

function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        // Observar todas as imagens lazy
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
        
        console.log('✅ Lazy loading configurado');
    }
}

// ========================================
// FUNÇÕES PARA PERSONALIZAÇÃO FÁCIL
// ========================================

// Função para adicionar novos presentes facilmente
function addGift(name, price, imagePath) {
    const newId = Math.max(...gifts.map(g => g.id)) + 1;
    
    gifts.push({
        id: newId,
        name: name,
        price: price,
        image: imagePath
    });
    
    // Re-renderizar se a página já estiver carregada
    if (document.readyState === 'complete') {
        renderGifts();
    }
    
    console.log('✅ Novo presente adicionado:', name);
}

// Função para atualizar configurações PIX
function updatePixConfig(newKey, newQrCodePath) {
    pixConfig.key = newKey;
    if (newQrCodePath) {
        pixConfig.qrCode = newQrCodePath;
        // Atualizar src do QR Code se modal estiver aberto
        const qrImg = document.querySelector('.qr-code');
        if (qrImg) {
            qrImg.src = newQrCodePath;
        }
    }
    
    console.log('✅ Configurações PIX atualizadas');
}

// Função para atualizar nomes do casal
function updateCoupleNames(brideName, groomName) {
    const brideElement = document.querySelector('.bride-name');
    const groomElement = document.querySelector('.groom-name');
    
    if (brideElement) brideElement.textContent = brideName;
    if (groomElement) groomElement.textContent = groomName;
    
    // Atualizar título da página
    document.title = `Lista de Presentes - ${brideName} & ${groomName}`;
    
    // Atualizar rodapé
    const footerText = document.querySelector('.footer p');
    if (footerText) {
        footerText.textContent = `© 2024 - Lista de Presentes ${brideName} & ${groomName}`;
    }
    
    console.log('✅ Nomes do casal atualizados');
}

// ========================================
// ANALYTICS E TRACKING (OPCIONAL)
// ========================================

function trackGiftClick(giftId, giftName) {
    console.log('📊 Presente clicado:', giftName);
    
    // Aqui você pode adicionar código para Google Analytics, Facebook Pixel, etc.
    // Exemplo: gtag('event', 'gift_click', { gift_id: giftId, gift_name: giftName });
    
    // Ou enviar para seu próprio sistema de analytics
    // fetch('/api/track', { method: 'POST', body: JSON.stringify({ event: 'gift_click', giftId, giftName }) });
}

function trackPixCopy(giftName) {
    console.log('📊 PIX copiado para:', giftName);
    
    // Exemplo de tracking
    // gtag('event', 'pix_copy', { gift_name: giftName });
}

// ========================================
// UTILITÁRIOS E HELPERS
// ========================================

// Formatar valor monetário
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// Debounce para otimizar eventos
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle para scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ========================================
// TRATAMENTO DE ERROS GLOBAL
// ========================================

window.addEventListener('error', function(e) {
    console.error('❌ Erro JavaScript:', e.error);
    showToast('Ocorreu um erro inesperado', 'error');
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('❌ Promise rejeitada:', e.reason);
    showToast('Erro de conexão', 'error');
});

// ========================================
// SERVICE WORKER (OPCIONAL - PWA)
// ========================================

// Registrar service worker se disponível
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Descomente para ativar PWA
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('✅ SW registrado:', registration))
        //     .catch(error => console.log('❌ SW falhou:', error));
    });
}

// ========================================
// MENSAGENS DE DEBUG (REMOVER EM PRODUÇÃO)
// ========================================

console.log(`
🎉 Lista de Presentes de Casamento
📱 Mobile-First com Bootstrap 5
📦 ${gifts.length} presentes disponíveis
🔑 Chave PIX: ${pixConfig.key}
✨ Sistema carregado com sucesso!

Para personalizar:
1. Edite o array 'gifts' com seus presentes
2. Atualize 'pixConfig.key' com sua chave PIX real
3. Substitua as imagens na pasta 'imagens/'
4. Use updateCoupleNames('Noiva', 'Noivo') para alterar nomes

Funções disponíveis:
- addGift(nome, preço, imagem)
- updatePixConfig(chave, qrCode)
- updateCoupleNames(noiva, noivo)
`);

// ========================================
// EXPORT PARA MÓDULOS (SE NECESSÁRIO)
// ========================================

// Se estiver usando módulos ES6, descomente as linhas abaixo:
// export { gifts, addGift, updatePixConfig, updateCoupleNames };

// =============== CONTAGEM REGRESSIVA ===============
function startCountdown() {
    const countdownEl = document.getElementById('countdown');
    if (!countdownEl) return;

    const weddingDate = new Date("2026-01-03T17:00:00-03:00"); // 03/01/2026 às 17h (horário de Brasília)

    function updateCountdown() {
        const now = new Date();
        const diff = weddingDate - now;

        if (diff <= 0) {
            countdownEl.innerHTML = '<div class="time-box"><span class="time-value">🎉</span><div class="time-label">É hoje!</div></div>';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdownEl.innerHTML = `
            <div class="time-box">
                <div class="time-value">${days}</div>
                <div class="time-label">dias</div>
            </div>
            <div class="time-box">
                <div class="time-value">${hours}</div>
                <div class="time-label">horas</div>
            </div>
            <div class="time-box">
                <div class="time-value">${minutes}</div>
                <div class="time-label">min</div>
            </div>
            <div class="time-box">
                <div class="time-value">${seconds}</div>
                <div class="time-label">seg</div>
            </div>
        `;
    }

    updateCountdown(); // primeira execução imediata
    setInterval(updateCountdown, 1000); // atualiza a cada segundo
}

// Inicia junto com o restante do carregamento
document.addEventListener('DOMContentLoaded', startCountdown);
