import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn } from '../pages/Auth/SignIn';
import { SignUp } from '../pages/Auth/SignUp';
import { Veterinaria } from '../pages/landing/Veterinaria';
import { Citas } from '../pages/core/Citas';
import { Mascotas } from '../pages/core/Mascotas';

export const Rutas = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Veterinaria />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/citas" element={<Citas />} />
            <Route path="/mascotas" element={<Mascotas />} />
        </Routes>
    </Router>
  )
}
