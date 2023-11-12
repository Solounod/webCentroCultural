import axios from 'axios';

const apiTransparency = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}api/transparencias-proyectos/transparencia/`

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