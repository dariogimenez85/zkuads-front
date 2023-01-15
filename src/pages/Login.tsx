import React from 'react'

const Login = () => {


  return (
    <div className="portrait-container">
      <div className="bg-login">
        <div className="login-logo-box">
          <img className="login-logo" src="/src/assets/png/zkuads-logo.png" alt="zkuads-logo" />
        </div>
        <div className="login-buttons-box">
          <button className="login-button bg-white c-gray">
            <img width="25px" src="/src/assets/svg/login_icon_gmail.svg" alt="gmail" />
            <div className="login-button__text">
              Continue con Gmail
            </div>
          </button>
          <button className="login-button bg-blue c-white">
            <img width="25px" src="/src/assets/svg/login_icon_facebook.svg" alt="facebook" />
            <div className="login-button__text">
              Continue con Facebook
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login