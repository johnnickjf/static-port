// Adicionar efeito de digitação no título
document.addEventListener('DOMContentLoaded', function () {
    const title = document.querySelector('.header h1');
    const originalText = title.textContent;
    title.textContent = '';

    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };

    // Iniciar efeito após um pequeno delay
    setTimeout(typeWriter, 500);

    // Adicionar partículas ao background
    createParticles();

    // Gerenciar o carregamento da imagem de perfil
    handleProfileImage();
});

// Função para criar partículas no background
function createParticles() {
    const bg = document.querySelector('.tech-bg');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('binary-code');
        particle.textContent = generateBinaryString();
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        particle.style.fontSize = `${Math.random() * 8 + 10}px`;
        particle.style.opacity = `${Math.random() * 0.1 + 0.05}`;

        bg.appendChild(particle);
    }
}

// Gerar string binária aleatória
function generateBinaryString() {
    let binary = '';
    const length = Math.floor(Math.random() * 30) + 20;

    for (let i = 0; i < length; i++) {
        binary += Math.round(Math.random()) + ' ';
    }

    return binary;
}

// Gerenciar o carregamento da imagem de perfil
function handleProfileImage() {
    const profileImage = document.getElementById('profileImage');
    const profileFallback = document.getElementById('profileFallback');

    // Pré-carregar a imagem
    const img = new Image();
    img.src = profileImage.src;

    img.onload = function () {
        // Quando a imagem carregar, mostrar ela e esconder o fallback
        profileImage.style.display = 'block';
        profileFallback.style.display = 'none';
    };

    img.onerror = function () {
        // Se a imagem não carregar, manter o fallback
        console.log('Imagem de perfil não carregou, usando ícone como fallback');
        profileFallback.style.display = 'flex';
        profileImage.style.display = 'none';
    };
}