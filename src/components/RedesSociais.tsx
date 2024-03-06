import { Link } from "react-router-dom";

interface RedesSociaisProps {
    linkUrl: string;
    imgUrl: string;
    mostrarNome?: boolean;
    textTeste?: string;
    hoverColor?: string; // Adicione uma prop para especificar a cor do hover
}

export const RedesSociais: React.FC<RedesSociaisProps> = ({ linkUrl, imgUrl, mostrarNome, textTeste, hoverColor = 'black', }) => {
    return (
        <Link
            to={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full m-2 flex items-center text-slate-900 transition duration-300 ease-in-out transform hover:scale-110 hover:bg-${hoverColor} ${!mostrarNome ? 'border border-white' : ''}`}
        >
            <img
                src={imgUrl}
                alt="Ícone Rede Social"
                className="w-12 h-12 p-2 "
            />
            {mostrarNome && (
                <span className="sm:ml-2 text-xl font-firaCode">{textTeste}</span>
            )}
        </Link>
    );
};
