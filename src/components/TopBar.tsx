import React, { useContext, useEffect, useState } from 'react'
import { GameContext, GameModeTypes } from '../context/GameModeContext'
import useGetUserData from '../hooks/useGetUserData'
import BackButton from './header/BackButton'
import CoinSwitch from './header/CoinSwitch'
import PowCoinBalance from './header/PowCoinBalance'
import SelectedCoinBalance from './header/SelectedCoinBalance'
import UserPic from './header/UserPic'

const TopBar = ({ showBackButton }: { showBackButton: boolean }) => {

    const userData = useGetUserData();
    
    const { gameMode } = useContext(GameContext);
    const [bgStyle, setBgStyle] = useState('');

    useEffect(() => {
        setBgStyle(gameMode == GameModeTypes.REAL ? 'bg-orange-blur' : 'bg-purple-blur');

    }, [gameMode]);

    return (
        <div className='topbar__container'>
            <div className={`topbar ${bgStyle}`}>
                <BackButton show={showBackButton} />
                <CoinSwitch />
                <SelectedCoinBalance balance={userData.balance} />
                <PowCoinBalance balance={userData.balance.pow_coin} />
                <UserPic path={userData.pic} />
            </div>
        </div>
    )
}

export default TopBar