$(function() {
	var brands = [];
	$('.col-lg-3').map(function() {
		var temp = $(this).attr('class');
		return temp.substring(temp.indexOf(' ') + 1);
	}).each(function(i, str) {
		if (!~$.inArray(str, brands)) brands.push(str);
	});
	for(var i = 0; i < brands.length; i++) {
		$("#filters-in").append("<label class='btn btn-primary button-color filterToggle'>" + brands[i] + 
			"<input type='checkbox' class='badgebox' checked><span class='badge'>&check;</span></label>");
	}
	$('.filterToggle > input').each(function(){
		$(this).click(function(event){ 
			var temp = $(this).closest(".btn").html();
			temp = temp.substring(0, temp.indexOf('<'));
			temp = "." + temp;
			temp = temp.replace(" ", ".");
			if($(this).is(':checked')){
				$(temp).show();
			} else {
				$(temp).hide();
			}
		});
	});
});

