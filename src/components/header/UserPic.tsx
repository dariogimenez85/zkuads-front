import React from 'react'

const UserPic = ({ path }: { path: string }) => {
    return (
        <div className="topbar__user">
            <img className="topbar__user--img" src={path} alt="" />
        </div>
    )
}

export default UserPic