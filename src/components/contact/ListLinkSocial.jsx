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
            } catch (error){
                console.error("Error al optener datos:", error);
            }
        }
        loadLinksSocial()
    }, [])

    return (
        <div>
            {links.map((link) => (
                <div>
                    <a href={link.url}>
                    <img src={link.img} alt="imagen link" />
                    </a>
                </div>
            ))}
        </div>
    )
}