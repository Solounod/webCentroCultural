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
                    className={i === currentPage ? "active rounded  bg-red-300 px-2 pb-2 pt-1.5 mx-1 hover:bg-red-800 hover:text-white" : "rounded  bg-red-300 px-2 pb-2 pt-1.5  hover:bg-red-800 hover:text-white"}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <section className="mt-4 md:px-12 px-2">
            <div className="">
             <h2 className="text-4xl font-light uppercase text-red-700 ">Noticias</h2>
             <hr className="h-px my-4 bg-red-800 border-0" />
            </div>
            
            <br />
            {newss.map((news) => (
                <div className="pt-8 shadow-2xl">
                    <NewsCart news={news}/>
                </div>
               
               ))}
               <div className="pagination mt-8 mb-6 flex justify-center">
                    
                       {renderPageNumbers()}
                    
               </div>
           </section>
       );
   }