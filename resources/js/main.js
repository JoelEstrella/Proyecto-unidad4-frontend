//ACRIVA WOW
new WOW().init();

//Subir hasta el principio
function scroll_top() {
  $("html,body").stop().animate({ scrollTop: "0" }, 100);
}

//Modal
var fondomodal = document.getElementById("modal");

function abrirModal() {
  fondomodal.style.display = "flex";
  $("#modal-content").addClass("animate__animated animate__fadeInUp");
}

function cerrarModal() {
  $("#modal-content").addClass("animate__fadeOutDown");
  setTimeout(() => {
    fondomodal.style.display = "none";
    $("#modal-content").removeClass("animate__fadeOutDown");
  }, 500);
}

window.onclick = function (event) {
  if (event.target == fondomodal) {
    $("#modal-content").addClass("animate__fadeOutDown");
    setTimeout(() => {
      fondomodal.style.display = "none";
      $("#modal-content").removeClass("animate__fadeOutDown");
    }, 500);
  }
};

// ACTIIVAR MENU DESLIZANTE
$(".hamburger-menu").on("click", function (e) {  
    $(".side-widget").toggleClass("active");
});

//SLIDER
$("#slider4").responsiveSlides({
  auto: true,
  pager: false,
  nav: true,
  speed: 1000,
  namespace: "callbacks",
  before: function () {
    $(".events").append("<li>before event fired.</li>");
  },
  after: function () {
    $(".events").append("<li>after event fired.</li>");
  },
});

// tiny carrusel

$(document).ready(function () {
  $("#slider1").tinycarousel();
});

// Arcodeon
$(document).ready(function () {
  
  $(".acordeon p").hide();

  $(".encabezado").click(function () {
    var contenido = $(this).next("p");
    $(".acordeon p").not(contenido).slideUp();
    contenido.slideToggle();
  });
});