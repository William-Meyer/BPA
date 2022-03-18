(function($) {
  $(function() {

    $('#container').hover(function(){
      if($(window).width() > 1100){
      $('#learnContents').hide();
      $('#RYFContents').hide();
      $('#resourcesContents').hide();
    }
    });
    $('#RYF').hover(function(){
      if($(window).width() > 1100){
        $('#learnContents').hide();
        $('#RYFContents').show();
        $('#resourcesContents').hide();
      }
    }
  );
    $('#resources').hover(function(){
      if($(window).width() > 1100){
        $('#learnContents').hide();
        $('#RYFContents').hide();
        $('#resourcesContents').show();}
    }
  );
    $('#about').hover(function(){
      if($(window).width() > 1100){
        $('#learnContents').hide();
        $('#RYFContents').hide();
        $('#resourcesContents').hide();}
    }
  );
    $('#quiz').hover(function(){
      if($(window).width() > 1100){
        $('#learnContents').hide();
        $('#RYFContents').hide();
        $('#resourcesContents').hide();}
    }
  );
    $('#learn').hover(function(){
      if($(window).width() > 1100){

        $("#learnContents").css("display", "block");
        $('#learnContents').show();
        $('#RYFContents').hide();
        $('#resourcesContents').hide();}
    }
  );
  $('#learn').click(function(){
    if($(window).width() <= 1100 && $('#learnContents').is(":hidden")){
      $("#learnContents").slideDown();
      $('#learnContents').show();
      $('#RYFContents').hide();
      $('#resourcesContents').hide();
    }
    else{
      $('#learnContents').slideUp();
    }
  });
  $('#quiz').click(function(){
    if($(window).width() <= 1100 ){
      $('#learnContents').hide();
      $('#RYFContents').hide();
      $('#resourcesContents').hide();
    }
  });
  $('#about').click(function(){
    if($(window).width() <= 1100){
      $('#learnContents').hide();
      $('#RYFContents').hide();
      $('#resourcesContents').hide();
    }
  });
  $('#resources').click(function(){
    if($(window).width() <= 1100 && $('#resourcesContents').is(":hidden")){
      $("#resourcesContents").slideDown();
      $('#learnContents').hide();
      $('#RYFContents').hide();
      $('#resourcesContents').show();
    }
    else{
      $('#resourcesContents').slideUp();
    }
  });
  $('#RYF').click(function(){
    if($(window).width() <= 1100 && $('#RYFContents').is(":hidden")){
      $("#RYFContents").slideDown();
      $('#learnContents').hide();
      $('#RYFContents').show();
      $('#resourcesContents').hide();
    }
    else{
      $('#RYFContents').slideUp();
    }
  });
  $('#container').click(function(){
    if($(window).width() <= 1100){
    $('#learnContents').hide();
    $('#RYFContents').hide();
    $('#resourcesContents').hide();}
  });


    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
      $('#learnContents').hide();
      $('#RYFContents').hide();
      $('#resourcesContents').hide();
    });
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  });
})(jQuery);
