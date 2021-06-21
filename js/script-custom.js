
/* Manage Class Funtions https://www.sitepoint.com/add-remove-css-class-vanilla-js/ */
function addClass(e,l){var elements=document.querySelectorAll(e);for(var s=0;s<elements.length;s++)elements[s].classList.add(l)}function removeClass(e,l){var elements=document.querySelectorAll(e);for(var s=0;s<elements.length;s++)elements[s].classList.remove(l)}


/* ------- Responsive ------- */
function isMobile() { 
    return window.matchMedia("only screen and (max-width: 992px)").matches;
}

function openFullScreenNav() {
  document.getElementById("fullScreenNav").style.width = "60%";
  document.getElementById("sideBgNav").style.width = "110px";
}
function closeFullScreenNav() {
  document.getElementById("fullScreenNav").style.width = "0%";
  document.getElementById("sideBgNav").style.width = "0%";
}

/* -------  Mobile Menu:: Dropdown Toggle ------- */
document.addEventListener(
    "click",
    function (event) {
        if (event.target.matches(".site-toggle")) {
            if (event.target.classList.contains("active")) {
                removeClass(".site-toggle, .site-nav-m", "active");
                removeClass("#masthead", "show-nav");
            } else {
                addClass(".site-toggle, .site-nav-m", "active");
                addClass("#masthead", "show-nav");
            }
        }
        if (event.target.matches("#site-nav-m .nav-item-has-children > svg")) {
            if (event.target.parentNode.classList.contains("active")) {
                event.target.parentNode.classList.remove("active");
            } else {
                event.target.parentNode.classList.add("active");
            }
        }
    },
    false
);
/* -------  Mobile Menu:: Add Icon Dropdown Toggle ------- */
document
    .querySelectorAll("#site-nav-m .nav-item-has-children")
    .forEach((e) => {
        e.insertAdjacentHTML(
        "beforeend",
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 20 20"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>'
        );
    }
);

/*------- Preloader ------*/
$(window).on('load', function() {
    lottie.loadAnimation({
        container: document.getElementById("loading-logo"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: `./img/animation/loading-logo.json`
    });
    $('.preloader').fadeOut('slow');
});

/*------- Banner ------*/
// Desktop
var homepageBanner = new Swiper( ".swiper-homepage" , {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
});
// Mobile
if(isMobile()) { 
    var iamMobileCarousel = new Swiper( ".swiper-iam-mobile" , {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
    });
    var reasonMobileCarousel = new Swiper( ".swiper-reason-mobile");
    var iamMobileCarousel = new Swiper( ".swiper-feature-product" , {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
    });
}

/*------- Animated ------*/
new WOW().init();
