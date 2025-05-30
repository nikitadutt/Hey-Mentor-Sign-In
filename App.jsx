import { useState } from 'react'
import placeholderImg from './assets/placeholderImg.png'
import CompanyLogo from './assets/HeyMentorLogo.png'
import mail from './assets/Mail.svg'
import lock from './assets/Lock.svg'
import eye from './assets/Show.svg'
import googleIcon from './assets/google.png'
import facebookIcon from './assets/facebook.png'
import linkedinIcon from './assets/linkedin.png'
import tiktokIcon from './assets/tik-tok.png'
import './App.css'


function App() {


 return (
   <>
   <div className="flex h-screen">
     {/* Left Section */}
     <div className="w-1/2 h-full">
       <img
         src={placeholderImg}
         alt="Studying person illustration"
         className="w-full h-full object-cover"
       />
     </div>


     {/* Right Section */}
     <div className="w-1/2 h-full bg-white flex flex-col items-center justify-center relative">
       {/* Company Logo */}
       <img
         src={CompanyLogo}
         alt="Company Logo"
         className="absolute top-10 left-1/2 transform -translate-x-1/2 w-80 h-auto object-contain"
       />


       {/* Welcome Back Container */}
       <div className="absolute top-36 left-1/2 transform -translate-x-1/2 w-96">
         {/* Welcome Back Text */}
         <h2 className="text-2xl font-medium text-gray-800 text-center mb-8">
           Welcome Back
         </h2>


         {/* Form Fields */}
         <form className="space-y-6">
           {/* Email Field */}
           <div className="relative">
             <label
               htmlFor="email"
               className="block text-lg font-medium text-gray-800 mb-2"
             >
               Email
             </label>
             <input
               type="email"
               id="email"
               placeholder="Enter Email Address"
               className="w-full pl-14 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
             />
             <img
               src={mail}
               alt="Mail Icon"
               className="absolute top-11 left-4 w-8 h-8 opacity-100"
             />
           </div>


           {/* Password Field */}
           <div className="relative">
             <label
               htmlFor="password"
               className="block text-lg font-medium text-gray-800 mb-2"
             >
               Password
             </label>
             <input
               type="password"
               id="password"
               placeholder="Enter Password"
               className="w-full pl-14 pr-14 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
             />
             <img
               src={lock}
               alt="Lock Icon"
               className="absolute top-11 left-4 w-8 h-8 opacity-100"
             />
             <img
               src={eye}
               alt="Show Password Icon"
               className="absolute top-11 right-4 w-8 h-8 opacity-100 cursor-pointer"
             />
           </div>


           {/* Forgot Password Link */}
           <div className="flex justify-end">
             <a
               href="#"
               className="text-sm text-[#333A3C] hover:underline"
             >
               Forgot Password?
             </a>
           </div>


           {/* Sign In Button */}
           <button
             type="submit"
             className="w-full py-3 text-white rounded-lg bg-gradient-to-r from-[#0F4031] to-[#1E7C5F] hover:opacity-90 focus:ring-2 focus:ring-green-500 focus:outline-none"
           >
             Sign In
           </button>


           {/* Create Account Link */}
           <div className="text-center mt-4">
             <p className="text-sm text-gray-800">
               Not Having an Account?{' '}
               <a href="#" className="text-[#28A67F] font-medium hover:underline">
                 Create Account
               </a>
             </p>
           </div>
         </form>


         {/* Divider */}
         <div className="relative flex items-center my-6">
           <div className="flex-grow border-t border-gray-300"></div>
           <span className="mx-4 text-sm text-gray-500">Or</span>
           <div className="flex-grow border-t border-gray-300"></div>
         </div>


         {/* Sign In With Text */}
         <p className="text-center text-sm text-gray-800 mb-4">
           Sign In With
         </p>


          {/* Social Sign-In Buttons */}
          <div className="social-buttons">
            <button className="social-button">
              <img src={googleIcon} alt="Google" className="social-icon" />
            </button>
            <button className="social-button">
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </button>
            <button className="social-button">
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </button>
            <button className="social-button">
              <img src={tiktokIcon} alt="TikTok" className="social-icon" />
            </button>
          </div>
       </div>
     </div>
   </div>
   </>
 )
}


export default App