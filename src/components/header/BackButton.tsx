import React from 'react'
import { useNavigate } from 'react-router-dom';


const BackButton = ({ show }: { show: boolean }) => {
    const displayStle = show ? '' : 'd-none';
    const nav = useNavigate();
    const goHome = () => nav('/');

    return (
        <button className="topbar__back" onClick={goHome}>
            <img className={`topbar__back--img ${displayStle}`} src="/src/assets/svg/header_icon_arrow.svg" alt="back" />
        </button>
    )
}

export default BackButton