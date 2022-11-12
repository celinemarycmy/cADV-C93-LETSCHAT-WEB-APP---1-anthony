//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCD4eQLEVBVTZxwvWPuTRoPQTbpcWGQeRw",
      authDomain: "practice-activity-94-715fa.firebaseapp.com",
      databaseURL: "https://practice-activity-94-715fa-default-rtdb.firebaseio.com",
      projectId: "practice-activity-94-715fa",
      storageBucket: "practice-activity-94-715fa.appspot.com",
      messagingSenderId: "256858534867",
      appId: "1:256858534867:web:71fbb226fa7c10d3bd7526"
    };
    


    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
//Start code
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";


}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_page.html";
}
//End code
      
getData();
