import { useMoralis } from "react-moralis"
import Avatar from "./Avatar";
import TimeAgo from 'timeago-react'

export const MessageCont = ({ key, message }) => {
    const { user } = useMoralis();
    const isUserMsg = message.get('ethAddress') === user.get('ethAddress')

    return (
        <>
            {/* {isUserMsg && <div className=" flex justify-end">
                <div className="bg-pink-400 text-right rounded-lg  w-max px-3 py-1 ">

                    <p>{message.get('message')}</p>
                </div>
            </div>

            }
            {!isUserMsg && <></>

            } */}
            <div className={` flex ${isUserMsg && 'justify-end'}`}>
                <div className={`h-8 w-8 relative ${isUserMsg && 'order-last ml-2' || 'mr-2'} `}>
                    <Avatar username={message.get("username")} />
                </div>
                <TimeAgo className={`flex  text-[10px]  place-items-end ${isUserMsg && ' text-pink-400 mr-2' || 'ml-2 order-last text-white'}`}
                    datetime={message.createdAt}
                />
                <div className={`${isUserMsg && 'bg-pink-400' || !isUserMsg && 'bg-red-400'} text-right rounded-lg  w-max px-3 py-1 `}>

                    <p>{message.get('message')}</p>
                </div>
            </div>

            <div className={`flex text-xs p-0  ${isUserMsg && 'justify-end text-pink-400' || 'text-white'}`}>{message.get("username")}</div>
        </>

    )
}
