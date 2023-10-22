import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailNews } from "../../api/getblog"; 


export function DetailsNewsOne (){
    const [detailsNews, setDetailNews] = useState([])
    const params = useParams()

    useEffect (() => {
        async function loadDetailNews(){
            if (params.slug){
                const dataDetailsNews = await getDetailNews(params.slug)
                console.log(dataDetailsNews)
                setDetailNews(dataDetailsNews)
            }
        }
        loadDetailNews()
    }, [])

    return (

        <section className="mt-20">
            <div><h5>{detailsNews.title}</h5></div>
            <img src={detailsNews.image_news} />
            
            
            <p>{detailsNews.description}</p>
            {detailsNews.video_news && (
            <video controls className="h-auto w-96">
                <source src={detailsNews.video_news} type="video/mp4" />
                Your browser does not support the video tag.
            </video>)}

            
            <button className="bg-red-500">{detailsNews.link_news}</button>
        </section>
    )
}