import { useEffect, useState } from "react";
import { getTransparency } from "../../api/apiTransparency";

export function ListenerTransparency(){
    const [tranparencies, setTranpariencies] = useState([])

    useEffect (() => {
        async function loadTransparency() {
            const transparencyData = await getTransparency();
            setTranpariencies(transparencyData)
        }
        loadTransparency()
    },[])

    return (
        <section className="px-2 sm:px-8 md:pl-16 md:pr-16 bg-white pt-6 pb-8 mt-20">
            <div className="pb-10">
             <h2 className="text-4xl font-light uppercase text-red-700 ">Transparencias</h2>
             <hr className="h-px my-4 bg-red-800 border-0" />
            </div>
            
            {tranparencies.map((transparency) => (
                <article className="pt-8 md:pb-6 shadow-md shadow-slate-400 sm:block md:grid md:grid-cols-3 border border-slate-700 rounded-lg mb-10 " key={transparency.id}>
                    <div className="px-4">
                        <div className="mb-4">
                            <h5 className="font-semibold text-lg ">{transparency.title}</h5>
                        </div>
                        <p>{transparency.description}</p>
                    </div>
                    <div className="flex justify-center pt-12">
                        <a href={transparency.link} target="_blank"><button className="p-2 text-orange-600 border-2  border-orange-600 rounded-full hover:bg-orange-600 hover:text-white hover:font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">Ir a documento web</button></a>
                    </div>
                    <div className="block">
                        <div className="flex justify-center md:pb-6 pb-2 pt-8">
                            <p className="font-semibold">Ver documento aquí</p>
                        </div>
                        <div className="p-6 flex justify-center animate-bounce">
                            <a href={transparency.file_pdf} target="_blank"><img className="md:w-[100px] md:h-[100px] w-[80px] h-[80px]"  src="/imgpdf.png" alt="" /></a>
                        </div>
                    </div>
                </article>
               
               ))}
        </section>

    )
}