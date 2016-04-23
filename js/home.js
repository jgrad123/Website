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
		$(this).css({"color": "orange"});
		$("#S1").css({"background-color": "orange"});
		$("#S1").css({"color": "white"});
	});

	$("#S1").mouseenter(function(){
		$(this).css({"color": "orange"});		
		$("#S2").css({"background-color": "orange"});
		$("#S2").css({"color": "white"});
	});

	$("#S2").mouseenter(function(){
		$(this).css({"color": "orange"});
		$("#S3").css({"background-color": "orange"});
		$("#S3").css({"color": "white"});
	});

	$("#S3").mouseenter(function(){
		$(this).css({"color": "orange"});
		$("#S4").css({"background-color": "orange"});
		$("#S4").css({"color": "white"});
	});

	$("#S4").mouseenter(function(){
		$(this).css({"color": "orange"});
		$("#S5").css({"background-color": "orange"});
		$("#S5").css({"color": "white"});
	});

	$("#S5").mouseenter(function(){
		$("#Change").css({"background-color": "orange"});
		$("#Change").css({"color": "white"});
		$("#S1").css({"color": "white"});
		$("#S2").css({"color": "white"});
		$("#S3").css({"color": "white"});
		$("#S4").css({"color": "white"});
		$("#AbtBtn").css({"color": "red", "border-color": "red"});
		$("#PhotoBtn").css({"color": "red", "border-color": "red"});
		$("#LinkBtn").css({"color": "red", "border-color": "red"});
		$("#Title").css({"color": "black"});
		// $("#AbtBtn:hover").css({"color": "red", "background-color": "red"});
		// $("#PhotoBtn:hover").css({"color": "red", "background-color": "red"});
		// $("#LinkBtn:hover").css({"color": "red", "background-color": "red"});
	});
 });