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
            <div className="pt-8 shadow-2xl" key={detailWorkshops.id}>
                                    <p>{detailWorkshops.id}</p>
                                    <p>{detailWorkshops.tittle}</p>
                                    <p>{detailWorkshops.image_workshop}</p>
                                    <p>{detailWorkshops.slug}</p>
                                    <p>{detailWorkshops.facilitator_name}</p>
                                    <p>{detailWorkshops.facilitator_link}</p>
                                    <p>{detailWorkshops.description}</p>
                                    <p>{detailWorkshops.schedules}</p>
                                    <p>{detailWorkshops.price}</p>
            </div>
        </>
    )
}