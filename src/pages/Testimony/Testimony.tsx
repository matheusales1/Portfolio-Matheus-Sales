import { PerfilComment } from '../../components/PerfilComment';

export const Testimony = () => {
    const depoimentos = [
        {
            comment: `"Se o tamanho do seu slider está maior do que o esperado, pode ser devido às classes ou ao estilo CSS aplicado aos elementos dentro do slider. Verifique se há alguma classe que está configurando o tamanho dos elementos de forma inadequada."`,
            imagePerfil: "https://media.licdn.com/dms/image/D4D03AQG9TcCfEGTIqA/profile-displayphoto-shrink_800_800/0/1704897459851?e=1710979200&v=beta&t=DtW4pXioRH-md9P1w7l4gOKNUOiedqMwrX2E8UfXZgI",
            name: "Emily G Melo",
            job: "Social Media"
        },
        {
            comment: '"Um execelente profissional super dedicado e atencioso tem facilidade em aprender coisas novas e esta sempre se dedicando e fazendo perguntas para melhor forma de trabalho."',
            imagePerfil: "https://media.licdn.com/dms/image/D4E03AQHq88Ws1ZENmA/profile-displayphoto-shrink_800_800/0/1690583228815?e=1710979200&v=beta&t=O693E-kTk0iz7sk3r4u9o_uvDaqQdBFmQd-m8CFdgns",
            name: "Matthaus Nawan",
            job: "Desenvolvedor Pleno"
        },
    ];

    return (
        <div id="depoimentos" className="bg-slate-900 flex justify-center text-white">
            <div className="w-10/12 flex flex-col items-center mt-36">
                <h1 className='text-4xl font-firaCode'>Depoimentos</h1>
                <p className='mt-10 sm:text-2xl text-center'>Pessoas com quem trabalhei disseram algumas coisas boas.</p>
                <div className="sm:flex xl:gap-14 mb-20 ">
                    {depoimentos.map((depoimento, index) => (
                        <PerfilComment
                            key={index}
                            comment={depoimento.comment}
                            imagePerfil={depoimento.imagePerfil}
                            name={depoimento.name}
                            job={depoimento.job}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimony;
