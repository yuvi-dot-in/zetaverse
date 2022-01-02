import Image from "next/image"
import { useMoralis } from "react-moralis"

const Avatar = ({ username, logoutOnPress }) => {
    const { logout, user } = useMoralis();
    return (
        <>
            <Image
                src={`https://avatars.dicebear.com/api/miniavs/${username || user.get("username")}.svg`} layout="fill"
                onClick={() => logoutOnPress && logout()}
                className="cursor-pointer bg-black rounded-full"

            />
        </>
    )
}

export default Avatar
