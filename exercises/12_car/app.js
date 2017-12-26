var showCountries = function() {
	var template = Handlebars.compile($('#countries-template').html());
	$.getJSON( "https://s3.amazonaws.com/makeitreal/cars.json", function( data ) {
		
  		$('button').replaceWith(template({ cars: data }));
  });
    
};


$('button').on('click', function(e) {
  showCountries();
});