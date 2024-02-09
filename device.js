const firebaseConfig = {
	apiKey: "AIzaSyAhwk3pGHeLxqBBV7fObcLsWJRnXxIPPug",
	authDomain: "coursework-978ab.firebaseapp.com",
	databaseURL: "https://coursework-978ab-default-rtdb.firebaseio.com",
	projectId: "coursework-978ab",
	storageBucket: "coursework-978ab.appspot.com",
	messagingSenderId: "521649558299",
	appId: "1:521649558299:web:dd8c8febcd2763b6b179be"
	};

//initialize firebase
firebase.initializeApp(firebaseConfig);
var myDB = firebase.database().ref('Data');
var myDataLoc = myDB.child('Condition').push();
//Setting two functions
function off(){
	myDataLoc.set({
			'Condition':'off'
	});
}

function on(){
	myDataLoc.set({
			'Condition':'on'
	});
}

function saveData(){
	//Attributes/labels
	var min_light_intensity = document.getElementById("min_light").value;
	var max_light_intensity = document.getElementById("max_light").value;
	// Creating a subfolder in 'Data'
	var myDataLoc = myDB.child('Light_intensity').push();
		myDataLoc.set(
	    {
	    "Minimum light intensity":min_light_intensity,
			"Maximum_light_intensity":max_light_intensity
	    }
	  )
}
//Validation for light intensity user input
//Not finished therefore might not make sense
function light(){

	//Get all our input fields
	var min_light_intensity = document.getElementById('min_light').value;
	var max_light_intensity = document.getElementById("max_light").value;
	
	//validate input fields
	if (min_light_intensity.length == 0 || max_light_intensity.length == 0)
	{	alert("Please enter all fields");
		return false;
	}
	alert("Thank you");
	saveData();
  document.getElementById("box").innerHTML = "<h1>Thank you, your preference has been updated!</h1>"; //once this changes user knows data has sent to database
}
document.getElementById("enter").addEventListener("click",light);

