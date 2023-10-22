import { useEffect, useState } from "react";
import { getWorkShop, getCategories } from "../../api/apiworkshop";
import { useNavigate } from "react-router-dom";
import { LayoutFull } from "../hocs/LayoutFull";


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

        
                <div className="pl-16 pr-16 bg-white pt-6 pb-8 mt-20">
                    <div className="">
             <h2 className="text-4xl font-light uppercase text-red-700 ">Talleres</h2>
             <hr className="h-px my-4 bg-red-800 border-0" />
            </div>

                    {workshops.map((categoryWorkshops) => (
                        <div key={categoryWorkshops.category.id}>
                            <h3>Categoría: {categoryWorkshops.category.category_workshop}</h3>
                            {categoryWorkshops.workshops.map((workshop) => (
                                <div className="pt-8 shadow-2xl" key={workshop.id}>
                                    <p>{workshop.id}</p>
                                    <p>{workshop.tittle}</p>
                                    <p>{workshop.image_workshop}</p>
                                    <p>{workshop.slug}</p>
                                    <p>{workshop.facilitator_name}</p>
                                    <p>{workshop.facilitator_link}</p>
                                    <p>{workshop.description}</p>
                                    <p>{workshop.schedules}</p>
                                    <p>{workshop.price}</p>
                                    <button onClick={() => {
                                        navigate(`/Talleres/${categoryWorkshops.category.id}/${workshop.slug}`)
                                    }}>Ver evento
                                    </button>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
        
    )
}