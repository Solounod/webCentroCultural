import { useEffect } from "react";
import { ListenerTheaterPlays } from "../../components/events/ListenerTheaterPlays";
import { LayoutFull } from "../../components/hocs/LayoutFull";
import { SendEmailContact } from "../../components/contact/SendEmailContact";


export function Events(){
     
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return(
        <>
            <LayoutFull>
                <ListenerTheaterPlays/>
                <section className="bg-slate-950 pb-1">
                    <SendEmailContact/>
                </section>
            </LayoutFull>
        </>
    )
}