import { RedesSociais } from "../../components/RedesSociais";

import Linkedin from "../../assets/RedesSociaisTwo/icons8-linkedin.svg";
import WhatsApp from "../../assets/RedesSociaisTwo/icons8-whatsapp-21.svg";
import Instagram from "../../assets/RedesSociaisTwo/icons8-instagram-21.svg";

export const Contato = () => {
    const redesSociais = [
        { link: "linkedin.com/in/matheusales", img: Linkedin, text: "/matheusales" },
        { link: "mailto:matheusalesbr@gmail.com", img: Instagram, text: "matheusalesbr@gmail.com" },
        { link: "https://www.instagram.com/matdesales/", img: Instagram, text: "matdesales" },
        { link: "https://wa.me/5583996228865", img: WhatsApp, text: "(83) 99622-8865" },
    ];

    return (
        <div id="contato" className={`py-8 flex justify-center h-screen `}>
            <div className="flex items-center  flex-col sm:flex-row mt-20 w-full max-w-screen-xl text-slate-900">
                <div className=" sm:w-1/2 m-6 sm:pr-4">
                    <h2 className="sm:text-6xl text-5xl font-firaCode mb-4 sm:ml-14">Tem interesse <br /> <span className="font-bold"> em colaborar comigo?</span></h2>
                    <button
                        type="submit"
                        className="w-52 h-10 bg-slate-900 text-white font-bold rounded-lg mt-10 sm:ml-16"
                    >
                        ENTRE EM CONTATO
                    </button>
                </div>
                <div className=" border-r border-2 border-slate-900 h-60 mx-4 hidden sm:flex"></div>
                <div className=" sm:w-1/2 sm:pl-4 mt-10 sm:mt-0 ">
                    <div className="sm:ml-10 text-left ">
                        <h2 className="text-4xl font-bold mb-10 font-firaCode">Adicione nas redes</h2>
                        {redesSociais.map((redesSociais, index) => (
                            <RedesSociais key={index} linkUrl={redesSociais.link} imgUrl={redesSociais.img} textTeste={redesSociais.text} mostrarNome={true} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
