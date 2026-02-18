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

// Modal untuk galeri
(function () {
    const items = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('galleryModalImg');
    const modalCaption = document.getElementById('galleryModalCaption');
    const closeBtn = document.getElementById('galleryModalClose');
    let lastFocused = null;

    if (!modal || !modalImg || !modalCaption || !closeBtn || items.length === 0) {
        return;
    }

    const openModal = (item) => {
        const img = item.querySelector('img');
        const caption = item.querySelector('p');

        if (img) {
            modalImg.src = img.getAttribute('src') || '';
            modalImg.alt = img.getAttribute('alt') || '';
        }
        modalCaption.textContent = caption ? caption.innerText.trim() : '';

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
        modalImg.src = '';
        if (lastFocused && typeof lastFocused.focus === 'function') {
            lastFocused.focus();
        }
    };

    items.forEach((item) => {
        item.addEventListener('click', () => openModal(item));
        item.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openModal(item);
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
