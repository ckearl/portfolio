let resumeCards = document.querySelectorAll('.resume-card');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

Array.from(document.querySelectorAll('.resume-card')).forEach(card => {
    observer.observe(card);
});
