// burger
$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu").toggleClass("show");
    $("body").toggleClass("lock");
  });
});

// header-bg
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $(".header").addClass("white");
    } else {
      $(".header").removeClass("white");
    }
  });
});

// accordion
var acc = document.getElementsByClassName("accordion__btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// carousel slider
new Splide(".collection__slider", {
  type: "loop",
  drag: "free",
  // focus: "center",
  autoScroll: {
    speed: 2,
  },
  autoplay: true,
  rewind: true,
  pagination: false,
  arrows: false,
  breakpoints: {
    2600: {
      perPage: 20,
    },
    1440: {
      perPage: 10,
    },
  },
}).mount();

// tabs

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function (el) {
  el.addEventListener("click", openTabs);
});

function openTabs(el) {
  var btnTarget = el.currentTarget;
  var name = btnTarget.dataset.name;

  tabContent.forEach(function (el) {
    el.classList.remove("show__up");
  });

  tabLinks.forEach(function (el) {
    el.classList.remove("show__up");
  });

  document.querySelector("#" + name).classList.add("show__up");

  btnTarget.classList.add("show__up");
}
