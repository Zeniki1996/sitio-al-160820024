$(document).ready(function() {
    // Verificar el idioma en localStorage
    var language = localStorage.getItem("language");

    if (language === "en") {
        $(".wrap").addClass("english"); // Aplica la clase para la bandera del Reino Unido
    } else {
        $(".wrap").removeClass("english"); // Remueve la clase que aplica la bandera del Reino Unido
    }

    $(".wrap").on("click", function(e) {
        if ($(this).hasClass("english")) {
            // Cambiar a español
            $(this).removeClass("english");
            localStorage.setItem("language", "es");
            setTimeout(function() {
                window.location.href = "index.html"; // Redirige a la página en español
            }, 500); // Retraso de 500 ms antes de redirigir
        } else {
            // Cambiar a inglés
            $(this).addClass("english");
            localStorage.setItem("language", "en");
            setTimeout(function() {
                window.location.href = "indexEs.html"; // Redirige a la página en inglés
            }, 500); // Retraso de 500 ms antes de redirigir
        }
    });
});