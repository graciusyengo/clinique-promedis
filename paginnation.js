document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.gallery-page');
    const pageLinks = document.querySelectorAll('.page-link');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
  
    let currentPage = 1;
  
    function showPage(page) {
      pages.forEach((pageElement, index) => {
        if (index + 1 === page) {
          pageElement.classList.add('active');
        } else {
          pageElement.classList.remove('active');
        }
      });
  
      pageLinks.forEach(link => {
        if (parseInt(link.getAttribute('data-page')) === page) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
  
      currentPage = page;
    }
  
    pageLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const page = parseInt(this.getAttribute('data-page'));
        showPage(page);
      });
    });
  
    prevButton.addEventListener('click', function(event) {
      event.preventDefault();
      if (currentPage > 1) {
        showPage(currentPage - 1);
      }
    });
  
    nextButton.addEventListener('click', function(event) {
      event.preventDefault();
      if (currentPage < pages.length) {
        showPage(currentPage + 1);
      }
    });
  
    // Affichez la première page au chargement
    showPage(1);
  });
  