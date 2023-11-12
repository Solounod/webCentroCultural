import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoriesDetailWorkshop } from "../../api/apiworkshop";


export function DetailWorkshop(){
    const [detailWorkshops, setDetaiWorkshop] = useState([])
    const params = useParams()

    useEffect (() => {
        async function loadDetailWorkshop(){
            if (params.id && params.slug){
                const dataDetailsWorkshop = await getCategoriesDetailWorkshop(params.id, params.slug)
                console.log(dataDetailsWorkshop)
                setDetaiWorkshop(dataDetailsWorkshop)
            }
        }
        loadDetailWorkshop()
    }, [])

    return (
        <>
            <section className="pt-40 px-2 pb-8 sm:px-16 md:px-16 shadow-2xl gap-2" key={detailWorkshops.id}> 
                <article className="sm:block md:grid md:grid-cols-2">
                    <div >
                        <img  className="h-[400px] w-full md:w-[400px] md:h-[400px] tracking-in-expand-fwd" src={detailWorkshops.image_workshop} alt="" />
                    </div>
                    <div>
                        <div className="flex scale-up-hor-right">
                            <h5 className="p-4 w-full bg-indigo-900 text-3xl text-right text-white flex scale-up-hor-right">{detailWorkshops.tittle}</h5>
                        </div>
                        <div className="flex justify-end ">
                            <div className="md:grid md:grid-cols-2  w-60">
                                <div className="bg-red-600 p-1 text-white">
                                    <p>{detailWorkshops.facilitator_name}</p>
                                </div>
                                <div className="border border-red-600 p-1  hover:bg-red-200">
                                    <button className="text-red-600 font-semibold"><a href={detailWorkshops.facilitator_link}>Link</a></button>
                                </div>
                            </div>
                        </div>
                        <p className="p-10 text-slate-800 text-md">{detailWorkshops.description}</p>
                        <article className="flex justify-end">
                            <table className="border-collapse border border-slate-500 ">
                                <thead  >
                                    <tr className="bg-indigo-500">
                                        <th className="border border-indigo-600 border-spacing-8 text-white">Horarios</th>
                                        <th className="border border-indigo-600 border-spacing-8 text-white">Precios</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-indigo-600 border-spacing-8 p-1">{detailWorkshops.schedules}</td>
                                        <td className="border border-indigo-600 border-spacing-8 p-1">{detailWorkshops.price}</td>
                                    </tr>       
                                </tbody>
                            </table>    
                        </article>
                    </div>
                </article>   
            </section>
            
        </>
    )
}