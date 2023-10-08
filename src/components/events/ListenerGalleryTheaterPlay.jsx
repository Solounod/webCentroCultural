import { useEffect, useState } from "react";
import { getGallery, getImgByGallery } from "../../api/apiEvents";

export function ListenerGalleryTheaterPlay({ id }) {
    const [galleries, setGallerries ] = useState([])
    const [images, setImages] = useState([])

    useEffect (() => {
        async function loadGalleryAndImages() {
            try {
                console.log(id)
                const galleryData = await getGallery(id);
                
                console.log(galleryData);
                setGallerries(galleryData);

                const imagesData = await Promise.all(
                    
                    galleryData.map(async (gallery) => {
                        const imagesByGallery = await getImgByGallery(gallery.title_gallery);
                        return { gallery, images: imagesByGallery};
                    })
                );
                console.log(imagesData)
                setImages(imagesData);
            }catch (error){
                console.error("Error al obtener datos:", error)
            }
        }
        loadGalleryAndImages()
    }, [])

    return (
        <div>
            {images.map((galleryimg) => (
                <div key={galleryimg.gallery.id}>
                    <h3>Galeria: {galleryimg.gallery.title_gallery}</h3>
                    {galleryimg.images.map((img) => (
                        <div key={img.id}>
                            <img src={img.image_only} alt="" />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )

}