import TopBar from "../components/TopBar";

const Profile = () => {
    return (
        <div className="portrait-container">
            <div className="bg-dark">
                <TopBar showBackButton={true} />
                <div className="profile__img">
                    <img src="/src/assets/png/messi.png" alt="" />
                    <a href="#" className="profile__img--edit-box">
                        <img src="/src/assets/svg/profile_icon_edit_picture.svg" alt="" />
                    </a>
                </div>
                <div className="profile__name">
                    lionel messi
                    <button>
                        <img src="/src/assets/svg/profile_icon_edit_name.svg" alt="" />
                    </button>
                </div>

                <button className="profile__wallet-btn ">
                    <img className="profile__wallet-btn--icon" src="/src/assets/png/profile_icon_wallet.png" alt="" />
                    <div className="profile__wallet-btn--title">
                        My Wallet
                    </div>
                    <div className="profile__wallet-btn--arrow ">
                        <img src="/src/assets/svg/game_button_icon_down.svg" alt="" />
                    </div>
                </button>
                <div className="profile__invite">
                    <h4 className="heading heading__3">invite friends</h4>
                    <p className="profile__invite--p">
                        obtene
                        <img src="/src/assets/svg/icon_coin.svg" alt="" />
                        <span className="heading heading__3">+20</span>
                        para vos <br /> y
                        <img src="/src/assets/svg/icon_coin.svg" alt="" />
                        <span className="heading heading__3">+20</span>
                        cada nuevo amigo
                    </p>
                    <button className="profile__invite--btn">
                        <img src="/src/assets/svg/profile_icon_share.svg" alt="" />
                        Invite friends
                    </button>
                    <div className="profile__code-box">
                        <span className="profile__code-box--legend">Tu codio de referido</span>
                        <span className="profile__code-box--code">lionel messi</span>
                        <img src="/src/assets/svg/profile_icon_copy.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
