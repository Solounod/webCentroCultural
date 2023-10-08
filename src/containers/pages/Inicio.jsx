import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Navbar } from "../../components/navigate/Navbar";
import { ListenedNewsApi } from "../../components/news/ListenedNewsApi";
import { News } from "./News";


export function Inicio() {

    return (
        <div>
            <Navbar/>
            <Header/>
            <ListenedNewsApi/>
            <Footer/>
        </div>
    )
}


