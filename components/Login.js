import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis';
import LoginBg from "../assets/login-bg.png"
import Logo from "../assets/logo.png"

function Login() {
    const { authenticate, isAuthenticating, isLoggingOut } = useMoralis();

    return (
        <div className='bg-black relative text-white'>
            <div className='flex flex-col absolute z-10 h-4/6 w-full justify-center items-center space-y-20'>
                <Image className='' src={Logo} width={200} height={200} />
                <div className='flex  flex-col space-y-3 items-center'>
                    <div className='text-xl bg-pink-800 font-semibold opacity-75 py-5 px-4 rounded-lg  '>
                        <h1>Welcome to Zetaverse</h1>
                        <h1>Login Using MetaMask</h1>
                    </div>
                    <br />
                    {!isAuthenticating && <button onClick={authenticate} className='bg-yellow-500 rounded-lg  px-8 py-2 text-black font-semibold  active:animate-ping hover:transition hover:duration-200 hover:ease-in-out hover:scale-105'>
                        Login to ZetaVerse
                    </button>}
                    {isAuthenticating && <div className='flex rounded-lg bg-black bg-opacity-70 p-2 space-y-2 flex-col items-center justify-center'>
                        <h1 className='text-yellow-500 text-2xl  font-bold   '>Authenticating  </h1>
                        <div className='flex flex-row space-x-3 '>
                            <div
                                class="bg-blue-600 p-2  w-4 h-4 rounded-full animate-bounce blue-circle"
                            ></div>
                            <div
                                class="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce green-circle"
                            ></div>
                            <div
                                class="bg-red-600 p-2  w-4 h-4 rounded-full animate-bounce red-circle"
                            ></div>
                        </div>
                    </div>}
                </div>
            </div>
            <div className='h-screen w-full'>
                <Image src={LoginBg} layout='fill' objectFit='cover' />
            </div>

        </div>
    )
}

export default Login
