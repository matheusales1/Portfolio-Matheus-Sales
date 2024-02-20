import { RedesSociais } from "../../components/RedesSociais";

import Linkedin from "../../assets/RedesSociais/icons8-linkedin.svg"
import WhatsApp from "../../assets/RedesSociais/icons8-whatsapp-21.svg"
import Instagram from "../../assets/RedesSociais/icons8-instagram-21.svg"

export const Contato = () => {
    const redesSociais = [
        { link: "www.instagram.com", img: Linkedin, text: "(83) 99622-8865" },
        { link: "www.instagram.com", img: WhatsApp, text: "matheussalesbr@gmail.com" },
        { link: "www.instagram.com", img: Instagram, text: "linkedin.com/in/matheusales" },

    ];

    return (
        <div className=" py-8 flex justify-center h-screen bg-white">
            <div className="flex items-center mt-20 w-full max-w-screen-xl  text-slate-900">
                <div className="w-1/2 pr-4">
                    <h2 className="text-6xl font-firaCode mb-4 ml-14">Tem interesse <br /> <span className="font-bold"> em colaborar comigo?</span></h2>
                    <button
                        type="submit"
                        className="w-52 h-10 bg-slate-900 text-white font-bold  rounded-lg  mt-10 ml-16"
                    >
                        ENTRE EM CONTATO
                    </button>
                </div>
                <div className="border-r border-2 border-slate-900 h-60 mx-4 	"></div>
                <div className="w-1/2 pl-4">
                    <div className="ml-10">
                        {redesSociais.map((redesSociais, index) => (
                            <RedesSociais key={index} linkUrl={redesSociais.link} imgUrl={redesSociais.img} textTeste={redesSociais.text} mostrarNome={true} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};
