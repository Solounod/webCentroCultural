import { useEffect } from "react";
import { DisplayGalleryGrid } from "../../components/events/DisplayGalleryGrid";
import { LayoutFull } from "../../components/hocs/LayoutFull";
import { SendEmailContact } from "../../components/contact/SendEmailContact";


export function DetailGalleryGrid() {

    useEffect(() => {
        window.scrollTo(0, 0); // 
    }, []);


    return (
        <>
            <LayoutFull>
                <DisplayGalleryGrid/>
                <section className="bg-slate-950 pb-1">
                    <SendEmailContact/>
                </section>
            </LayoutFull>
        </>
    )
} 