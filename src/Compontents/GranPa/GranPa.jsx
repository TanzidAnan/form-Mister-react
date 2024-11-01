import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

const GranPa = () => {
    return (
        <div className="border-2 gap-3 p-10 bg-slate-300 w-6/12 flex mx-auto text-black">
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
        </div>
    );
};

export default GranPa;