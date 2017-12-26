
$('form').on('submit', function(e) {
  	e.preventDefault(); // previene la acción por defecto (enviar el formulario)
  	var first_name = $("#first-name").val();
  	var last_name = $("#last-name").val();
  	var mobile_number = $("#mobile-number").val();
  	var confirmed = $("#confirmed").val();

  	var line = '<tr>';
  	line += '<td>' + first_name +'</td>';
  	line += '<td>' + last_name +'</td>';
  	line += '<td>' + mobile_number +'</td>';
  	if (confirmed){
  		line += '<td>' + '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>'+'</td>';
  	}
  	else {
  		line += '<td>' + '&nbsp;' +'</td>';
  	}
  	line += '</tr>';
  	$('tbody').append(line);

  	clear();
  	$('#new-guest').modal('hide');
});

function clear(){
	$("#first-name").val('');
	$("#last-name").val('');
	$("#mobile-number").val('');
	$("#confirmed").removeAttr('checked');
}
