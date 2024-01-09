import { Link } from "react-router-dom";
import { useState } from "react";
import UnitProjetos from "../../components/UnitProjetos";
import logo from "../../assets/se7volei.jpeg"

interface Project {
    link?: string;
    projetoTitle?: string;
    description?: string;
    imageSrc?: string;
}

const Projetos = () => {
    const [visibleProjects, setVisibleProjects] = useState(3);

    const projects: Project[] = [
        { link: "https://encurtador.com.br/covE9", projetoTitle: "Se7 Vôlei de Praia", description: "Formulario de cadastro com multietapas, pagina de administrador, tiragem de falta.", imageSrc: logo },
        { link: "/projeto-2", projetoTitle: "Rotymotos", description: "Projeto em andamento.", imageSrc: "https://t.ctcdn.com.br/lvns56iaSMyHvyTur4JeYS_NYeY=/i606944.png" },
        { link: "/projeto-2", projetoTitle: "Projeto 2", description: "Descrição do Projeto 2", imageSrc: "https://t.ctcdn.com.br/lvns56iaSMyHvyTur4JeYS_NYeY=/i606944.png" },

        { link: "/projeto-2", projetoTitle: "Projeto 2", description: "Descrição do Projeto 2", imageSrc: "https://t.ctcdn.com.br/lvns56iaSMyHvyTur4JeYS_NYeY=/i606944.png" },
    ];
    const showMoreProjects = () => {
        setVisibleProjects(visibleProjects + 3); // Aumenta a quantidade de projetos a serem exibidos em 3
    };

    const showLessProjects = () => {
        setVisibleProjects(Math.max(visibleProjects - 3, 3)); // Reduz a quantidade de projetos a serem exibidos em 3, mas mantém no mínimo 3
    };

    return (
        <div className="bg-white flex justify-center ">
            <div className="   mx-auto text-center">
                <h1 className="text-3xl font-bold mb-16 mt-32 text-center font-firaCode">meus projetos</h1>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:grid-cols-2  ">
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
                        <button className="bg-white border border-black text-black p-4 w-60 rounded-xl mt-14 font-bold " onClick={showLessProjects}>
                            VER MENOS
                        </button>
                    </div>
                )}
                {visibleProjects < projects.length && (
                    <div className="text-center mt-10 mb-10">

                        <button onClick={showMoreProjects} className="bg-white border border-black text-black p-4 w-60 rounded-xl mt-14 font-bold ">
                            VER MAIS
                        </button>
                    </div>
                )}
                <div className="text-center mt-16 mb-14">
                    <Link className="text-2xl ml-4 text-center p-4 " to="www.google.com">
                        Repositórios no GitHub

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Projetos;
