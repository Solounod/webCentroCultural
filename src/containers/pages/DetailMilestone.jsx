import { useEffect } from "react";
import { LayoutFull } from "../../components/hocs/LayoutFull";
import { SendEmailContact } from "../../components/contact/SendEmailContact";
import { DetailComponentMilestone } from "../../components/milestones/DetailComponentMilestone";


export function DetailMilestone() {

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return (
        <>
            <LayoutFull>
                <DetailComponentMilestone />
                <section className="bg-slate-950 pb-1">
                    <SendEmailContact/>
                </section>
            </LayoutFull>
        </>
    )
} 