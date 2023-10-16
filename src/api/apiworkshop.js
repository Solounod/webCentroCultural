import axios from 'axios';

const apiWorkShop = axios.create({
    baseURL: "http://localhost:8000/api/workshop/workshops/"

})

const apiCategories = axios.create({
    baseURL: "http://localhost:8000/api/workshop/categories/"

})



export const getCategories = async () => {
    try {
        const response = await apiCategories.get("");
        return response.data.category; // 
    } catch (error) {
        console.error("Error al obtener categoria:", error);
        throw error;
    }
};

export const getCategoriesDetailWorkshop = async (id, slug) => {
    try {
        const response = await apiCategories.get(`${id}/${slug}`);
        return response.data.workshop; // 
    } catch (error) {
        console.error("Error al obtener categoria:", error);
        throw error;
    }
};

export const getWorkShop = async (id) => {
    try {
        const response = await apiWorkShop.get(`${id}`);
        
        return response.data.workshop; // 
    } catch (error) {
        console.error("Error al obtener categoria:", error);
        throw error;
    }
};

