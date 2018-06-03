$("#search-button").click(function() {
	temp = "/search/" + $("#search-box").val();
	console.log(temp);
	window.location.href = temp;
});

function init() {
	$.getJSON('/navbar/categories', function(data) {
		$.each(data, function() {
			$("#cats").append("<li><a href='../category/" + this.path +
				"'>" + this.name + "</a></li>");
		});
	});
};

$(function() {
    init();
});
