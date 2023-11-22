
export function Header(){

    return (
        <header className="max-w-full px-2">
            <div className="max-w-full h-[300px] sm:h-[400px] md:h-1/4 scale-up-center">
                <img src="/static/Facebook Portada.png" alt="imagen el espacio" className="w-full h-full"/>
            </div>
            <div className="text-center pl-16 pr-16 mb-12 ">
                <div className="text-[40px] md:text-[50px] font-extrabold mt-6 tracking-in-expand-fwd">
                    <spam className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500 ">Centro Cultural el Espacio</spam>
                </div>
                <br />
                <p className="text-gray-800">El Centro Cultural El Espacio trae consigo una trayectoria de 8 años gestionando la formación inicial e intermedia de personas afines a disciplinas artísticas y culturales. 
                Este proyecto nace en la ciudad de Talca, región del Maule, Chile, durante el año 2014, siendo fundada por un grupo de jóvenes artistas principalmente de áreas escénicas con la necesidad de una dependencia donde poder practicar su disciplina de forma segura y accesible.
                 Hoy en dia disponemos de una cartelera constante en espectaculos, talleres, seminarios y servicios artisticos para la comunidad. </p>
            </div>
        </header>
    )
}