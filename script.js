// Exemplo básico de como adicionar interatividade
document.addEventListener("DOMContentLoaded", function () {
  // Adicionar funcionalidade de clique nas seções
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    section.addEventListener("click", () => {
      alert(`Você clicou na seção: ${section.id}`);
    });
  });
});
