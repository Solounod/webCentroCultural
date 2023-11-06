import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTeatherPlays } from "../../api/apiEvents";


export function ListenerTheaterPlays (){
    const [theaterplays, setTheaterplays] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    useEffect (() => {
        async function loadTheatersPlays(page) {
            const newData = await getTeatherPlays(page);
            console.log(newData.results)
            setTheaterplays(newData.results)
            setTotalPages(Math.ceil(newData.count / 9)); 

        }
        loadTheatersPlays(currentPage)
    }, [currentPage])

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={i === currentPage ? "active rounded  bg-red-300 px-2 pb-2 pt-1.5 mx-1 hover:bg-red-800 hover:text-white" : "rounded  bg-red-300 px-2 pb-2 pt-1.5  hover:bg-red-800 hover:text-white"}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (

        <section className="mt-20 md:mx-20">
            <div className="">
             <h2 className="text-4xl font-light uppercase text-red-700 ">Eventos</h2>
             <hr className="h-px my-4 bg-red-800 border-0" />
            </div>
            <div className="pt-8 md:grid md:grid-cols-3 md:gap-4">
                {theaterplays.map((theaterplay) => (
                    <article key={theaterplay.id} className=" border border-gray-300 mb-8 bg-slate-100 block rounded-lg shadow-2xl">

                        <div className="  relative overflow-hidden bg-cover bg-no-repeat z-0  ">
                            <div className="image-container transform scale-100 hover:scale-110 hover:cursor-pointer" onClick={() => {
                                    navigate(`/Eventos/${theaterplay.id}`)}}>
                                <img className=" w-full rounded-t-lg h-72 " src={theaterplay.image} alt="" />
                            </div>
                        </div>
                        <div className="relative font-sans p-6 overflow-hidden md:h-72">
                            <h5 className="mb-2 text-xl font-medium leading-tight text-gray-800 ">{theaterplay.title}</h5>
                            <div className="md:h-[200px] line-clamp-6">
                                <p className="mb-4 text-base text-gray-600">{theaterplay.description}</p>
                            </div>
                            <div className="md:absolute bottom-4 right-8 h-16 w-30">
                                <button  className="inline-block rounded bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500"  onClick={() => {
                                    navigate(`/Eventos/${theaterplay.id}`)
                                }}>Ver evento</button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <div className="flex justify-center pt-10">
                <div className="w-[200px] pagination mt-8 mb-6 flex justify-center px-1 overflow-x-auto max-w-full">   
                  {renderPageNumbers()}     
                </div>
            </div>
        </section>
    )

}