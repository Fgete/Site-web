var firstname;
var lastname;
var email;
var confirmationCode;

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

		confirmationCode = Math.floor(Math.random() * 1000000);

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
		From : "noreply@arm-agency.gov",
		Subject : "Confirmation mail",
		Body : "Hello " + firstname + " " + lastname + ".<br/>This is a confirmation mail from your inscription attempt at the ARM agency.<br/>Confirmation code : " + confirmationCode,
		}).then(
			message => alert("Confimation mail sent")
		);
}

function SecondStepSubmit(){
	var answerCode = document.getElementById("confirmationCode").value;
	if (answerCode == confirmationCode) {
		console.log("Confirmation -- SUCCESSFUL");

		var secondStep = document.getElementById("secondStep");
		var lastStep = document.getElementById("lastStep");

		secondStep.style.display = "none";
		lastStep.style.display = "flex";
	}
}