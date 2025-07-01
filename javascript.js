document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const accordionItem = button.parentElement;
    const isActive = accordionItem.classList.contains('active');
    
    // Fecha todos
    document.querySelectorAll('.accordion-item').forEach(item => item.classList.remove('active'));
    
    // Abre só o clicado (toggle)
    if (!isActive) {
      accordionItem.classList.add('active');
    }
  });
});
function toggleMenu() {
  var menu = document.getElementById("nav-menu");
  menu.classList.toggle("active");
};

