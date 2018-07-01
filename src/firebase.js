import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCgla584v10KvHyT-huwU1M6fgIIMbaXFE",
    authDomain: "data-app-3618b.firebaseapp.com",
    databaseURL: "https://data-app-3618b.firebaseio.com",
    projectId: "data-app-3618b",
    storageBucket: "data-app-3618b.appspot.com",
    messagingSenderId: "568810642876"
};
firebase.initializeApp(config);
export default firebase;