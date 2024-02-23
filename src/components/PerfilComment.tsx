import React from 'react';

interface PerfilCommentProps {
    comment?: string;
    imagePerfil?: string;
    name?: string;
    job?: string;
}

export const PerfilComment: React.FC<PerfilCommentProps> = ({ comment, imagePerfil, name, job }) => {
    return (
        <div className=" w-96 flex flex-col mt-10 mb-10">
            <div className="flex items-center ">
                <img className="w-24 h-24 rounded-full mt-10 mb-2" src={imagePerfil} alt="" />
                <h1 className="text-xl font-bold ml-4 mt-10">{name} <br /> {job}</h1>
            </div>
            <div className="flex flex-col flex-1 sm:ml-4 w-96 mt-10 ">
                <span className="sm:w-3/4  text-lg leading-relaxed text-justify text-gray-400">{comment}</span>
            </div>
        </div>
    );
};
