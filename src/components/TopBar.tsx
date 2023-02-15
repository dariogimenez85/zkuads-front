import React, { useEffect, useState } from 'react'
import { GameModeTypes } from '../redux/slices/configSlice';
import { useAppSelector } from '../redux/store';
import BackButton from './topbar/BackButton'
import CoinSwitch from './topbar/CoinSwitch'
import PowCoinBalance from './topbar/PowCoinBalance'
import SelectedCoinBalance from './topbar/SelectedCoinBalance'
import UserPic from './topbar/UserPic'

const TopBar = ({ showBackButton }: { showBackButton: boolean }) => {

    const userData = useAppSelector((state) => state.user);
    const gameConfig = useAppSelector((state) => state.config);
    const [bgStyle, setBgStyle] = useState('');

    useEffect(() => {
        setBgStyle(gameConfig.gameMode == GameModeTypes.REAL ? 'bg-orange-blur' : 'bg-purple-blur');

    }, [gameConfig.gameMode]);

    return (
        <div className='topbar__container'>
            <div className={`topbar ${bgStyle}`}>
                <BackButton show={showBackButton} />
                <CoinSwitch />
                <SelectedCoinBalance balance={userData.user.balance} />
                <PowCoinBalance balance={userData.user.balance.special} />
                <UserPic path={userData.user.picture} />
            </div>
        </div>
    )
}

export default TopBar