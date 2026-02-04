// main.js

// Fungsi untuk smooth scrolling ketika tautan navigasi diklik
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah perilaku default tautan

        const targetId = this.getAttribute('href'); // Mendapatkan ID target dari atribut href
        const targetElement = document.querySelector(targetId); // Mendapatkan elemen target

        if (targetElement) {
            // Menggulir ke elemen target dengan perilaku mulus
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Modal detail untuk layanan
(function () {
    const cards = document.querySelectorAll('.service-card');
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('serviceModalTitle');
    const modalDesc = document.getElementById('serviceModalDesc');
    const modalIcon = document.getElementById('serviceModalIcon');
    const closeBtn = document.getElementById('serviceModalClose');
    let lastFocused = null;

    if (!modal || !modalTitle || !modalDesc || !modalIcon || !closeBtn || cards.length === 0) {
        return;
    }

    const openModal = (card) => {
        const titleEl = card.querySelector('h3');
        const descEl = card.querySelector('p');
        const iconEl = card.querySelector('[data-lucide]');

        modalTitle.textContent = titleEl ? titleEl.innerText.trim() : 'Layanan';
        modalDesc.textContent = descEl ? descEl.innerText.trim() : 'Informasi layanan tidak tersedia.';

        if (iconEl) {
            const iconName = iconEl.getAttribute('data-lucide');
            const rawClass = iconEl.getAttribute('class') || '';
            const iconClass = rawClass.replace(/md:w-8 md:h-8/g, 'w-7 h-7');
            const wrapper = iconEl.closest('div');
            if (wrapper) {
                const wrapperClass = wrapper.getAttribute('class') || '';
                modalIcon.className = wrapperClass.replace(/md:w-16 md:h-16|w-12 h-12/g, 'w-12 h-12');
            }
            modalIcon.innerHTML = `<i data-lucide="${iconName}" class="${iconClass}"></i>`;
            if (window.lucide) {
                window.lucide.createIcons();
            }
        } else {
            modalIcon.innerHTML = '';
        }

        lastFocused = document.activeElement;
        document.body.classList.add('overflow-hidden');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        closeBtn.focus();
    };

    const closeModal = () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.classList.remove('overflow-hidden');
        if (lastFocused && typeof lastFocused.focus === 'function') {
            lastFocused.focus();
        }
    };

    cards.forEach((card) => {
        card.addEventListener('click', () => openModal(card));
        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openModal(card);
            }
        });
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (!modal.classList.contains('hidden') && event.key === 'Escape') {
            closeModal();
        }
    });
})();

// Anda bisa menambahkan JavaScript lainnya di sini jika diperlukan,
// seperti efek animasi saat scroll, validasi formulir (jika ada), dll.
// Misalnya, untuk menambahkan kelas aktif ke navigasi saat bagian tertentu terlihat:
// window.addEventListener('scroll', () => {
//     const sections = document.querySelectorAll('section[id]');
//     const navLinks = document.querySelectorAll('nav a');

//     let current = '';
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if (pageYOffset >= sectionTop - sectionHeight / 3) {
//             current = section.getAttribute('id');
//         }
//     });

//     navLinks.forEach(link => {
//         link.classList.remove('text-primary');
//         link.classList.add('text-gray-700');
//         if (link.getAttribute('href').includes(current)) {
//             link.classList.add('text-primary');
//             link.classList.remove('text-gray-700');
//         }
//     });
// });
