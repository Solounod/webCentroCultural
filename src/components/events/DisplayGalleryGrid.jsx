import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getImgByGalleryPages } from "../../api/apiEvents";

export function DisplayGalleryGrid() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [expandedImageId, setExpandedImageId] = useState(null); 
  const params = useParams();

  useEffect(() => {
    async function loadDisplayGallery(page) {
      if (params.id && params.title_gallery) {
        const dataDisplayGallery = await getImgByGalleryPages(params.title_gallery, page);
        console.log(dataDisplayGallery.results)
        setImages(dataDisplayGallery.results);
        setTotalPages(Math.ceil(dataDisplayGallery.count / 9));
      }
    }
    loadDisplayGallery(currentPage);
  }, [params.title_gallery, currentPage]);

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

  const toggleImageExpand = (imageId) => {
    if (expandedImageId === imageId) {
      // Si la imagen ya está expandida, contraerla
      setExpandedImageId(null);
    } else {
      // Si la imagen no está expandida, expandirla
      setExpandedImageId(imageId);
    }
  };

  return (
    <section className="mt-24 px-2 md:px-20 relative">
      <div className="pt-30 mb-12">
        <h5 className="mt-30 p-4 w-full bg-indigo-900 text-3xl text-start text-white">Galeria</h5>
      </div>
      <div className="grid md:grid-cols-3 md:gap-4 sm:grid-cols-2">
        {images.map((image) => (
          <div key={image.id} className="">
            <div
              onClick={() => toggleImageExpand(image.id)}
              className={`${
                expandedImageId === image.id ? "h-[300px] md:w-[1200px] md:h-[600px] md:z-10 md:absolute  md:inset-0 md:hover:cursor-pointer" : "flex w-full sm:px-1 md:w-[300px] h-[300px] image-cover transform scale-100 md:hover:scale-110 hover:cursor-pointer "
              }   `}
            >
              <img
                className={`${
                  expandedImageId === image.id ? "w-full h-full" : "w-full h-full rounded-3xl pb-2"
                }`}
                src={image.image_only}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-10">
        <div className="w-[200px] pagination mt-8 mb-6 flex justify-center px-1 overflow-x-auto max-w-full">   
          {renderPageNumbers()}     
        </div>
      </div>
    </section>
  );
}
