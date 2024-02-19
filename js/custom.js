
$(document).ready(function(){
    // Adding the class on click
    $(".search-box").click(function(e){
        e.stopPropagation(); // Prevents the click event from propagating to the document
        $(this).addClass('clicked');
    });

    // Removing the class when clicking outside of the element
    $(document).click(function(e) {
        if (!$(e.target).closest('.search-box').length) {
            $(".search-box").removeClass('clicked');
        }
    });

  
        $('input[type="file"]').on('click', function() {
            $(".file_names").html("");
          })
        if ($('input[type="file"]')[0]) {
            var fileInput = document.querySelector('label[for="et_pb_contact_brand_file_request_0"]');
            fileInput.ondragover = function() {
                this.className = "et_pb_contact_form_label changed";
                return false;
            }
            fileInput.ondragleave = function() {
                this.className = "et_pb_contact_form_label";
                return false;
            }
            fileInput.ondrop = function(e) {
                e.preventDefault();
                var fileNames = e.dataTransfer.files;
                for (var x = 0; x < fileNames.length; x++) {
                    console.log(fileNames[x].name);
                    $=jQuery.noConflict();
                    $('label[for="et_pb_contact_brand_file_request_0"]').append("<div class='file_names'>"+ fileNames[x].name +"</div>");
                }
            }
            $('#et_pb_contact_brand_file_request_0').change(function() {
                var fileNames = $('#et_pb_contact_brand_file_request_0')[0].files[0].name;
                $('label[for="et_pb_contact_brand_file_request_0"]').append("<div class='file_names'>"+ fileNames +"</div>");
                $('label[for="et_pb_contact_brand_file_request_0"]').css('background-color', '##eee9ff');
            });
            }
   
        $('#birthdate').on('click', function(){
            $('.application .select-date label').remove();
        });

        

});

/*global $ */
(function ($) {
    "use strict";

    // // Pre Loading 
  

    // $(window).on('load', function () { 
    //     setTimeout(function () {
    //         $('.loader').fadeOut(3000, function () {
    //             $('body').removeClass('stopScroll');
    //             $(this).remove();
    //         }); 
    //     },5000);   
    // });

    // sticky navbar
    let viewHeight = window.innerHeight;
    $(window).on('scroll',function () {
       $(window).scrollTop() > (viewHeight -100 ) ? $('.navWrapper').addClass('sticky') : $('.navWrapper').removeClass('sticky');
       $(window).scrollTop() > (viewHeight -100 ) ? $('.navbar-section .logo img').attr('src', 'images/logo.png') : $('.navbar-section .logo img').attr('src', 'images/Logo_white.png')
       $(window).scrollTop() > (viewHeight -100 ) ? $('.navbar-section.black .logo img').attr('src', 'images/logo.png') : $('.navbar-section.black .logo img').attr('src', 'images/logo.png')
       
    });
    
  
 
    // Scroll Menu
    $('.navMenu a.go').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1000, 'linear');
        $('.mainMenu li').removeClass('active');
        $(this).parent().addClass('active');
    });  

    $('.go-to a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top 
        }, 1000, 'linear');
    
    });

    $(window).on('scroll',function () {
        var sections = $('section')
        sections.each(function() {
            let top = window.scrollY ;
            var secOffset = $(this).offset().top - 100,
                bottom = top + $(this).outerHeight();
            
            if (top >= secOffset && top <= bottom) {
                let activeId = $(this).attr('id');
                $('.navMenu li').removeClass('active');
                
                $('.navMenu a[href="#'+activeId+'"]').parent().addClass('active');
            }
        });
    });
    
    // Go through a sentence, wrap its characters with spans
    function setUpCharacters() {
        var $sentences = $('.header h1');

        // Run for each sentence
        $sentences.each(function () {
            var $sentence = $(this);
            var newContent = '';

            // Go through all characters of the sentence
            var x = 0.1;
            for (let i = 0; i < $sentence.text().length; i++) {
                var substring = $sentence.text().substr(i, 1);

                // If we have a character, wrap it
                if (substring != " ") {
                    newContent += '<span style="animation-delay:'+x+'s">' + substring + '</span>';
                    x = x + 0.2;
                } else {
                    newContent += substring;
                }
            }

            // Replace content
            $sentence.html(newContent);
        });
    }
    setUpCharacters();

    setTimeout(function(){
        $('.header p').addClass('show');
        setTimeout(function() {
            $('.header .flex').addClass('show');
        }, 1000);
    }, 10000);



    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function () {
        $('.navMenu').toggleClass('show');
        $('.bodyOverlay').addClass('show');
        setTimeout(function () {
            $('body').addClass('stopScroll');
        }, 100);
    });

    // CLOSE SIDE MENU 
    $('.bodyOverlay').on('click', function () {
        $(this).removeClass('show');
        $('.navMenu').removeClass('show');
        $('body').removeClass('stopScroll');
    });

  

    // iniat WOW Js
    new WOW().init();


})(jQuery);


