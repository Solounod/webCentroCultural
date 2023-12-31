import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./containers/pages/Inicio";
import { Workshop } from "./containers/pages/Workshop";
import { Events } from "./containers/pages/Events";
import { Transparency } from "./containers/pages/Transparency";
import { Contact } from "./containers/pages/Contact";
import { PageDetailWorkshop } from "./containers/pages/PageDetailWorkshop";
import { DetailNews } from "./containers/pages/DetailNews";
import { DetailEvents } from "./containers/pages/DetailEvents";
import { DetailGalleryGrid } from "./containers/pages/DetailGalleryGrid";
import { Toaster } from "react-hot-toast";
import { Milestones } from "./containers/pages/Milestones";
import { DetailMilestone } from "./containers/pages/DetailMilestone";
import { DetailGalleryGridMilestones } from "./containers/pages/DetailGalleryGridMilestones";


function App() {

  return (
    <main className="bg-white"> 
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Inicio />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Noticia/:slug" element={<DetailNews />} />
        <Route path="/Talleres" element={<Workshop />} />
        <Route path="/Talleres/:id/:slug" element={<PageDetailWorkshop />} />
        <Route path="/Transparencias" element={<Transparency/>}/>
        <Route path="/Eventos" element={<Events/>}/>
        <Route path="/Eventos/:id" element={<DetailEvents/>} />
        <Route path="/Eventos/:id/:id/:title_gallery" element={<DetailGalleryGrid/>} />
        <Route path="/Hitos" element={<Milestones/>}/>
        <Route path="/Hitos/:id" element={<DetailMilestone/>} />
        <Route path="/Hitos/:id/:id/:title_gallery" element={<DetailGalleryGridMilestones/>} />
        <Route path="/Contacto" element={<Contact/>} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
    </main>
  )

}

export default App
