// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sefix from "./pages/Sefix";
import Canvas from "./pages/Canvas"
import Monitor from "./pages/Monitor"
import Cursos from "./pages/Cursos"
import Consultoria from "./pages/Consultoria"
import ElBaulDeFouche from "./pages/ElBaulDeFouche"
import Recursos from "./pages/Recursos"
import Contacto from "./pages/Contacto"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sefix"
          element={     
              <Sefix />     
          }
        />
        <Route
          path="/canvas"
          element={
              <Canvas />            
          } 
        />
        <Route
          path="/monitor"
          element={
              <Monitor />            
          } 
        />
        <Route
          path="/cursos"
          element={
              <Cursos />            
          } 
        />
        <Route
          path="/consultoria"
          element={
              <Consultoria />            
          } 
        />
        <Route
          path="/elbauldefouche"
          element={
              <ElBaulDeFouche />            
          } 
        />
        <Route
          path="/recursos"
          element={
              <Recursos />            
          } 
        />
        <Route
          path="/contacto"
          element={
              <Contacto />            
          } 
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;