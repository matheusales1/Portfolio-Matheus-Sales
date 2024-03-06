import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../components/Button";
import UnitProjetos from "../../components/UnitProjetos";
import mockup from "../../assets/mockup-github.png"
import se7Volei from "../../assets/CapasProjetos/se7volei.png";
import imc from "../../assets/CapasProjetos/imc.png";
import jodoDaVelha from "../../assets/CapasProjetos/jogodavelha.png";
import portfolio from "../../assets/CapasProjetos/portfolio.png";
import despesa from "../../assets/CapasProjetos/despesa.png";
import todo from "../../assets/CapasProjetos/todo.png";
import clima from "../../assets/CapasProjetos/clima.png";
import pizza from "../../assets/CapasProjetos/pizza.png";
import quiz from "../../assets/CapasProjetos/quiz.png";


interface Project {
    link?: string;
    linkRepositorio?: string;
    projetoTitle?: string;
    description?: string;
    imageSrc?: string;
}

const Projetos = () => {
    const [visibleProjects, setVisibleProjects] = useState(3);
    const projects: Project[] = [
        { link: "https://encurtador.com.br/covE9", projetoTitle: "Se7 Vôlei de Praia", description: "Projeto freelancer desenvolvido com React e TypeScript. Formulario de cadastro com multietapas, portal do aluno, pagina do professor com tiragem de faltas.", imageSrc: se7Volei },

        { link: "https://matheusalesdev.netlify.app/", linkRepositorio: "https://github.com/matheusales1/Portfolio-Matheus-Sales", projetoTitle: "Meu Portfolio", description: "Projeto criado para apresentar meus trabalhos e habilidades aos visitantes interessados em conhecer mais sobre mim.", imageSrc: portfolio },

        { link: "/projeto-2", linkRepositorio: "#", projetoTitle: "To-do com categorias", description: "Projeto do curso B7Web, desenvolvido com PHP e laravel. Tela de login/cadastro, criação de tarefas, edita tarefa, deleta tarefas e exclui tarefas.", imageSrc: todo },

        { link: "/projeto-2", linkRepositorio: "https://github.com/matheusales1/memory-game", projetoTitle: "React Memoria", description: "Projeto do curso B7Web, desenvolvido com React e Typescript e estilizado com styled components.", imageSrc: "https://t.ctcdn.com.br/lvns56iaSMyHvyTur4JeYS_NYeY=/i606944.png" },

        { link: "https://calcimcdev.netlify.app/", linkRepositorio: "https://github.com/matheusales1/react-calc-imc", projetoTitle: "Calculadora IMC", description: "Projeto do curso B7Web, desenvolvido com React e Typescript. ", imageSrc: imc },
        { link: "https://reactdespesas.netlify.app/", linkRepositorio: "https://github.com/matheusales1/react-despesas", projetoTitle: "Sistema de Finanças Pessoais", description: "Projeto do curso B7Web, desenvolvido com React e Typescript e estilizado com styled components", imageSrc: despesa },

        { link: "#", projetoTitle: "B7 Store", linkRepositorio: "#", description: "Em Andamento.", imageSrc: jodoDaVelha },

        { link: "https://animated-babka-038e9b.netlify.app/", linkRepositorio: "https://github.com/matheusales1/jogo-da-velha", projetoTitle: "Jogo da velha", description: "O jogo da velha é um jogo ou passatempo popular. É um jogo de regras extremamente simples, que não traz grandes dificuldades para seus jogadores e é facilmente aprendido.", imageSrc: jodoDaVelha },

        { link: "https://quizrespostajs.netlify.app/", linkRepositorio: "https://github.com/matheusales1/QuizJs", projetoTitle: "Quiz JavaScript", description: "Projeto desenvolvido no curso da B7Web.", imageSrc: quiz },
        { link: "https://pizzajs1.netlify.app/", linkRepositorio: "https://github.com/matheusales1/Projeto-Pizza-Js", projetoTitle: "Pizza JavaScript", description: "Projeto desenvolvido no curso da B7Web.", imageSrc: pizza },
        { link: "https://climaapijs.netlify.app/", linkRepositorio: "https://github.com/matheusales1/ClimaApi", projetoTitle: "Clima Api", description: "Projeto desenvolvido no curso da B7Web.", imageSrc: clima },
    ];
    const showMoreProjects = () => {
        setVisibleProjects(visibleProjects + 10); // Aumenta a quantidade de projetos a serem exibidos em 3
    };
    const showLessProjects = () => {
        setVisibleProjects(Math.max(visibleProjects - 10, 3)); // Reduz a quantidade de projetos a serem exibidos em 3, mas mantém no mínimo 3
    };
    return (
        <div id="projetos" className="bg-slate-900 flex justify-center items-center flex-col">
            <div className="flex items-center justify-center text-center flex-col">
                <h1 className="text-white text-5xl font-bold mt-16 m-2 text-center font-firaCode">meus <span className="font-bolder">projetos</span></h1>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6  mt-20">
                    {projects.slice(0, visibleProjects).map((project, index) => (
                        <UnitProjetos
                            key={index}
                            linkDeploy={project.link}
                            linkReposotorio={project.linkRepositorio}
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
            <div id="repositorio" className="bg-pageGit bg-cover bg-center w-full text-center mt-16 mb-14 flex flex-col xl:flex-row">
                <div className="sm:flex-1 w-full h-full">
                    <img className="xl:ml-20" src={mockup} alt="" />
                </div>
                <div className="flex items-center justify-center flex-col flex-1">
                    <h1 className="font-firaCode text-4xl sm:text-6xl m-4 sm:mr-10 xl:mt-32">confira o meu <span className="font-bold">repositório</span></h1>
                    <Link to="https://github.com/matheusales1" target="_blank" className="bg-slate-950 text-white p-2 rounded-xl mt-6 mb-40 sm:mb-60 font-bold "> VEJA NO GIT HUB</Link>
                </div>
            </div>
        </div>
    );
};

export default Projetos;
