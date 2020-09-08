import React from 'react'
import { useDispatch } from "react-redux"
import { ITournament } from '../actions/tournaments.types'
import { deleteTournamentThunk, editTournamentThunk } from '../thunks'
import moment from 'moment'

import H6 from './H6'
import Button from './Button'

interface ITournamentProps {
  tournament: ITournament
}
const Tournament: React.FC<ITournamentProps> = ({ tournament }: ITournamentProps) => {
  const dispatch = useDispatch()

  const editTournamentButtonClick = (): void => {
    dispatch(editTournamentThunk(tournament))
  }

  const deleteTournamentButtonClick = (): void => {
    dispatch(deleteTournamentThunk(tournament))
  }

  const startDate = (): string => {
    return moment(tournament.startDate).format('DD/MM/YYYY, HH:mm:ss')
  }

  return (
    <div style={tournamentContainerStyle}>
      <div style={tournamentStyle}>
        <H6>{tournament.name}</H6>
        <div>
          Organizer: {tournament.organizer}<br />
          Game: {tournament.game}<br />
          Participants: {tournament.participants.current}/{tournament.participants.max}<br />
          Start: { startDate() }
        </div>
        <div style={buttonsStyle}>
          <Button onClick={editTournamentButtonClick}>EDIT</Button>
          <Button onClick={deleteTournamentButtonClick}>DELETE</Button>
        </div>
      </div>
    </div>
  )
}

const tournamentContainerStyle: React.CSSProperties = {
  marginBottom: 24,
  float: 'left',
  width: '33.33333%',
}

const tournamentStyle: React.CSSProperties = {
  backgroundColor: 'rgba(100,100,100,0.1)',
  marginRight: 24,
  padding: 10
}

const buttonsStyle = {
  marginTop: 5
}

export default Tournament
