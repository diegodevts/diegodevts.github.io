document.getElementById('viewProjects').addEventListener('click', function(event) {
    event.preventDefault();
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
});
