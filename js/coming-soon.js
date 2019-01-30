(function($) {
  "use strict"; // Start of use strict

  var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbyR3IwYnokzsAlDvRJsfFu1LjGTAz0jaT1ygzWFzGptlWolaw/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})

})(jQuery); // End of use strict
