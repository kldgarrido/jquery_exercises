$('.todo').on('click', 'li', function() {
  $(this).appendTo('.done');
});

$('.done').on('click', 'li', function() {
  $(this).appendTo('.todo');
});

$('ul').on('click', ".delete", function(e) {
  e.stopPropagation();
  $(this).parent().remove();
});