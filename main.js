const auth = firebase.auth();
var db = firebase.firestore();

 function sendFeedback(){
    var name = document.getElementById("name").value;
    var cell= document.getElementById("cell").value;  
    var gmail1 = document.getElementById("gmail1").value;
    var msg = document.getElementById("msg").value;
     

    console.log(name,cell,gmail1,msg,);
    db.collection('feedback').add({
        name: name,
        cell:cell,
        gmail1: gmail1,
        msg: msg
        
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
     document.getElementById("name").value ="";
     document.getElementById("cell").value="";
     document.getElementById("gmail1").value="";
     document.getElementById("msg").value="";
     

  }
