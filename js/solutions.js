$(".assignmentOption").each(function() {
    $(this).hover(
    	function() {
    		$( this ).css( "background-color", "#4595D1" );
  		}, function() {
    		$( this ).css( "background-color", "#EFEFF0" );
  		}
    );
});

$('#solution').on('click', '.myselector', function(e) {
    alert('Parameter: ' + $(this).attr('data-param'));
});