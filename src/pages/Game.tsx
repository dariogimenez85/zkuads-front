import Header from "../components/Header";

const Game = () => {
  return (
    <div className="portrait-container">
      <div className="bg-dark">
        <Header showBackButton={false} />

        <header className="game-header">
          {/* <!-- bg-img on style --> */}
          <div className="game-header__info-icon">
            <img src="/src/assets/svg/game_icon_info.svg" alt="" />
          </div>
          <div className="game-header__info-box">
            <div className="game-header__info-box--left">
              <div className="game-header__info-box--price">
                <img
                  className="game-header__info-box--price-img"
                  src="/src/assets/svg/icon_diamond.svg"
                  alt="diamond"
                />
                <span className="game-header__info-box--price-value">1000</span>
                <span className="game-header__info-box--price-txt">bounty</span>
              </div>
              <div className="game-header__info-box--players">
                <div className="game-header__info-box--players-img-box">
                  <img src="/src/assets/png/player-2.png" alt="player" />
                  <img src="/src/assets/png/player-1.png" alt="player" />
                </div>
                <span className="game-header__info-box--players-ammount">
                  405
                </span>
              </div>
            </div>
            <div className="game-header__info-box--right">
              <div className="game-header__info-box--time">
                <span>00</span>:<span>15</span>:<span>40</span>
              </div>
            </div>
          </div>
        </header>
        <main className="game-room-main">
          <button className="lets-play-btn bg-play-diamond">
            <span className="lets-play-btn__text">let's play!</span>
            <span className="lets-play-btn__cash">
              <span>1,5</span>
              <img src="/src/assets/svg/icon_coin.svg" alt="" />
            </span>
          </button>
          <div className="game-room-options">
            <button className="game-room-options__item bg-pink order-3">
              <img
                className="game-room-options__item--icon"
                src="/src/assets/svg/game_icon_boosters.svg"
                alt=""
              />
              <div className="game-room-options__item--title">Boosters</div>
              <div className="game-room-options__item--arrow ">
                {/* <!-- can use style rotate 180° = rotate-180 --> */}
                <img
                  className="rotate-180"
                  src="/src/assets/svg/game_button_icon_down.svg"
                  alt=""
                />
              </div>
            </button>
            <button className="game-room-options__item">
              <img
                className="game-room-options__item--icon"
                src="/src/assets/svg/game_icon_achievements.svg"
                alt=""
              />
              <div className="game-room-options__item--title">Achievements</div>
              <div className="game-room-options__item--arrow ">
                {/* <!-- can use style rotate 180° = rotate-180 --> */}
                <img
                  className=""
                  src="/src/assets/svg/game_button_icon_down.svg"
                  alt=""
                />
              </div>
            </button>
            <button className="game-room-options__item">
              <img
                className="game-room-options__item--icon"
                src="/src/assets/svg/game_icon_tournaments.svg"
                alt=""
              />
              <div className="game-room-options__item--title">Leaderboard</div>
              <div className="game-room-options__item--arrow ">
                {/* <!-- can use style rotate 180° = rotate-180 --> */}
                <img
                  className=""
                  src="/src/assets/svg/game_button_icon_down.svg"
                  alt=""
                />
              </div>
            </button>
          </div>
          <div className="boosters">
            <div className="boosters__item">
              <img
                className="boosters__item--icon"
                src="/src/assets/png/boosters/icon_booster_explotion.png"
                alt=""
              />
              <div className="boosters__item--text-box">
                <span className="boosters__item--title">Extra time</span>
                <span className="boosters__item--description">
                  Lorem ipsum dolor sit amet consectetur
                </span>
              </div>
              <img className="boosters__item--b-icon" src="" alt="" />
              <button className="boosters__btn bg-play-diamond">
                <span className="boosters__btn--text">Buy</span>
                <span className="boosters__btn--line"></span>
                <span className="boosters__btn--price">
                  <img src="/src/assets/svg/header_icon_powCoin.svg" alt="" />
                  1,5
                </span>
              </button>
            </div>
            <div className="boosters__item">
              <img
                className="boosters__item--icon"
                src="/src/assets/png/boosters/icon_booster_chain.png"
                alt=""
              />
              <div className="boosters__item--text-box">
                <span className="boosters__item--title">Extra time</span>
                <span className="boosters__item--description">
                  Lorem ipsum dolor sit amet consectetur
                </span>
              </div>
              <img className="boosters__item--b-icon" src="" alt="" />
              <button className="boosters__btn bg-play-diamond">
                <span className="boosters__btn--text">Buy</span>
                <span className="boosters__btn--line"></span>
                <span className="boosters__btn--price">
                  <img src="/src/assets/svg/header_icon_powCoin.svg" alt="" />
                  1,5
                </span>
              </button>
            </div>
            <div className="boosters__item">
              <img
                className="boosters__item--icon"
                src="/src/assets/png/boosters/icon_booster_plustime.png"
                alt=""
              />
              <div className="boosters__item--text-box">
                <span className="boosters__item--title">Extra time</span>
                <span className="boosters__item--description">
                  Lorem ipsum dolor sit amet consectetur
                </span>
              </div>
              <img className="boosters__item--b-icon" src="" alt="" />
              <button className="boosters__btn bg-play-diamond">
                <span className="boosters__btn--text">Buy</span>
                <span className="boosters__btn--line"></span>
                <span className="boosters__btn--price">
                  <img src="/src/assets/svg/header_icon_powCoin.svg" alt="" />
                  1,5
                </span>
              </button>
            </div>
          </div>
          <div className="achievements">
            <div className="achievements__item">
              <img
                className="achievements__item--flag"
                src="/src/assets/png/achievements/icon_example-01.png"
                alt=""
              />
              <div className="achievements__item-description">
                <span className="achievements__item-description--title">
                  start playing!
                </span>
                <span className="achievements__item-description--subtitle">
                  1 match playing
                </span>
                <div className="achievements__item-description--progress">
                  <span className="achievements__item-description--progress-bar">
                    <span className="width-bar__achievement-1"></span>
                  </span>
                  <span className="achievements__item-description--progress-text">
                    0%
                  </span>
                </div>
              </div>
              <div className="achievements__item--cash-box">
                <div className="achievements__item--cash">
                  <span>1,5</span>
                  <img src="/src/assets/svg/icon_coin.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="achievements__item">
              <img
                className="achievements__item--flag"
                src="/src/assets/png/achievements/icon_example-01.png"
                alt=""
              />
              <div className="achievements__item-description">
                <span className="achievements__item-description--title">
                  start playing!
                </span>
                <span className="achievements__item-description--subtitle">
                  1 match playing
                </span>
                <div className="achievements__item-description--progress">
                  <span className="achievements__item-description--progress-bar">
                    <span className="width-bar__achievement-2"></span>
                  </span>
                  <span className="achievements__item-description--progress-text">
                    60%
                  </span>
                </div>
              </div>
              <div className="achievements__item--cash-box">
                <div className="achievements__item--cash">
                  <span>1,5</span>
                  <img src="/src/assets/svg/icon_coin.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="achievements__item bg-purple-dark">
              <img
                className="achievements__item--flag"
                src="/src/assets/png/achievements/icon_example-01.png"
                alt=""
              />
              <div className="achievements__item-description">
                <span className="achievements__item-description--title">
                  start playing!
                </span>
                <span className="achievements__item-description--subtitle">
                  1 match playing
                </span>
                <div className="achievements__item-description--progress">
                  <span className="achievements__item-description--progress-bar">
                    <span className="width-bar__achievement-3"></span>
                  </span>
                  <span className="achievements__item-description--progress-text">
                    100%
                  </span>
                </div>
              </div>
              <div className="achievements__item--cash-box">
                <div className="achievements__item--cash">
                  <span>1,5</span>
                  <img src="/src/assets/svg/icon_coin.svg" alt="" />
                </div>
                <button className="achievements__item--claimed-btn">
                  claim
                </button>
              </div>
            </div>
            <div className="achievements__item bg-purple">
              <img
                className="achievements__item--flag"
                src="/src/assets/png/achievements/icon_example-01.png"
                alt=""
              />
              <div className="achievements__item-description">
                <span className="achievements__item-description--title">
                  start playing!
                </span>
                <span className="achievements__item-description--subtitle">
                  1 match playing
                </span>
                <span className="achievements__item-description--claimed-text">
                  claimed!
                </span>
              </div>
              <div className="achievements__item--cash-box">
                <div className="achievements__item--cash">
                  <span>1,5</span>
                  <img src="/src/assets/svg/icon_coin.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="leaderboard__container">
            <div className="leaderboard">
              <div className="leaderboard__player leaderboard__player-1">
                <img
                  className="leaderboard__player--img"
                  src="https://cdn0.bioenciclopedia.com/es/posts/9/5/0/tigre_de_bengala_59_600.jpg" 
                  alt=""
                />
                <span>1</span>
                <img
                  className="leaderboard__player-1--crown"
                  src="/src/assets/png/game_leaderboard_crown-01.png"
                  alt=""
                />
              </div>
              <div className="leaderboard__player leaderboard__player-2">
              <img
                className="leaderboard__player--img"
                src="https://www.clarin.com/img/2016/01/07/ryLlEdeVe_720x0.jpg"
                alt=""
              />
              <span>2</span>
            </div>
            <div className="leaderboard__player leaderboard__player-3">
              <img
                className="leaderboard__player--img"
                src="https://img.freepik.com/foto-gratis/tiro-angulo-lindo-perro-capturado-arco-iris-cielo-azul_181624-18212.jpg?auto=format&h=200"
                alt=""
              />
              <span>3</span>
            </div>

          </div>
          </div>
          <div className="leaderboard-positions">
            <div className="leaderboard-positions__item bg-yellow">
              <div className="leaderboard-positions__item--number">1</div>
              <div className="leaderboard-positions__item--user">
                <img src="/src/assets/png/player-2.png" alt="" />
                <div>maria florinda</div>
              </div>
              <div className="leaderboard-positions__item--points">
                29,900 pts
              </div>
            </div>
            <div className="leaderboard-positions__item bg-sharp-orange c-white">
              <div className="leaderboard-positions__item--number">2</div>
              <div className="leaderboard-positions__item--user">
                <img src="/src/assets/png/player-2.png" alt="" />
                <div>maria ramona</div>
              </div>
              <div className="leaderboard-positions__item--points">
                20,900 pts
              </div>
            </div>
            <div className="leaderboard-positions__item bg-pink c-white">
              <div className="leaderboard-positions__item--number">3</div>
              <div className="leaderboard-positions__item--user">
                <img src="/src/assets/png/player-2.png" alt="" />
                <div>maria becerra</div>
              </div>
              <div className="leaderboard-positions__item--points">
                19,900 pts
              </div>
            </div>
            <div className="leaderboard-positions__item bg-black border-light-white c-white">
              <div className="leaderboard-positions__item--number">4</div>
              <div className="leaderboard-positions__item--user">
                <img src="/src/assets/png/player-2.png" alt="" />
                <div>maria estocolmo</div>
              </div>
              <div className="leaderboard-positions__item--points">
                2,900 pts
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Game;
