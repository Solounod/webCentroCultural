import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./containers/pages/Inicio";
import { ListenerWorkShop } from "./components/workshop/LIstenerWorkShop";
import { ListenerTransparency } from "./components/tranparency/ListenerTransparency";
import { ListenerTheaterPlays } from "./components/events/ListenerTheaterPlays";
import { DetailTheaterplay } from "./components/events/DetailTheaterplay";
import { SendEmailContact } from "./components/contact/SendEmailContact";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Talleres" element={<ListenerWorkShop />} />
        <Route path="/Transparencias" element={<ListenerTransparency/>}/>
        <Route path="/Eventos" element={<ListenerTheaterPlays/>}/>
        <Route path="/Eventos/:id" element={<DetailTheaterplay/>} />
        <Route path="/Contacto" element={<SendEmailContact/>} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
