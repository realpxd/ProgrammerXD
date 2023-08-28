
    // Import the functions you need from the SDKs you need
    import {initializeApp} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
    import {
        getDatabase,
        set,
        ref,
        push,
        child,
        onValue,
        onChildAdded
    } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";


  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCduYn4O-rpR9lEQIOnAYis0SrQ5mIs3cI",
    authDomain: "chat-machine-pxd.firebaseapp.com",
    databaseURL: "https://chat-machine-pxd-default-rtdb.firebaseio.com",
    projectId: "chat-machine-pxd",
    storageBucket: "chat-machine-pxd.appspot.com",
    messagingSenderId: "372297421892",
    appId: "1:372297421892:web:1127732b36df71b6bf1811",
    measurementId: "G-JQFCJ3ZR04"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

 // const analytics = getAnalytics(app);

const name = "user-" + Math.random().toString(36).substr(2, 5);
const submit = document.getElementById("c-s");
const selfMsgs = document.getElementById("self-msgs");
const othersMsgs = document.getElementById("others-msgs");
const newMsg = ref(database, 'messages/');
const chatArea = document.getElementById("c-area");
//myName.style.background = "red";
 //myName.setAttribute("class" , "username");
submit.addEventListener('click', (e) => {
    
    // window.scrollTo(0,document.body.scrollHeight);
    var message = document.getElementById('c-ta').value;
    const id = push(child(ref(database), 'messages')).key;
    set(ref(database, 'messages/' + id), {
        name: name,
        message: message
    });
    document.getElementById('c-ta').value = "";
});


// listen for incoming messages
   onChildAdded(newMsg, function (snapshot) {
    

	cchatArea.scrollTop = chatArea.scrollHeight;
    // window.scrollTo(0,document.body.scrollHeight);
    
       var html = "";
         var html2 = "";
       // give each message a unique ID
       html += "<p id='chat-userName'>";
       html += snapshot.val().name;
       html += "</p>";
       html2 += "<p id='chat-userMessage'>";
       html2 += snapshot.val().message;
       html2 += "</p>";
		if (snapshot.val().name != name) {
    /*html += "<button data-id='" + snapshot.key + "' onclick='deleteMessage(this);'>";
        html += "Delete";
    html += "</button>";*/
			var oM = "";
			oM += "<div class=' c-tb-clm-a-om'> <img src='https://source.unsplash.com/random/100x100?person?sig=" + snapshot.key + "' alt='Whyyyyy'>";
			oM += html;
            oM += "<div style='background:rgba(128,128,128,0.6);' id='others-msgs' class='others-msgs' >";
			oM += html2;
			oM += "</div></div>";
			othersMsgs.style.background = "blue";
			chatArea.insertAdjacentHTML("beforeend" , oM);
			othersMsgs.setAttribute("data-aos" , "zoom-in");
		}
		else{
			var sM = "";
			sM += "<div style='background:rgba(255,0,0,0.5);' id='self-msgs' class='self-msgs' >";
			sM += html2;
			sM += "</div>";
			selfMsgs.style.background = "red";
			chatArea.insertAdjacentHTML("beforeend" , sM);
			selfMsgs.setAttribute("data-aos" , "zoom-in");
            window.scrollTo(0,document.body.scrollHeight);
		}
   });
