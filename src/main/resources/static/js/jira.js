$(document).ready(function() {
	$.ajax({
		headers : {
			'Content-Type' : 'application/json'
		},
		type : "GET",
		url : "/jiraServices/findIsLogged",
	}).done(function(isLogged) {
		if (isLogged) {
			$(".login").hide();
			$(".second_header").show();
		} else {
			$(".second_header").hide();
		}
	});
	$("#loginButton").on("click", function(e) {
		e.preventDefault();
		var jiraUsers = {};
		var username = $("#userName").val();
		var password = $("#userPassword").val();
		var url = $("#jiraurl").val();
		jiraUsers.id = null;
		jiraUsers.username = username;
		jiraUsers.password = password;
		jiraUsers.email=null;
		jiraUsers.url = url;
		$.ajax({
			headers : {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			type : "POST",
			url : "/jiraServices/createOrUpdate",
			data : JSON.stringify(jiraUsers),
			dataType : "json",

		}).done(function(response) {

			if (response.errorCode == null) {
				$.ajax({
					headers : {
						'Accept' : 'application/json',
						'Content-Type' : 'application/json'
					},
					type : "POST",
					url : "/jiraServices/setIsLogged",
				}).done(function(response) {
				});
				$(".login").hide();
				$(".second_header").show();
			}
		});
	});
	$("#employee-button").on("click", function() {
		$.ajax({
			headers : {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			type : "GET",
			url : "/jiraServices/getAllProjects",

		}).done(function(response) {
			$("#grid").bootgrid("clear");
			$("#grid").bootgrid().bootgrid("append", response);

		});
	});
	$("#issues").on("click", function() {
		$.ajax({
			headers : {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			type : "GET",
			url : "/jiraServices/getAllIssues",

		}).done(function(response) {
			$("#issuegrid").bootgrid("clear");
			$("#issuegrid").bootgrid().bootgrid("append", response);

		});
	});
	$("#advancedSearch").on("click", function(e) {
		e.preventDefault();
		var query = $("#searchData").val();
		$.ajax({
			headers : {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			type : "GET",
			url : "/jiraServices/jiraSearch?query="+query,
		}).done(function(response) {
			$("#searchgrid").bootgrid("clear");
			$("#searchgrid").bootgrid().bootgrid("append", response);

		});
	});
});