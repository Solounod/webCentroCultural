
import { useEffect } from "react";
import { LayoutFull } from "../../components/hocs/LayoutFull";
import { DetailsNewsOne } from "../../components/news/DetailsNewsOne";
import { SendEmailContact } from "../../components/contact/SendEmailContact";



export function DetailNews () {

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return (

        <>
            <LayoutFull>
                <DetailsNewsOne/>
                <section className="bg-slate-950 pb-1">
                    <SendEmailContact/>
                </section>
            </LayoutFull>
        </>
    )
}