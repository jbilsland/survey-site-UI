//processPublishSurvey.js


//this function gets the eventName and turns it into an Array
function getCreateRegistrationInfo(){
	let eventName = document.getElementById("eventName").value;
	
	let surveyName = [eventName];

	processSNInfo(surveyName);
	
}

//this function gets the feedback Name and turns it into an Array
function getCreateAnonFBInfo(){
	let fbName = document.getElementById("fbName").value;

	let surveyName = [fbName];

	processSNInfo(surveyName);
}

//this function gets the tShirt Name and turns it into an Array
function getCreateTSOrderInfo(){
	let tsName = document.getElementById("tsName").value;
	
	let surveyName = [tsName];

	processSNInfo(surveyName);
}

//this function takes the surveyName and display a thank you for submitting page
function processSNInfo(snArray) {
	document.writeln('<h3>Thank you for creating the survey: <BIG>'+ snArray[0]+'</BIG></h3>');
	document.writeln('<p><a href="companysurveysite.html"> Go to Home</a></p>');
}
