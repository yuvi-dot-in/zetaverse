import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis'
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {
  // const isAuthenticated = false;
  const { isAuthenticated, logout, isLoggingOut } = useMoralis();

  if (!isAuthenticated) return <Login />
  return (
    <div className="h-screen overflow-y-auto overflow-hidden  bg-gradient-to-b from-black to-purple-800 ">
      <Head>
        <title>Zetaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='max-w-screen-2xl mx-auto'>
        <Header />
        <Messages />
      </div>


    </div>
  )
}
