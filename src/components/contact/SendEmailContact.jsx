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

            setFormData({
                subject: "",
                email: "",
                message: "",
            });

        }

        handleSubmit(formData)
    }
 
    return (
        <div className="p-4 m-6  mt-20">



<div className="">
             <h2 className="text-4xl font-light uppercase text-red-700 ">Contactanos</h2>
             <hr className="h-px my-4 bg-red-800 border-0" />
            </div>

            <form  className="p-4 border-2 border-orange-600 shadow-xl rounded-md" onSubmit={e=>onSubmit(e)} action="">
                <div className=" border  border-cyan-500 m-5 rounded-md ">
                    <input type="text"
                            className="p-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                            value={subject}
                            name="subject"
                            onChange={e=>onChange(e)}
                            required
                            placeholder="Asunto" />
                </div>
                <div className="border  border-cyan-500 m-5 rounded-md">
                    <input type="email"
                            className="p-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                            value={email}
                            name="email"
                            onChange={e=>onChange(e)}
                            required
                            placeholder="Email" />
                </div>
                <div className="border border-cyan-500 m-5 rounded-md">        
                    <textarea type="textarea"
                            className="p-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                            value={message}
                            name="message"
                            onChange={e=>onChange(e)}
                            required
                            placeholder="Mensaje" />
                </div>
                <div className="p-6 flex justify-center " >      
                    <button  className="p-4 bg-red-500 rounded-xl text-white font-semibold hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )


}