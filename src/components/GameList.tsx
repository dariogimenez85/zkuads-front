import React from 'react'
import useGetGames from '../hooks/useGetGamesData'
import GameCard from './games/GameCard';

const GameList = () => {

    const gameData = useGetGames();
    const gameList = gameData.games.map((data) => {
        return <GameCard key={data.name} data={data} />;
    });

    return (
        <>
            <h3 className="heading heading__3">all games</h3>
            <div className="all-games">
                {gameList}
            </div>
        </>
    )
}

export default GameList