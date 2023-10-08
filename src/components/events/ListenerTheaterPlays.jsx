import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTeatherPlays } from "../../api/apiEvents";


export function ListenerTheaterPlays (){
    const [theaterplays, setTheaterplays] = useState([]);
    const navigate = useNavigate();

    useEffect (() => {
        async function loadTheatersPlays() {
            const newData = await getTeatherPlays();
            console.log(newData)
            setTheaterplays(newData)
        }
        loadTheatersPlays()
    }, [])

    return (

        <div>
            {theaterplays.map((theaterplay) => (
                <div key={theaterplay.id}>
                    <h3>{theaterplay.title}</h3>
                    <img src={theaterplay.image} alt="" />
                    <p>{theaterplay.description}</p>
                    <button onClick={() => {
                        navigate(`/Eventos/${theaterplay.id}`)
                    }}>Ver evento</button>
                </div>
            ))}
        </div>
    )

}