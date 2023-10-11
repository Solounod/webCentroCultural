import axios from 'axios';

export const apiEmailContact = axios.create({
    baseURL: "http://localhost:8000/api/contact/send-email/"
})

export const postEmailContact =  (data) => apiEmailContact.post("/", data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
