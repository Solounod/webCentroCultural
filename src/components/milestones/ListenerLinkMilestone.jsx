import { useState ,useEffect } from "react";
import { getLinksByMilestones } from "../../api/apiMilestones";

export function ListenerLinkMilestone({ id, menuClicked }) {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        async function loadLinksTheaterPlays(){
            const dataListLinksMilestones = await getLinksByMilestones(id)
            console.log(dataListLinksMilestones)
            setLinks(dataListLinksMilestones)
        }

        loadLinksTheaterPlays(id)
    }, [])

    return(
        <>
            <ul  className={`${menuClicked ? 'absolute bg-red-600 text-white  divide-y divide-solid divide-white p-4 mr-10 flex flex-col justify-evenly after:content-[""] after:absolute after:top-[-24px] after:right-0 after:border-[12px] after:border-b-red-600 after:border-r-red-600 after:border-t-transparent after:border-l-transparent' : 'hidden'}`}>
                {links.map((link) => (   
                    <li key={link.id}><a href={link.link} target="_blank"><p>{link.title_link}</p></a></li>
                ))}
            </ul>
        </>
    )




}