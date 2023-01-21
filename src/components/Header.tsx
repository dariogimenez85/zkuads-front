import React, { useEffect, useState } from 'react'
import useGetUserData from '../hooks/useGetUserData'
import BackButton from './header/BackButton'
import CoinSwitch from './header/CoinSwitch'
import PowCoinBalance from './header/PowCoinBalance'
import SelectedCoinBalance from './header/SelectedCoinBalance'
import UserPic from './header/UserPic'

const Header = ({ showBackButton }: { showBackButton: boolean }) => {

    const userData = useGetUserData();
    const [hardCurrency, setHardCurrency] = useState(false);
    const [bgStyle, setBgStyle] = useState('');

    useEffect(() => {
        setBgStyle(hardCurrency ? 'bg-orange-blur' : 'bg-purple-blur');

    }, [hardCurrency]);

    const toggleCurrency = () => {
        setHardCurrency(!hardCurrency);
    }

    return (
        <div className='topbar__container'>
            <div className={`topbar ${bgStyle}`}>
                <BackButton show={showBackButton} />
                <CoinSwitch hardCurrency={hardCurrency} toggleCallback={toggleCurrency} />
                <SelectedCoinBalance hardCurrency={hardCurrency} balance={userData.balance} />
                <PowCoinBalance balance={userData.balance.pow_coin} />
                <UserPic path={userData.pic} />
            </div>
        </div>
    )
}

export default Header