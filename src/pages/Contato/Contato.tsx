import { RedesSociais } from "../../components/RedesSociais";

import Linkedin from "../../assets/RedesSociaisTwo/icons8-linkedin.svg";
import WhatsApp from "../../assets/RedesSociaisTwo/icons8-whatsapp-21.svg";
import Instagram from "../../assets/RedesSociaisTwo/icons8-instagram-21.svg";
import Email from "../../assets/RedesSociaisTwo/icons8-email-40 (2).png";
import { Link } from "react-router-dom";

export const Contato = () => {
    const redesSociais = [
        { link: "https://www.linkedin.com/in/matheus-sales-dev/", img: Linkedin, text: "/matheus-sales-dev" },
        { link: "mailto:matheusalesbr@gmail.com", img: Email, text: "matheusalesbr@gmail.com" },
        { link: "https://www.instagram.com/matdesales/", img: Instagram, text: "matdesales" },
        { link: "https://wa.me/5583996228865", img: WhatsApp, text: "(83) 99622-8865" },
    ];

    return (
        <div id="contato" className={`py-8 flex justify-center`}>
            <div className="flex items-center flex-col xl:flex-row sm:mt-20 w-full max-w-screen-xl text-slate-900">
                <div className="text-center sm:w-2/3 m-6 sm:pr-4">
                    <h2 className="sm:text-5xl text-4xl font-firaCode mb-4 sm:ml-14">Tem interesse <br /> <span className="font-bold"> em colaborar comigo?</span></h2>
                    <Link
                        to="https://www.linkedin.com/in/matheusales/"
                        type="submit"
                        className="bg-slate-950 text-white p-2 rounded-xl mt-3 font-bold"
                    >
                        ENTRE EM CONTATO
                    </Link>
                </div>
                <div className=" border-r border-2 border-slate-900 h-60 mx-4 hidden xl:flex"></div>
                <div className=" sm:w-2/3 sm:pl-4 mt-10 xl:mt-20 m-6 flex justify-center">
                    <div className="xl:ml-10">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-5 sm:mb-10 font-firaCode">Adicione nas redes</h2>
                        {redesSociais.map((redesSociais, index) => (
                            <RedesSociais key={index} linkUrl={redesSociais.link} imgUrl={redesSociais.img} textTeste={redesSociais.text} mostrarNome={true} hoverColor="red" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
