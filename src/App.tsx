import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./theme/_main.scss";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/game/:id" element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
