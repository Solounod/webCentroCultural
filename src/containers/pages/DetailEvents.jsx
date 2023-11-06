import { useEffect } from "react";
import { LayoutFull } from "../../components/hocs/LayoutFull";
import { DetailTheaterplay } from "../../components/events/DetailTheaterplay";


export function DetailEvents() {

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return (
        <>
            <LayoutFull>
                <DetailTheaterplay />
            </LayoutFull>
        </>
    )
} 