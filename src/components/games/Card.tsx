import React from 'react'

const Card = ({ data }: { data: any }) => {
    return (
        <button className="all-games__game">
            <div className="all-games__game--box">
                <img src={`/src/assets/png/home_games/${data.thumbnail}`} alt="" />
            </div>
            <div className="all-games__game--title">
                {data.name}
            </div>
        </button>
    )
}

export default Card