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

        <section className="mt-20 mx-2 md:mx-20">
            <div>
                <div className=" mt-20">
                    <div className=" scale-up-hor-right my-10 p-10 flex justify-center bg-indigo-800 uppercase rounded-full">
                        <h5 className="text-3xl text-white font-semibold uppercase">{detailsNews.title}</h5>
                    </div >
                    <div className="flex justify-center ">
                        <div className=" w-[800px]   ">
                            <img className="scale-up-center w-full  h-80 object-center rounded-lg shadow-md shadow-gray-950 " src={detailsNews.image_news} />
                        </div>
                    </div>
                    <p className="gap-3 my-14 text-slate-900 text-lg text-center">{detailsNews.description}</p>
                </div>
            </div>
            
           <div className="block mx-2 md:grid md:grid-cols-2 md:gap-12 mb-20 ">
            
                {detailsNews.video_news && (
                <div className="hover:w-[600]">
                    <video controls className="h-auto w-full rounded-md hover:cursor-pointer ">
                        <source src={detailsNews.video_news} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                )}

                { detailsNews.link_news && (
                
                <div className="pt-20 grid justify-items-center">
                    <button className="bg-red-500 text-white h-20 w-60 rounded-full hover:shadow-md hover:shadow-red-600 "><a href={detailsNews.link_news}>Ver link</a></button>
                </div>)}
                
            </div>
        </section>
    )
}