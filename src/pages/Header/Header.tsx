import { useState, useEffect } from "react";
import LogoIcone from "../../assets/miconebranco.png";
import LogoMatheus from "../../assets/ÍCONE MENU.png";
import { Link } from "react-scroll";
import { IoIosHome } from "react-icons/io";
import { SiAboutdotme } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import { RiGitRepositoryCommitsFill } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";

import { BsFillPeopleFill } from "react-icons/bs";
import { RiContactsBook2Fill } from "react-icons/ri";

const Header = () => {
    const [mostrarMenu, setMostrarMenu] = useState(false);

    const toggleMenu = () => {
        setMostrarMenu(!mostrarMenu);
    };

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth > 768) {
                setMostrarMenu(false);
            }
        };

        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <div className="w-screen h-20 bg-slate-900 flex items-center justify-between fixed z-10 pl-20">
            <div className="hidden sm:flex items-center justify-start w-full">
                <img src={LogoIcone} alt="Logo" className="h-20 ml-20 " />
                <div className="container text-white w-full ml-80 flex justify-center items-center text-center">
                    <nav className="p-4 flex font-firaCode">
                        <Link to="inicio" spy={true} smooth={true} offset={0} duration={500} className="mx-4 cursor-pointer">Início</Link>
                        <Link to="sobre" spy={true} smooth={true} offset={-200} duration={500} className="mx-4 cursor-pointer">Sobre</Link>
                        <Link to="projetos" spy={true} smooth={true} offset={0} duration={500} className="mx-4 cursor-pointer">Projetos</Link>
                        <Link to="repositorio" spy={true} smooth={true} offset={0} duration={500} className="mx-4 cursor-pointer">Repositório</Link>
                        <Link to="habilidades" spy={true} smooth={true} offset={-100} duration={500} className="mx-4 cursor-pointer">Habilidades</Link>
                        <Link to="depoimentos" spy={true} smooth={true} offset={-100} duration={500} className="mx-4 cursor-pointer">Depoimentos</Link>
                        <Link to="contato" spy={true} smooth={true} offset={10} duration={500} className="mx-4 sm:mr-32 cursor-pointer">Contato</Link>
                    </nav>
                </div>
            </div>
            <img
                src={LogoMatheus}
                alt="Ícone do Menu"
                className="h-10 w-10 ml-auto mr-4 block sm:hidden"
                onClick={toggleMenu}
            />
            {mostrarMenu && (
                <div className="fixed top-1/3 right-0 max-h-screen overflow-auto flex justify-end items-center transition-opacity duration-500 ease-in-out">
                    <div className="bg-black opacity-90 p-6">
                        <nav className="flex flex-col ">
                            <Link to="inicio" spy={true} smooth={true} offset={0} duration={500} className="text-white text-lg mb-4"><IoIosHome /></Link>
                            <Link to="sobre" spy={true} smooth={true} offset={-200} duration={500} className="text-white text-lg mb-4"> <SiAboutdotme /> </Link>
                            <Link to="projetos" spy={true} smooth={true} offset={0} duration={500} className="text-white text-lg mb-4"> <GrProjects /> </Link>
                            <Link to="repositorio" spy={true} smooth={true} offset={0} duration={500} className="text-white text-lg mb-4"> <RiGitRepositoryCommitsFill /> </Link>
                            <Link to="habilidades" spy={true} smooth={true} offset={-100} duration={500} className="text-white text-lg mb-4"><GiSkills /> </Link>
                            <Link to="depoimentos" spy={true} smooth={true} offset={-100} duration={500} className="text-white text-lg mb-4"> <BsFillPeopleFill /></Link>
                            <Link to="contato" spy={true} smooth={true} offset={10} duration={500} className="text-white text-lg "><RiContactsBook2Fill /></Link>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
