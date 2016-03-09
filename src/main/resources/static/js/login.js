$(document).ready(function() {
	$('.toggle').on('click', function() {
		  $('.container').stop().addClass('active');
		});

		$('.close').on('click', function() {
		  $('.container').stop().removeClass('active');
		});
	if ($("#errorMessage").val() == "error") {
		alert("Invalid User");
	}

	$("#loginButton").on("click", function(e) {
		e.preventDefault();
		var username=$("#userName").val();
		var password=$("#userPassword").val();
		$.ajax({
			headers : {
				'Content-Type' : 'application/json'
			},
			type : "GET",
			url : "/login"+ '?username=' + username + '&password='
				+ password,
		}).done(function(url) {
			window.location.replace(url);
		});
	});
	
	$("#googleLogin").on("click", function(e) {
		$.ajax({
			headers : {
				'Content-Type' : 'application/json'
			},
			type : "GET",
			url : "/GoogleOAuth/getOAuthUrl"
		}).done(function(url) {
			window.location.replace(url);
		});
	});
});