const sections = document.querySelectorAll('section');

function scrollAppear() {
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', scrollAppear);
