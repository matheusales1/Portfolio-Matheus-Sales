import { RedesSociais } from "../../components/RedesSociais";

import Linkedin from "../../assets/RedesSociais/icons8-linkedin.svg"
import WhatsApp from "../../assets/RedesSociais/icons8-whatsapp-21.svg"
import Instagram from "../../assets/RedesSociais/icons8-instagram-21.svg"
import Discord from "../../assets/RedesSociais/icons8-logo-discord.svg"

export const Footer = () => {
    const redesSociais = [
        { link: "www.instagram.com", img: Linkedin },
        { link: "www.instagram.com", img: WhatsApp },
        { link: "www.instagram.com", img: Instagram },
        { link: "www.instagram.com", img: Discord },


    ];

    return (
        <div className="bg-stone-700 py-8 flex justify-center">
            <div className="flex flex-col  items-center mt-20">
                <h2 className="text-center text-lg font-bold mb-4 w-80">Vivendo, aprendendo e subindo de nível um dia de cada vez.</h2>
                <div className="flex justify-center space-x-4 mt-10">
                    {redesSociais.map((redesSociais) => (
                        <RedesSociais linkUrl={redesSociais.link} imgUrl={redesSociais.img} />
                    ))}
                </div>
                <p className="mt-10">© 2024 Meu Portifolio. Todos direitos reservados | Matheus Sales.</p>
            </div>
        </div>
    );
};
