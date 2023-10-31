import { useState ,useEffect } from "react";
import { getLinksByTheaterPlays } from "../../api/apiEvents";

export function DetailLinksTheaterPlays({ id, menuClicked }) {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        async function loadLinksTheaterPlays(){
            const dataDetailsLinksTheaterPLays = await getLinksByTheaterPlays(id)
            console.log(dataDetailsLinksTheaterPLays)
            setLinks(dataDetailsLinksTheaterPLays)
        }

        loadLinksTheaterPlays(id)
    }, [])

    return(
        <>
            <ul  className={`${menuClicked ? 'absolute bg-red-600 text-white  divide-y divide-solid divide-white p-4 mr-10 flex flex-col justify-evenly after:content-[""] after:absolute after:top-[-24px] after:right-0 after:border-[12px] after:border-b-red-600 after:border-r-red-600 after:border-t-transparent after:border-l-transparent' : 'hidden'}`}>
                {links.map((link) => (   
                    <li><a href={link.link}><p>{link.title_link}</p></a></li>
                ))}
            </ul>
        </>
    )




}