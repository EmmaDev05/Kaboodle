//Navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle("change");
});

/* Sidebar menu*/
// close hamburger menu after click a
$(".menu-list li a").on("click", function () {
  $("#hamburger-menu").click();
});

/* When your mouse cursor enter the background, the fading won't pause and keep playing */
$(".carousel").carousel({
  pause:
    "false" /* Change to true to make it paused when your mouse cursor enter the background */,
});

// Works
$(document).ready(function () {
  // init Isotope
  var $grid = $("#gallery-content-center").isotope({
    // options
  });
  // filter items on button click
  $(".gallery-header-center-right-links").on("click", function () {
    $(".gallery-header-center-right-links").removeClass(
      "gallery-header-center-right-links-current"
    );
    $(this).addClass("gallery-header-center-right-links-current");

    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });
});

// Testimonials
$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [990, 1],
    itemsTablet: [768, 1],
    itemsMobile: [650, 1],
    pagination: true,
    navigation: false,
    autoPlay: true,
  });
});

/* Accordion */
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

/* Header TypeWriter */
var footerName = document.getElementById("footer-name");

var typewriter = new Typewriter(footerName, {
  loop: true,
});

typewriter
  .typeString("Designed by: ")
  .pauseFor(1000)
  .typeString("<b>BlackSuit</b> ")
  .pauseFor(2000)
  .deleteAll()
  .start();

/* Follow Us */
$(".carousel-1").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1400: {
      items: 4,
    },
    1600: {
      items: 5,
    },
    2200: {
      items: 6,
    },
  },
});

/* Button */
$(".btn").mouseup(function () {
  $(this).blur();
});

$(".owl-dot").mouseup(function () {
  $(this).blur();
});
