import { useNavigate } from "react-router-dom";


export function NewsCart({ news }) {
    const navigate = useNavigate();

    return (

        <article key={news.id} className=" border border-gray-300 md:grid md:grid-cols-2 md:gap-3 bg-slate-100 block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
            <div className="relative overflow-hidden bg-cover bg-no-repeat z-0  ">
                <img src={news.image_news} alt="MDN" className="md:h-96 w-full rounded-t-lg h-72 transition duration-300 ease-in-out transform scale-100 hover:scale-110" />
            </div>
            <div className="relative font-sans p-6 overflow-hidden md:h-96">
                <h5 className="mb-2 text-xl font-medium leading-tight text-gray-800 ">{news.title}</h5>
                <hr className="h-px my-4 bg-red-800 border-0" />
                <div className="flex justify-end">
                    <p className="mb-4 text-base text-gray-600">{news.date_creation}</p>
                </div>
                <div className="md:h-[200px] line-clamp-6"> 
                    <p className="mb-4 text-base text-gray-600">{news.head_news}</p>
                </div>
                <div className="md:absolute bottom-4 right-8 h-16 w-30">
                    <button className="inline-block rounded bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500" onClick={() => navigate(`/Noticia/${news.slug}`)}>
                        Ver más
                    </button>
                </div>
            </div>
        </article>
            
    )};