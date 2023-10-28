import { useEffect } from "react";
import { LayoutFull } from "../../components/hocs/LayoutFull";
import { DetailWorkshop } from "../../components/workshop/DetailWorkshop";
import { SendEmailContact } from "../../components/contact/SendEmailContact";

export function PageDetailWorkshop () {

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return (

        <>
            <LayoutFull>
                <DetailWorkshop/>
                <section className="bg-slate-950 pb-1">
                    <SendEmailContact/>
                </section>
            </LayoutFull>
        </>
    )
}