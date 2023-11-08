
import { LayoutFull } from "../../components/hocs/LayoutFull";
import { ListenerTransparency } from "../../components/tranparency/ListenerTransparency";
import { SendEmailContact } from "../../components/contact/SendEmailContact";

export function Transparency() {

    return (
        <>
            <LayoutFull>
                <ListenerTransparency/>
                <section className="bg-slate-950 pb-1">
                    <SendEmailContact/>
                </section>
            </LayoutFull>
        </>
    )
}