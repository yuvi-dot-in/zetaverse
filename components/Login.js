import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis';
import LoginBg from "../assets/login-bg.png"
import Logo from "../assets/logo.png"

function Login() {
    const { authenticate, isAuthenticating, isLoggingOut } = useMoralis();

    return (
        <div className='bg-black relative text-white'>
            <h1>Login Page</h1>
            <div className='flex flex-col absolute z-10 h-4/6 w-full justify-center items-center space-y-20'>
                <Image className='' src={Logo} width={200} height={200} />

                {!isAuthenticating && <button onClick={authenticate} className='bg-yellow-500 rounded-lg  px-8 py-2 text-black font-semibold  active:animate-ping hover:animate-bounce'>Login to MetaVerse</button>}
                {isAuthenticating && <h1 className='text-yellow-500 pb-20  font-bold  animate-pulse  '>Authenticating . . . . </h1>}
            </div>
            <div className='h-screen w-full'>
                <Image src={LoginBg} layout='fill' objectFit='cover' />
            </div>

        </div>
    )
}

export default Login
