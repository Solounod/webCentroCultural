import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Navbar } from "../../components/navigate/Navbar";
import { ListenedNewsApi } from "../../components/news/ListenedNewsApi";
import { News } from "./News";
import { LayoutFull } from "../../components/hocs/LayoutFull";


export function Inicio() {

    return (
        <>
            <LayoutFull>
                <Header/>
                <ListenedNewsApi/>
            </LayoutFull>
        </>
    )
}


