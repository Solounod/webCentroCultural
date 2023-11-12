import axios from 'axios';

export const apiTheaterPlays = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}api/events/theaterplays/`

})

export const apiGallery = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}api/events/theaterplays/gallery/`

})

export const apiImgByGallery = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}api/events/theaterplays/img-gallery/`

})

export const apiLinksByTheaterPlays = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}api/events/theaterplays/links/`
})


export const getTeatherPlays = async (p) => {
    try {
        const response = await apiTheaterPlays.get(`?p=${p}`);
        return response.data;
    } catch {
        console.error("Error al obtenr el resultado: ", error);
        throw error;
    }
}

export const getDetailTeatherPlay = async (id) => {
    try {
        const response = await apiTheaterPlays.get(`${id}`);
        return response.data;
    } catch {
        console.error("Error al obtenr el resultado: ", error);
        throw error;
    }
}


export const getGallery = async (id) => {
    try {
        const response = await apiGallery.get(`${id}/`);
        return response.data.results;
    } catch {
        console.error("Error al obtenr el resultado: ", error);
       throw error;
    }
}


export const getImgByGallery = async (title_gallery) => {
    try {
        const response = await apiImgByGallery.get(`${title_gallery}/`);
        return response.data.results;
    } catch {
        console.error("Error al obtenr el resultado: ", error);
       throw error;
    }
}

export const getImgByGalleryPages = async (title_gallery, p) => {
    try {
        const response = await apiImgByGallery.get(`${title_gallery}/?p=${p}`);
        return response.data;
    } catch {
        console.error("Error al obtenr el resultado: ", error);
       throw error;
    }
}

export const getLinksByTheaterPlays = async (id) => {
    try {
        const response = await apiLinksByTheaterPlays.get(`${id}/`);
        return response.data.results;
    } catch {
        console.error("Error al obtenr el resultado: ", error);
       throw error;
    }
}



