import TopBar from "../components/TopBar";

const Wallet = () => {
    return (
        <div className="portrait-container">
            <div className="bg-dark">
                <TopBar showBackButton={true} />

                {/* diamond mode wallet */}
                <div className="wallet-status border-diamond-box">
                    <h4 className="heading heading__1">diamond balance</h4>
                    <div className="wallet-status__balance">
                        <img src="/src/assets/svg/icon_diamond.svg" alt="" />
                        <span>450</span>
                    </div>
                </div>
                <div className="wallet-payment">
                    <div className="wallet-payment__item">
                        <button className="bg-circle-viopink">
                            <img src="/src/assets/svg/wallet_icon_deposit.svg" alt="" />
                        </button>
                        <span>deposit</span>
                    </div>
                    <div className="wallet-payment__item">
                        <button className="bg-circle-viopink">
                            <img src="/src/assets/svg/wallet_icon_buy.svg" alt="" />
                        </button>
                        <span>exchange</span>
                    </div>
                </div>
                <div className="radio-label">
                    <input type="radio" name="label-option" id="label-option-1" className="radio-option-1" checked />
                    <input type="radio" name="label-option" id="label-option-2" className="radio-option-2" />
                    <input type="radio" name="label-option" id="label-option-3" className="radio-option-3" />
                    <label className="label-option-1"
                    // for="label-option-1"
                    >transactions</label>
                    <label className="label-option-2"
                    // for="label-option-2"
                    >deposits</label>
                    <label className="label-option-3"
                    // for="label-option-3"
                    >withdraws</label>
                </div>
                <div className="items-list">
                    <div className="items-list__item">
                        <div className="items-list__item--img-box">
                            <img src="/src/assets/svg/wallet_transactions_icon_example.svg" alt="" />
                        </div>
                        <span className="items-list__item--text-box">
                            <h6>
                                crypto sent
                            </h6>
                            <span className="items-list__item--succes">
                                succesful
                            </span>
                            <div>
                                to: 234432432
                            </div>
                            <div>
                                16:00 - 18 dic 2022
                            </div>
                        </span>
                        <span className="items-list__item--price">
                            $33,333,333
                        </span>
                    </div>
                    <div className="items-list__item">
                        <div className="items-list__item--img-box">
                            <img src="/src/assets/svg/wallet_transactions_icon_example.svg" alt="" />
                        </div>
                        <span className="items-list__item--text-box">
                            <h6>
                                crypto sent
                            </h6>
                            <span className="items-list__item--failed">
                                failed
                            </span>
                            <div>
                                to: 234432432
                            </div>
                            <div>
                                16:00 - 18 dic 2022
                            </div>
                        </span>
                        <span className="items-list__item--price c-red">
                            -$33,333,333
                        </span>
                    </div>
                    <div className="items-list__item">
                        <div className="items-list__item--img-box">
                            <img src="/src/assets/png/wallet-reward.jpeg" alt="" />
                        </div>
                        <span className="items-list__item--text-box">
                            <h6>
                                registration reward
                            </h6>
                            <div>
                                16:00 - 18 dic 2022
                            </div>
                        </span>
                        <span className="items-list__item--price">
                            $33,333,333
                        </span>
                    </div>
                </div>
                <br />
                {/* coin mode wallet */}
                <br />
                <div className="wallet-status border-coin-box">
                    <h4 className="heading heading__1">coin balance</h4>
                    <div className="wallet-status__balance">
                        <img src="/src/assets/svg/icon_coin.svg" alt="" />
                        <span>450</span>
                    </div>
                </div>
                <div className="wallet-payment">
                    <div className="wallet-payment__item">
                        <button className="bg-circle-oranyellow">
                            <img src="/src/assets/svg/wallet_icon_buy.svg" alt="" />
                        </button>
                        <span>buy</span>
                    </div>
                    <div className="wallet-payment__item">
                        <button className="bg-circle-oranyellow">
                            <img src="/src/assets/svg/wallet_icon_withdraw.svg" alt="" />
                        </button>
                        <span>withdraw</span>
                    </div>
                </div>
                <div className="radio-label">
                    <input type="radio" name="label-option" id="label-option-1" className="radio-option-1" checked />
                    <input type="radio" name="label-option" id="label-option-2" className="radio-option-2" />
                    <input type="radio" name="label-option" id="label-option-3" className="radio-option-3" />
                    <label className="label-option-1"
                    // for="label-option-1"
                    >transactions</label>
                    <label className="label-option-2"
                    // for="label-option-2"
                    >deposits</label>
                    <label className="label-option-3"
                    // for="label-option-3"
                    >withdraws</label>
                </div>
                <div className="items-list">
                    <div className="items-list__item">
                        <div className="items-list__item--img-box">
                            <img src="/src/assets/svg/wallet_transactions_icon_example.svg" alt="" />
                        </div>
                        <span className="items-list__item--text-box">
                            <h6>
                                crypto sent
                            </h6>
                            <span className="items-list__item--succes">
                                succesful
                            </span>
                            <div>
                                to: 234432432
                            </div>
                            <div>
                                16:00 - 18 dic 2022
                            </div>
                        </span>
                        <span className="items-list__item--price">
                            $33,333,333
                        </span>
                    </div>
                    <div className="items-list__item">
                        <div className="items-list__item--img-box">
                            <img src="/src/assets/svg/wallet_transactions_icon_example.svg" alt="" />
                        </div>
                        <span className="items-list__item--text-box">
                            <h6>
                                crypto sent
                            </h6>
                            <span className="items-list__item--failed">
                                failed
                            </span>
                            <div>
                                to: 234432432
                            </div>
                            <div>
                                16:00 - 18 dic 2022
                            </div>
                        </span>
                        <span className="items-list__item--price c-red">
                            -$33,333,333
                        </span>
                    </div>
                    <div className="items-list__item">
                        <div className="items-list__item--img-box">
                            <img src="/src/assets/png/wallet-reward.jpeg" alt="" />
                        </div>
                        <span className="items-list__item--text-box">
                            <h6>
                                registration reward
                            </h6>
                            <div>
                                16:00 - 18 dic 2022
                            </div>
                        </span>
                        <span className="items-list__item--price">
                            $33,333,333
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wallet;
