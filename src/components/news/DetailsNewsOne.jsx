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
        <section className="px-2 pb-8 md:px-16 shadow-2xl gap-2" key={detailsNews.id}> 
        <article className="block">
            <div >
                <img  className="w-full md:h-[500px]" src={detailsNews.image_news} alt="" />
            </div>
            <div>
                <div className="flex ">
                    <h5 className="p-4 w-full bg-indigo-900 text-3xl text-start text-white">{detailsNews.title}</h5>
                </div>
                <div className="flex justify-start">
                    <div className="md:grid md:grid-cols-2  w-60">
                        <div className="bg-red-600 p-1 text-white">
                            <p>Ver mas</p>
                        </div>
                        <div className="border border-red-600 p-1  hover:bg-red-200">
                            <button className="text-red-600 font-semibold"><a href={detailsNews.link_news}>Link</a></button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end pt-10">
                    <p className="mb-4 text-base text-gray-600">{detailsNews.date_creation}</p>
                </div>
                <p className="font-semibold pb-10">{detailsNews.head_news}</p>
                <p className=" text-slate-800 text-md pb-16">{detailsNews.description}</p>
                
            </div>
        </article>
        <div className=" mx-2  mb-20  flex justify-center">
            
                {detailsNews.video_news && (
                <div className="hover:w-[600]">
                    <video controls className="h-auto w-full rounded-md hover:cursor-pointer ">
                        <source src={detailsNews.video_news} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                )}               
            </div>   
    </section>
    




























        
    )
}