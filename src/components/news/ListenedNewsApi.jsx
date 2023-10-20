import { useEffect, useState } from "react";
import { getNews } from "../../api/getblog";
import { NewsCart } from "./NewsCart";

export function ListenedNewsApi() {
    const [newss, setNewss] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        async function loadNews(page) {
            const newsData = await getNews(page);
            console.log(newsData);
            setNewss(newsData.results.news);
            setTotalPages(Math.ceil(newsData.count / 3)); 
        }
        loadNews(currentPage);
    }, [currentPage]);

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
        <div className="mt-4">
            {newss.map((news) => (
                <div className="pt-8 shadow-2xl">
                    <NewsCart news={news}/>
                </div>
               
               ))}
               <div className="pagination">
                   {renderPageNumbers()}
               </div>
           </div>
       );
   }