document.addEventListener('DOMContentLoaded', () => {
    // Mobil Menü (Hamburger) Yönetimi
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Menü elemanına tıklandığında mobilde menüyü kapat
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Form Gönderim - Doğrudan e-posta yönlendirmesi
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const type = document.getElementById('type').value;
            const message = document.getElementById('message').value;

            const subject = encodeURIComponent(`MAVERA Web İletişim Formu: ${type} - ${name}`);
            const body = encodeURIComponent(
                `Ad / Kurum: ${name}\n` +
                `E-posta: ${email}\n` +
                `İlgi Alanı: ${type}\n\n` +
                `Mesaj:\n${message}`
            );

            // mavera@gmail.com adresine mail uygulamasını açar
            window.location.href = `mailto:mavera@gmail.com?subject=${subject}&body=${body}`;
        });
    }
});
