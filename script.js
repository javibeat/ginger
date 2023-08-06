<script>
  // Función para hacer scroll suave a la parte superior
  function scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  // Verificar si estamos en la página index.html
  function isIndexPage() {
    return window.location.pathname.includes('index.html');
  }

  // Agregar evento al hacer clic en el logo
  document.querySelector('.navbar-logo img').addEventListener('click', function (event) {
    event.preventDefault();
    if (!isIndexPage()) {
      window.location.href = 'index.html';
    } else {
      scrollToTop();
    }
  });

  // Agregar eventos a los elementos del menú
  document.querySelectorAll('.navbar-menu a').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      if (!isIndexPage()) {
        var targetPage = link.getAttribute('href');
        window.location.href = targetPage;
      } else {
        var targetElement = document.querySelector(link.getAttribute('href'));
        if (targetElement) {
          var targetOffset = targetElement.offsetTop;
          window.scroll({ top: targetOffset, left: 0, behavior: 'smooth' });
        }
      }
    });
  });
</script>
