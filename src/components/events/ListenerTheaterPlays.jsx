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

        <div className="mt-20">
            <div>
                <h3 className="p-8">Eventos</h3>
            </div>
            {theaterplays.map((theaterplay) => (
                <div key={theaterplay.id}>
                    <h3>{theaterplay.title}</h3>
                    <div className="">
                        <img className=" " src={theaterplay.image} alt="" />
                    </div>
                    <p>{theaterplay.description}</p>
                    <button onClick={() => {
                        navigate(`/Eventos/${theaterplay.id}`)
                    }}>Ver evento</button>
                </div>
            ))}

                <div className="pagination">
                   {renderPageNumbers()}
                </div>
        </div>
    )

}