import { useNavigate } from "react-router-dom";


export default function EditAvailabilityPage(){
    const navigate = useNavigate();
    return(
        <div className="ml-16">
            <h1>HELLO WORLD</h1>
            <button className="btn btn-primary" onClick={()=>{navigate(-1)}}>GO BACK</button>
        </div>
    );
}