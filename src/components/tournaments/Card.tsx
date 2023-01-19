import React from 'react'

const Card = ({ data }: { data: any }) => {

    let date_future = new Date(data.end_date);
    let date_now = new Date();

    let seconds = Math.floor((date_future.getTime() - (date_now.getTime())) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

    return (
        <div className="carrousel__game-box">
            <img className="carrousel__game-box--img" src={`/src/assets/png/home_torneo/${data.pic}`} alt="" />
            <div className="carrousel__info-box">
                <div className="carrousel__info-box--left">
                    <div className="carrousel__info-box--price">
                        <img className="carrousel__info-box--price-img" src="/src/assets/svg/icon_diamond.svg" alt="diamond" />
                        <span className="carrousel__info-box--price-value">{data.prize}</span>
                        {/* <span className="carrousel__info-box--price-txt">bounty</span> */}
                    </div>
                    <div className="carrousel__info-box--players">
                        <div className="carrousel__info-box--players-img-box">
                            <img src="/src/assets/png/player-2.png" alt="player" />
                            <img src="/src/assets/png/player-1.png" alt="player" />
                        </div>
                        <span className="carrousel__info-box--players-ammount">{data.players}</span>
                    </div>
                </div>
                <div className="carrousel__info-box--right">
                    <div className="carrousel__info-box--time">
                        <span>{days < 10 ? '0' + days : days}</span>:
                        <span>{hours < 10 ? '0' + hours : hours}</span>:
                        <span>{minutes < 10 ? '0' + minutes : minutes}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card