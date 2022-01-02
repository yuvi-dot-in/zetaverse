import { useRef } from "react"
import { ByMoralis, useMoralisQuery } from "react-moralis"
import { MessageCont } from "./MessageCont";
import { SendMessages } from "./SendMessages"

const DURATION = 15;
const Messages = () => {
    const { data, isLoading, error } = useMoralisQuery(
        'Messages',
        (query) =>
            query
                .ascending('createrAt')
                .greaterThan(
                    'createdAt',
                    new Date(Date.now() - 1000 * 60 * DURATION)
                ),
        [],
        {
            live: true,
        }
    )
    const endOfMsgRef = useRef(null)
    console.log(data);
    return (
        <div className="pb-5 h-full">
            <div className="my-5">
                <ByMoralis
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                    variant="dark"
                />
            </div>
            <div className="flex flex-col space-y-3 mb-20">
                {data.map((msg) => (
                    <MessageCont key={msg.id} message={msg} />
                ))}
            </div>
            <div>
                <SendMessages endOfMsgRef={endOfMsgRef} />
            </div>
            <div ref={endOfMsgRef} >
            </div>
        </div>
    )
}

export default Messages
