import Perfil from "../../assets/mat.jfif"

export const About = () => {
    return (
        <div className="bg-white " id="about">
            <div className="container mx-auto flex flex-wrap items-center justify-center h-1/2  mt-32 mb-40">
                <div className="w-full md:w-1/2 p-4 ">
                    <div>
                        <h3 className="mt-10 text-center text-3xl">SOBRE</h3>
                        <p className="mt-10 mb-6 text-xl leading-relaxed text-justify text-gray-600">
                            Residente em João Pessoa - PB <br /> Cursando ensino superior em Analise e Desenvolvimento de Sistemas  pela Faculdade UNOPAR. <br />Experiência profissional como freelancer, atuando na area de Front End. Buscando me tornar fullstack, sigo aprimorando skills em back-end.

                            Atuo como freelancer Front End Developer, desenvolvo sites para amigos e clientes como forma de colocar em prática todo conteúdo que aprendo nos estudos pessoais.
                        </p>
                        <hr />
                    </div>

                </div>
                <div className="w-full md:w-1/2 p-4">
                    <div className="flex justify-center items-center">
                        <img src={Perfil} alt="Sua imagem" className="w-80 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}
