import React from 'react'


const ModalCoin = () => {



    return (
        <>
            <div className='modal__container'>
                <div className='modal'>
                    <h4 className='modal__title'>buy coins</h4>
                    <button className='modal__close'>x</button>
                    <div className='modal__box'>
                        <div className='modal__box--item'>
                            <img className='modal__box--img' src="/src/assets/svg/icon_coin.svg" alt="" />
                            <span className='modal__box--money'>100</span>
                            <span>
                                <img src="/src/assets/svg/wallet_transactions_icon_matic.svg" alt="" />
                                <span>10</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalCoin