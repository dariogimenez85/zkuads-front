import React from 'react'
import { useNavigate } from 'react-router-dom';

const GameCard = ({ data }: { data: any }) => {

    const nav = useNavigate();
    const navigateToGame = () => nav('/game/' + data.id);
    return (
        <button className="all-games__game" onClick={navigateToGame}>
            <div className="all-games__game--box">
                <img src={`/src/assets/png/home_games/${data.thumbnail}`} alt="" />
            </div>
            <div className="all-games__game--title">
                {data.name}
            </div>
        </button>
    )
}

export default GameCard