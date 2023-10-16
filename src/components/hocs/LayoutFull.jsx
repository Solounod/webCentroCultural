import { Footer } from "../footer/Footer";
import { Navbar } from "../navigate/Navbar"

export function LayoutFull({children}) {

    return (
        <>
            <Navbar/>
                {children}
            <Footer/>
        </>
    )
} 