import { useState } from "react"
import { GameModeTypes } from "../context/GameModeContext"

export const useGameMode = () => {

    const [gameMode, setGameMode] = useState(GameModeTypes.FUN);
    return { gameMode, setGameMode };
}
