// Sélectionne tous les liens de navigation
const navLinks = document.querySelectorAll('.navLinks a');
        
// Ajoute un écouteur d'événements à chaque lien
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Récupère l'ID de la section ciblée
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Calcule la position de la section
        const offsetTop = targetSection.offsetTop;
        
        // Défilement fluide vers la section
        window.scrollTo({
            top: offsetTop, // Soustrait la hauteur de la navbar
            behavior: 'smooth'
        });
    });
});

// Sélectionne tous les liens de navigation de la partie de navigation du footer
const navLinks2 = document.querySelectorAll('.nav-links a');
        
// Ajoute un écouteur d'événements à chaque lien
navLinks2.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Récupère l'ID de la section ciblée
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Calcule la position de la section
        const offsetTop = targetSection.offsetTop;
        
        // Défilement fluide vers la section
        window.scrollTo({
            top: offsetTop, 
            behavior: 'smooth'
        });
    });
});

// Gestion de l'état actif des liens pendant le défilement
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100; // Ajoute un offset pour une meilleure détection

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Trouve le lien correspondant à la section active
            const correspondingLink = document.querySelector(`.navLinks a[href="#${section.id}"]`);
            const correspondingLink2 = document.querySelector(`.nav-links a[href=".${section.id}"]`);
            
            // Retire la classe active de tous les liens
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Ajoute la classe active au lien correspondant
            if (correspondingLink) {
                correspondingLink.classList.add('active');
                
            }
            if(correspondingLink2){
                correspondingLink2.classList.add('active');
            }
        }
    });
});



