// Função para carregar conteúdo de arquivo HTML
function loadSection(sectionId, filePath) {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro ao carregar ${filePath}: ${response.status}`);
        }
        return response.text();
      })
      .then(html => {
        document.getElementById(sectionId).innerHTML = html;
      })
      .catch(error => console.error(error));
  }
  
  // Carregar as seções
  loadSection('navbar', './sections/navbar.html');
  loadSection('hero', './sections/hero.html');
  loadSection('about', './sections/about.html');
  loadSection('other-about', './sections/other-about.html');
  loadSection('portifolio', './sections/portifolio.html');
  loadSection('contact', './sections/contact.html');
  loadSection('footer', './sections/footer.html');
 
  