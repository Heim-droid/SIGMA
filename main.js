document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const signIn = document.getElementById('sign-in');
    const sections = document.querySelectorAll('.section');
    const menuLinks = document.querySelectorAll('.menu-link');

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuIcon.classList.toggle('active');
        if (menuIcon.classList.contains('active')) {
            menuIcon.innerHTML = '&times;'; // Change to X (cross) icon
        } else {
            menuIcon.innerHTML = '&#9776;'; // Change back to menu icon
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = e.target.dataset.section;
            sections.forEach(section => {
                if (section.id === targetSection) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                menuIcon.classList.remove('active');
                menuIcon.innerHTML = '&#9776;';
            }
        });
    });

    signIn.addEventListener('click', () => {
        const targetSection = 'sign-in-page';
        sections.forEach(section => {
            if (section.id === targetSection) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });

    document.getElementById('sign-up-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Account created successfully!');
    });

    document.getElementById('sign-in-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const targetSection = 'dashboard';
        sections.forEach(section => {
            if (section.id === targetSection) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});