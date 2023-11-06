import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getGallery, getImgByGallery } from "../../api/apiEvents";

export function ListenerGalleryTheaterPlay({ id }) {
  const [galleries, setGalleries] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [autoSlide, setAutoSlide] = useState(true);
  const autoSlideInterval = 3000;

  const navigate = useNavigate();

  

  useEffect(() => {
    async function loadGalleryAndImages() {
      try {
        const galleryData = await getGallery(id);
        setGalleries(galleryData);

        const imagesData = await Promise.all(
          galleryData.map(async (gallery) => {
            const imagesByGallery = await getImgByGallery(gallery.title_gallery);
            return { gallery, images: imagesByGallery, currentImageIndex: 0 };
          })
        );
        setGalleryImages(imagesData);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }
    loadGalleryAndImages();
  }, [id]);

  const nextImage = (galleryIndex) => {
    setGalleryImages((prevImages) => {
      const updatedImages = [...prevImages];
      const currentGallery = updatedImages[galleryIndex];
      const nextImageIndex = currentGallery.currentImageIndex + 1;
      if (nextImageIndex < currentGallery.images.length) {
        currentGallery.currentImageIndex = nextImageIndex;
      } else {
        // Si estamos en la última imagen, volver al principio
        currentGallery.currentImageIndex = 0;
      }
      return updatedImages;
    });
  };

  const prevImage = (galleryIndex) => {
    setGalleryImages((prevImages) => {
      const updatedImages = [...prevImages];
      const currentGallery = updatedImages[galleryIndex];
      const prevImageIndex = currentGallery.currentImageIndex - 1;
      if (prevImageIndex >= 0) {
        currentGallery.currentImageIndex = prevImageIndex;
      } else {
        // Si estamos en la primera imagen, ir al final
        currentGallery.currentImageIndex = currentGallery.images.length - 1;
      }
      return updatedImages;
    });
  };


  useEffect(() => {
    if (autoSlide && galleryImages.length > 0) {
      const slideInterval = setInterval(() => {
        console.log(galleryImages.length)
               
          galleryImages.map((i, n) => (nextImage(n)))
          
      }, autoSlideInterval);

      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, galleryImages]);

  return (
    <div>
      {galleryImages.map((galleryData, galleryIndex) => (
        <div>
          <div className="flex justify-center p-4 bg-indigo-500 rounded-2xl mb-8 mt-8">
            <h5 className="text-white font-semibold text-[24px]">{galleryData.gallery.title_gallery}</h5>
          </div>
        <div className="flex justify-center" key={galleryData.gallery.id}>
          
          <div className="flex overflow-x-scroll relative w-[800px]" >
            <div className="flex  w-full">
              {galleryData.images.map((img, imageIndex) => (
                <div
                  className=" transition-transform ease-out duration-3000"
                  key={imageIndex}
                  style={{
                    display: imageIndex === galleryData.currentImageIndex ? 'block' : 'none'
                  }}
                >
                  <img className="w-[800px] h-[500px] rounded-3xl" src={img.image_only} alt="" />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={() => prevImage(galleryIndex)}
                className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>

              </button>
              <button
                onClick={() => nextImage(galleryIndex)}
                className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>

              </button>
            </div>
            <div className="absolute bottom-4 w-[800px] flex md:justify-center sm:justify-center">
              <button className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white" 
              onClick={() => {navigate(`/Eventos/${id}/${galleryData.gallery.id}/${galleryData.gallery.title_gallery}`)}}>Galeria completa</button>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}

