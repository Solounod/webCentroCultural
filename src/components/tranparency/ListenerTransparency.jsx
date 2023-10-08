import { useEffect, useState } from "react";
import { getTransparency } from "../../api/apiTransparency";

export function ListenerTransparency(){
    const [tranparencies, setTranpariencies] = useState([])

    useEffect (() => {
        async function loadTransparency() {
            const transparencyData = await getTransparency();
            console.log(transparencyData)
            setTranpariencies(transparencyData)
        }
        loadTransparency()
    },[])

    return (
        <div className="pl-16 pr-16 bg-white pt-6 pb-8">
            <h2 className="text-3xl font-semibold">Transparencias</h2>
            <hr className="pt-2"/>
            
            {tranparencies.map((transparency) => (
                <div className="pt-8 shadow-2xl">
                    <p>{transparency.id}</p>
                    <p>{transparency.title}</p>
                    <p>{transparency.description}</p>
                    <p>{transparency.file_pdf}</p>
                    
                </div>
               
               ))}
        </div>

    )
}