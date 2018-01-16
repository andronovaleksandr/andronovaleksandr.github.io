$(document).mouseup(function (e) { // по клику вне попапа
  var popup = $('.popup');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-thank-you').fadeOut();
  }
});

$(document).ready(function() {

  //E-mail Ajax Send
  $("#forms2, #forms1").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "form.php", //Change
      data: th.serialize()
    }).done(function() {
      $('.js-overlay-thank-you').fadeIn();
    });
    return false;
  });

   });
   $('.js-close-thank-you').click(function() { // по клику на крестик
  $('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
  var popup = $('.popup');
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-thank-you').fadeOut();
  }
});