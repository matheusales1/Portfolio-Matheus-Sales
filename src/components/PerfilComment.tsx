import React from 'react';

interface PerfilCommentProps {
    comment?: string;
    imagePerfil?: string;
    name?: string;
    job?: string;
}

export const PerfilComment: React.FC<PerfilCommentProps> = ({ comment, imagePerfil, name, job }) => {
    return (
        <div className="w-96 flex flex-col mt-10 mb-10 items-center">
            <div className="flex items-center m-10 ">
                <img className="w-24 h-24 rounded-full mt-10 mb-2" src={imagePerfil} alt="" />
                <div className=''>
                    <h1 className="text-xl font-bold ml-4 mt-10">{name}</h1>
                    <h2 className='text-lg  ml-4'>{job}</h2>
                </div>
            </div>
            <div className="flex flex-col flex-1 sm:ml-4 w-80  text-center ">
                <span className="text-lg leading-relaxed text-justify text-gray-400">{comment}</span>
            </div>
        </div>
    );
};
