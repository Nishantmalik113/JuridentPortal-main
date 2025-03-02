import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState, useEffect, useContext, createContext } from "react";
import { auth, db, googleProvider } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider(props){
    const {children} = props
    const [globalUser, setGlobalUser] = useState(null)
    const [globalData, setGlobalData] = useState(null)
    const[isLoading, setIsLoading] = useState(false)


    function signup(email,password){
       return createUserWithEmailAndPassword( auth, email, password)
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        setGlobalUser(null)
        setGlobalData(null)
        window.location.href=('/')
        return signOut(auth)
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email)
    }

    function googleLogin(){
        return signInWithPopup(auth , googleProvider )
    }


    const value = {globalUser, setGlobalData, isLoading, googleLogin, signup, login, logOut, resetPassword}

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, async (user)=>{
            console.log('CURRENT USER :', user)
            setGlobalUser(user)
            // if there's no user, empty the user state and return from this listner
            
            if(!user){ 
                console.log('No active user')    
                return 
            }


            //If there is a user, then check if the user has data in the database, and if they do, then fetch said data and update the global state
            try{
                setIsLoading(true)
                //import the global data in this position(FOR BACKEND DEVs)

            //*first we create a reference for the document  (labelled json object), and then we get the doc, and then we snapshot it to see if there's anything there
                const docRef = doc(db, 'lawyers', user.uid)
                const docSnap = await getDoc(docRef)
                
                let firebaseData = {}
                if(docSnap.exists()){
                   console.log('Found user data', firebaseData)
                    firebaseData = docSnap.data()
                }
                setGlobalData(firebaseData)
            }catch(err){
                console.log(err.message)
            }finally{
                setIsLoading(false)
                console.log(globalData)
            }

        })
        return unsubscribe
    },[])
    
    
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}