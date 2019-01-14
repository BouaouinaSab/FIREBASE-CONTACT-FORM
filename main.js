   // Initialize Firebase
   var config = {
    apiKey: "AIzaSyC6jte8n3G8MdxtWt61khWRy3XbsUTzHAA",
    authDomain: "contact-form-549b6.firebaseapp.com",
    databaseURL: "https://contact-form-549b6.firebaseio.com",
    projectId: "contact-form-549b6",
    storageBucket: "contact-form-549b6.appspot.com",
    messagingSenderId: "929137471566"
  };
  firebase.initializeApp(config);

//Reference messages Collection
var messagesRef = firebase.database().ref("messages");

//Listen for form submit
document.getElementById("formContact").addEventListener('submit', submitForm);

//submit form
function submitForm(e){
    e.preventDefault();

    //get Values 
  var name = getInputVal("name");
  var Email = getInputVal("Email");
  var Subject = getInputVal("Subject");
  var msg = getInputVal("msg");

  //save message 
  saveMessage(name, Email, Subject, msg);

  //clear form 
  document.getElementById('formContact').reset();
}
function myFunction() {
    alert("Your message has been sent :D ");
  }
//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase 
function saveMessage(name, Email, Subject, msg){
    var newMessageRef= messagesRef.push();
    newMessageRef.set({
        name: name,
        Email: Email,
        Subject: Subject,
        msg: msg 

    });
}