import { useState } from 'react';
import { PerfilComment } from '../../components/PerfilComment';
import Teste from '../../assets/se7volei.jpeg';

export const Testimony = () => {
    const depoimentos = [
        {
            comment: `"Se o tamanho do seu slider está maior do que o esperado, pode ser devido às classes ou ao estilo CSS aplicado aos elementos dentro do slider. Verifique se há alguma classe que está configurando o tamanho dos elementos de forma inadequada."`
            ,
            imagePerfil: Teste, name: "Emily G Melo", job: "Social Media"
        },
        {
            comment:
                'pica de mel',
            imagePerfil: Teste,
            name: "Emily G Melo", job: "Social Media"
        },
    ];

    const [currentDepoimento, setCurrentDepoimento] = useState(0);

    const handleDepoimentoClick = (index: number) => {
        setCurrentDepoimento(index);
    };

    return (
        <div className=" bg-slate-800 flex justify-center text-white">
            <div className="w-3/5 flex items-center flex-col mt-36 ">
                <h1 className='text-3xl'>Depoimentos</h1>
                <p className='mt-10 sm:text-2xl'>Pessoas com quem trabalhei disseram algumas coisas boas...</p>
                <PerfilComment
                    comment={depoimentos[currentDepoimento].comment}
                    imagePerfil={depoimentos[currentDepoimento].imagePerfil}
                    name={depoimentos[currentDepoimento].name}
                    job={depoimentos[currentDepoimento].job}
                />
                <div className="flex mt-14">
                    {depoimentos.map((_depoimento, index) => (
                        <div
                            key={index}
                            className={`w-4 h-4 mb-10 bg-white rounded-full cursor-pointer mx-1 ${index === currentDepoimento ? 'opacity-100' : 'opacity-50'
                                }`}
                            onClick={() => handleDepoimentoClick(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimony;
