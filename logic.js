$(document).ready(function(){
	$('#tab a').click(function (e) {
  		e.preventDefault();
  		$(this).tab('show');
  	})
$('#myTab a[href="#home"]').tab('show');
});

