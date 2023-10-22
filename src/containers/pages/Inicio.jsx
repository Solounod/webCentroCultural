
import { Header } from "../../components/header/Header";
import { ListenedNewsApi } from "../../components/news/ListenedNewsApi";
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


