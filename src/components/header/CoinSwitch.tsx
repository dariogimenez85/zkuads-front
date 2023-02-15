import { useEffect, useState } from 'react'
import { setGameMode } from '../../redux/slices/configSlice';
import { GameModeTypes } from '../../redux/slices/configSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const CoinSwitch = () => {

    const gameConfig = useAppSelector((state) => state.config);
    const userData = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const [imgType, setImgType] = useState('');

    useEffect(() => {
        setImgType(gameConfig.gameMode == GameModeTypes.REAL ? '/src/assets/svg/header_switch_coins.svg' : '/src/assets/svg/header_switch_diamonds.svg');

    }, [gameConfig.gameMode]);

    const callback = (): void => {
        dispatch(setGameMode(gameConfig.gameMode == GameModeTypes.REAL ? GameModeTypes.FUN : GameModeTypes.REAL));
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