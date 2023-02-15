import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { GameModeTypes } from '../../redux/slices/configSlice';
import { useAppSelector } from '../../redux/store';

const SelectedCoinBalance = ({ balance }: { balance: any }) => {

    const gameConfig = useAppSelector((state: any) => state.config);
    const [balanceValue, setBalanceValue] = useState(0);
    const [imgType, setImgType] = useState('');

    useEffect(() => {

        setBalanceValue(gameConfig.gameMode == GameModeTypes.REAL ? balance.hard : balance.soft);
        setImgType(gameConfig.gameMode == GameModeTypes.REAL ? '/src/assets/svg/icon_coin.svg' : '/src/assets/svg/icon_diamond.svg');
    }, [gameConfig.gameMode]);

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