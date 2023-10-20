import axios from 'axios'

const apiNews = axios.create({
    baseURL: "http://localhost:8000/api/news/"
});

/*export const getNews = () => apiNews.get("/")*/
export const getNews = async (p) => {
    try {
        const response = await apiNews.get(`/?p=${p}`);
        return response.data; // 
    } catch (error) {
        console.error("Error al obtener noticias:", error);
        throw error;
    }
};

export const getDetailNews = async (slug) => {
    try {
        const response = await apiNews.get(`${slug}/`);
        return response.data; // 
    } catch (error) {
        console.error("Error al obtener noticias:", error);
        throw error;
    }
};

