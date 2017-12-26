

var showCountries = function() {
	var template = Handlebars.compile($('#countries-template').html());
	$.getJSON( "https://s3.amazonaws.com/makeitreal/countries.json", function( data ) {
		
  		$('button').replaceWith(template({ countries: data }));
  });
 
};


$('button').on('click', function(e) {
  showCountries();
});