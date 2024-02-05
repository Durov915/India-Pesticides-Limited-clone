/*global jQuery */
/* Contents
// ------------------------------------------------>
	1.  LOADING SCREEN
	2.  BACKGROUND INSERT
	3.	NAV MODULE
	4.  MOBILE MENU
	5.  NAVBAR STICKY
	6.  COUNTER UP              
	7.  COUNTDOWN DATE  
	8.  AJAX MAILCHIMP        
	9.  AJAX CAMPAIGN MONITOR 
	10. OWL CAROUSEL
	11. MAGNIFIC POPUP
	12. MAGNIFIC POPUP VIDEO
	13. BACK TO TOP
	14. PROJECT FLITER
	15. SCROLL TO
	16. PROGRESS BAR
	17. SLIDER RANGE            
	18. AJAX CONTACT FORM       
	19. PARALLAX FOOTER
	20. NICE SELECT
	21. ACCORDION ACTIVE CLASS
	22. LOADING MORE COTENT
	23. WOW ANIMATED
	24. IMAGE HOT POINTER
    25. SHOP PRODUCT QUANTITIY
*/
(function($) {
    "use strict";
    /* ------------------  LOADING SCREEN ------------------ */

    $(window).on("load", function() {
        $(".preloader").fadeOut(5000);
        $(".preloader").remove();
    });

    /* ------------------  Background INSERT ------------------ */

    var $bgSection = $(".bg-section");
    var $bgPattern = $(".bg-pattern");
    var $colBg = $(".col-bg");

    $bgSection.each(function() {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("bg-section");
        $(this).remove();
    });

    $bgPattern.each(function() {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("bg-pattern");
        $(this).remove();
    });

    $colBg.each(function() {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("col-bg");
        $(this).remove();
    });

    /* ------------------  MODULE SEARCH  ------------------ */

    var $moduleSearch = $(".module-icon-search"),
        $searchWarp = $(".module-search-warp");

    $moduleSearch.on("click", function() {
        $(this).parent().addClass("module-active");
        $(this).parent().siblings().removeClass("module-active");
        $searchWarp.addClass("search-warp-active");
    });

    /* ------------------  MODULE CART ------------------ */

    var $moduleCart = $(".module-icon-cart"),
        $cartWarp = $(".module-cart-warp");

    $moduleCart.on("click", function() {
        $(this).parent().toggleClass("module-active");
        $(this).parent().siblings().removeClass("module-active");
    });


    /* ------------------  MODULE CANCEL ------------------ */

    var $module = $(".module"),
        $moduleWarp = $(".module-warp"),
        $moduleCancel = $(".module-cancel");

    $moduleCancel.on("click", function(e) {
        $module.removeClass("module-active");
        $searchWarp.removeClass("search-warp-active");
        e.stopPropagation();
        e.preventDefault();
    });

    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            $module.removeClass("module-active");
            $moduleWarp.removeClass("active");
            $searchWarp.removeClass("search-warp-active");
            $popMenuWarp.removeClass("popup-menu-warp-active");
        }
    });

    /* ------------------  MOBILE MENU ------------------ */

    var $w = $(window);
    var $wWidth = $w.width();
    var mobile_resolution_size = "1200";
    var $dropToggle = $("[data-toggle='dropdown']");
    $dropToggle.on("click", function(event) {
        $(this).each(() => {
            if ($wWidth <= mobile_resolution_size && $(this).attr('href') === '#') {
                event.preventDefault();
                event.stopPropagation();
                $(this).parent().siblings().removeClass("show");
                $(this).parent().toggleClass("show");
            } else if ($wWidth <= mobile_resolution_size && !$(this).attr('href') !== '#') {
                event.preventDefault();
                event.stopPropagation();
                $(this).parent().siblings().removeClass("show");
                $(this).parent().toggleClass("show");
                $(this).children('span').on('click', () => {
                    window.location.href = $(this).attr('href');
                })
            }
        })

    });

    /* ------------------ NAVBAR STICKY ------------------ */

    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $('.navbar-sticky').addClass('navbar-fixed');
        } else {
            $('.navbar-sticky').removeClass('navbar-fixed');
        }
    });

    /* ------------------  COUNTER UP ------------------ */

    $(".counting").counterUp({
        delay: 10,
        time: 1000
    });

    /* ------------------  AJAX MAILCHIMP ------------------ */

    $('.mailchimp').ajaxChimp({
        url: "http://wplly.us5.list-manage.com/subscribe/post?u=91b69df995c1c90e1de2f6497&id=aa0f2ab5fa", //Replace with your own mailchimp Campaigns URL.
        callback: chimpCallback

    });

    function chimpCallback(resp) {
        if (resp.result === 'success') {
            $('.subscribe-alert').html('<div class="alert alert-success">' + resp.msg + '</div>').fadeIn(1000);
            //$('.subscribe-alert').delay(6000).fadeOut();

        } else if (resp.result === 'error') {
            $('.subscribe-alert').html('<div class="alert alert-danger">' + resp.msg + '</div>').fadeIn(1000);
        }
    }

    /* ------------------  AJAX CAMPAIGN MONITOR  ------------------ */

    $('#campaignmonitor').submit(function(e) {
        e.preventDefault();
        $.getJSON(
            this.action + "?callback=?",
            $(this).serialize(),
            function(data) {
                if (data.Status === 400) {
                    alert("Error: " + data.Message);
                } else { // 200
                    alert("Success: " + data.Message);
                }
            });
    });

    /* ------------------ OWL CAROUSEL ------------------ */

    var $carouselDirection = $("html").attr("dir");
    if ($carouselDirection == "rtl") {
        var $carouselrtl = true;
    } else {
        var $carouselrtl = false;
    }

    $(".carousel").each(function() {
        var $Carousel = $(this);
        $Carousel.owlCarousel({
            loop: $Carousel.data('loop'),
            autoplay: $Carousel.data("autoplay"),
            margin: $Carousel.data('space'),
            nav: $Carousel.data('nav'),
            dots: $Carousel.data('dots'),
            dotsSpeed: $Carousel.data('speed'),
            mouseDrag: $Carousel.data('drag'),
            touchDrag: $Carousel.data('drag'),
            pullDrag: $Carousel.data('drag'),
            rtl: $carouselrtl,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: $Carousel.data('slide-rs'),
                },
                1000: {
                    items: $Carousel.data('slide'),
                    center: $Carousel.data('center'),
                }
            }
        });
    });

    $(".slider-carousel").each(function() {
        var $Carousel = $(this);
        $Carousel.owlCarousel({
            loop: $Carousel.data('loop'),
            autoplay: $Carousel.data("autoplay"),
            margin: $Carousel.data('space'),
            nav: $Carousel.data('nav'),
            dots: $Carousel.data('dots'),
            center: $Carousel.data('center'),
            dotsSpeed: $Carousel.data('speed'),
            rtl: $carouselrtl,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: $Carousel.data('slide-rs'),
                },
                1000: {
                    items: $Carousel.data('slide'),
                }
            },
            animateOut: 'fadeOut',
            //animateOut: 'fadeOutLeft',
            //animateIn: 'flipInX',
            //smartSpeed: 450
        });
    });

    // Clicking On Thumbs
    $('.testimonial-thumbs .testimonial-thumb').on('click', function() {
        $(this).siblings(".testimonial-thumb").removeClass('active');
        $(this).addClass('active');
        $(".testimonials-carousel").trigger('to.owl.carousel', [$(this).index(), 300]);
    });
    // Draging The Carousel And The Thumbs Still has Active Class 
    $(".testimonials-carousel").on('changed.owl.carousel', function(event) {
        var items = event.item.count; // Number of items
        var item = event.item.index; // Position of the current item
        var owlDots = document.querySelectorAll('.testimonial-thumbs .testimonial-thumb');
        if (owlDots.length > 0) {
            owlDots[item].click()
        }
    })

    // Draging The Carousel And Link It To Another Carousel
    $(".process-content-carousel").on('changed.owl.carousel', function(event) {
        var items = event.item.count; // Number of items
        var item = event.item.index; // Position of the current item
        $(".process-image-carousel").trigger('to.owl.carousel', [item, 800]);
    })
    // Draging The Carousel And Link It To Another Carousel [ On Page Service Single ]
    $('.entry-processes .images-holder .process-image-carousel').on('changed.owl.carousel', function(event) {
        var items = event.item.count; // Number of items
        var item = event.item.index; // Position of the current item
        $(".entry-processes .entry-body .process-content-carousel").trigger('to.owl.carousel', [item, 800]);


        ///////custom code here/////////
        $("to.owl.carousel").trigger('.entry-processes .entry-body .process-content-carousel', [item, 800]);
        ///////end custom code here/////////

    })

    /* ------------------ MAGNIFIC POPUP ------------------ */

    var $imgPopup = $(".img-popup");
    $imgPopup.magnificPopup({
        type: "image"
    });
    $('.img-gallery-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* ------------------  MAGNIFIC POPUP VIDEO ------------------ */

    $('.popup-video,.popup-gmaps').magnificPopup({
        disableOn: 700,
        mainClass: 'mfp-fade',
        removalDelay: 0,
        preloader: false,
        fixedContentPos: false,
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src',
        }
    });

    /* ------------------  BACK TO TOP ------------------ */

    var backTop = $('#back-to-top');

    if (backTop.length) {
        var scrollTrigger = 600, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    backTop.addClass('show');
                } else {
                    backTop.removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        backTop.on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    /* ------------------ PROJECTS FLITER ------------------ */

    var $projectFilter = $(".projects-filter"),
        projectLength = $projectFilter.length,
        protfolioFinder = $projectFilter.find("a"),
        $projectAll = $("#projects-all");


    // init Isotope For project
    protfolioFinder.on("click", function(e) {
        e.preventDefault();
        $projectFilter.find("a.active-filter").removeClass("active-filter");
        $(this).addClass("active-filter");
    });
    // ------------------comment 
    // if (projectLength > 0) {
    //     $projectAll.imagesLoaded().progress(function() {
    //         $projectAll.isotope({
    //             filter: "*",
    //             animationOptions: {
    //                 duration: 750,
    //                 itemSelector: ".project-item",
    //                 easing: "linear",
    //                 queue: false,
    //             }
    //         });
    //     });
    // } 
    protfolioFinder.on("click", function(e) {
        e.preventDefault();
        var $selector = $(this).attr("data-filter");
        $projectAll.imagesLoaded().progress(function() {
            $projectAll.isotope({
                filter: $selector,
                animationOptions: {
                    duration: 750,
                    itemSelector: ".project-item",
                    easing: "_default",
                    queue: false,
                }
            });
            return false;
        });
    });
    // -----------------------------------------------------
    //     var $gallery111 = $('.maingallery').isotope(); 

    //   $('.mainfiltering').on('click', 'a', function () {
    //       var filterValue111 = $(this).attr('data-filter');

    //       $gallery111.isotope({ filter: filterValue111 });
    //   });

    //   $('.mainfiltering').on('click', 'a', function () {
    //       $(this).addClass('active').siblings().removeClass('active');
    //   });

    // // -----------------------------------------------------------------------------------------------
    //     var $gallery222 = $('.undergallery').isotope(); 

    //   $('.underfiltering').on('click', 'a', function () {
    //       var filterValue222 = $(this).attr('data-filter');

    //       $gallery222.isotope({ filter: filterValue222 });
    //   });

    //   $('.underfiltering').on('click', 'a', function () {
    //       $(this).addClass('active').siblings().removeClass('active');
    //   });


    //   $(document).ready(function() {
    //     // executes when HTML-Document is loaded and DOM is ready
    //     var filterValue222 = '.Acaricide';

    //     $gallery222.isotope({ filter: filterValue222});
    //    });





    /* ------------------  SCROLL TO ------------------ */

    var aScroll = $('a[data-scroll="scrollTo"]');
    aScroll.on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            if ($(this).hasClass("menu-item")) {
                $(this).parent().addClass("active");
                $(this).parent().siblings().removeClass("active");
            }
        }
    });

    /* ------------------ PROGRESS BAR ------------------ */

    $(".progressbar").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar"),
                progressBarTitle = $(".progress-title .value");
            progressBar.each(function() {
                $(this).css("width", $(this).attr("aria-valuenow") + "%");
            });
            progressBarTitle.each(function() {
                $(this).css('opacity', 1);
            });
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'
        });
    });

    /* ------------------ SLIDER RANGE ------------------ */

    var $sliderRange = $("#slider-range"),
        $sliderAmount = $("#amount");
    $sliderRange.slider({
        range: true,
        min: 0,
        max: 500,
        values: [50, 300],
        slide: function(event, ui) {
            $sliderAmount.val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $sliderAmount.val("$" + $sliderRange.slider("values", 0) + " - $" + $sliderRange.slider("values", 1));

    /* ------------------  AJAX CONTACT FORM  ------------------ */

    // var contactForm = $(".contactForm"),
    //     contactResult = $('.contact-result');
    // contactForm.validate({
    //     debug: false,
    //     submitHandler: function(contactForm) {
    //         $(contactResult, contactForm).html('Please Wait...');
    //         $.ajax({
    //             type: "POST",
    //             url: "assets/php/contact.php",
    //             data: $(contactForm).serialize(),
    //             timeout: 20000,
    //             success: function(msg) {
    //                 $(contactResult, contactForm).html('<div class="alert alert-success" role="alert"><strong>Thank you. We will contact you shortly.</strong></div>').delay(3000).fadeOut(2000);
    //             },
    //             error: $('.thanks').show()
    //         });
    //         return false;
    //     }
    // });

    /* ------------------  PARALLAX FOOTER ------------------ */

    siteFooter();
    $(window).resize(function() {
        siteFooter();
    });

    function siteFooter() {
        var siteContent = $('#wrapperParallax');

        var siteFooter = $('#footerParallax');
        var siteFooterHeight = siteFooter.height();

        siteContent.css({
            "margin-bottom": siteFooterHeight
        });
        // siteContent.css({
        //     "margin-bottom": "200px"
        // });
    };

    /* ------------------  NICE SELECT ------------------ */

    $('select').niceSelect();

    /* ------------------  ACCORDION ACTIVE CLASS ------------------ */

    $('.collapse').on('shown.bs.collapse', function() {
        $(this).parent('.card').addClass('active-acc');
    });
    $('.collapse').on('hidden.bs.collapse', function() {
        $(this).parent('.card').removeClass('active-acc');
    });

    /* ------------------  LOADING MORE COTENT ------------------ */

    $("#loadMore").on("click", function(e) {
        e.preventDefault();
        $(".content.d-none").slice(0, 3).removeClass('d-none');
        if ($(".content.d-none").length == 0) {
            $("#loadMore").addClass("d-none");
        }
    })

    /* ------------------  WOW Animated ------------------ */
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 50, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (default is true)
        live: true // act on asynchronously loaded content (default is true)

    });
    wow.init();

    /* ------------------  IMAGE HOT POINTER ------------------ */

    var imagePointer = $('.img-hotspot .img-hotspot-pointer');
    var pointerInfo = $('.img-hotspot .img-hotspot-pointer .info');
    imagePointer.each(function(index) {
        $(this).css('top', $(this).data('spot-y'));
        $(this).css('left', $(this).data('spot-x'));
    });

    pointerInfo.each(function(index) {
        $(this).css('top', $(this).data('info-y'));
        $(this).css('left', $(this).data('info-x'));
    });

    /* ------------------  SHOP PRODUCT QUANTITIY ------------------ */

    $('.product-quantity span ').on('click', 'a.plus, a.minus', function() {
        // Get current quantity values
        var qty = $(this).parents('.product-quantity').find('.pro-qunt');
        var val = parseFloat(qty.val());
        var max = parseFloat(qty.data('max'));
        var min = parseFloat(qty.data('min'));
        var step = parseFloat(qty.data('step'));

        // Check If Quantity value is undefined or non numeric 
        if (isNaN(val)) {
            var val = 0;
        }

        // Change the value if plus or minus
        if ($(this).is('.plus')) {
            if (max && (max <= val)) {
                qty.val(max);
            } else {
                qty.val(val + step);
            }
        } else {
            if (min && (min >= val)) {
                qty.val(min);
            } else if (val > 1) {
                qty.val(val - step);
            }
        }
    });

}(jQuery));



// Add active class to the current button (highlight it)

// var header = document.getElementById("manu");
// var btns = header.getElementsByClassName("nav-item");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }

//   function myFunction() {
//   var x = document.getElementById("nono");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
//   function myFunction2() {
//   var x = document.getElementById("nono");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }



function gotolocation() {
    location.href = "product.php#for222";
    //     var element = document.getElementById("myDIV");
    //   element.classList.remove("mystyle");
    // document.getElementsByClassName("apppp")

    // Get the paragraph element
    const element = document.getElementById("for222");
    // Add a class to the paragraph
    element.classList.add("active");

}