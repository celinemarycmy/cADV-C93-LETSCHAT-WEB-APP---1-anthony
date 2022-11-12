
//ADD YOUR FIREBASE LINKS HERE
  var  firebaseConfig = {
      apiKey: "AIzaSyDzYoqfBaBoT-vsX4WaqBZ8qHeWIcpohLc",
      authDomain: "kwitter-app-a16a1.firebaseapp.com",
      databaseURL: "https://kwitter-app-a16a1-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-a16a1",
      storageBucket: "kwitter-app-a16a1.appspot.com",
      messagingSenderId: "1018246669762",
      appId: "1:1018246669762:web:5c9761f3a8de249639e25b"
    };
    
    // Initialize FirebaSE
    [[]]

    firebase.initializeApp(firebaseConfig);
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 
     function addRoom() 
     { room_name = document.getElementById("room_name").value; 
     firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name", room_name); 
      window.location = "kwitter_page.html"; }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code  
      console.log("Room Name - " + Room_names)
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
       document.getElementById("output").innerHTML += row;
       console.log(firebase_message_id);
       console.log(message_data);
       name1 = message_data["name"];
       message=message_data["message"];
       like =message_data["like"];
       name_with_tag="<h4>"+name1+"<img class='user_tick' src='tick_png'></h4>";
       message_with_tag="<h4 class = 'message_h4'>" + message + "</h4>"
       like_button = "<button class = 'btn btn-warning' id = "+ firebase_message_id+ "value" +like+"onclick = 'updatelike(this.id)'>"
      

       span_with_tag ="<span class ='glyphicon glyphicon-thumps-up'>" +like+"</span > </button> <hr>";


      //End code
      });});}
      function redirectToRoomName(name) { console.log(name);
             localStorage.setItem("room_name", name);
              window.location = "kwitter_page.html"; 
            }


getData();
