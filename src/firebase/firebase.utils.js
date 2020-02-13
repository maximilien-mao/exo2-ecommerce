import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBHGjTyTkFPoQxq7Jz2KF1IjSXhlYhGLBo",
  authDomain: "ecommerce-exo.firebaseapp.com",
  databaseURL: "https://ecommerce-exo.firebaseio.com",
  projectId: "ecommerce-exo",
  storageBucket: "ecommerce-exo.appspot.com",
  messagingSenderId: "1010817846594",
  appId: "1:1010817846594:web:572fb9cd51e14ee9998cdb",
  measurementId: "G-85T7DX19XP"
}

firebase.initializeApp(config)

const auth = firebase.auth()
const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})

const signInWithGoogle = () => auth.signInWithPopup(provider)

export { auth, firestore, signInWithGoogle}
export default firebase