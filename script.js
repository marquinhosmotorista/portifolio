document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. CONFIGURAÇÃO DO WHATSAPP ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // SUBSTITUA PELO SEU NÚMERO (DDI + DDD + NÚMERO)
            const meuNumero = "558699781545"; 
            
            const nome = document.getElementById('userName').value;
            const mensagem = document.getElementById('userMsg').value;
            
            // Formatação da mensagem
            const texto = `Olá Marcos!%0A*Nome:* ${nome}%0A*Mensagem:* ${mensagem}`;
            const url = `https://wa.me/${meuNumero}?text=${texto}`;
            
            window.open(url, '_blank');
        });
    }

    // --- 2. LÓGICA DO MENU MOBILE ---
    const btnMenu = document.getElementById('btnMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuPath = document.getElementById('menuPath');

    // Caminhos do ícone (SVG)
    const iconHamburguer = "M4 6h16M4 12h16M4 18h16";
    const iconFechar = "M6 18L18 6M6 6l12 12";

    if (btnMenu && mobileMenu) {
        btnMenu.addEventListener('click', () => {
            const estaEscondido = mobileMenu.classList.contains('hidden');
            
            if (estaEscondido) {
                mobileMenu.classList.remove('hidden');
                menuPath.setAttribute('d', iconFechar);
            } else {
                mobileMenu.classList.add('hidden');
                menuPath.setAttribute('d', iconHamburguer);
            }
        });

        // Fechar menu ao clicar em um link (mobile)
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuPath.setAttribute('d', iconHamburguer);
            });
        });
    }

    // --- 3. ANIMAÇÃO AO ROLAR (OBSERVER) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // --- 4. ANO NO FOOTER ---
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
