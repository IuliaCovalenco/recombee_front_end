import React from 'react';
import './register.css';

export default function Register() {
    return (
      
<div className="flex flex-col container m-auto">
        <div className="text-white pt-14 text-2xl text-left pl-24 w-4/5 font-bold ">Regista-te ou faz login com as tuas redes sociais ou e-mail na plataforma de PressClub</div>
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="px-6 py-8 pt-14 rounded-xl text-white w-full ">
                    <input 
                        type="text"
                        className="block border-2 border-white w-full p-3 rounded-xl mb-4 placeholder-white"
                        name="fullname"
                        placeholder="Nome Completo" />

                    <input 
                        type="text"
                        className="block border-2 border-white w-full p-3 rounded-xl mb-4 placeholder-white"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border-2 border-white w-full p-3 rounded-xl mb-4 placeholder-white"
                        name="password"
                        placeholder="Palavra-chave" />
                    <input 
                        type="password"
                        className="block border-2 border-white w-full p-3 rounded-xl mb-4 text-white placeholder-white"
                        name="confirm_password"
                        placeholder="Confirmar" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 mt-8 hover:bg-green-dark focus:outline-none "
                    >Registar</button>
                </div>
            </div>
        </div>

    )
}
