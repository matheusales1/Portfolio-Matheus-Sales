import htmlLogo from '../../assets/html.svg';
import cssLogo from '../../assets/css.svg';
import JsLogo from '../../assets/javascript.svg';
import ReactLogo from '../../assets/react.svg';
import TsLogo from '../../assets/typescript.svg';
import TailwindLogo from '../../assets/tailwindcss.svg';
import GithubLogo from '../../assets/github.svg';
import PhpLogo from '../../assets/php.svg';
import LaravelLogo from '../../assets/laravel.png';


import { UnitConhecimentos } from '../../components/UnitConhecimentos';

import { useState } from 'react';

export const Conhecimentos = () => {
    const linguagens = [
        { logo: htmlLogo, mensagem: "HTML é uma Linguagem de marcação para construir páginas web." },
        {
            logo: cssLogo, mensagem: `CSS é uma linguagem de folha de estilo composta por
        "camadas", criado com o propósito de estilizar as páginas.` },
        { logo: JsLogo, mensagem: "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web." },
        { logo: ReactLogo, mensagem: "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada." },
        { logo: TsLogo, mensagem: "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática." },
        { logo: TailwindLogo, mensagem: "Tailwind CSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas." },
        { logo: GithubLogo, mensagem: "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git." }
    ];
    const conhecimentosBackend = [
        { logo: PhpLogo, mensagem: "" },
        {
            logo: LaravelLogo, mensagem: `Laravel é um framework PHP livre e open-source criado por Taylor B. Otwell para o desenvolvimento de sistemas web que utilizam o padrão MVC.`
        },
    ];

    const [mensagem, setMensagem] = useState("Passe o cursor do mouse no card para ler");
    return (
        <div className="bg-slate-900 w-auto flex flex-wrap justify-center items-center gap-4 p-4 flex-col text-white">
            <h1 className="text-5xl font-bold mb-10 mt-20 text-center text-white font-firaCode">Conhecimentos</h1>
            <div className="text-transparent sm:text-gray-500 sm:text-xl">{mensagem}</div>
            <div className="p-4 m-4 grid grid-cols-2   xl:grid-cols-7 md:grid-cols-3 bg-slate-950">
                {linguagens.map((linguagem, index) => (
                    <UnitConhecimentos
                        key={index}
                        Logo={linguagem.logo}
                        onMouseEnter={() => setMensagem(linguagem.mensagem || "Descrição não disponível")}
                        onMouseLeave={() => setMensagem("Passe o cursor do mouse no card para ler")} />
                ))}
            </div>
            <h1>Estudando com foco em back-end</h1>
            <div className="p-4 m-4 grid grid-cols-2 xl:grid-cols-2 md:grid-cols-3 bg-slate-950">
                {/* Map para renderizar os ícones de conhecimentos em back-end */}
                {conhecimentosBackend.map((conhecimento, index) => (
                    <UnitConhecimentos
                        key={index + linguagens.length} // Garante chaves únicas para os novos ícones
                        Logo={conhecimento.logo}
                        onMouseEnter={() => setMensagem(conhecimento.mensagem || "Descrição não disponível")}
                        onMouseLeave={() => setMensagem("Passe o cursor do mouse no card para ler")}
                    />
                ))}
            </div>

        </div>
    );
};
