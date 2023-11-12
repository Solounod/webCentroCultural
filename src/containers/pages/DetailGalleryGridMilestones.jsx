import { useEffect } from "react";
import { DisplayGalleryGridMilestone } from "../../components/milestones/DisplayGalleryGridMilestone";
import { LayoutFull } from "../../components/hocs/LayoutFull";
import { SendEmailContact } from "../../components/contact/SendEmailContact";


export function DetailGalleryGridMilestones() {

    useEffect(() => {
        window.scrollTo(0, 0); // 
    }, []);


    return (
        <>
            <LayoutFull>
                <DisplayGalleryGridMilestone/>
                <section className="bg-slate-950 pb-1">
                    <SendEmailContact/>
                </section>
            </LayoutFull>
        </>
    )
} 