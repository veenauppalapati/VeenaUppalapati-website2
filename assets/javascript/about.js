$(document).ready(function(){
    // on the page loads the full screen menu shall hide
$('.bg').hide();
    $(".hamburger_icon_fullscreen").click(function(){
        $('.title_mobile').hide();
        $('.shallHide').hide();
        $('.pinkDiv').hide(); 
        $('#contactForm').hide();
    });

    $(".close_icon").click(function(){
        $('.shallHide').show();
        $('.pinkDiv').show(); 
        $('.title_mobile').show();
        $('.network_links_container').show();
        
    });
});