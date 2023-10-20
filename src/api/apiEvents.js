import axios from 'axios';

export const apiTheaterPlays = axios.create({
    baseURL: "http://localhost:8000/api/events/theaterplays/"

})

export const apiGallery = axios.create({
    baseURL: "http://localhost:8000/api/events/theaterplays/gallery/"

})

export const apiImgByGallery = axios.create({
    baseURL: "http://localhost:8000/api/events/theaterplays/img-gallery/"

})

export const apiLinksByTheaterPlays = axios.create({
    baseURL: "http://localhost:8000/api/events/theaterplays/links/"
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

export const getLinksByTheaterPlays = async () => {
    try {
        const response = await apiLinksByTheaterPlays.get(`${id}/`);
        return response.data.results;
    } catch {
        console.error("Error al obtenr el resultado: ", error);
       throw error;
    }
}



