interface UnitConhecimentosProps {
    Logo?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;

}

export const UnitConhecimentos: React.FC<UnitConhecimentosProps> = ({ Logo, onMouseEnter, onMouseLeave }) => {

    return (
        <div className="w-28 h-28 m-4 flex items-center justify-center bg-blue-500 text-white  font-bold hover:border-2 border-white transition-all duration-1000 " onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <img className="w-16 h-20" src={Logo} alt="" />
        </div>
    )
}