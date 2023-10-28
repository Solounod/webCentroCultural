import { useEffect, useState } from "react";
import { getDetailTeatherPlay } from "../../api/apiEvents";
import { useParams } from "react-router-dom";
import { ListenerGalleryTheaterPlay } from "./ListenerGalleryTheaterPlay";

export function DetailTheaterplay () {
    const [detailTheaters, setDetailTheaters] = useState([])
    const params = useParams()

    useEffect (() => {
        async function loadDetailTheaterplay() {
            if (params.id) {
                const dataDetailsTheaterPlay = await getDetailTeatherPlay(params.id)
                console.log([dataDetailsTheaterPlay])
                setDetailTheaters(dataDetailsTheaterPlay)
            }
            
        }
        loadDetailTheaterplay()
    }, [])

    return (

        <secction className="mt-20">
            <div>
                <div className=" mt-20">
                    <div className=" scale-up-hor-right my-10 p-10 flex justify-center bg-indigo-800 uppercase rounded-full">
                        <h5 className="text-3xl text-white font-semibold uppercase">{detailTheaters.title}</h5>
                    </div >
                    <div className="flex justify-center ">
                        <div className=" w-[800px]   ">
                            <img className="scale-up-center w-full  h-80 object-center rounded-lg shadow-md shadow-gray-950 " src={detailTheaters.image} />
                        </div>
                    </div>
                    <p className="gap-3 my-14 text-slate-900 text-lg text-center">{detailTheaters.description}</p>
                </div>
            </div>




            
            <ListenerGalleryTheaterPlay key={params.id} id={params.id}/>
        </secction>
    )
}