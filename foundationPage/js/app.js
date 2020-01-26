$(document).foundation();{

    images = []

    $('.nextt').on('click', function() {
        var currentImg = $('.active');
        var nextImg = currentImg.next();
      
        if(nextImg.length == 0) {
         nextImg = $('.slide img').first();
         currentImg.fadeOut();
         nextImg.fadeIn();
        }

        // console.log(nextImg);
        // console.log(nextImg.length)
        // console.log('clicked');
        // $('#slide1').fadeOut();
        
        currentImg.removeClass('active');
        nextImg.addClass('active setWidth');

        currentImg.fadeOut();
        nextImg.fadeIn();

        
       });
      
       $('.prev').on('click', function() {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();
      
        if(prevImg.length == 0) {
         prevImg = $('.slide img').last();
         currentImg.fadeOut();
         prevImg.fadeIn();
        }
        
        // console.log(prevImg);
        // console.log(prevImg.length)
        // console.log('clicked');

        currentImg.removeClass('active');
        prevImg.addClass('active setWidth');

        currentImg.fadeOut();
        prevImg.fadeIn();
        
       });

    // $('.nextt').on('click',function(){
    //     console.log('clicked');
    //     var currentImg = $('#slide1');
    //     var nextImg = currentImg.next();

    // });
}
