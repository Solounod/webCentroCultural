import axios from 'axios';

export const apiEmailContact = axios.create({
    baseURL: "http://localhost:8000/api/contact/send-email/"
})


export const apiLinkSocial = axios.create({
    baseURL: "http://localhost:8000/api/contact/link-social/"
}) 

export const postEmailContact =  (data) => apiEmailContact.post("/", data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });



export const getLinkSocial =  async () => {
    try {
        const response = await apiLinkSocial.get("/");
        return response.data.results;
    } catch {
        console.error("Error al obtenr el resultado: ", error);
        throw error;
    }
}