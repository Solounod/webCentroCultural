import { useEffect, useState } from "react";
import { getWorkShop, getCategories } from "../../api/apiworkshop";
import { useNavigate } from "react-router-dom";
import { ListLinkSocial } from "../contact/ListLinkSocial";


export function ListenerWorkShop() {
    const [workshops, setWorkshops] = useState([]);
    const [categories, setCategories] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        async function loadCategoriesAndWorkshops() {
            try {
                // Cargar todas las categorías
                const categoriesData = await getCategories();
                setCategories(categoriesData);

                // Para cada categoría, cargar sus talleres asociados
                const workshopsData = await Promise.all(
                    categoriesData.map(async (category) => {
                        const workshopsByCategory = await getWorkShop(category.id);
                        return { category, workshops: workshopsByCategory };
                    })
                );

                setWorkshops(workshopsData);
            } catch (error) {
                console.error("Error al obtener datos:", error);
            }
        }

        loadCategoriesAndWorkshops();
    }, []);

    return (
       
            <section className=" px-2 md:mx-20 bg-white pt-6 pb-8 mt-20">
                <div className="">
                    <h2 className="text-4xl font-light uppercase text-red-700 ">Talleres</h2>
                    <hr className="h-px my-4 bg-red-800 border-0" />
                    <p className="text-center mt-20 text-gray-800 text-md">El Centro Cultural el espacio ofrece una variada oferta cultural en formación artistica, talleres regulares y otras instancias gratuitas, para mas información puedes dirigirte al a nuestras redes sociales del centro cultural</p>
                    <div className="flex justify-center mt-20">
                    <ListLinkSocial/>
                    </div>
                </div>
                {workshops.map((categoryWorkshops) => (
                    <div key={categoryWorkshops.category.id}>
                        <div className="mt-20 bg-indigo-800 h-20  rounded-full text-center  text-white text-2xl">
                            <h5 className="p-5">{categoryWorkshops.category.category_workshop}</h5>
                        </div>
                        <div className="pt-8 md:grid md:grid-cols-4 md:gap-3">
                        {categoryWorkshops.workshops.map((workshop) => (
                            <article className="mb-8 border border-gray-300 bg-slate-100 block rounded-lg shadow-2xl md:w-76 " key={workshop.id}>
                                
                                <div className="  relative overflow-hidden bg-cover bg-no-repeat z-0  " >
                                    <div className="image-container transform scale-100 hover:scale-110 " onClick={() => {
                                            navigate(`/Talleres/${categoryWorkshops.category.id}/${workshop.slug}`)}}>
                                        
                                        <img className="w-full rounded-t-lg h-72 hover:cursor-pointer" src={workshop.image_workshop} />
                                    </div>
                                </div>
                                <div className="block relative font-sans p-3 overflow-hidden md:h-72">
                                    <h5 className="mb-2 text-lg font-medium leading-tight text-gray-800 ">{workshop.tittle}</h5>
                                    
                                    <a className="" href={workshop.facilitator_link}><p className="text-sm bg-orange-200 text-gray-800 text-center rounded-lg p-1 hover:bg-red-500 hover:text-white hover:font-semibold hover:cursor-pointer">Facilitador: {workshop.facilitator_name}</p></a> 
                                    <p className="text-gray-800 font-medium">Horarios:</p>
                                    <p className="text-sm text-gray-800 ">{workshop.schedules}</p>
                                    <p className="text-gray-800 ">Precios:</p>
                                    <p className="text-sm text-gray-800 ">{workshop.price}</p>
                                    <div className="pt-1 md:absolute bottom-4 right-8 h-8 w-30">
                                        <button className="inline-block rounded bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500" onClick={() => {
                                            navigate(`/Talleres/${categoryWorkshops.category.id}/${workshop.slug}`)}}>Ver
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                        </div>
                    </div>
                ))}
                
            </section>
        
    )
}