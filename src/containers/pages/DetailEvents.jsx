import { useEffect } from "react";
import { LayoutFull } from "../../components/hocs/LayoutFull";
import { DetailTheaterplay } from "../../components/events/DetailTheaterplay";
import { SendEmailContact } from "../../components/contact/SendEmailContact";

export function DetailEvents() {

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return (
        <>
            <LayoutFull>
                <DetailTheaterplay />
                <section className="bg-slate-950 pb-1">
                    <SendEmailContact/>
                </section>
            </LayoutFull>
        </>
    )
} 