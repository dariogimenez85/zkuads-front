import React from 'react'
import useGetTournamentsData from '../hooks/useGetTournamentsData'
import TournamentCard from './tournaments/TournamentCard'

const TournamentSlider = () => {

    const tournamentData = useGetTournamentsData();
    const tournamentList = tournamentData.tournaments.map((data) => {
        return <TournamentCard key={data.name} data={data} />
    })

    return (
        <>
            <h3 className="heading heading__3">tournaments</h3>
            <div className="carrousel">
                <div className="carrousel__container">
                    {tournamentList}
                </div>
            </div>
        </>
    )
}

export default TournamentSlider