import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCSoOzu4UXJxToXr7WkDTJhaW0jeaZgBXA",
    authDomain: "my-chat-d2417.firebaseapp.com",
    databaseURL: "https://my-chat-d2417.firebaseio.com"
})

const base = Rebase.createClass(firebase.database());

export { firebaseApp }
export default base