import React, { createContext, useContext } from 'react'

export enum GameModeTypes {
    REAL,
    FUN
}

export const GameContext = createContext({ gameMode: GameModeTypes.FUN, setGameMode: (value:GameModeTypes) => value });

export const GameModeContext = ({ children, value }: { children: any, value: any }) => {

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    )
}