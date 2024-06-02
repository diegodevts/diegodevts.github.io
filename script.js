document.getElementById('viewProjects').addEventListener('click', function(event) {
    event.preventDefault();
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Alteração na velocidade da transição
});
