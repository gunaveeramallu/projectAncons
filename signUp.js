


function createUser(){

    const db = firebase.firestore();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    var profile = document.getElementById("profile").value;
    var btn= document.getElementById("btn").value;

    db.collection('users').add({
        name:name,
        email: email,
        linkedInProfile : profile
        
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
      document.getElementById("btn").innerHTML = "SUCCESS";
       document.getElementById("name").value ="";
       document.getElementById("email").value="";
       document.getElementById("password").value="";
       document.getElementById("password1").value="";
       document.getElementById("profile").value="";

       
     


}

var clicked = "notClicked"
  function menuClicked(){
    console.log("clicked");
    
    console.log(clicked)
    if(clicked == "notClicked"){
      var el = document.getElementById('display')
      el.style.display = 'inline'
    
    document.getElementById('display1').style.display = 'inline'
    document.getElementById('display2').style.display = 'inline'
    document.getElementById('display3').style.display = 'inline'
    document.getElementById('display4').style.display = 'inline'
    document.getElementById('display5').style.display = 'inline'
    document.getElementById('display6').style.display = 'inline'
    document.getElementById('display7').style.display = 'inline'
    clicked = "clicked"
    console.log(clicked)
    }else{
        var el = document.getElementById('display')
        el.style.display = 'none'
      
      document.getElementById('display1').style.display = 'none'
      document.getElementById('display2').style.display = 'none'
      document.getElementById('display3').style.display = 'none'
      document.getElementById('display4').style.display = 'none'
      document.getElementById('display5').style.display = 'none'
      document.getElementById('display6').style.display = 'none'
      document.getElementById('display7').style.display = 'none'
      clicked = "notClicked"
    }
}