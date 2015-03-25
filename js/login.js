$(function(){
	$("#loginform").submit(function(){
	var email = $("#emailadd").val(); 
	var pass = $("#Password").val(); 

	if(email == "old@user.com"){
		if(pass == "1234"){
			location.href="./homepage.html"; 
		} else {
			alert("Invalid Password"); 
		}
	} 
	else if(email == "new@user.com"){
		if(pass == "1234"){
			location.href="./select-courses.html"; 
		} else {
			alert("Invalid Password"); 
		}
	} 
	else {
		alert("Invalid UserID"); 
	}
	return false; 
	});
});