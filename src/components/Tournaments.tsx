import React from 'react';
import { TournamentInterface } from '../actions/tournaments.types';

import Tournament from './Tournament'

interface ITournamentsProps {
  retrievedTournaments: Array<TournamentInterface>
}
const Tournaments: React.FC<ITournamentsProps> = ({ retrievedTournaments }: ITournamentsProps) => {
  return (
    <div style={tournamentsStyle}>
      {retrievedTournaments.map((tournament: TournamentInterface) => {
        return <Tournament key={tournament.id} tournament={tournament} />
      })}
    </div>
  )
}

const tournamentsStyle: React.CSSProperties = {
  overflow: 'hidden',
  marginRight: -24
}

export default Tournaments
