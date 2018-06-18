$(document).ready(function() {

$('.cold').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.cold').addClass('show');
  $('.item.cold').removeClass('hide');
});

$('.neutral').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.neutral').addClass('show');
  $('.item.neutral').removeClass('hide');
});

$('.warm').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.warm').addClass('show');
  $('.item.warm').removeClass('hide');
});

$('.shoe').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.shoe').addClass('show');
  $('.item.shoe').removeClass('hide');
});

$('.all').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.all').addClass('show');
  $('.item.all').removeClass('hide');
});


});
