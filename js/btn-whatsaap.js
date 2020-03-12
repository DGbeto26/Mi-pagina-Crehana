$(document).ready(function(){
            
    function whatsaap(){

    $(window).on('scroll', function(){
        //responsive Iphone 5
        if(screen.width <= 640){
            if($(window).scrollTop() > 0){
                $('#whatsaap').addClass('action');
            }else{
                $('#whatsaap').removeClass('action');
            }
        // responsive Pc / Tablet
        }else{
            if($(window).scrollTop() > 350){
                $('#whatsaap').addClass('action');
            }else{
                $('#whatsaap').removeClass('action');
            }
        }
    });
    };

    whatsaap();
});