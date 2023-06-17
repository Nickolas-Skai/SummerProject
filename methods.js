
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAJoRtTkTVbcnaFeR9Yhqqz3We6pk8udp8",
    authDomain: "summerproject-5ad92.firebaseapp.com",
    projectId: "summerproject-5ad92",
    storageBucket: "summerproject-5ad92.appspot.com",
    messagingSenderId: "474443637768",
    appId: "1:474443637768:web:34b2c432652e3f4ff81dbd",
    measurementId: "G-TZ58VRF047"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  