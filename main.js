// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect
const nav = document.querySelector('.navbar');
ScrollTrigger.create({
    start: 'top -80',
    onUpdate: (self) => {
        if (self.direction === 1) {
            nav.classList.add('scrolled');
        } else if (self.scroll() < 80) {
            nav.classList.remove('scrolled');
        }
    }
});

// Smooth reveals for sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    gsap.from(section.querySelectorAll('.hero-title, h2, .hero-label, .hero-description, p, .btn-premium, .shift-card, .work-card'), {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});

// Hero image parallax
gsap.to('.hero-image', {
    yPercent: 15,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Image frame reveal
gsap.from('.hero-image-frame', {
    x: -50,
    y: -50,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    ease: "power3.out"
});

// Background color shift (Premium Version 2 feature)
// Shifts from Cream to Dark Navy when entering "section-dark"
const darkSections = document.querySelectorAll('.section-dark');
darkSections.forEach(darkSection => {
    ScrollTrigger.create({
        trigger: darkSection,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => gsap.to('body', { backgroundColor: '#0A121F', color: '#F5F1EA', duration: 1 }),
        onLeave: () => gsap.to('body', { backgroundColor: '#F5F1EA', color: '#1A1A1A', duration: 1 }),
        onEnterBack: () => gsap.to('body', { backgroundColor: '#0A121F', color: '#F5F1EA', duration: 1 }),
        onLeaveBack: () => gsap.to('body', { backgroundColor: '#F5F1EA', color: '#1A1A1A', duration: 1 })
    });
});

// EPICENTRE Diagram Animation
gsap.from('.epicentre-center', {
    scale: 0,
    opacity: 0,
    duration: 1.5,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
        trigger: ".epicentre-diagram-container",
        start: "top 70%"
    }
});

gsap.from('.pillar', {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".epicentre-diagram-container",
        start: "top 60%"
    }
});

gsap.from('.epicentre-lines line', {
    attr: { x2: 300, y2: 300 },
    opacity: 0,
    duration: 1.5,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".epicentre-diagram-container",
        start: "top 60%"
    }
});

// Stats counter animation
const numbers = document.querySelectorAll('.stat-box .number');
numbers.forEach(num => {
    const val = parseInt(num.innerText.replace(/[^0-9]/g, ''));
    gsap.from(num, {
        textContent: 0,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
            trigger: num,
            start: "top 90%"
        }
    });
});
