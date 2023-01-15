import React from 'react'

const Header = () => {
    return (
        <div className="topbar bg-orange-blur">
            <a className="topbar__back" href="#">
                <img className="topbar__back--img" src="/src/assets/svg/header_icon_arrow.svg" alt="back" />
            </a>
            <div className="topbar__switch-btn">
                <img
                    className="topbar__switch-btn--img"
                    src="/src/assets/svg/header_switch_coins.svg"
                    alt="coins" />
                <img
                    className="topbar__switch-btn--img d-none"
                    src="/src/assets/svg/header_switch_diamonds.svg"
                    alt="diamond" />
            </div>
            <div className="topbar__cash-mode">
                <div className="topbar__cash-mode--box">
                    <img className="topbar__cash-mode--img" src="/src/assets/svg/icon_coin.svg" alt="coin" />
                    <span className="topbar__cash-mode--value">1,5</span>
                </div>
                <div className="topbar__cash-mode--box d-none">
                    <img className="topbar__cash-mode--img" src="/src/assets/svg/header_icon_powCoin.svg" alt="powcoin" />
                    <span className="topbar__cash-mode--value">1,5</span>
                </div>
            </div>
            <div className="topbar__pow-coin">
                <img className="topbar__pow-coin--img" src="/src/assets/svg/header_icon_powCoin.svg" alt="" />
                <span className="topbar__pow-coin--value">100</span>
            </div>
            <div className="topbar__user">
                <img className="topbar__user--img" src="/src/assets/png/player-1.png" alt="" />
            </div>
        </div>
    )
}

export default Header