var firebaseConfig = {
      apiKey: "AIzaSyD1g6T8K7zydauORZhcCKRjErK3PuBoIjs",
      authDomain: "kwitter-f6d97.firebaseapp.com",
      databaseURL: "https://kwitter-f6d97-default-rtdb.firebaseio.com",
      projectId: "kwitter-f6d97",
      storageBucket: "kwitter-f6d97.appspot.com",
      messagingSenderId: "401814678136",
      appId: "1:401814678136:web:3925e6486dbe881cc9db8d",
      measurementId: "G-P09Z710NYE"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");

   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
   
   function addRoom()
   {
   room_name = document.getElementById("room_name").value;
   
   firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
   });
   
     localStorage.setItem("room_name", room_name);
     
     window.location = "kwitter_page.html";
   }
   
   function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
     });
   });
   
   }
   
   getData();
   
   function redirectToRoomName(name)
   {
   console.log(name);
   localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
   }
   
   function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
     window.location = "index.html";
   }
   