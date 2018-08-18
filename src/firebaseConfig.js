import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB-o2viOBh9_FUypOeth_BHCMxjuAQeyMk",
    authDomain: "to-do-app-redux.firebaseapp.com",
    databaseURL: "https://to-do-app-redux.firebaseio.com",
    projectId: "to-do-app-redux",
    storageBucket: "to-do-app-redux.appspot.com",
    messagingSenderId: "863754641726"
};
firebase.initializeApp(config)
export const database = firebase.database()
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()