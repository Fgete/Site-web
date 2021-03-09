var firstname;
var lastname;
var email;

function FirstStepSubmit(){

	var form = document.getElementById("firstStepForm");

	if (form.checkValidity()) {
		console.log("Register -- SUCCESSFUL");

		var firstStep = document.getElementById("firstStep");
		var secondStep = document.getElementById("secondStep");

		firstname = document.getElementById("firstnameInput").value;
		lastname = document.getElementById("lastnameInput").value;
		email = document.getElementById("emailInput").value;

		document.getElementById("wellcomeTitle").innerHTML = "Wellcome " + firstname + " " + lastname;

		firstStep.style.display = "none";
		secondStep.style.display = "flex";

		SendConfirmationMail();
	}
}

function SendConfirmationMail(){
	// noreply.armagency@gmail.com
	// nraaempw

	Email.send({
		Host: "smtp.gmail.com",
		Username : "noreply.armagency@gmail.com",
		Password : "nraaempw",
		To : email,
		From : "noreply.armagency@gmail.com",
		Subject : "test mail",
		Body : "Hello world",
		}).then(
			message => alert(message)
		);
}