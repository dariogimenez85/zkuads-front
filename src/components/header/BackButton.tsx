import React from 'react'

const BackButton = ({ show }: { show: boolean }) => {
    const displayStle = show ? '' : 'd-none';
    return (
        <button className="topbar__back">
            <img className={`topbar__back--img ${displayStle}`} src="/src/assets/svg/header_icon_arrow.svg" alt="back" />
        </button>
    )
}

export default BackButton