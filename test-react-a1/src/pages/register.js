import "../pages/css/style.css";
import { useState } from "react";

function Register ()
{
    const [nom,setNom] = useState("");
    const [prenom,setPrenom] = useState("");
    const [adresse,setAdresse] = useState("");

    const HandleSubmit = (event) =>
    {
        event.preventDefault()
        alert(`Nom: ${nom}\n
            Prenom: ${prenom}\n
            Adresse: ${adresse}\n`
        )
        
    }

    return (
        <>
            <form onSubmit={HandleSubmit}>
            
            <label>Nom:</label>
            <input type="text" className="form-control" value={nom} placeholder="Nom" onChange={(e)=>setNom(e.target.value)}></input>
            <label>Prenom:</label>
            <input type="text" className="form-control" value={prenom} placeholder="Prenom" onChange={(e)=>setPrenom(e.target.value)}></input>
            <label>Adresse:</label>
            <input type="text" className="form-control" value={adresse} placeholder="Adresse" onChange={(e)=>setAdresse(e.target.value)}></input>
            
            <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </>
    )
}

export default Register;