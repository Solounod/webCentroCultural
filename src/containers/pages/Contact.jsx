import { SendEmailContact } from "../../components/contact/SendEmailContact";
import { LayoutFull } from "../../components/hocs/LayoutFull";


export function Contact() {

    return (
        <>
            <LayoutFull>
                <SendEmailContact/>
            </LayoutFull>
        </>
    )
}