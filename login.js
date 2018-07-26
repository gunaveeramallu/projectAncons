
  
function login(){
    var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;


    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
      document.getElementById("btn").innerHTML = "SUCCESS"
      document.getElementById("email").value="";
document.getElementById("password").value="";


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