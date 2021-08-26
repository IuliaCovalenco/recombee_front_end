import React from 'react'
import { useContext, useRef } from "react";


export default function Login() {



    


    return (
        <>
    
          <div>
            <h2>deu</h2>
         
          </div>
    
        <form>
          <div className="pt-32 flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">



              <span className="flex pt-1 gap-4">
                <a className="hover:text-red-dark pr-2" href="#">
                  <span > <img  /></span>
                </a>
                <a className="hover:text-red-dark" href="#">
                  <span >   <img  /></span>
                </a>
              </span>



              <div className="font-bold text-white pt-14 pb-2">
                <p>OU</p>
              </div>


              <div className="px-6 py-8 rounded-xl text-white w-full ">
                <input
                  name="name"
                  className="block border-2 border-white w-full p-3 rounded-xl -mb-2 placeholder-white"
                  type="text"
                
                  placeholder="Username"
                 
                />
                <br />
                <input
                  name="pass"
                  className="block border-2 border-white w-full p-3 rounded-xl mb-4 placeholder-white"
                  type="text"
           
                  placeholder="Password"
             
                />
                <br />
                <button
                  className="w-full text-center py-3 mt-3 hover:bg-green-dark focus:outline-none "
                  name="submit"
                  type="submit"
                  value="Login"
                >Entrar</button>
              </div>
            </div>
          </div>
        </form>

    </>
    )
}
