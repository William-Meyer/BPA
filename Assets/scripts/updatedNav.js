(function($) {
  $(function() {
    $('nav ul li a:not(:only-child)').hover(function(e) {
      $(this).siblings('.nav-dropdown').show();
      $(this).show();
      $('.dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $('.listElement a').hover(function(e){
      $('.nav-dropdown').not($(this).siblings()).hide();
      $(this).show();
    })
    $('body').hover(function() {
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
