import { ListLinkSocial } from "../contact/ListLinkSocial";

export function Footer(){

    return (
        <footer>
            <div className="bg-gradient-to-r from-orange-500 from-10% via-red-500 via-30% to-pink-500 to-90% md:flex md:justify-center">
                <div className="pt-20">
                    <img src="/logo_espacio.png" class="h-[16rem] mr-3" alt="Logo espacio" />
                </div>
                <section className="p-20 flex justify-center">
                    <div className="mx-10 text-white font-semibold ">
                        <h5 className="font-semibold uppercase" >Visitanos:</h5>
                        <hr />
                        <p className="">3 oriente 7 y 8 norte 1874, Talca, Chile.</p>
                    </div>
                    <div className="text-white font-semibold ">
                        <h5 className=" uppercase">Contactanos</h5> 
                        <hr />           
                        <p className="">Teléfono: 990564487</p>
                        <p className="">Correo electrónico: centroculturalelespacio@gmail.com</p>
                    </div>
                </section>
                <ListLinkSocial/>
            </div>
        </footer>
    )
}