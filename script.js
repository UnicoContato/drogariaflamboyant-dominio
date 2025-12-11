document.addEventListener('DOMContentLoaded', () => {
    
    // Header Dynamic Scroll
    let lastScrollTop = 0;
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });

    // Mobile Menu
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });

    // Smooth Reveal on Scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-content').forEach(el => {
        observer.observe(el);
    });

    // Modal Logic
    const modal = document.getElementById('privacy-modal');
    const openBtn = document.getElementById('privacy-btn');
    const closeBtn = document.getElementById('close-modal');
    const overlay = document.getElementById('modal-overlay');

    const toggleModal = () => {
        modal.classList.toggle('hidden');
    };

    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal();
    });

    closeBtn.addEventListener('click', toggleModal);
    overlay.addEventListener('click', toggleModal);
});