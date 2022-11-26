import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CoopsListPage from "./pages/CoopsListPage";
import CoopDescriptionPage from "./pages/CoopDescriptionPage";
import AboutUsPage from "./pages/AboutUsPage";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/my-coops" element={<CoopsListPage/>}/>
          <Route path="/coop/:id" element={<CoopDescriptionPage/>}/>
          <Route path="/about" element={<AboutUsPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
