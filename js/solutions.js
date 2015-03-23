$( document ).ready(function() {
	console.log("bla");
    $( "#work" ).css( "background-color", "#808080" );
    $( "#work" ).addClass( "selectedOption" );
});

$('#work').on('click', function() {
		$( ".selectedOption" ).addClass( "assignmentOption" );
		$( ".selectedOption" ).css( "background-color", "#EFEFF0" );
		$( ".selectedOption" ).removeClass( "selectedOption" );
		$( "#work" ).addClass( "selectedOption" );
	    $( "#work" ).removeClass( "assignmentOption" );
	    $( "#work" ).css( "background-color", "#808080" );
    	$("#itemToDisplay").html("<object id=\"pdf\" width=\"100%\" type=\"application/pdf\" data=\"docs/SubmittedAndGradedCC2.pdf\" id=\"pdf_content\"><p>.</p></object>");
});

$('#solution').on('click', function() {
		$( ".selectedOption" ).addClass( "assignmentOption" );
		$( ".selectedOption" ).css( "background-color", "#EFEFF0" );
		$( ".selectedOption" ).removeClass( "selectedOption" );
		$( "#solution" ).addClass( "selectedOption" );
	    $( "#solution" ).removeClass( "assignmentOption" );
	    $( "#solution" ).css( "background-color", "#808080" );
    	$("#itemToDisplay").html("<object id=\"pdf\" width=\"100%\" type=\"application/pdf\" data=\"docs/sol1.pdf\" id=\"pdf_content\"><p>File not available. Please contact your TA or Professor for more info.</p></object>");
});

$('#grade').on('click', function() {
		$( ".selectedOption" ).addClass( "assignmentOption" );
		$( ".selectedOption" ).css( "background-color", "#EFEFF0" );
		$( ".selectedOption" ).removeClass( "selectedOption" );
		$( "#grade" ).addClass( "selectedOption" );
	    $( "#grade" ).removeClass( "assignmentOption" );
	    $( "#grade" ).css( "background-color", "#808080" );
    	$("#itemToDisplay").html("grade");
});

$('#message').on('click', function() {
		$( ".selectedOption" ).addClass( "assignmentOption" );
		$( ".selectedOption" ).css( "background-color", "#EFEFF0" );
		$( ".selectedOption" ).removeClass( "selectedOption" );
		$( "#message" ).addClass( "selectedOption" );
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


