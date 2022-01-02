import Image from "next/image";
import { useMoralis } from "react-moralis";
import Logo from "../assets/logo.png"
import Avatar from "./Avatar";
import { ChangeUsername } from "./ChangeUsername";

function Header() {
    const { user, logO } = useMoralis();
    return (
        <div className="sticky mx-20  p-5 z-20 bg-black shadow-lg border-b-2 border-pink-600 top-0 text-pink-500">
            <div className=" flex items-center">
                <div className="relative flex-none h-20 w-20 mx-0 hidden lg:inline-block">
                    <Image src={Logo} layout="fill" />
                </div>
                <div className="flex-1 text-left lg:text-center">
                    <div className="  hover:border-white border-2  rounded-full relative h-40 w-40 lg:mx-auto border-pink-500">
                        <Avatar logoutOnPress />
                    </div>
                    <h1 className=" text-2xl">Welcome to ZetaVerse</h1>
                    <h2 className="text-3xl font-bold truncate">{user.getUsername()}</h2>
                    <ChangeUsername />
                </div>
            </div>
        </div>
    )
}

export default Header
