import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import useGetUserData from '../hooks/useGetUserData'
import { GameModeTypes } from '../redux/slices/configSlice';
import BackButton from './header/BackButton'
import CoinSwitch from './header/CoinSwitch'
import PowCoinBalance from './header/PowCoinBalance'
import SelectedCoinBalance from './header/SelectedCoinBalance'
import UserPic from './header/UserPic'

const TopBar = ({ showBackButton }: { showBackButton: boolean }) => {

    const userData = useSelector((state: any) => state.user);
    const gameMode = useSelector((state: any) => state.config.gameMode);
    const [bgStyle, setBgStyle] = useState('');

    useEffect(() => {
        console.log(userData.balance);

        setBgStyle(gameMode.payload == GameModeTypes.REAL ? 'bg-orange-blur' : 'bg-purple-blur');

    }, [gameMode]);

    return (
        <div className='topbar__container'>
            <div className={`topbar ${bgStyle}`}>
                <BackButton show={showBackButton} />
                <CoinSwitch />
                <SelectedCoinBalance balance={userData.balance} />
                <PowCoinBalance balance={userData.balance.special} />
                <UserPic path={userData.picture} />
            </div>
        </div>
    )
}

export default TopBar