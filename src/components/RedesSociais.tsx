import { Link } from "react-router-dom"

interface RedesSociaisProps {
    linkUrl: string;
    imgUrl: string;

}

export const RedesSociais: React.FC<RedesSociaisProps> = ({ linkUrl, imgUrl, }) => {
    return (
        <Link to={linkUrl} target="_blank" rel="noopener noreferrer " className="rounded-full border border-black bg-white">
            <img
                src={imgUrl}
                alt="Ícone Rede Social 1"
                className="w-14 h-14 rounded-full hover:bg-gray-300 p-2"
            />
        </Link>
    )
}