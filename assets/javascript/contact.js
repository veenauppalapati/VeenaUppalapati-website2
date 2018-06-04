$(document).ready(function(){
    
    
    $('#submit').click(function(){
        var fullName = $('#fullname').val()
        
        var subject = $('#subject').val();
        var messageArea = $('#message-area').val();
        var messageDetails = `mailto:veena.uppalapati@nyfa.edu?subject=${subject}&body=${messageArea}%0A%0A- ${fullName}`
        console.log(messageDetails);
        if( !$('input').val() ) {
            $('#submit').hide(setTimeout(function(){
                alert('please fill out the form')
                $('#submit').show();
            }, 1000));
           
        
      }else{
        $('#submit').show();
        $(this).attr('href', messageDetails);
        $('#fullname').val('');
        $('#subject').val('');
        $('#message-area').val('');
      }
       
    })

   
});
// href=

