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
        <div>
            <div>
                <h3>{detailTheaters.title}</h3>
                <img src={detailTheaters.image} alt="" />
                <p>{detailTheaters.description}</p>
            </div>
            <ListenerGalleryTheaterPlay key={params.id} id={params.id}/>
        </div>
    )
}