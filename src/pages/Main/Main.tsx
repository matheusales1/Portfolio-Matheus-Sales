
import { Link } from 'react-scroll';


export const Main = () => {
    return (
        <div className="h-screen w-full bg-cover bg-center text-center text-white flex flex-col items-center bg-pageMain">
            <div className="flex-col flex items-center justify-center bg-overlay w-full h-full">
                <h2 className="text-6xl  mb-10">MATHEUS SALES</h2>
                <span className="text-2xl">DESENVOLVEDOR WEB <br />FRONT-END</span>
                <h1 className="text-2xl mt-32 ">Explore novos códigos - soluções personalizadas que fascinam, <br />  otimizam e impulsionam seus projetos de desenvolvimento!</h1>
                <Link to="about" smooth={true} duration={900}>
                    <button className="bg-slate-950 p-4 w-60 rounded-xl mt-10 font-bold text-cyan-600">SAIBA MAIS</button>
                </Link>
            </div>
        </div>
    )
}
