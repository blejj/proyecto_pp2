//gestion de clicks en los comics en page comics.html card
document.addEventListener("DOMContentLoaded",() => {
    const cards = document.querySelectorAll(".comic-item");
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const pdfUrl = card.getAttribute("data-pdf");
  
        window.open(pdfUrl, "_blank");
      })
    })
  })