import { Link } from "react-router-dom"

interface RedesSociaisProps {
    linkUrl: string;
    imgUrl: string;

}

export const RedesSociais: React.FC<RedesSociaisProps> = ({ linkUrl, imgUrl, }) => {
    return (
        <Link to={linkUrl} target="_blank" rel="noopener noreferrer " className="rounded-full border border-white m-1">
            <img
                src={imgUrl}
                alt="Ícone Rede Social 1"
                className="w-10 h-10 rounded-full hover:bg-gray-300 p-2"
            />
        </Link>
    )
}