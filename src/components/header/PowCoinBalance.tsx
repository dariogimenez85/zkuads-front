import React from 'react'

const PowCoinBalance = ({ balance }: { balance: number }) => {
    return (
        <div className="topbar__pow-coin">
            <img className="topbar__pow-coin--img" src="/src/assets/svg/header_icon_powCoin.svg" alt="" />
            <span className="topbar__pow-coin--value">{balance}</span>
        </div>
    )
}

export default PowCoinBalance