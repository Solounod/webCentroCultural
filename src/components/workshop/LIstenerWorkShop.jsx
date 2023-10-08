import { useEffect, useState } from "react";
import { getWorkShop, getCategories } from "../../api/apiworkshop";


export function ListenerWorkShop() {
    const [workshops, setWorkshops] = useState([]);
    const [categories, setCategories] = useState([])

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

        <div className="pl-16 pr-16 bg-white pt-6 pb-8">
        <h2 className="text-3xl font-semibold">Talleres</h2>
        <hr className="pt-2"/>
        
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
                    </div>
                ))}
            </div>
        ))}
    </div>  
    )
}