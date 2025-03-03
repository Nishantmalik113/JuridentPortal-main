import React, { useState } from 'react' // Replace with your actual image path
import {Link} from "react-router-dom"
import { useAuth } from '../context/AuthContext'
import { googleProvider } from '../firebase'
import Header from '../components/Header'

function ClientSignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, googleLogin} = useAuth()
  const [isAuthenticating, setIsAuthenticating] = useState(false)


  async function handleGoogleSignIn(){
        try{
          setIsAuthenticating(true)
          await googleLogin(googleProvider)
        }catch(err){
          console.log(err.message)
        }finally{
          setIsAuthenticating(false)
          window.location.href='/'
        }
      }


  async function handleAuthenticate() {
    if(!email || !email.includes('@') || !password || password.length<6 || isAuthenticating ){
      return
    }

    try{
      setIsAuthenticating(true)
      await login(email , password)
    }catch(err){
      console.log(err.message)
    }finally{
      setIsAuthenticating(false)
      window.location.href='/'
    }


    
  }


  return (
    <div className="min-h-screen overflow-hidden py-10 sm:py-0  flex flex-col bg-[#060223] items-center justify-center relative">
      <img src="../ellipse-top.png" className='absolute rotate-27 right-[-25vw] top-[-20vh] sm:right-[-150px] sm:top-[-200px]' alt="" />
      <img src="../ellipse-bottom.png" className='absolute sm:bottom-[-300px] bottom-[-20vh] ' alt="" />
      <img src="../JURIDENT.png" className='absolute opacity-0 sm:opacity-[1] left-5' alt="" />
      <img src="../Jurident-Logo-bottom.png" className='absolute opacity-0 sm:opacity-[1] right-5 bottom-5' alt="" />
          {/* Main Container */}
          <div className="sm:grid sm:grid-cols-3 gap-10 pt-14 items-center justify-center p-4 z-10">
            
            {/* Lawyer Image */}
            <div className="flex flex-col items-center justify-center">
              <img src='../LawyerImage.png' alt="Lawyer" className="" />
            </div>
    
            {/* Sign-Up Form */}
            <div className="col-span-2 p-5 max-w-xs z-101 rounded-lg w-full max-w-sm">
              <h2 className="text-2xl font-semibold text-[#C99F4A] text-center">Sign In</h2>
              <p className="text-center text-gray-300 mt-1 text-sm">
                Become a legal eagle! Login and spread your wings in the courtroom.
              </p>
    
              {/* Join as Lawyer */}
              <h3 className="text-md font-medium text-[#C99F4A] text-center mt-3">Join as Client</h3>
    
             
              <div className="flex justify-center gap-4 mt-4">
                <button onClick={handleGoogleSignIn} className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 text-black rounded-lg w-36 justify-center">
                  <i className='fa-brands fa-google'></i> Google
                </button>
              </div>
    
              
              <div className="flex items-center my-3">
                <div className="flex-1 border-t border-gray-600"></div>
                <p className="px-2 text-gray-400 text-sm">Or</p>
                <div className="flex-1 border-t border-gray-600"></div>
              </div>
    
           
              <div className="space-y-3">
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" className="w-full p-2.5 bg-white text-black rounded-lg focus:outline-none text-sm" />
                <div className="relative">
                  <input id='password' value={password} type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} className="w-full p-2.5 bg-white text-black rounded-lg focus:outline-none text-sm" />
                  <button type="button" onClick={()=>{
                    let eye = document.getElementById('password-eye')
                    let togglepassword=document.getElementById('password')
                    if(togglepassword.type==='password'){
                      togglepassword.type='text'
                      eye.classList.remove('fa-eye')
                      eye.classList.add('fa-eye-slash')
                    }else{
                      togglepassword.type='password'
                      eye.classList.add('fa-eye')
                      eye.classList.remove('fa-eye-slash')
                    }
                  }} className="absolute right-4 top-3 text-gray-400 cursor-pointer"><i id='password-eye' className='fa-solid fa-eye'></i></button>
                </div>
                <div className='flex items-center gap-2 text-sm text-[#C99F4A]'><input type="checkbox" /> Keep Me Logged In</div>
                  <button onClick={handleAuthenticate} className="w-full bg-blue-600 p-2.5 rounded-lg text-white font-medium hover:bg-blue-700 text-sm">
                    {isAuthenticating ? 'Authenticating...' : 'Sign In' }
                  </button>
              </div>
    
             
              <p className="text-center text-[#C99F4A] cursor-pointer mt-3 text-sm">
              <Link to="../ForgotPassword">Forgot Password</Link>
              </p>
            </div>
          </div>
        </div>
  );
}

export default ClientSignIn;
