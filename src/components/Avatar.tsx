import Image from "next/image";
import {FaUserCircle} from 'react-icons/fa';

interface AvatarProps {
    src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
    if (src) {
        <Image src={src} alt="Avatar" className="rounded-full h-30 w-30"/>;
    }
    return <FaUserCircle size={24}/>
}
export default Avatar;