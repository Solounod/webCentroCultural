import { useEffect, useState } from "react";
import { getDetailTeatherPlay } from "../../api/apiEvents";
import { useParams } from "react-router-dom";
import { ListenerGalleryTheaterPlay } from "./ListenerGalleryTheaterPlay";
import { DetailLinksTheaterPlays } from "./DetailLinksTheaterPlays";

export function DetailTheaterplay () {
    const [detailTheaters, setDetailTheaters] = useState([]);
    const [menuClicked, setMenuClicked] = useState(false);
    const params = useParams()


    const handleClick = () => {

        setMenuClicked((prevState) => !prevState)
      }

    useEffect (() => {
        async function loadDetailTheaterplay() {
            if (params.id) {
                const dataDetailsTheaterPlay = await getDetailTeatherPlay(params.id)
                setDetailTheaters(dataDetailsTheaterPlay)
            }
            
        }
        loadDetailTheaterplay()
    }, [])

    return (

        <section className="px-2 pb-8 md:px-16 shadow-2xl gap-2" key={detailTheaters.id}>
            <article className="block">
                <div className="">
                    <img  className="w-full md:h-[500px] sm:h-[400px] h-[300px]" src={detailTheaters.image} alt="imagen evento"/>
                </div>
                <div>
                    <div className="flex">
                        <h5 className="p-4 w-full bg-indigo-900 text-3xl text-start text-white">{detailTheaters.title}</h5>
                    </div >
                    <div className="flex justify-end mb-8">
                        <div className="md:grid md:grid-cols-2  w-60">
                            <div className="bg-red-600 p-1 text-white">
                                <p>Ver Links</p>
                            </div>
                            <div className="border border-red-600 p-1  hover:bg-red-200 text-center">
                                <button onClick={handleClick} className={`${!menuClicked ? 'block text-red-600 font-semibold w-full' : 'hidden'}`}>Aquí</button>
                                <button onClick={handleClick} className={`${menuClicked ? 'block text-red-600 font-semibold w-full' : 'hidden'}`}>X</button>
                            </div>
                        </div>  
                    </div> 
                    <div className="flex justify-end">
                        <div className="w-[280px] md:w-[220px]">
                            <DetailLinksTheaterPlays id={params.id} menuClicked={menuClicked}/>
                        </div>
                    </div>
                    <p className=" text-slate-800 text-md pb-16">{detailTheaters.description}</p>
                </div>
            </article>           
            <ListenerGalleryTheaterPlay key={params.id} id={params.id}/>
        </section>
    )
}