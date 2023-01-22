import React, { useContext, useEffect, useState } from 'react'
import { GameContext, GameModeTypes } from '../../context/GameModeContext';

const CoinSwitch = () => {

    const { gameMode, setGameMode } = useContext(GameContext);
    const [imgType, setImgType] = useState('');


    useEffect(() => {

        setImgType(gameMode == GameModeTypes.REAL ? '/src/assets/svg/header_switch_coins.svg' : '/src/assets/svg/header_switch_diamonds.svg');

    }, [gameMode]);

    const callback = (): void => {
        setGameMode(gameMode == GameModeTypes.REAL ? GameModeTypes.FUN : GameModeTypes.REAL)
    }

    return (
        <div className="topbar__switch-btn" onClick={callback}>
            <img
                className="topbar__switch-btn--img"
                src={imgType}
                alt="coin type" />
        </div>
    )
}

export default CoinSwitch