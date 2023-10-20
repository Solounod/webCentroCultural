import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Dropdown } from "./Dropdown";

export function Navbar() {

  const [menuClicked, setMenuClicked] = useState(false);
  const [isNavFixed, setIsNavFixed] = useState(false);

  const navigate = useNavigate()

  const handleClick = () => {

    setMenuClicked((prevState) => !prevState)
  }

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > prevScrollY) {
      setIsNavFixed(false); // Desaparece al hacer scroll hacia abajo
    } else {
      setIsNavFixed(true); // Aparece al hacer scroll hacia arriba
    }
    prevScrollY = currentScrollY;
  };
  
  let prevScrollY = 0; // Agregar esta variable para rastrear el scroll previo
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  




  return (
    <nav className={` border-gray-200 ${isNavFixed ? 'fixed  top-0 left-0 w-full px-2' : 'relative'} bg-orange-500`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="#" class="flex items-center">
          <img src="/logo_espacio.png" class="h-16 mr-3" alt="Logo espacio" />

        </a>
        <button onClick={handleClick} data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-200 dark:text-gray-400 dark:hover:bg-red-700 dark:focus:ring-red-600" aria-controls="navbar-dropdown" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" >
          <ul className="flex flex-col font-semibold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-orange-500 bg-orange-500">
            <li onClick={() => {navigate(`/Inicio`)}}>
              <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Inicio</a>
            </li>

            <li onClick={() => {navigate(`/Talleres`)}}>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Talleres</a>
            </li>
            <li onClick={() => {navigate(`/Eventos`)}}>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Eventos</a>
            </li>
            <li onClick={() => {navigate(`/Transparencias`)}}>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Transparencia</a>
            </li>
          </ul>
        </div>

      </div>

      <Dropdown menuClicked={menuClicked} />

    </nav>
  )
}


