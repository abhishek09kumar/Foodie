import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    return (
        <div>
            <h2>Oopps !!!</h2>
            <h1>{err.status} : {err.statusText}</h1>
            <h3>Your are looking for something that is not  available</h3>
        </div>
    )
}

export default Error;