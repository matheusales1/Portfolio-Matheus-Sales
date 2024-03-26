import { PerfilComment } from '../../components/PerfilComment';

export const Testimony = () => {
    const depoimentos = [
        {
            comment: `"Um profissional de extrema responsabilidade e comprometimento. Não tive preocupações com atrasos e tudo foi entregue com bastante cuidado nos detalhes. Atende bem a todas as solicitações feitas, muito prestativo."`,
            imagePerfil: "https://media.licdn.com/dms/image/D4D03AQG9TcCfEGTIqA/profile-displayphoto-shrink_800_800/0/1704897459851?e=1717027200&v=beta&t=LiwxmQahMWuswkl39A17fLl50mG0AktmWts2TcV1M6I",
            name: "Emily G Melo",
            job: "Social Media"
        },
        {
            comment: '"Um execelente profissional super dedicado e atencioso tem facilidade em aprender coisas novas e esta sempre se dedicando e fazendo perguntas para melhor forma de trabalho."',
            imagePerfil: "https://media.licdn.com/dms/image/D4E03AQHq88Ws1ZENmA/profile-displayphoto-shrink_800_800/0/1690583228815?e=1717027200&v=beta&t=pYLG7G6b-PHVb0B1CkfgU0OFFzuXbHEQx2cgREncqbk",
            name: "Matthaus Nawan",
            job: "Desenvolvedor Senior"
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
