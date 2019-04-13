$(document).ready(function() {
	$("#intro").css("display", "block");
	$("#theory, #quiz, #objective, #procedure, #experiment").css("display", "none");

	intro = () => {
		$("#theory, #quiz, #objective, #procedure, #intro, #experiment").css("display", "none");
		$("a").removeClass("active");
		$("#intro").css("display", "block");
		$(".intro").addClass("active");
	}

	procedure = () => {
		$("#theory, #quiz, #objective, #procedure, #intro, #experiment").css("display", "none");
		$("a").removeClass("active");
		$("#procedure").css("display", "block");
		$(".procedure").addClass("active");
	}

	theory = () => {
		$("#theory, #quiz, #objective, #procedure, #intro, #experiment").css("display", "none");
		$("a").removeClass("active");		
		$("#theory").css("display", "block");
		$(".theory").addClass("active");
	}

	quiz = () => {
		$("#theory, #quiz, #objective, #procedure, #intro, #experiment").css("display", "none");
		$("a").removeClass("active");
		$("#quiz").css("display", "block");
		$(".quiz").addClass("active");
	}
	
	objective = () => {
		$("#theory, #quiz, #objective, #procedure, #intro, #experiment").css("display", "none");
		$("a").removeClass("active");
		$(".objective").addClass("active");
		$("#objective").css("display", "block");
	}
	
	experiment = () => {
		$("#theory, #quiz, #objective, #procedure, #intro, #experiment").css("display", "none");
		$("a").removeClass("active");
		$(".experiment").addClass("active");
		$("#experiment").css("display", "block");
	}
})