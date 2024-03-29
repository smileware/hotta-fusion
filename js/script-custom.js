
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

        if (event.target.parentNode.matches("#site-nav-m .nav-item-has-children")) {
            if(event.target.getAttribute("href") === '#') { 
                document.querySelectorAll('#site-nav-m .menu .nav-item-has-children').forEach((e) => {
                    if(e !== event.target.parentNode) { 
                        e.classList.remove("active");
                    }
                });
                if (event.target.parentNode.classList.contains("active")) {
                    event.target.parentNode.classList.remove("active");
                } else {
                    event.target.parentNode.classList.add("active");
                }
            }
        }
        // Click on Arrow
        if (event.target.matches("#site-nav-m .nav-item-has-children > svg")) {
            document.querySelectorAll('#site-nav-m .menu .nav-item-has-children').forEach((e) => {
                if(e !== event.target.parentNode) { 
                    e.classList.remove("active");
                }
            });
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
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 20 20"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg>'
        );
    }
);

/* --- LOTTIE ANIMATION RENDER --- */
/*------- Preloader ------*/
$(window).on('load', function() {
    lottie.loadAnimation({
        container: document.getElementById("loading-logo"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: `./img/animation/loading-logo.json`
    });
    $('.preloader').delay(2500).fadeOut('slow');
    // Arrow-Down
    // lottie.loadAnimation({
    //     container: document.getElementById("arrow-down"),
    //     renderer: "svg",
    //     loop: true,
    //     autoplay: true,
    //     path: `./img/animation/arrow-down.json`
    // });
    // Shake
    lottie.loadAnimation({
        container: document.getElementById("shake"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: `./img/animation/shake.json`
    });
    // Arrow-To-Left
    lottie.loadAnimation({
        container: document.getElementById("arrow-left"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: `./img/animation/right.json`
    });
    // Arrow-To-Right
    lottie.loadAnimation({
        container: document.getElementById("arrow-right"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: `./img/animation/left.json`
    });
    // Vitamin
    lottie.loadAnimation({
        container: document.getElementById("vitamin"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: `./img/animation/vitamins-new.json`
    });
});

/* --- Modal --- */
$('#siteVideo').on('shown.bs.modal', function () { 
    if($("#siteVideo iframe").length) { 
        $("#siteVideo iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    }else if( $("#siteVideo video").length ) { 
        $('#siteVideo video').trigger('play');
    }
});

$("#siteVideo").on('hidden.bs.modal', function (e) {
    if($("#siteVideo iframe").length) {
        $("#siteVideo iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    }else if( $("#siteVideo video").length ) { 
        $('#siteVideo video').trigger('pause');
    }
});

/*------- Sound ------*/
var isPlaying = false;
document
    .querySelectorAll(".menu-audio")
    .forEach((e) => {
        e.addEventListener(
        "click", function() { 
            var myAudio = e.querySelector("audio");
            isPlaying ? myAudio.pause() : myAudio.play();
            myAudio.onplaying = function() {
                isPlaying = true;
                e.querySelector(".audio-status").innerHTML = "ON";
                e.querySelector(".audio-icon img").src = "./img/audio-on.svg";
            };
            myAudio.onpause = function() {
                isPlaying = false;
                e.querySelector(".audio-status").innerHTML = "OFF";
                e.querySelector(".audio-icon img").src = "./img/audio-off.svg";
            };
        });
    }
);


// var myAudio = document.getElementById("myAudio");


// function togglePlay() {
//   isPlaying ? myAudio.pause() : myAudio.play();
// };

// myAudio.onplaying = function() {
//   isPlaying = true;
//   $("#sound_status").html('ON');
//   $("#sound_icon").attr("src","./img/audio-on.svg");
// };
// myAudio.onpause = function() {
//   isPlaying = false;
//   $("#sound_status").html('OFF');
//   $("#sound_icon").attr("src","../img/audio-off.svg");
// };

/*------- Banner ------*/
// Desktop
var checkLength = document.querySelectorAll(".swiper-homepage .swiper-slide");
var autoplayInstances = false;
if(checkLength.length > 1) { 
    autoplayInstances = {
        delay: 6000,
        disableOnInteraction: false
    };
}

var homepageBanner = new Swiper( ".swiper-homepage" , {
    loop: true,
    autoplay: autoplayInstances,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
});
var brandCarousel = new Swiper(".swiper-brand", {
    spaceBetween: 15,
    slidesPerView: 3,
    slidesPerColumn: 2,
    slidesPerColumnFill: "row",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
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
            slidesPerGroup: 3,
            centeredSlides: false,
            // loop: true,
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
    spaceBetween: 0,
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

// var productCarousel = new Swiper(".swiper-product", {
//     slidesPerView: 1,
//     centeredSlides: false,
//     grabCursor: false,
//     simulateTouch: false,
//     loop: false,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     }
// });


var hotDrinkCarousel = new Swiper(".swiper-hot-drink", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

var coldDrinkCarousel = new Swiper(".swiper-cold-drink", {
    slidesPerView: 1,
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
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
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '30px',
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
var youtubeState = "";
$('.-youtube').click(function(){ 
    var isCurrent = $(this).parent('.slick-current').length;
    if(isCurrent) { 
        var isPlaying = $(this).hasClass('-playing');
        $(this).toggleClass('-playing');
        if(!isPlaying) { 
            $(this).find('.youtube-thumbnail').css('display', 'none');
            $(this).find('iframe').css('display', 'block');
            $(this).find('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*'); // play
            youtubeState = 'playVideo';
        }else {
            $(this).find('.youtube-thumbnail').css('display', 'block');
            $(this).find('iframe').css('display', 'none');
            $(this).find('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); // pause
            youtubeState = 'pauseVideo';
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
var stickyOffset = isMobile() ? 268 : 90; // 268 Footer height when mobile, 90 when desktop
window.addEventListener("scroll", function () {
    var docHeight = $(document).height();
	var currentPosition = window.innerHeight + $(window).scrollTop();
    var sticky = $("#stickyMenu");
    if((docHeight - stickyOffset) <= currentPosition) {
        sticky.css({ bottom: (stickyOffset - (docHeight - currentPosition)) + 30 + "px" });
    }else { 
        sticky.css({ bottom: "30px"});
    }
}, false);

/* -------  Sticky CUP ------- */
if (document.querySelector('.about-us')) {
    window.addEventListener("scroll", function () {
        var docHeight = $(document).height();
        var currentPosition = $(window).height() + $(window).scrollTop();
        var screenHeight =  $(window).height();
        var perfectHeight = 698; 
        if(docHeight == currentPosition && screenHeight > 800) {
            var marginTop =  (screenHeight - perfectHeight) - 90;
            console.log(marginTop);
            $('#pin1').css({marginTop: marginTop + "px"})
        }else { 
            $('#pin1').css({marginTop: "auto"})
        }
    }, false);
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


/* ------- Tabs ------- */
$('.howto-drink--tab[data-toggle="tab"]').on('show.bs.tab', function (e) {
    if(e.target.id == "nav-cold-tab") { 
        console.log(e.target.id);
        $("#product_howto_drink").removeClass('-hot');
        $("#product_howto_drink").addClass('-cold');
    }else { 
        $("#product_howto_drink").removeClass('-cold');
        $("#product_howto_drink").addClass('-hot');
    }
  })



/* ------- CheckBox Show/Hide Product Page ------- */
$('input[type="radio"][name="product-size"]').on('click', function(e) {
    $('.product-image-value').each((idx, value) => {
        $(value).hide();

        var imageValue = $(value).data("image-value");
        if( imageValue ==  e.target.value) {
            $(value).fadeIn(300) 
        }
    });
    // Button
    $('.product-cta').each((idx, value) => {
        $(value).hide();
        var btnValue = $(value).data("button-value");
        if( btnValue ==  e.target.value) {
            $(value).fadeIn(300) 
        }
    });
});

// Unnecessary function for custom <select>;
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-dropdown");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;

    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    // 
    // for first option
    // d = document.createElement("DIV");
    // d.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    d = document.createElement("DIV");
    d.innerHTML = selElmnt.options[0].innerHTML;

    d.setAttribute("data-value", selElmnt.options[0].value);
    d.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
            }
        }
        h.click();
    });
    b.appendChild(d);
    // 

  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.setAttribute("data-value", selElmnt[j].value)
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;

        for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");

  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);


// Toggle Radoi for size
$(':radio[name=radio1]').change(function() {
    $("#yes").removeClass("none");
    $("#no").addClass("none");
});