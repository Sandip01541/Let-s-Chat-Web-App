var firebaseConfig = {
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
room_name = localStorage.getItem("room_name")

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
    }