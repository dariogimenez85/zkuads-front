import React from 'react'
import DailyQuest from '../components/DailyQuest'
import GameList from '../components/GameList'
import Header from '../components/Header'
import TournamentSlider from '../components/TournamentSlider'

const Home = () => {
    return (
        <div className="portrait-container">
            <div className="bg-dark">
                <Header />
                <TournamentSlider />
                <DailyQuest />
                <GameList />
            </div>
        </div>
    )
}

export default Home