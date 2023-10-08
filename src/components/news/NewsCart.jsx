import { useNavigate } from "react-router-dom";


export function NewsCart({ news }) {
    const navigate = useNavigate();

    return (

        <article  key={news.id} className="grid grid-cols-2 gap-3 bg-slate-100 ">
            <div className="">
                <img src={news.image_news} alt="MDN" className="h-96 w-full" />
            </div>
            <div className="">
                <h2 className=" pt-4 text-2xl">{news.title}</h2>
                <p> {news.description}</p>
                <p>Link: {news.link_news}</p>
            </div>
            
            
            
    
    </article>
    )};