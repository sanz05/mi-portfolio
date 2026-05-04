import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home.jsx';
import BlurText from "./Components/BlurText.jsx";

import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}