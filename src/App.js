import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Cowriting from "./components/Cowriting_offers/Cowriting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cowriting />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
