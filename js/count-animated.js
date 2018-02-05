$('.number').each(function() {
  $(this).prop('counter', 0).animate({
    counter: $(this).text()
  }, {
    duration: 5000,
    step: function(number) {
      $(this).text(Math.ceil(number));
    }
  });
});