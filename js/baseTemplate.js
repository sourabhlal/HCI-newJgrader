$(document).ready(function() {
setInterval( function() {
	var seconds = new Date().getSeconds();
	$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
	},1000);
setInterval( function() {
	var minutes = new Date().getMinutes();
	$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);
setInterval( function() {
	var hours = new Date().getHours();
	$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);	
});


$("#triggerLoading").click(function(){
    $(".progress-bar").animate({width: "100%"}, 5000);
    setTimeout(function(){$(".loadingPopup").html("File successfully submitted! To submit another file, please refresh the page.");}, 5000 );
});
