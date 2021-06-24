
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
                removeClass("body", "show-nav");
            } else {
                addClass(".site-toggle, .site-nav-m", "active");
                addClass("body", "show-nav");
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
var brandCarousel = new Swiper(".swiper-brand", {
    spaceBetween: 5,
    slidesPerView: 3,
    slidesPerColumn: 2,
    slidesPerColumnFill: "row",
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        // Desktop
        768: {
            slidesPerView: 6,
            spaceBetween: 30,
            slidesPerColumn: 1,
            loop: true,
        }
    }
});
var trendBlogCarousel = new Swiper(".swiper-trend-blog", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // Desktop
        769: {
            slidesPerView: 4,
        }
    }
});

var trendHeroCarousel = new Swiper(".swiper-blog-hero", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    grabCursor: false,
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
});

var relateBlogCarousel = new Swiper(".swiper-relate-content", {
    slidesPerView: 1.1,
    spaceBetween: 20,
    centeredSlides: false,
    allowTouchMove: true,
    breakpoints: {
        // Desktop
        769: {
            slidesPerView: 4,
            spaceBetween: 20,
            centeredSlides: false,
            allowTouchMove: false,
        }
    }
});

// Slick
var igSlider = $('.slick-center').slick({
    centerMode: true,
    slidesToShow: 5,
    dots: false,
    arrows: true,
    swipe: false,
    swipeToSlide: false,
    variableWidth: true,
    variableHeight: true,
    prevArrow:"<button type='button' class='slick-arrow-custom slick-prev-custom'><i class='bi bi-chevron-left'></i></button>",
    nextArrow:"<button type='button' class='slick-arrow-custom slick-next-custom'><i class='bi bi-chevron-right'></i></button>",
    responsive: [
        {
            breakpoint: 992,
            settings: {
                centerMode: false,
                slidesToShow: 1,
                dots: false,
                arrows: false,
                swipe: true,
                swipeToSlide: true,
                variableWidth: false,
                variableHeight: false,
            }
        }
    ]
});

$('.slide').click('click', function(e){   
    e.preventDefault();
    var currentSlide = $(e.currentTarget).data('slick-index');
    igSlider.slick( 'slickGoTo', parseInt(currentSlide) );
});

// Event after slide change
$('.slick-center').on('afterChange', function(event, slick, currentSlide, nextSlide){
    showIgCaption($('.slick-current').data('caption'));
});

// Run Initial Caption.
showIgCaption($('.slick-current').data('caption'));
function showIgCaption(caption) { 
    $("#ig_caption").html(caption);
}

$('.-video').click(function(){ 
    var isCurrent = $(this).parent('.slick-current').length;
    if(isCurrent) { 
        var isPlaying = $(this).hasClass('-playing');
        $(this).toggleClass('-playing');
        if(!isPlaying) { 
            $(this).find('.video-ig').trigger('play'); // play
        }else {
            $(this).find('.video-ig').trigger('pause'); // pause
        }
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

/* -------  Sticky Menu ------- */
var sticky = {
    toggle: function() {
        var buttonText = $('#toggle_text');
        if($("#stickyMenu").hasClass('-hide')) { 
            $(buttonText).html(`ซ่อน <i class="bi bi-chevron-down"></i>`)
        }else { 
            $(buttonText).html(`แสดง <i class="bi bi-chevron-up"></i>`)
        }
        $("#stickyMenu").toggleClass('-hide');
    },
    toTop: function() { 
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; 
    }
}


/* ------- Social Icons ------- */
var url = window.location.href.split("?")[0];
document
    .querySelectorAll(".social-share-icon")
    .forEach((e) => {
        var socials = `
          <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}" target="_blank">
            <img src="./img/icon-facebook-white.svg" alt="icon-share-facebook" />
          </a>
          <a href="https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}" target="_blank">
            <img src="./img/icon-twitter-white.svg" alt="icon-share-line" />
          </a>
            <a href="https://twitter.com/share?url=${encodeURIComponent(url)}" target="_blank">
            <img src="./img/icon-line-white.svg" alt="icon-share-twitter" />
            </a>
          `;
        e.insertAdjacentHTML( 'beforeend', socials );
    }
);