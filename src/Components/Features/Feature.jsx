import { FaCheck } from "react-icons/fa";
const Feature = ({feature}) => {


    return (


        <div>
            <p className="text-center font-semibold flex items-center"> <FaCheck className="text-green-500 mr-2 "></FaCheck> {feature}</p>
        </div>
    );
};

export default Feature;