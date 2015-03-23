$(function(){
	$("#loginform").submit(function(){
	var email = $("#emailadd").val(); 
	var pass = $("#Password").val(); 

	if(email == "test@user.com"){
		if(pass == "1234"){
			location.href="./homepage.html"; 
		} else {
			alert("Invalid Password"); 
		}
	} else {
		alert("Invalid UserID"); 
	}
	return false; 
	});
});