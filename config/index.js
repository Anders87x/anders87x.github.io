var config = {
    apiKey: "AIzaSyDCRX6-evODKIs1ZxKQ2wwsn5rzNnFn6qQ",
    authDomain: "webanderson-17143.firebaseapp.com",
    databaseURL: "https://webanderson-17143.firebaseio.com",
    storageBucket: "webanderson-17143.appspot.com",
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.location.href = 'home.html';
    }
});

var uiConfig = {
    'signInSuccessUrl': false,
    'signInOptions': [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    'tosUrl': false,
};

var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', uiConfig);