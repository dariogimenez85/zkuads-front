import React, { useEffect, useState } from 'react'

const CoinSwitch = ({ hardCurrency, toggleCallback }: { hardCurrency: boolean, toggleCallback: Function }) => {

    const [imgType, setImgType] = useState('');

    useEffect(() => {

        setImgType(hardCurrency ? '/src/assets/svg/header_switch_coins.svg' : '/src/assets/svg/header_switch_diamonds.svg');

    }, [hardCurrency]);

    const callback = (): void => {
        toggleCallback();
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