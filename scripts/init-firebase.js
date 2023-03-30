const firebaseConfig = {
    apiKey: "AIzaSyCCftl5ARM2Evt9maC8ZLqlO3F4lvm2k7c",
    authDomain: "my-chat-application-e5b3a.firebaseapp.com",
    projectId: "my-chat-application-e5b3a",
    storageBucket: "my-chat-application-e5b3a.appspot.com",
    messagingSenderId: "511695223410",
    appId: "1:511695223410:web:625a9f83afb04a8e9ba0eb"
};  

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();