import { useMoralis } from "react-moralis"

export const ChangeUsername = () => {
    const { setUserData, user, isUserUpdating, userError } = useMoralis();
    const setUserName = () => {
        const username = prompt(`Enter New userName (Curren Username is ${user.getUsername()}`);

        if (!username) return;
        setUserData({
            username,
        })
    }
    return (

        <div className="text-sm absolute top-5 active:scale-105 hover:text-pink-800 right-5 px-2 py-3 rounded-lg hover:bg-pink-200 ">
            <button disabled={isUserUpdating} onClick={setUserName} className="">Change Username</button>
        </div>
    )
}
