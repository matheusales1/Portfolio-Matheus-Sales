import React, { useState } from "react";

interface UnitProjetosProps {
    link?: string;
    projetoTitle?: string;
    description?: string;
    imageSrc?: string;
}

const UnitProjetos: React.FC<UnitProjetosProps> = ({
    link,
    projetoTitle,
    description,
    imageSrc,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="h-80 w-96 bg-se7volei rounded-xl relative mb-7"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={imageSrc} alt={projetoTitle} className="w-full h-full object-cover rounded-xl" />
            {isHovered && (
                <div className="w-full text-center bg-black absolute inset-0 flex flex-col items-center justify-center text-white rounded-xl">
                    <a href={link} className="m-4 w-full">
                        <h3 className="text-3xl font-bold mb-4">{projetoTitle}</h3>
                        <p className="text-xl">{description}</p>
                        <div className="mt-8 rounded-lg w-full flex items-center justify-center h-14">
                            <p className="text-white w-14 bg-red-700 rounded-lg">Visite</p>
                        </div>
                    </a>
                </div>
            )}
        </div>
    );
};

export default UnitProjetos;
