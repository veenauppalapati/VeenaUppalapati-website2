$(document).ready(function(){
    $(".fullscreen_nav_menu").hide();
    $('.close_icon').hide();
    $('.portfolio').hide();
    // $('.work_window').hide();
    $('.whiteOverlay').hide();
    $('.headerbg_home').show();
    
    // when the hamburger button is triggered
    $(".hamburger_icon_fullscreen").click(function(){       
        $(".fullscreen_nav_menu").show();
        $('.overlay').hide();
        $('.portfolio').hide();
        $('.close_icon').show();
        $('.hamburger_icon_fullscreen').hide();
        $('.work_window').hide();   
        $('.contact_menu_title h3').css('color', 'white');
        $('.hamburger_icon_wrapper').hide();
        $('.portfolio_header').css('background-color', '#11394B');
        $('#contactForm').hide();
    });

    // When the close icon is triggered
    $(".close_icon").click(function(){
        $(".fullscreen_nav_menu").hide();
        $('.overlay').show();
        $('.portfolio').hide();
        $('.hamburger_icon_fullscreen').show();
        $('.close_icon').hide();
        $('.work_window').show();
        $('.whiteOverlay').hide();
        $('#contactHeader').css('background-color', 'blue');
        $('#indexHeader').css('background-color', 'red');
        $('.headerbg').removeClass('headerColor');  
        $('.headerbg_home').hide();  
        $('.hamburger_icon_wrapper').show();
        $('.portfolio_header').css('background-color', 'transparent');
        $('body').css('background-image', "url('../assets/images/giphy.gif'" );
        $('body').css('background-repeat', 'repeat' );
        $('#contactForm').show();
    });

    // When the carat icon is triggered
    $('#caretDown_icon').click(function(){
        $('.headerbg').addClass('headerColor');
        $('h3, #hamburger_icon_fullscreen').css('color', 'white');
        $('.hamburger_icon_wrapper').css('border-left', '1px solid white');
        $('.portfolio_header').css('background-color', 'transparent');
        $('.overlay').hide();
        $('.portfolio').toggle();
        $('.work_window').show();
        $('.whiteOverlay').show(); 
        $('body').css({'background-image': "url('./Veenacover.jpg'", 'background-repeat': 'no-repeat'});
        $('body').css('background-size', 'scale-down' );
        // $('body').css('background-repeat', 'no-repeat' );
    });

    // mediaQueryjs
    function myFunction(x) {
        if (x.matches) { // If media query matches
           $('#caretDown_icon').hide();
           $('.fullscreen_network_links_container').hide();
           
        } else {
            $('#caretDown_icon').show();
            $('.fullscreen_network_links_container').show();
           
        }
    }
    
    var x = window.matchMedia("(max-height: 320px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
   


});