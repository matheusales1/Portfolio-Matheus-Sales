import { RedesSociais } from "../../components/RedesSociais";

import Linkedin from "../../assets/RedesSociais/icons8-linkedin.svg"
import WhatsApp from "../../assets/RedesSociais/icons8-whatsapp-21.svg"
import Instagram from "../../assets/RedesSociais/icons8-instagram-21.svg"
import Discord from "../../assets/RedesSociais/icons8-logo-discord.svg"

import Perfil from "../../assets/mat.jfif"
import LogoMatheus from "../../assets/LOGO MATHEUS.png"

export const Main = () => {
    const redesSociais = [
        { link: "www.instagram.com", img: Linkedin, },
        { link: "www.instagram.com", img: WhatsApp },
        { link: "www.instagram.com", img: Instagram },
        { link: "www.instagram.com", img: Discord },
    ];
    return (
        <div id="sobre" className="h-full w-full flex bg-pageMain bg-cover bg-center">
            <div className="sm:w-1/2 h-screen text-center text-white flex flex-col items-center justify-center">
                <div className=" sm:text-left text-center flex flex-col ">
                    <img className="sm:mb-4 mt-12 m-10 sm:m-0" src={LogoMatheus} alt="" />
                    <span className="text-3xl  ">Desenvolvedor Web  </span>
                    <span className="text-3xl  ">Front-end</span>
                    <div className="flex mt-6 justify-center sm:justify-normal">
                        {redesSociais.map((redesSociais) => (
                            <RedesSociais linkUrl={redesSociais.link} imgUrl={redesSociais.img} />
                        ))}
                    </div>
                </div>
            </div>
            {/* Parte direita com a foto */}
            <div className="w-1/2 bg-cover bg-center hidden sm:flex justify-center items-center">
                <div className="">
                    <img src={Perfil} alt="Foto" className="w-80 h-80 rounded-full" /> {/* Substitua o caminho pela localização da sua foto */}
                </div>
            </div>

        </div>

    )
}
