import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GameModeContext, GameModeTypes } from "./context/GameModeContext";
import { useGameMode } from "./hooks/useGameMode";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./theme/_main.scss";

function App() {

  const {gameMode, setGameMode} = useGameMode();

  return (
    <BrowserRouter>
      <GameModeContext value={{ gameMode, setGameMode }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/game/:id" element={<Game />} />
        </Routes>
      </GameModeContext>
    </BrowserRouter>
  )
}

export default App
