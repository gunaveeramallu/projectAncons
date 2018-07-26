const auth = firebase.auth();
var db = firebase.firestore();

 function sendFeedback(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;    

    console.log(name.length,email.length,msg.length);
    if ((name.length==0)||(email.length==0)||(msg.length==0)){
        document.getElementById('fill').style.display = 'inline'
    }else{
    db.collection('feedback').add({
        name: name,
        email: email,
        msg: msg
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
     document.getElementById("name").value ="";
     document.getElementById("email").value="";
     document.getElementById("msg").value="";
    }

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
