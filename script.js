//Setting up Send Data function that sends to my firebase
function sendData(){
		const firebaseConfig = {
	  apiKey: "AIzaSyAhwk3pGHeLxqBBV7fObcLsWJRnXxIPPug",
	  authDomain: "coursework-978ab.firebaseapp.com",
	  databaseURL: "https://coursework-978ab-default-rtdb.firebaseio.com",
	  projectId: "coursework-978ab",
	  storageBucket: "coursework-978ab.appspot.com",
	  messagingSenderId: "521649558299",
	  appId: "1:521649558299:web:dd8c8febcd2763b6b179be"
		};
		//Attributes/labels
    var full_name = document.getElementById("full_name").value;
    var age = document.getElementById("age").value;
		var email1 = document.getElementById("email1").value;
    var email2 = document.getElementById("email2").value;
		var password = document.getElementById("password").value;
    	
		// Initialize Firebase
    firebase.initializeApp(firebaseConfig);
		var DatabaseConnection = firebase.database().ref();
		//Creates a folder called 'Users'
	  var myDataLoc = DatabaseConnection.child('Users').push();
	    myDataLoc.set(
	        {
	        "Name":full_name,
	        "Age" :age,
					"Email": email1,
					"Password" : password
	        }
			)
}
//Setting up register function
function register(){
	//Get all our input fields
	var full_name = document.getElementById('full_name').value;
	var age = document.getElementById('age').value;
	var email1 = document.getElementById('email1').value;
	var email2 = document.getElementById('email2').value;
	var password = document.getElementById('password').value;
	var password_length = password.length;
	
	//validate input fields
	if (full_name.length == 0 || age.length == 0 || password_length == 0 || email1.length == 0)
	{	alert("Please enter all fields");
		return false;
	}
	if (email1.indexOf("@") == -1 || email1.indexOf(".") == -1)
	{	alert("Please enter a valid email address");
		return false;
	}
	if (email1 != email2)
	{	alert("The email addresses do not match");
		return false;
	}
	alert("Thank you");
	sendData();
  document.getElementById("field-set").innerHTML = "<h1>Thank you, you have registered successfully</h1>"; //once this changes user knows data has sent to database
}
//Once submit has been clicked, runs 'register()' function
document.getElementById("submit").addEventListener("click",register);
