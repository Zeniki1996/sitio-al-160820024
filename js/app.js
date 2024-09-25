$(document).ready(function() {
  var language = localStorage.getItem("language");

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

    if (pageMap[currentPage]) {
      window.location.href = pageMap[currentPage];
    }
  }
});

  


// scripts.js
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir la redirección por defecto

    var formData = new FormData(this);

    fetch(this.action, {
        method: this.method,
        body: formData,
    })
    .then(function(response) {
        return response.json(); // Convertir la respuesta a JSON
    })
    .then(function(data) {
        if (data.success) { // Si el servidor responde con { "success": true }
            document.querySelector(".u-form-send-success").style.display = "block";
            document.querySelector(".u-form-send-error").style.display = "none";
        } else {
            document.querySelector(".u-form-send-success").style.display = "none";
            document.querySelector(".u-form-send-error").style.display = "block";
        }
    })
    .catch(function(error) {
        document.querySelector(".u-form-send-success").style.display = "none";
        document.querySelector(".u-form-send-error").style.display = "block";
    });
});
