$(document).ready(function(){
    $(".fullscreen_nav_menu").hide();
    $('#close_icon').hide();
    $('.portfolio').hide();
    $('.work_window').hide();
    
    
    // when the hamburger button is triggered
    $("#hamburger_icon_fullscreen").click(function(){       
        $(".fullscreen_nav_menu").show();
        $('.overlay').hide();
        $('.portfolio').hide();
        $('#close_icon').show();
        $('#hamburger_icon_fullscreen').hide();
        $('.work_window').hide();   
     $('.contact_menu_title h3').css('color', 'white');
$('.portfolio_header').css('background-color', '#0F394C');
    });

    // When the close icon is triggered
    $("#close_icon").click(function(){
        $(".fullscreen_nav_menu").hide();
        $('.overlay').show();
        $('.portfolio').hide();
        $('#hamburger_icon_fullscreen').toggle();
        $('#close_icon').hide();
        $('.work_window').hide();
        $('#contactHeader').css('background-color', 'blue');
        $('#indexHeader').css('background-color', 'transparent');
        $('.headerbg').removeClass('headerColor');
        

    });

    // When the carat icon is triggered
    $('#caretDown_icon').click(function(){
        $('.headerbg').addClass('headerColor');
        $('h3, #hamburger_icon_fullscreen').css('color', 'white');
        $('.hamburger_icon_wrapper').css('border-left', '1px solid white');
        // $('.portfolio_header').css('background-color', 'black');
        $('.portfolio_header').css('background-color', 'transparent');
        $('.overlay').hide();
        $('.portfolio').toggle();
        $('.work_window').show();
        // $('.fullscree_nav_menu').css('background-color', 'green');   
        
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