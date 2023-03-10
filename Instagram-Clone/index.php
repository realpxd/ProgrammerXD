<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src=”https://www.gstatic.com/firebasejs/9.2.1/firebase-app.js”></script>

<!-- include firebase database -->
<script src=”https://www.gstatic.com/firebasejs/9.2.1/firebase-database.js”></script>
 
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBKcoeZXNd-HY7j_ojo9U3SxzaK5Rq6_dM",
    authDomain: "chatapp-pxd-main.firebaseapp.com",
    projectId: "chatapp-pxd-main",
    storageBucket: "chatapp-pxd-main.appspot.com",
    messagingSenderId: "577715245454",
    appId: "1:577715245454:web:714029dbc57eb9bf71d4df",
    measurementId: "G-SPBZLG53W6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>