import React from 'react'
import { ITournament } from '../actions/tournaments.types'

import Tournament from './Tournament'

interface ITournamentsProps {
  tournaments: ITournament[]
}
const Tournaments: React.FC<ITournamentsProps> = ({ tournaments }: ITournamentsProps) => {
  return (
    <div style={tournamentsStyle}>
      {tournaments.map((tournament: ITournament) => {
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
