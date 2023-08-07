
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Body from './Body';
import GoogleButton from 'react-google-button'
import bg from '../assets/bg.webp'
import Footer from './Footer';
import Solved from "./Solved";

firebase.initializeApp({
  apiKey: "AIzaSyAj1WRgwVQGnVoonvr4LDm7bcXXIP4wDS4",
  authDomain: "asksde-ad8be.firebaseapp.com",
  projectId: "asksde-ad8be",
  storageBucket: "asksde-ad8be.appspot.com",
  messagingSenderId: "382310740258",
  appId: "1:382310740258:web:55002d7b1c3dff088bf57b",
  measurementId: "G-GGCX0QD9YZ"
})

const auth = firebase.auth();

function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <div className='flex justify-center h-screen  text-center w-full'>
        
        <img src={bg} className=' w-64 mt-80 h-60'/>
        <div className='m-auto'>
        <h2 className='mb-2 text-center mt-0 text-5xl font-bold leading-tight m-auto'>AskSDE</h2>
        {/* <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button> */}
        <GoogleButton
        onClick={signInWithGoogle}
        />
        <p>
        <Footer/>
        </p>
      </div>
      
      
        <img src={bg} className='w-64 l-0 mt-48 h-60'/>
      </div>
    )
  
  }
  
  function SignOut() {
    return auth.currentUser && (
      
      <button className="bg-red p-1.5 w-fit  rounded-md" onClick={() => auth.signOut()}>Logout</button>
    )
  }

  function Auth() {

    const [user] = useAuthState(auth);
    return (
      <div className="bg-black h-screen w-full">
        <section className='m-auto justify-center'>
          {user ? <Body /> : <SignIn />}
        </section>
      </div>
    );
  }

  function Name({globalCt, getSolved,flag})
  {
    return(
        <h1>
            <h2>Welcome, {auth.currentUser.displayName.toUpperCase().split(' ')[0]}</h2>
            <div className="text-green ml-1 text-lg">
                Solved: {globalCt} / 900
              </div>
              <Solved getSolved={getSolved} flag={flag} />
        </h1>
    )
  }
  export {SignOut, Auth, Name}