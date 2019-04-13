addData = (name, topic, post) => {
	$.ajax({
		method: "POST",
		url: "http://localhost:5000/New",
		dataType: 'json',
		data: JSON.stringify({ name : name,
				topic: topic,
				content: post
				 }),

		contentType: 'application/json',

		success: function(error) {
			console.log("Success");
		},

		error: function(error) {
			console.log("Failed to add post");
			console.log(error);
		}
	});
}

openNew = () => {
	$("#new").css("display", "block");
	$("#btn-new-post").css("display", "none");
}

$("#btn-post").click(function() {
	var name = $("#name").val();
	var topic = $("#topic").val();
	var post = $("#textarea").val();

	addData(name, topic, post);

	return true;
});