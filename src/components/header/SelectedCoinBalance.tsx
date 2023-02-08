import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { GameModeTypes } from '../../redux/slices/gameConfigSlice';

const SelectedCoinBalance = ({ balance }: { balance: any }) => {

    const gameMode = useSelector((state: any) => state.gameConfig.gameMode);
    const [balanceValue, setBalanceValue] = useState(0);
    const [imgType, setImgType] = useState('');

    useEffect(() => {
        setBalanceValue(gameMode.payload == GameModeTypes.REAL ? balance.z_coin : balance.diamond);
        setImgType(gameMode.payload == GameModeTypes.REAL ? '/src/assets/svg/icon_coin.svg' : '/src/assets/svg/icon_diamond.svg');
    }, [gameMode]);

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