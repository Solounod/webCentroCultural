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
             <h2 className="text-4xl font-light uppercase text-red-700 ">Transparencias</h2>
             <hr className="h-px my-4 bg-red-800 border-0" />
            </div>
            
            {tranparencies.map((transparency) => (
                <article className="pt-8 shadow-xl grid grid-cols-2 border mb-10">
                    <div>
                        <div className="mb-4">
                            <h5 className="font-semibold text-lg">{transparency.title}</h5>
                        </div>
                        <p>{transparency.description}</p>
                    </div>
                    <div>
                        
                        <a href={transparency.file_pdf}><img className="w-[100px] h-[100px]"  src="/imgpdf.png" alt="" /></a>
                        
                    </div>
                </article>
               
               ))}
        </section>

    )
}