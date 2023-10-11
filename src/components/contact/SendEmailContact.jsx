import { useState } from "react";

import { postEmailContact } from "../../api/apiContact";

export function SendEmailContact() {
    const [formData, setFormData] = useState({
        subject: '',
        email: '',
        message: '',
    });

    const {
        subject,
        email,
        message,
    } = formData;

    const onChange = e => setFormData({ ...formData,[e.target.name]: e.target.value});


    const onSubmit = e => {
        e.preventDefault();

        const formData = new FormData()
        formData.append('subject', subject)
        formData.append('email', email)
        formData.append('message', message)

        const handleSubmit = async (formData) => {
            console.log(formData)
            await postEmailContact(formData)

        }

        handleSubmit(formData)
    }
 
    return (
        <div>
            <form onSubmit={e=>onSubmit(e)} action="">
                <input type="text"
                        value={subject}
                        name="subject"
                        onChange={e=>onChange(e)}
                        required
                        placeholder="Asunto" />
                <input type="email"
                        value={email}
                        name="email"
                        onChange={e=>onChange(e)}
                        required
                        placeholder="email" />
                <input type="text"
                        value={message}
                        name="message"
                        onChange={e=>onChange(e)}
                        required
                        placeholder="Mensaje" />
                <button type="submit">enviar</button>
            </form>
        </div>
    )


}