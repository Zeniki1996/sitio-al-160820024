$(document).ready(function() {
  var language = localStorage.getItem("language") || "es";

  // Asegura que la clase se aplique correctamente según el idioma almacenado
  if (language === "en") {
    $(".wrap").addClass("english");
  } else {
    $(".wrap").removeClass("english");
  }

  // Manejo del clic para cambiar de idioma
  $(".wrap").on("click", function() {
    if ($(this).hasClass("english")) {
      $(this).removeClass("english");
      localStorage.setItem("language", "es");
    } else {
      $(this).addClass("english");
      localStorage.setItem("language", "en");
    }
    changePageLanguage();
  });
  
  function changePageLanguage() {
    var currentPage = window.location.pathname.split("/").pop();
    var isEnglish = $(".wrap").hasClass("english");

    var pageMap = {
      "index.html": "indexEs.html",
      "About.html": "AboutEs.html",
      "Contact.html": "ContactEs.html",
      "indexEs.html": "index.html",
      "AboutEs.html": "About.html",
      "ContactEs.html": "Contact.html"
    };

    // Asegura que solo redirige si hay una página equivalente
    if (pageMap[currentPage] && ((isEnglish && currentPage.includes('Es')) || (!isEnglish && !currentPage.includes('Es')))) {
      window.location.href = pageMap[currentPage];
    }
  }
});
