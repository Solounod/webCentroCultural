
import { Header } from "../../components/header/Header";
import { ListenedNewsApi } from "../../components/news/ListenedNewsApi";
import { LayoutFull } from "../../components/hocs/LayoutFull";
import { SendEmailContact } from "../../components/contact/SendEmailContact";


export function Inicio() {

    return (
        <>
            <LayoutFull>
                <Header/>
                <ListenedNewsApi/>
                <section className="bg-slate-950 pb-1">
                    <SendEmailContact/>
                </section>
            </LayoutFull>
        </>
    )
}


