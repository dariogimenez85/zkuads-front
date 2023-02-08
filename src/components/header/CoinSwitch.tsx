import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setGameMode } from '../../redux/slices/gameConfigSlice';
import { GameModeTypes } from '../../redux/slices/gameConfigSlice';


const CoinSwitch = () => {

    const gameMode = useSelector((state: any) => state.gameConfig.gameMode);
    const dispatch = useDispatch();
    const [imgType, setImgType] = useState('');


    useEffect(() => {

        setImgType(gameMode.payload == GameModeTypes.REAL ? '/src/assets/svg/header_switch_coins.svg' : '/src/assets/svg/header_switch_diamonds.svg');

    }, [gameMode]);

    const callback = (): void => {
        dispatch(setGameMode(gameMode.payload == GameModeTypes.REAL ? GameModeTypes.FUN : GameModeTypes.REAL));
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