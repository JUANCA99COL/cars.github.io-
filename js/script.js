console.log('js');
$('.second-nav').hide();
$(document).ready(function(){

  $('#menu').click(function(){
    $('.second-nav').toggle();
  });

  $('#send-btn').click(function(){
    alert("thanks we'll be in contact soon");
    });
});
