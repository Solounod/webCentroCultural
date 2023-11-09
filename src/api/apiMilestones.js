import axios from 'axios';

export const apiMilestones = axios.create({
    baseURL: "http://localhost:8000/api/hitos/milestones/"

})

export const apiGalleryMilestones = axios.create({
    baseURL: "http://localhost:8000/api/hitos/milestones/gallery/"

})

export const apiImgByGalleryMilestones = axios.create({
    baseURL: "http://localhost:8000/api/hitos/milestones/img-gallery/"

})

export const apiLinksByMilestones = axios.create({
    baseURL: "http://localhost:8000/api/hitos/milestones/links/"
})


export const getMilestones = async (p) => {
    try {
        const response = await apiMilestones.get(`?p=${p}`);
        return response.data;
    } catch {
        console.error("Error al obtenr el resultado: ", error);
        throw error;
    }
}

export const getDetailMilestones = async (id) => {
    try {
        const response = await apiMilestones.get(`${id}`);
        return response.data;
    } catch {
        console.error("Error al obtenr el resultado: ", error);
        throw error;
    }
}


export const getGalleryMilestone = async (id) => {
    try {
        const response = await apiGalleryMilestones.get(`${id}/`);
        return response.data.results;
    } catch {
        console.error("Error al obtenr el resultado: ", error);
       throw error;
    }
}


export const getImgByGalleryMilestone = async (title_gallery) => {
    try {
        const response = await apiImgByGalleryMilestones.get(`${title_gallery}/`);
        return response.data.results;
    } catch {
        console.error("Error al obtenr el resultado: ", error);
       throw error;
    }
}

export const getImgByGalleryPagesMilestone = async (title_gallery, p) => {
    try {
        const response = await apiImgByGalleryMilestones.get(`${title_gallery}/?p=${p}`);
        return response.data;
    } catch {
        console.error("Error al obtenr el resultado: ", error);
       throw error;
    }
}

export const getLinksByMilestones = async (id) => {
    try {
        const response = await apiLinksByMilestones.get(`${id}/`);
        return response.data.results;
    } catch {
        console.error("Error al obtenr el resultado: ", error);
       throw error;
    }
}

