$(document).ready(function() {
  //E-mail Ajax Send
  $("#forms").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "modalform.php", //Change
      data: th.serialize(),
      success: function(data) {
                    $('.modal').removeClass('show');
                    $('body').removeClass('modal-open');
                    $('.modal-backdrop').css('display','none');
                },
    }).done(function() {
      $('.js-overlay-thank-you').fadeIn();
    });
    return false;
  });

   });
   $('.js-close-thank-you').click(function() { // по клику на крестик
  $('.js-overlay-thank-you').fadeOut();
});

