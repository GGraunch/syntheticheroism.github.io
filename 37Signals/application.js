$(document).ready(function(){

// BaseCamp hover

	$("#basecamp").hover(function(){
		event.preventDefault();
		$(".headlines").hide();
		$(this).find(".arrow").show();
		$(".headbc").show();
	});

	$("#basecamp").mouseleave(function(){
		event.preventDefault();
		$(".headbc").hide();
		$(this).find(".arrow").hide();
		$(".headlines").show();
	});

// Highrise hover

	$("#highrise").hover(function(){
		event.preventDefault();
		$(".headlines").hide();
		$(this).find(".arrow").show();
		$(".headhr").show();
	});
	$("#highrise").mouseleave(function(){
		event.preventDefault();
		$(".headhr").hide();
		$(this).find(".arrow").hide();
		$(".headlines").show();
	})

// Campfire hover

	$("#campfire").hover(function(){
		event.preventDefault();
		$(".headlines").hide();
		$(this).find(".arrowright").show();
		$(".headcf").show();
	});

	$("#campfire").mouseleave(function(){
		event.preventDefault();
		$(".headcf").hide();
		$(this).find(".arrow").hide();
		$(".headlines").show();
	});
});