import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getImgByGallery } from "../../api/apiEvents";

export function DisplayGalleryGrid (){
    const [images, setImages] = useState([]);
    const params = useParams();

    useEffect(() => {
        async function loadDisplayGallery(){
            if(params.id && params.title_gallery){
                const dataDisplayGallery = await getImgByGallery(params.title_gallery);
                console.log(dataDisplayGallery)
                setImages(dataDisplayGallery)
            }
            
        }
        loadDisplayGallery()
    }, [])

    return (

        <section className="mt-10">
            {images.map((image) => (
                <img src={image.image_only} alt="" />
            ))}
        </section>
    )
}