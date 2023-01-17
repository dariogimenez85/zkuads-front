import React, { useEffect, useState } from 'react'

const SelectedCoinBalance = ({ hardCurrency, balance }: { hardCurrency: boolean, balance: any }) => {

    const [balanceValue, setBalanceValue] = useState(0);
    const [imgType, setImgType] = useState('');

    useEffect(() => {
        setBalanceValue(hardCurrency ? balance.z_coin : balance.diamond);
        setImgType(hardCurrency ? '/src/assets/svg/icon_coin.svg' : '/src/assets/svg/icon_diamond.svg');
    }, [hardCurrency]);

    return (
        <div className="topbar__cash-mode">
            <div className="topbar__cash-mode--box">
                <img className="topbar__cash-mode--img" src={imgType} alt="coin" />
                <span className="topbar__cash-mode--value">{balanceValue}</span>
            </div>
        </div>
    )
}

export default SelectedCoinBalance