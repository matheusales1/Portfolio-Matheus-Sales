import { Link } from "react-router-dom"

interface RedesSociaisProps {
    linkUrl: string;
    imgUrl: string;
    mostrarNome?: boolean;
    textTeste?: string;

}

export const RedesSociais: React.FC<RedesSociaisProps> = ({ linkUrl, imgUrl, mostrarNome, textTeste }) => {
    return (
        <Link
            to={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full m-1 flex items-center  text-slate-900  ${!mostrarNome ? 'border border-white' : ''}`}
        >
            <img
                src={imgUrl}
                alt="Ícone Rede Social"
                className="w-10 h-10 rounded-full hover:bg-gray-300 p-2"
            />
            {mostrarNome && (
                <span className="ml-2 text-xl text ">{textTeste}</span>
            )}
        </Link>
    );
};