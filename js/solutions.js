$( document ).ready(function() {
	console.log("bla");
    $( "#work" ).css( "background-color", "#808080" );
    $( "#work" ).addClass( "selectedOption" );
    $( "#work" ).append( "<span class=\"glyphicon glyphicon-chevron-right\"></span>" );
});

$('#work').on('click', function() {
		$( ".selectedOption" ).addClass( "assignmentOption" );
		$( ".selectedOption" ).css( "background-color", "#EFEFF0" );
		$('.selectedOption span:last-child').remove();
		$( ".selectedOption" ).removeClass( "selectedOption" );
		$( "#work" ).addClass( "selectedOption" );
		$( "#work" ).append( "<span class=\"glyphicon glyphicon-chevron-right\"></span>" );
	    $( "#work" ).removeClass( "assignmentOption" );
	    $( "#work" ).css( "background-color", "#808080" );
    	$("#itemToDisplay").html("<object id=\"pdf\" width=\"100%\" type=\"application/pdf\" data=\"docs/SubmittedAndGradedCC2.pdf\" id=\"pdf_content\"><p>.</p></object>");
});

$('#solution').on('click', function() {
		$( ".selectedOption" ).addClass( "assignmentOption" );
		$( ".selectedOption" ).css( "background-color", "#EFEFF0" );
		$('.selectedOption span:last-child').remove();
		$( ".selectedOption" ).removeClass( "selectedOption" );
		$( "#solution" ).addClass( "selectedOption" );
		$( "#solution" ).append( "<span class=\"glyphicon glyphicon-chevron-right\"></span>" );
	    $( "#solution" ).removeClass( "assignmentOption" );
	    $( "#solution" ).css( "background-color", "#808080" );
    	$("#itemToDisplay").html("<object id=\"pdf\" width=\"100%\" type=\"application/pdf\" data=\"docs/sol1.pdf\" id=\"pdf_content\"><p>File not available. Please contact your TA or Professor for more info.</p></object>");
});

$('#grade').on('click', function() {
		$( ".selectedOption" ).addClass( "assignmentOption" );
		$( ".selectedOption" ).css( "background-color", "#EFEFF0" );
		$('.selectedOption span:last-child').remove();
		$( ".selectedOption" ).removeClass( "selectedOption" );
		$( "#grade" ).addClass( "selectedOption" );
		$( "#grade" ).append( "<span class=\"glyphicon glyphicon-chevron-right\"></span>" );
	    $( "#grade" ).removeClass( "assignmentOption" );
	    $( "#grade" ).css( "background-color", "#808080" );
    	$("#itemToDisplay").html("<div class=\"gradeHeader leftAlign\">Exercise 1<br> (38 Points)</div><div class=\"gradeHeader leftAlign\">Exercise 2<br> (1 Point)</div><div class=\"gradeHeader leftAlign\">Exercise 3<br> (1 Point)</div><div class=\"gradeHeader leftAlign\">Total<br> (40 Points)</div><div class=\"gradeBody leftAlign\">37 (97.36%)</div><div class=\"gradeBody leftAlign\">0 (0.00%)</div><div class=\"gradeBody leftAlign\">0 (0.00%)</div><div class=\"gradeBody leftAlign\">37 (92.50%)</div><div class=\"gradeCommHeader leftAlign\">Comments</div><div class=\"gradeCommBody leftAlign\">Good job, you spent alot of time on the big question. Very interesting method of solving. Good job. I deducted 1 mark from exercise one because your proof could be a little clearer. Tip: If you answer all the questions your grade will improve.</div>");
});

$('#message').on('click', function() {
		$( ".selectedOption" ).addClass( "assignmentOption" );
		$( ".selectedOption" ).css( "background-color", "#EFEFF0" );
		$('.selectedOption span:last-child').remove();
		$( ".selectedOption" ).removeClass( "selectedOption" );
		$( "#message" ).addClass( "selectedOption" );
		$( "#message" ).append( "<span class=\"glyphicon glyphicon-chevron-right\"></span>" );
	    $( "#message" ).removeClass( "assignmentOption" );
	    $( "#message" ).css( "background-color", "#808080" );
    	$("#itemToDisplay").html("<form onsubmit=\" alert('Message Sent');return false;\"><div class=\"form-group\"><label for=\"exampleInputEmail1\">Subject:</label><input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter subject\"></div><div class=\"form-group\"><label for=\"exampleInputPassword1\">Message</label><textarea class=\"form-control\" rows=\"8\" cols=\"66\" id=\"exampleInputPassword1\" placeholder=\"Enter message\"></textarea></div><button type=\"submit\" class=\"btn btn-default\">Submit</button></form>");
});


$(".assignmentOption").each(function() {
    $(this).mouseover(function() {
    	$( this ).css( "background-color", "#4595D1" );
  	}).mouseout(function() {
  		if ($(this).hasClass("selectedOption")){
    		$( this ).css( "background-color", "#808080" );
		};
		if (!$(this).hasClass("selectedOption")){
    		$( this ).css( "background-color", "#EFEFF0" );
    	};
  	});
});


