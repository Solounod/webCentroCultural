import { useEffect, useState } from "react";
import { getGallery, getImgByGallery } from "../../api/apiEvents";

export function ListenerGalleryTheaterPlay({ id }) {
  const [galleries, setGalleries] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [autoSlide, setAutoSlide] = useState(true);
  const autoSlideInterval = 3000;

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
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        // Aquí puedes llamar a la función nextImage para cambiar automáticamente las imágenes
        // Asegúrate de hacerlo para la galería actual (puedes usar el índice actual)
        nextImage(0); // Cambia automáticamente la primera galería
        nextImage(1);
      }, autoSlideInterval);

      return () => clearInterval(slideInterval);
    }
  }, [autoSlide]);

  return (
    <div>
      {galleryImages.map((galleryData, galleryIndex) => (
        <div key={galleryData.gallery.id}>
          <h3>Galeria: {galleryData.gallery.title_gallery}</h3>
          <div className="flex overflow-x-scroll relative" style={{ width: "50%" }}>
            <div className="flex space-x-4 w-[1400px]">
              {galleryData.images.map((img, imageIndex) => (
                <div
                  className="transition-transform ease-out duration-500"
                  key={imageIndex}
                  style={{
                    display: imageIndex === galleryData.currentImageIndex ? 'block' : 'none',
                    transform: `translateX(-${galleryIndex}%)`,
                  }}
                >
                  <img className="w-[600px] h-[500px]" src={img.image_only} alt="" />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={() => prevImage(galleryIndex)}
                className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
              >
                Izquierda
              </button>
              <button
                onClick={() => nextImage(galleryIndex)}
                className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
              >
                Derecha
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

