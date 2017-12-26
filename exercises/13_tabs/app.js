

function f1() {
	  clear();
  $("li#home").attr('class', 'active');
  $("div#home").attr('class', 'active');
}

function f2() {
  clear();
  $("li#profile").attr('class', 'active');
  $("div#profile").attr('class', 'active');
}

function f3() {
    clear();
  $("li#about").attr('class', 'active');
  $("div#about").attr('class', 'active');
}

function clear(){
	$("li#home").attr('class', '');
  	$("div#home").attr('class', '');
  	$("li#profile").attr('class', '');
  	$("div#profile").attr('class', '');
  	$("li#about").attr('class', '');
  	$("div#about").attr('class', '');
}