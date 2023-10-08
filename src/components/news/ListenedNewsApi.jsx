import { useEffect, useState } from "react";
import { getNews } from "../../api/getblog";
import { NewsCart } from "./NewsCart";

export function ListenedNewsApi() {
    const [newss, setNewss] = useState([]);

    useEffect(() => {
        async function loadNews() {
            const newsData = await getNews();
            console.log(newsData)
            setNewss(newsData)
        }
        loadNews();
    }, []);

    return(
        <div className="pl-16 pr-16 bg-white pt-6 pb-8">
            <h2 className="text-3xl font-semibold">Noticias</h2>
            <hr className="pt-2"/>
            
            {newss.map((news) => (
                <div className="pt-8 shadow-2xl">
                    <NewsCart news={news}/>
                </div>
               
               ))}
        </div>
    )
}