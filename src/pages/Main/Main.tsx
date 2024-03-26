import { RedesSociais } from "../../components/RedesSociais";

import Linkedin from "../../assets/RedesSociais/icons8-linkedin.svg"
import WhatsApp from "../../assets/RedesSociais/icons8-whatsapp.svg"
import Instagram from "../../assets/RedesSociais/icons8-instagram.svg"
import Email from "../../assets/RedesSociais/icons8-email-50.png"

import Perfil from "../../assets/02-matheus.jpg"
import LogoMatheus from "../../assets/LOGO MATHEUS.png"

export const Main = () => {
    const redesSociais = [
        { link: "https://www.linkedin.com/in/matheusales/", img: Linkedin, },
        { link: "https://wa.me/5583996228865", img: WhatsApp },
        { link: "https://www.instagram.com/matdesales/", img: Instagram },
        { link: "mailto:matheusalesbr@gmail.com", img: Email },
    ];
    return (
        <div id="inicio" className="h-full w-full flex bg-pageMain bg-cover bg-center">
            <div className="xl:w-1/2 sm:w-full h-screen text-center text-white flex flex-col items-center justify-center ">
                <div className="sm:text-left text-center flex flex-col i sm:items-center xl:items-start">
                    <img className="sm:mb-4 mt-12 m-10 sm:m-0 " src={LogoMatheus} alt="" />
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
            <div className="w-1/2 bg-cover bg-center hidden xl:flex justify-center items-center">
                <div className="">
                    <img src={Perfil} alt="Foto" className="w-80 h-80 rounded-full" />
                </div>
            </div>
        </div>

    )
}
