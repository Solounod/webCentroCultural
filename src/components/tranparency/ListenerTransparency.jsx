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
        <section className="pl-16 pr-16 bg-white pt-6 pb-8 mt-20">
            <div className="">
             <h2 className="text-4xl font-light uppercase text-red-700 ">TRansparencias</h2>
             <hr className="h-px my-4 bg-red-800 border-0" />
            </div>
            
            {tranparencies.map((transparency) => (
                <div className="pt-8 shadow-2xl">
                    <p>{transparency.id}</p>
                    <p>{transparency.title}</p>
                    <p>{transparency.description}</p>
                    <p>{transparency.file_pdf}</p>
                    
                </div>
               
               ))}
        </section>

    )
}