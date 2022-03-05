(function($) {
  $(function() {
    $('#RYF').hover(function(){
        $('#learnContents').hide();
        $('#RYFContents').show();
        $('#resourcesContents').hide();
    }
  );
    $('#resources').hover(function(){
        $('#learnContents').hide();
        $('#RYFContents').hide();
        $('#resourcesContents').show();
    }
  );
    $('#about').hover(function(){
        $('#learnContents').hide();
        $('#RYFContents').hide();
        $('#resourcesContents').hide();
    }
  );
    $('#quiz').hover(function(){
        $('#learnContents').hide();
        $('#RYFContents').hide();
        $('#resourcesContents').hide();
    }
  );
    $('#learn').hover(function(){
        $('#learnContents').show();
        $('#RYFContents').hide();
        $('#resourcesContents').hide();
    }
  );
$('body').hover(function(){
  $('.nav-dropdown').hide();
});
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  });
})(jQuery);
