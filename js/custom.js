 $(document).ready(function () {

     // Typewriter Function
     var i = 0;
     var txt = "Hi There! Welcome to my Portfolio!!"
     var speed = 50;

     function typeWriter() {
         if (i < txt.length) {
             document.getElementById("loadContent").innerHTML += txt.charAt(i);
             i++;
             setTimeout(typeWriter, speed);
         }
     }


     //hamburger js
     var forEach = function (t, o, r) {
         if ("[object Object]" === Object.prototype.toString.call(t))
             for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
         else
             for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
     };

     var hamburgers = document.querySelectorAll(".hamburger");
     if (hamburgers.length > 0) {
         forEach(hamburgers, function (hamburger) {
             hamburger.addEventListener("click", function () {
                 this.classList.toggle("is-active");
             }, false);
         });
     }


     // toggleClass function
     function clickFunc(btnObj, trgtObj, className) {
         $(btnObj).on('click', function () {
             $(trgtObj).toggleClass(className);
             //contentLoad("#navbarNavDropdown .navbar-nav .nav-item a", ".content"); //contentLoad function call   
         })
     }







     // navigation class toggle function
     $('.nav-link').on('click', function () {
         $('.nav-item').removeClass("active");
         $(this).parent().addClass("active");
         $(this).parents().find('.navbar-collapse').toggleClass('show', 1500)
         $('.hamburger').toggleClass('is-active', 1500);
     })


     //dynamic content loading
     function contentLoad(trigger, container) {
         $(trigger).on('click', function () {
             var target = $(this).data('target');
             $(container).load('pages/' + target + '.php');
             return false;
         })

     }


     // dynamic content loading 
     function menuContentLoadFunc(navObj, trgtObj, contOnj) {
         $(navObj).on('click', function () {
             var linkObj = $(this).attr(trgtObj);
             $(contOnj).fadeOut(200);
             $(linkObj).fadeIn(500);
             return false;

         })
     }



     function deviceSpecificFunc() {
         var winWidth = $(window).width();
         console.log('window size : ' + winWidth)
         if (winWidth <= 425) {
             $('html').addClass('mobile').removeClass('desktop')
             console.log('mobile')
         } else if (winWidth <= 768) {
             $('html').addClass('tablet').removeClass('desktop')
             console.log('tablet')
         } else if (winWidth >= 769) {
             $('html').addClass('desktop')
             console.log('desktop')
         }
     }


     particlesJS("particles-js", {
         "particles": {
             "number": {
                 "value": 60,
                 "density": {
                     "enable": true,
                     "value_area": 800
                 }
             },
             "color": {
                 "value": "#eb9369"
             },
             "shape": {
                 "type": "star",
                 "stroke": {
                     "width": 0,
                     "color": "#000000"
                 },
                 "polygon": {
                     "nb_sides": 5
                 },
                 "image": {
                     "src": "img/github.svg",
                     "width": 100,
                     "height": 100
                 }
             },
             "opacity": {
                 "value": 1,
                 "random": true,
                 "anim": {
                     "enable": true,
                     "speed": 1,
                     "opacity_min": 0,
                     "sync": false
                 }
             },
             "size": {
                 "value": 7,
                 "random": true,
                 "anim": {
                     "enable": false,
                     "speed": 5,
                     "size_min": 0.2,
                     "sync": false
                 }
             },
             "line_linked": {
                 "enable": false,
                 "distance": 150,
                 "color": "#ffffff",
                 "opacity": 0.4,
                 "width": 1
             },
             "move": {
                 "enable": true,
                 "speed": 3,
                 "direction": "none",
                 "random": true,
                 "straight": false,
                 "out_mode": "out",
                 "bounce": false,
                 "attract": {
                     "enable": false,
                     "rotateX": 600,
                     "rotateY": 600
                 }
             }
         },
         "interactivity": {
             "detect_on": "canvas",
             "events": {
                 "onhover": {
                     "enable": true,
                     "mode": "bubble"
                 },
                 "onclick": {
                     "enable": true,
                     "mode": "repulse"
                 },
                 "resize": true
             },
             "modes": {
                 "grab": {
                     "distance": 400,
                     "line_linked": {
                         "opacity": 1
                     }
                 },
                 "bubble": {
                     "distance": 250,
                     "size": 0,
                     "duration": 2,
                     "opacity": 0,
                     "speed": 3
                 },
                 "repulse": {
                     "distance": 400,
                     "duration": 0.4
                 },
                 "push": {
                     "particles_nb": 4
                 },
                 "remove": {
                     "particles_nb": 2
                 }
             }
         },
         "retina_detect": true
     });





     $(window).resize(function () {
         //deviceSpecificFunc();
     })


     menuContentLoadFunc('#navbarNavDropdown .navbar-nav .nav-item a', 'data-target', '.sectionCont')


     typeWriter(); // typerwriter function call

     // clickFunc function call
     if ($('html').hasClass('desktop')) {
         $('.rightSide .rightContent').css({
             'width': 130 + '%'
         })
         clickFunc('.mainBtn', '.leftSide', 'contract');
         clickFunc('.mainBtn', '.rightSide', 'expand');
         clickFunc('.close', '.rightSide', 'expand');
         clickFunc('.close', '.leftSide', 'contract');
     }
     //contentLoad("#navbarNavDropdown .navbar-nav .nav-item a", ".content"); //contentLoad function call   

 })