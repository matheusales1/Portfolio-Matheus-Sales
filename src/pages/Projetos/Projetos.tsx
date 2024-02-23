import { Link } from "react-router-dom";
import { useState } from "react";
import UnitProjetos from "../../components/UnitProjetos";
import logo from "../../assets/se7volei.jpeg"
import mockup from "../../assets/mockup-github.png"
import { Button } from "../../components/Button";

interface Project {
    link?: string;
    projetoTitle?: string;
    description?: string;
    imageSrc?: string;
}

const Projetos = () => {
    const [visibleProjects, setVisibleProjects] = useState(3);
    const projects: Project[] = [
        { link: "https://encurtador.com.br/covE9", projetoTitle: "Se7 Vôlei de Praia", description: "Projeto desenvolvido com React e TypeScript. Formulario de cadastro com multietapas, portal do aluno, pagina do professor com tiragem de faltas.", imageSrc: logo },
        { link: "/projeto-2", projetoTitle: "Meu Portfolio", description: "Projeto criado para apresentar meus trabalhos e habilidades aos visitantes interessados em conhecer mais sobre mim.", imageSrc: "https://t.ctcdn.com.br/lvns56iaSMyHvyTur4JeYS_NYeY=/i606944.png" },
        { link: "/projeto-2", projetoTitle: "React Memoria", description: "Descrição do Projeto 2", imageSrc: "https://t.ctcdn.com.br/lvns56iaSMyHvyTur4JeYS_NYeY=/i606944.png" },
        { link: "/projeto-2", projetoTitle: "Jogo da velha", description: "Descrição do Projeto 2", imageSrc: "https://t.ctcdn.com.br/lvns56iaSMyHvyTur4JeYS_NYeY=/i606944.png" },
        { link: "/projeto-2", projetoTitle: "Calculadora IMC", description: "Descrição do Projeto 2", imageSrc: "https://t.ctcdn.com.br/lvns56iaSMyHvyTur4JeYS_NYeY=/i606944.png" },
        { link: "/projeto-2", projetoTitle: "Sistema Financeiro", description: "Descrição do Projeto 2", imageSrc: "https://t.ctcdn.com.br/lvns56iaSMyHvyTur4JeYS_NYeY=/i606944.png" },
        { link: "/projeto-2", projetoTitle: "TODO", description: "Descrição do Projeto 2", imageSrc: "https://t.ctcdn.com.br/lvns56iaSMyHvyTur4JeYS_NYeY=/i606944.png" },
    ];
    const showMoreProjects = () => {
        setVisibleProjects(visibleProjects + 3); // Aumenta a quantidade de projetos a serem exibidos em 3
    };
    const showLessProjects = () => {
        setVisibleProjects(Math.max(visibleProjects - 3, 3)); // Reduz a quantidade de projetos a serem exibidos em 3, mas mantém no mínimo 3
    };
    return (
        <div className="bg-slate-900 flex justify-center flex-col ">
            <div className="   mx-auto text-center">
                <h1 className="text-white text-5xl font-bold mb-16 mt-32 text-center font-firaCode">meus <span className="font-bolder">projetos</span></h1>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:grid-cols-2  mt-28  ">
                    {projects.slice(0, visibleProjects).map((project, index) => (
                        <UnitProjetos
                            key={index}
                            link={project.link}
                            projetoTitle={project.projetoTitle}
                            description={project.description}
                            imageSrc={project.imageSrc}
                        />
                    ))}
                </div>
                {visibleProjects > 3 && (
                    <div className="text-center mt-10 mb-10">
                        <Button text="VER MENOS" click={showLessProjects} />
                    </div>
                )}
                {visibleProjects < projects.length && (
                    <div className="text-center mt-10 mb-10">
                        <Button text="VER MAIS" click={showMoreProjects} />
                    </div>
                )}

            </div>
            <div className="bg-pageGit bg-cover bg-center w-full h-screen text-center mt-16 mb-14 flex flex-col  sm:flex-row">
                <div className="sm:flex-1 w-full">
                    <img className="sm:ml-20" src={mockup} alt="" />
                </div>
                <div className="flex items-center justify-center flex-col flex-1">
                    <h1 className="font-firaCode text-6xl  sm:mr-10">confira o meu <span className="font-bold">repositório</span></h1>

                    <Link to="https://github.com/matheusales1" className="bg-slate-950 text-white p-3 rounded-xl mt-10 mb-40 font-bold"> VEJA NO GIT HUB</Link>
                </div>
            </div>
        </div>
    );
};

export default Projetos;
