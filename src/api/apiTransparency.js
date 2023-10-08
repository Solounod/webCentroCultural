import axios from 'axios';

const apiTransparency = axios.create({
    baseURL: "http://localhost:8000/api/transparencias-proyectos/transparencia/"

})


export const getTransparency = async () => {
    try {
        const response = await apiTransparency.get("/");
        return response.data.results; // 
    } catch (error) {
        console.error("Error al obtener categoria:", error);
        throw error;
    }
};