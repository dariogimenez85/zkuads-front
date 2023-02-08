import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import useGetUserData from '../hooks/useGetUserData'
import { GameModeTypes } from '../redux/slices/gameConfigSlice';
import BackButton from './header/BackButton'
import CoinSwitch from './header/CoinSwitch'
import PowCoinBalance from './header/PowCoinBalance'
import SelectedCoinBalance from './header/SelectedCoinBalance'
import UserPic from './header/UserPic'


const TopBar = ({ showBackButton }: { showBackButton: boolean }) => {

    const userData = useGetUserData();

    const gameMode = useSelector((state: any) => state.gameConfig.gameMode);
    const [bgStyle, setBgStyle] = useState('');

    useEffect(() => {
        setBgStyle(gameMode.payload == GameModeTypes.REAL ? 'bg-orange-blur' : 'bg-purple-blur');

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