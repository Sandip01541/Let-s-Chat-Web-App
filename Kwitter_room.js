var firebaseConfig = 
{
    apiKey: "AIzaSyCkbaEDFHMoA2wPlQTptVI1XBiW_rvzUhk",
  authDomain: "chatwebapp-38fde.firebaseapp.com",
  databaseURL: "https://chatwebapp-38fde-default-rtdb.firebaseio.com",
  projectId: "chatwebapp-38fde",
  storageBucket: "chatwebapp-38fde.appspot.com",
  messagingSenderId: "818740983976",
  appId: "1:818740983976:web:1478702be1ff7be4642a9d"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

function addRoom() {
       room_name = document.getElementById("room_name").value;

      localStorage.setItem("room_name",room_name);
  
      window.location = "kwitter_page.html";

      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
      localStorage.setItem("room_name",room_name);
        
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
      console.log("room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
});});}
getData();
function redirectToroomname(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}


