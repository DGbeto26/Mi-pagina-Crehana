$(window).scroll(function(){
    if(screen.width >= 640){
        if($(window).scrollTop() > 840){
            $('#sticky').addClass('sticky');
        }else{
            $('#sticky').removeClass('sticky');
        }
    }else{
        $('#sticky').removeClass('sticky');
    }
});
