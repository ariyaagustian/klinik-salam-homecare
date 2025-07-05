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