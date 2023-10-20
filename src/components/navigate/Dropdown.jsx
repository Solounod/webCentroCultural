
import { useNavigate } from "react-router-dom";

export function Dropdown({ menuClicked }) {
  const navigate = useNavigate()

  console.log(menuClicked)
    return (

                    
          <div className={` ${menuClicked ? 'block' : 'hidden' } font-normal rounded-lg w-full text-center items-center md:hidden`}>
            <ul className="py-2 text-sm text-white " >
              <li className="block px-4 py-2 text-base hover:text-lg hover:font-semibold hover:cursor-pointer" onClick={() => {navigate(`/Inicio`)}}>
                Inicio
              </li>
              <li className="block px-4 py-2 text-base hover:text-lg hover:font-semibold hover:cursor-pointer" onClick={() => {navigate(`/Talleres`)}}>
                Talleres
              </li>
              <li className="block px-4 py-2 text-base hover:text-lg hover:font-semibold hover:cursor-pointer"  onClick={() => {navigate(`/Eventos`)}}>
                Eventos
              </li>
              <li className="block px-4 py-2 text-base hover:text-lg hover:font-semibold hover:cursor-pointer" onClick={() => {navigate(`/Transparencias`)}}>
                Transparencia
              </li>
          </ul>
          
        </div>
               
    )
}