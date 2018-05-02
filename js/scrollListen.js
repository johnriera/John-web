
    let sections = ['#one', '#two', '#three', '#four', '#five'];
    let currentPos = 0;




  onload  = function scrollListen () {



  $(window).on('scroll', function(){
  $(window).off('scroll');



let origin = $(window).scrollTop();
let delta = 0;




    $(window).on('scroll', function() {
      delta = origin - $(window).scrollTop();

           if(Math.abs(delta) > 25){
              $(window).off('scroll');

                     if(delta < 0 && sections[currentPos + 1]){
                           currentPos++;

                           setTimeout(function() {
                            $('html, body').animate({scrollTop: $(sections[currentPos]).offset().top}, 250, function() {
                             scrollListen();
                                 });
                                      }, 250);

                     } else if(delta > 25 && delta < 50 && sections[currentPos - 1]){
                            currentPos--;

                           setTimeout(function() {
                            $('html, body').animate({scrollTop: $(sections[currentPos]).offset().top}, 250, function() {

                            scrollListen();
                                });
                                     }, 250);
                                }
                             }
                          });
                       });
                    }





  $(function() {
  $('.window').css({
    'height': window.innerHeight,
  });

  $(window).resize(() => {
    $('.window').css({
      'height': window.innerHeight,
    });
  });

 scrollListen();

});
