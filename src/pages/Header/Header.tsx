import { useState } from "react";

import LogoIcone from "../../assets/miconebranco.png"
import LogoMatheus from "../../assets/ÍCONE MENU.png"

export const Header = () => {

    const [mostrarHeader, setMostrarHeader] = useState(false);

    const toggleHeader = () => {
        setMostrarHeader(!mostrarHeader);
    };

    return (
        <div className="w-full h-20 bg-slate-900 flex items-center justify-between fixed z-10"> {/* Adicione z-10 para o z-index e justify-between para espaçamento */}
            <div className="flex items-center">
                <img src={LogoIcone} alt="Logo" className="h-20 ml-40" /> {/* Substitua o caminho pela localização da sua logo */}
                <header className="text-gray-50 font-bold">
                    {mostrarHeader && (
                        <nav className="p-4">
                            <a href="" className="m-4">INÍCIO</a>
                            <a href="" className="m-4">SOBRE</a>
                            <a href="" className="m-4">PROJETOS</a>
                            <a href="" className="m-4 sm:mr-20">CONTATO</a>
                        </nav>
                    )}
                </header>
            </div>
            <div className=" h-10 w-10 mr-32">
                <img className="" onClick={toggleHeader} src={LogoMatheus} alt="" />
            </div>
        </div>
    )
}
