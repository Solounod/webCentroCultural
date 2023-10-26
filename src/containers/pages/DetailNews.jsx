
import { useEffect } from "react";
import { LayoutFull } from "../../components/hocs/LayoutFull";
import { DetailsNewsOne } from "../../components/news/DetailsNewsOne";


export function DetailNews () {

    useEffect(() => {
        window.scrollTo(0, 0); // Hacer scroll al principio de la página
    }, []);

    return (

        <>
            <LayoutFull>
                <DetailsNewsOne/>
            </LayoutFull>
        </>
    )
}