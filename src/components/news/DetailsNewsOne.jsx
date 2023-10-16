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

        <>
            <p>{detailsNews.title}</p>
            <p>{detailsNews.description}</p>
            <p>{detailsNews.image_news}</p>
            <p>{detailsNews.link_news}</p>
        </>
    )
}