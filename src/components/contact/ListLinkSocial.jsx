import { useEffect, useState } from "react";
import { getLinkSocial } from "../../api/apiContact";


export function ListLinkSocial() {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        async function loadLinksSocial() {
            try {
                const linkSocialData = await getLinkSocial();
                console.log(linkSocialData);
                setLinks(linkSocialData)
            } catch (error) {
                console.error("Error al optener datos:", error);
            }
        }
        loadLinksSocial()
    }, [])

    return (
        <div className="w-full  flex justify-center">
            {links.map((link) => (
                <div className="w-8 h-8 mx-2">
                    <a href={link.url}>
                        <img className="w-full h-full" src={link.img} alt="imagen link  " />
                    </a>
                </div>
            ))}
        </div>
    )
}