import { useEffect } from "react";
import { ListenerMilestones } from "../../components/milestones/ListenerMilestones";
import { LayoutFull } from "../../components/hocs/LayoutFull";
import { SendEmailContact } from "../../components/contact/SendEmailContact";


export function Milestones(){
     
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return(
        <>
            <LayoutFull>
                <ListenerMilestones/>
                <section className="bg-slate-950 pb-1">
                    <SendEmailContact/>
                </section>
            </LayoutFull>
        </>
    )
}