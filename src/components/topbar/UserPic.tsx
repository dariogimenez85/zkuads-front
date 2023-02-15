import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../redux/store';

const UserPic = () => {

    const nav = useNavigate();
    const navigateToProfile = () => nav('/profile');

    const userData = useAppSelector((state) => state.user);
    const [picture, setPicture] = useState('');

    useEffect(() => {
        setPicture(userData.user.picture);
    }, [userData.user]);

    return (
        <div className="topbar__user" onClick={navigateToProfile}>
            <img className="topbar__user--img" src={picture} alt="" />
        </div>
    )
}

export default UserPic