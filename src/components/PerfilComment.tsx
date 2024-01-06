interface PerfilCommentProps {
    comment?: string;
    imagePerfil?: string;
    name?: string;
    job?: string;
}

export const PerfilComment: React.FC<PerfilCommentProps> = ({ comment, imagePerfil, name, job }) => {
    return (
        <div className="  text-center flex items-center justify-center flex-col mt-10">
            <img className="w-28 h-28 rounded-full mt-10 mb-10" src={imagePerfil} alt="" />
            <span className="sm:w-3/4 text-2xl text-white">{comment}</span>
            <h1 className="text-xl mt-8 font-bold">{name}</h1>
            <p>{job}</p>
        </div>
    );
};
