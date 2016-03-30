 $(window).load(function(){
	$("button").mouseenter(function(){
		$(this).animate({
			// down: "50px",
			left: "800px",
			height: "200px", 
			width: "100px"
		});
	});
	$("button").mouseleave(function(){
		$(this).animate({
			height: "50px", 
			width: "110px"
		});
	});

	$("#Change").mouseenter(function(){
		$(this).css({"background-color": "orange"});
		$("#S1").css({"background-color": "white"});
	});

	$("#S1").mouseenter(function(){
		$(this).css({"background-color": "orange"});
		$("#S2").css({"background-color": "white"});
	});

	$("#S2").mouseenter(function(){
		$(this).css({"background-color": "orange"});
		$("#S3").css({"background-color": "white"});
	});

	$("#S3").mouseenter(function(){
		$(this).css({"background-color": "orange"});
		$("#S4").css({"background-color": "white"});
	});

	$("#S4").mouseenter(function(){
		$(this).css({"background-color": "orange"});
		$("#S5").css({"background-color": "white"});
	});

	$("#S5").mouseenter(function(){
		$("#Change").css({"background-color": "white"});
		$("#S1").css({"background-color": "white"});
		$("#S2").css({"background-color": "white"});
		$("#S3").css({"background-color": "white"});
		$("#S4").css({"background-color": "white"});
	});

 });