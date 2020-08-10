$(document).ready(function() {

	//E-mail Ajax Send
	$("#connection__forma").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$("#modal").addClass("show");
			$("body").addClass("no-scroll");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});