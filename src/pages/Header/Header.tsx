import { useState, useEffect } from "react";

import LogoIcone from "../../assets/miconebranco.png";
import LogoMatheus from "../../assets/ÍCONE MENU.png";

export const Header = () => {
    const [mostrarMenu, setMostrarMenu] = useState(false);

    const toggleMenu = () => {
        setMostrarMenu(!mostrarMenu);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            if (window.innerWidth <= 768) {
                toggleMenu(); // Fecha o menu apenas em dispositivos móveis
            }
        }
    };

    // Função para fechar o menu quando a largura da janela muda
    const handleWindowResize = () => {
        if (window.innerWidth > 768) {
            setMostrarMenu(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <div className="w-screen h-20 bg-slate-900 flex items-center justify-between fixed z-10 pl-20">
            <div className="hidden sm:flex items-center justify-start w-full ">
                <img src={LogoIcone} alt="Logo" className="h-20 ml-20 " />
                <header className="text-white w-full ml-80">
                    <div className="container flex justify-center items-center text-center">
                        <nav className="p-4 flex font-firaCode">
                            <a href="#inicio" className="mx-4" onClick={() => scrollToSection("inicio")}>Início</a>
                            <a href="#sobre" className="mx-4" onClick={() => scrollToSection("sobre")}>Sobre</a>
                            <a href="#projetos" className="mx-4" onClick={() => scrollToSection("projetos")}>Projetos</a>
                            <a href="#repositorio" className="mx-4" onClick={() => scrollToSection("repositorio")}>Repositório</a>
                            <a href="#habilidades" className="mx-4" onClick={() => scrollToSection("habilidades")}>Habilidades</a>
                            <a href="#contato" className="mx-4 sm:mr-32" onClick={() => scrollToSection("contato")}>Contato</a>
                        </nav>
                    </div>
                </header>
            </div>
            <img
                src={LogoMatheus}
                alt="Ícone do Menu"
                className="h-10 w-10 mr-4 block sm:hidden"
                onClick={toggleMenu}
            />
            {/* Navbar modal para dispositivos móveis */}
            {mostrarMenu && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-end items-center">
                    <div className="bg-slate-900  p-8 transform transition-transform ease-in-out duration-1000">
                        <nav className="flex flex-col">
                            <a href="#inicio" className="text-white text-lg mb-4" onClick={() => scrollToSection("inicio")}>Início</a>
                            <a href="#sobre" className="text-white text-lg mb-4" onClick={() => scrollToSection("sobre")}>Sobre</a>
                            <a href="#projetos" className="text-white text-lg mb-4" onClick={() => scrollToSection("projetos")}>Projetos</a>
                            <a href="#repositorio" className="text-white text-lg mb-4" onClick={() => scrollToSection("repositorio")}>Repositório</a>
                            <a href="#habilidades" className="text-white text-lg mb-4" onClick={() => scrollToSection("habilidades")}>Habilidades</a>
                            <a href="#contato" className="text-white text-lg mb-4" onClick={() => scrollToSection("contato")}>Contato</a>
                            <a href="#" onClick={toggleMenu} className="text-white text-lg mb-4">Fechar</a>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
};
