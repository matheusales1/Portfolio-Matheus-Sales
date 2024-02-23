import { Link } from "react-router-dom";

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
            className={`rounded-full m-1 flex items-center text-slate-900 ${!mostrarNome ? 'border border-white' : ''}`}
        >
            <img
                src={imgUrl}
                alt="Ícone Rede Social"
                className="w-12 h-12 rounded-full p-2 transition duration-300 ease-in-out transform hover:scale-110 hover:bg-black"
            />
            {mostrarNome && (
                <span className="ml-2 text-xl text">{textTeste}</span>
            )}
        </Link>
    );
};
