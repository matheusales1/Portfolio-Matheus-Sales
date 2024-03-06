import React, { useState } from "react";

interface UnitProjetosProps {
    linkDeploy?: string;
    linkReposotorio?: string;
    projetoTitle?: string;
    description?: string;
    imageSrc?: string;
}

const UnitProjetos: React.FC<UnitProjetosProps> = ({
    linkDeploy,
    linkReposotorio,
    projetoTitle,
    description,
    imageSrc,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="h-80 sm:w-80 xl:w-96 w-80 bg-se7volei rounded-xl relative mb-7"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={imageSrc} alt={projetoTitle} className="w-full h-full object-cover rounded-xl" />
            {isHovered && (
                <div className="w-full text-center bg-black absolute inset-0 flex flex-col items-center justify-center text-white rounded-xl">
                    <h3 className="text-3xl font-bold">{projetoTitle}</h3>
                    <p className="text-base m-4">{description}</p>
                    <div className="mt-8 rounded-lg w-full flex flex-col items-center justify-center h-14">
                        <a href={linkDeploy} target="_blank" rel="noopener noreferrer" className="m-4 w-full">
                            <button className="bg-red-700 w-40 h-10 rounded-xl">Deploy</button>
                        </a>
                        <a href={linkReposotorio} target="_blank" rel="noopener noreferrer" className=" w-full">
                            <button className="bg-blue-700 w-40 h-10 rounded-xl mb-12">Repositório</button>
                        </a>
                    </div>

                </div>
            )}
        </div>
    );
};

export default UnitProjetos;
