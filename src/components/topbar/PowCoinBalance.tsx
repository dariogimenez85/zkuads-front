import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/store';

const PowCoinBalance = () => {
    const userData = useAppSelector((state) => state.user);
    const [balanceValue, setBalanceValue] = useState(0);

    useEffect(() => {
        let balance = userData.user.balance;
        setBalanceValue(balance.special);
    }, [userData.user]);
    
    return (
        <div className="topbar__pow-coin">
            <img className="topbar__pow-coin--img" src="/src/assets/svg/header_icon_powCoin.svg" alt="" />
            <span className="topbar__pow-coin--value">{balanceValue}</span>
        </div>
    )
}

export default PowCoinBalance