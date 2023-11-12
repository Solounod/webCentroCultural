import { ListLinkSocial } from "../contact/ListLinkSocial";

export function Footer(){

    return (
        <footer>
            <div className="bg-gradient-to-r from-orange-500 from-10% via-red-500 via-30% to-pink-500 to-90% md:grid md:grid-cols-3">
                <div className="pt-10 px-10 flex justify-center">
                    <img src="/logo_espacio.png" class="h-[16rem] " alt="Logo espacio" />
                </div>
                <section className="p-20 sm:p-10 md:pr-10 md:pt-20 block md:flex md:justify-between">
                    <div className=" md:mx-10 text-white  ">
                        <h5 className="font-semibold uppercase text-sm" >Visitanos:</h5>
                        <hr />
                        <p className="pt-2 text-sm">3 oriente 7 y 8 norte 1874, Talca, Chile.</p>
                    </div>
                    <div className="text-white  mt-4 md:mt-0">
                        <h5 className="font-semibold uppercase text-sm">Contáctanos</h5> 
                        <hr />           
                        <p className="pt-2 text-sm">Teléfono: +56 9 90564487</p>
                        <p className="text-sm">Correo electrónico: centroculturalelespacio@gmail.com</p>
                    </div>
                </section>
                <div className="mt-16 pb-10 px-10">
                    <div className="flex justify-end ">
                        <ListLinkSocial/>
                    </div>
                </div>
            </div>
        </footer>
    )
}