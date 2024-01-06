export const Contatos = () => {
    return (

        <div className="w-full h-full  flex items-center  flex-col mt-10">
            <div className="   sm:h-60 h-80 text-black flex flex-col justify-center items-center text-center ">
                <h1 className="sm:text-3xl text-3xl font-bold mb-4 m-12 ">Interessado em colaborar comigo?</h1>
                <p className="ml-12 mr-12 mt-6">Estou sempre aberto para discutir trabalhos de design de produtos ou oportunidades de parceria.</p>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full mt-10"
                >
                    Enviar
                </button>
            </div>
        </div >
    );
};

export default Contatos;
