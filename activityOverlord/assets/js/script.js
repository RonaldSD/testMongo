//Client side validation script

function clientFormValidation(){
	var name = document.forms["loginForm"]["fullName"].value;
	var title = document.forms["loginForm"]["title"].value;
	var email = document.forms["loginForm"]["email"].value;
	var password = document.forms["loginForm"]["password"].value;
	var confirmation = document.forms["loginForm"]["confirmation"].value;
	
	if(name == null || name == ""){
		alert("Name must be filled out");
		return false;
	}
	if(title == null || title == ""){
		alert("Title must be filled out");
		return false;
	}
	if(email == null || email == ""){
		alert("Email must be filled out");
		return false;
	}
	if(password == null || password == ""){
		alert("Passowrd must be filled out");
		return false;
	}
	if(password != confirmation){
		alert("Passwords provided do not match");
		return false;
	}
	
	//if all feilds are valid proceed to server side validation
	else{
		console.log("create");
	}
}