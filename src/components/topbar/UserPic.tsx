import React from 'react'
import { useNavigate } from 'react-router';

const UserPic = ({ path }: { path: string }) => {

    const nav = useNavigate();
    const navigateToProfile = () => nav('/profile');

    return (
        <div className="topbar__user" onClick={navigateToProfile}>
            <img className="topbar__user--img" src={path} alt="" />
        </div>
    )
}

export default UserPic