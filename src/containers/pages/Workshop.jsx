import { LayoutFull } from "../../components/hocs/LayoutFull"
import { ListenerWorkShop } from "../../components/workshop/LIstenerWorkShop"
import { SendEmailContact } from "../../components/contact/SendEmailContact"

export function Workshop() {

    return(
        <>
            <LayoutFull>
                <ListenerWorkShop />
                <section className="bg-slate-950 pb-1">
                    <SendEmailContact/>
                </section>
            </LayoutFull>
        </>
    )
}