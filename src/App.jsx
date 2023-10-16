import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./containers/pages/Inicio";
import { DetailTheaterplay } from "./components/events/DetailTheaterplay";
import { Workshop } from "./containers/pages/Workshop";
import { Events } from "./containers/pages/Events";
import { Transparency } from "./containers/pages/Transparency";
import { Contact } from "./containers/pages/Contact";
import { PageDetailWorkshop } from "./containers/pages/PageDetailWorkshop";
import { DetailNews } from "./containers/pages/DetailNews";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Noticia/:slug" element={<DetailNews />} />
        <Route path="/Talleres" element={<Workshop />} />
        <Route path="/Talleres/:id/:slug" element={<PageDetailWorkshop />} />
        <Route path="/Transparencias" element={<Transparency/>}/>
        <Route path="/Eventos" element={<Events/>}/>
        <Route path="/Eventos/:id" element={<DetailTheaterplay/>} />
        <Route path="/Contacto" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
