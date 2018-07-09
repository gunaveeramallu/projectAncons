const auth = firebase.auth();
var db = firebase.firestore();

 function sendFeedback(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;    

    console.log(name,email,msg);
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
  }
