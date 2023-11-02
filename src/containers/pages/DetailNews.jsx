
import { useEffect } from "react";
import { LayoutFull } from "../../components/hocs/LayoutFull";
import { DetailsNewsOne } from "../../components/news/DetailsNewsOne";


export function DetailNews () {

    useEffect(() => {
        window.scrollTo(0, 0); // 
    }, []);

    return (

        <>
            <LayoutFull>
                <DetailsNewsOne/>
            </LayoutFull>
        </>
    )
}