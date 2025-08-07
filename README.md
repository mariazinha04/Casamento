# Lista de Presentes de Casamento

Um site elegante e responsivo para lista de presentes de casamento com integração PIX, desenvolvido com Bootstrap 5 e foco na experiência mobile.

## 🎨 Características

- **Design Mobile-First**: Otimizado para smartphones e tablets
- **Bootstrap 5**: Framework responsivo e moderno
- **Design Elegante**: Paleta de cores azul marinho (#002366) e terracota (#d13e1f)
- **Efeito Parallax**: Header com imagem de fundo em parallax (desktop)
- **Modal Interativo**: Sistema de modal Bootstrap para pagamento PIX
- **Animações Suaves**: Transições e efeitos visuais elegantes
- **Toast Notifications**: Feedback visual para ações do usuário
- **Touch-Friendly**: Otimizado para dispositivos touch
- **Código Limpo**: HTML semântico, CSS organizado e JavaScript comentado

## 📁 Estrutura do Projeto

```
wedding-gift-list/
│── index.html          # Estrutura principal do site
│── style.css           # Estilos e design responsivo
│── script.js           # Funcionalidades JavaScript
│── README.md           # Este arquivo de instruções
│── todo.md             # Lista de tarefas do projeto
└── imagens/            # Pasta com todas as imagens
    │── casal.jpg       # Foto do casal para o header
    │── logo.png        # Logo do casamento
    │── presente1.jpg   # Imagem do presente 1
    │── presente2.jpg   # Imagem do presente 2
    │── ...             # Imagens dos presentes 3-10
    └── qrcode-pix.png  # QR Code PIX genérico
```

## 🚀 Como Usar

1. **Abra o arquivo `index.html`** em qualquer navegador web
2. **Personalize o conteúdo** seguindo as instruções abaixo
3. **Teste todas as funcionalidades** antes de publicar
4. **Hospede o site** em seu servidor preferido

## ✏️ Personalização

### 1. Alterar Nomes do Casal

No arquivo `index.html`, localize e altere:

```html
<h1 class="bride-name display-4 display-md-3">Maria</h1>
<span class="ampersand display-5">&</span>
<h1 class="groom-name display-4 display-md-3">João</h1>
```

Ou use JavaScript no console:
```javascript
updateCoupleNames('SeuNome', 'NomeDoPartner');
```

### 2. Configurar PIX

No arquivo `script.js`, localize e altere:

```javascript
const pixConfig = {
    key: "seuemail@exemplo.com", // Sua chave PIX real
    qrCode: "imagens/qrcode-pix.png" // Caminho para seu QR Code
};
```

### 3. Personalizar Presentes

No arquivo `script.js`, edite o array `gifts`:

```javascript
const gifts = [
    {
        id: 1,
        name: "Nome do Presente",
        price: "R$ 000,00",
        image: "imagens/presente1.jpg"
    },
    // Adicione mais presentes aqui
];
```

### 4. Substituir Imagens

Substitua os arquivos na pasta `imagens/`:

- **casal.jpg**: Foto do casal (recomendado: 1920x1080px)
- **logo.png**: Logo do casamento (recomendado: 300x300px)
- **presente1.jpg até presente10.jpg**: Fotos dos presentes (recomendado: 400x300px)
- **qrcode-pix.png**: Seu QR Code PIX real (recomendado: 300x300px)

### 5. Personalizar Cores

No arquivo `style.css`, altere as variáveis CSS:

```css
:root {
    --primary-color: #002366;      /* Azul marinho */
    --secondary-color: #d13e1f;    /* Terracota */
    /* Altere para suas cores preferidas */
}
```

## 🎯 Funcionalidades

### Modal PIX Bootstrap
- Abre ao clicar em "Presentear"
- Exibe QR Code e chave PIX
- Botão para copiar chave PIX com feedback
- Fecha com X, clicando fora ou tecla ESC
- Design responsivo e mobile-friendly

### Responsividade Mobile-First
- Layout adaptável para todas as telas
- Grid Bootstrap flexível de presentes
- Navegação otimizada para mobile
- Imagens responsivas
- Touch targets adequados (min 44px)

### Animações e Feedback
- Fade-in dos cards de presentes
- Hover effects nos botões
- Transições suaves no modal
- Toast notifications para feedback
- Efeito parallax no header (desktop)

### Otimizações Mobile
- Detecção de dispositivos touch
- Lazy loading para imagens
- Performance otimizada
- Redução de animações para usuários com preferência

## 🛠️ Funções JavaScript Úteis

```javascript
// Adicionar novo presente
addGift("Nome do Presente", "R$ 100,00", "imagens/novo-presente.jpg");

// Atualizar configurações PIX
updatePixConfig("nova-chave@pix.com", "imagens/novo-qr.png");

// Alterar nomes do casal
updateCoupleNames("NovaNoiva", "NovoNoivo");
```

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Desktop, Tablet, Mobile
- ✅ Todos os tamanhos de tela
- ✅ Touch e mouse
- ✅ iOS e Android

## 🎨 Tecnologias Utilizadas

- **Bootstrap 5.3.2**: Framework CSS responsivo
- **Bootstrap Icons**: Ícones modernos
- **Google Fonts**: Playfair Display e Montserrat
- **Vanilla JavaScript**: Sem dependências extras
- **CSS Grid/Flexbox**: Layout moderno
- **CSS Custom Properties**: Variáveis para fácil personalização

## 📝 Notas Importantes

1. **Substitua o QR Code**: Use seu QR Code PIX real
2. **Teste antes de publicar**: Verifique todas as funcionalidades
3. **Otimize imagens**: Comprima para melhor performance mobile
4. **Backup**: Mantenha cópias dos arquivos originais
5. **Mobile-First**: Sempre teste primeiro em dispositivos móveis

## 🆘 Suporte

Se encontrar problemas:

1. Verifique o console do navegador (F12)
2. Confirme que todas as imagens existem
3. Teste em navegador atualizado
4. Verifique se JavaScript está habilitado
5. Teste em dispositivo móvel real

## 🔧 Personalização Avançada

### Adicionar Mais Presentes
```javascript
// No final do array gifts em script.js
{
    id: 11,
    name: "Novo Presente",
    price: "R$ 150,00",
    image: "imagens/presente11.jpg"
}
```

### Alterar Animações
```css
/* No arquivo style.css */
.gift-card {
    animation-duration: 0.8s; /* Mais lenta */
    animation-delay: 0.2s;    /* Delay maior */
}
```

### Personalizar Modal
```css
/* Alterar cor do cabeçalho do modal */
.modal-header {
    background: linear-gradient(135deg, #your-color, #your-color-2);
}
```

## 📄 Licença

Este projeto foi criado especialmente para você. Use e modifique livremente para seu casamento!

## 🎉 Créditos

- **Bootstrap**: Framework CSS
- **Google Fonts**: Tipografia
- **Bootstrap Icons**: Iconografia
- **Imagens**: Obtidas de fontes livres para demonstração

---

**Feito com ❤️ para seu dia especial!**

*Desenvolvido com foco na experiência mobile e acessibilidade.*

