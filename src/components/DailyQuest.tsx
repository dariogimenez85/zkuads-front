import React from 'react'

const DailyQuest = () => {
    return (
        <div className="daily-quest">
            <div className="daily-quest__top-box">
                <div className="daily-quest__top-box--bonus">
                    <img src="/src/assets/svg/icon_diamond.svg" alt="diamond" />
                    <span>10</span>
                </div>
                <div className="daily-quest__top-box--title">
                    <h3 className="heading heading__3">daily quest</h3>
                </div>
                <div className="daily-quest__top-box--time">
                    <span>00</span>:
                    <span>15</span>:
                    <span>40</span>
                </div>
            </div>
            <div className="daily-quest__bottom-box">
                <div className="daily-quest__bottom-box--tournament bg-tournament">
                    <div className="daily-quest__bottom-box--tournament-text">
                        play a <br />
                        tournament
                    </div>
                    <div className="daily-quest__bottom-box--tournament-bar">
                        <span>0/1</span>
                        <span></span>
                    </div>
                </div>
                <div className="daily-quest__bottom-box--tournament bg-tournament">
                    <div className="daily-quest__bottom-box--tournament-text">win 3 <br />tournament</div>
                    <div className="daily-quest__bottom-box--tournament-bar">
                        <span>3/3</span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyQuest