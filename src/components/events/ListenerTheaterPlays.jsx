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
            setTotalPages(Math.ceil(newData.count / 6)); 

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
                    className={i === currentPage ? "active" : ""}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (

        <section className="mt-20">
            <div className="">
             <h2 className="text-4xl font-light uppercase text-red-700 ">Eventos</h2>
             <hr className="h-px my-4 bg-red-800 border-0" />
            </div>
            {theaterplays.map((theaterplay) => (
                <article key={theaterplay.id} className=" bg-slate-100 block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                    
                    <div className="relative overflow-hidden bg-cover bg-no-repeat z-0  ">
                        <img className=" w-full rounded-t-lg h-72 transition duration-300 ease-in-out transform scale-100 hover:scale-110" src={theaterplay.image} alt="" />
                    </div>
                    <h3>{theaterplay.title}</h3>
                    <p>{theaterplay.description}</p>
                    <button onClick={() => {
                        navigate(`/Eventos/${theaterplay.id}`)
                    }}>Ver evento</button>
                </article>
            ))}

                <div className="pagination">
                   {renderPageNumbers()}
                </div>
        </section>
    )

}