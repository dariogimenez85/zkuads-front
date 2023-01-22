import React from 'react'
import DailyQuest from '../components/DailyQuest'
import GameList from '../components/GameList'
import TopBar from '../components/TopBar'
import TournamentSlider from '../components/TournamentSlider'

const Home = () => {
    return (
        <div className="portrait-container">
            <div className="bg-dark">
                <TopBar showBackButton={false} />
                <TournamentSlider />
                <DailyQuest />
                <GameList />
            </div>
        </div>
    )
}

export default Home