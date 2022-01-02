import { useState } from "react";
import { useMoralis } from "react-moralis"

export const SendMessages = ({ endOfMsgRef }) => {
    const { user, Moralis } = useMoralis();
    const [msg, setMsg] = useState('')
    const sendMsg = (e) => {
        e.preventDefault();
        if (!msg) return;

        const Messages = Moralis.Object.extend("Messages")   //creating table
        const messages = new Messages();

        //table structure
        messages.save({
            message: msg,
            username: user.getUsername(),
            ethAddress: user.get("ethAddress")
        }).then((message) => {

        },
            (error) => {
                console.log(error.message)
            }
        )
        endOfMsgRef.current.scrollIntoView({ behavior: 'smooth' })

        setMsg('')
    }
    return (
        <div className=" flex justify-center  w-5/6 mx-auto">
            <form className="w-full  flex justify-center">
                <div className="flex mx-auto fixed  bottom-0 mb-10 justify-center bg-black w-full shadow-2xl md:w-2/5    border-blue-500 border-2 text-white rounded-3xl items-center h-12">



                    <input className="border-none p-4 bg-transparent outline-none h-full w-full"
                        type="text"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        placeholder={`Enter a message ${user.getUsername()} ...`}
                    />
                    <button
                        className="text-pink-500 p-4 font-bold hover:text-pink-800"
                        onClick={sendMsg}
                        type="submit"

                    >SEND</button>
                </div>
            </form>
        </div>
    )
}
