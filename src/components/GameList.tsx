import React from 'react'

const GameList = () => {
    return (
        <>
            <h3 className="heading heading__3">all games</h3>
            <div className="all-games">
                <div className="all-games__game">
                    <a href="#" className="all-games__game--box">
                        <img src="/src/assets/png/home_games/fruitfinder.png" alt="" />
                    </a>
                    <a href="#" className="all-games__game--title">
                        fruit finder
                    </a>
                </div>
                <div className="all-games__game">
                    <a href="#" className="all-games__game--box">
                        <img src="/src/assets/png/home_games/21blackjack.png" alt="" />
                    </a>
                    <a href="#" className="all-games__game--title">
                        21 blackjack
                    </a>
                </div>
                <div className="all-games__game">
                    <a href="#" className="all-games__game--box">
                        <img src="/src/assets/png/home_games/trickyblast.png" alt="" />
                    </a>
                    <a href="#" className="all-games__game--title">
                        tricky bricks
                    </a>
                </div>
                <div className="all-games__game">
                    <a href="#" className="all-games__game--box">
                        <img src="/src/assets/png/home_games/gemblast.png" alt="" />
                    </a>
                    <a href="#" className="all-games__game--title">
                        game blasst
                    </a>
                </div>
            </div>
        </>
    )
}

export default GameList