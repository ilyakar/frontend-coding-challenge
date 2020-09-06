import React from 'react';
import { TournamentInterface } from '../actions/tournaments.types';

import H6 from './H6'
import Button from './Button'

interface ITournamentProps {
  tournament: TournamentInterface
}
const Tournament: React.FC<ITournamentProps> = ({ tournament }: ITournamentProps) => {
  return (
    <div style={tournamentContainerStyle}>
      <div style={tournamentStyle}>
        <H6>{tournament.name}</H6>
        <div>
          Organizer: {tournament.organizer}<br />
          Game: {tournament.game}<br />
          Participants: {tournament.participants.current}/{tournament.participants.max}<br />
          Start: {tournament.startDate}
        </div>
        <div style={buttonsStyle}>
          <Button>EDIT</Button>
          <Button>DELETE</Button>
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
