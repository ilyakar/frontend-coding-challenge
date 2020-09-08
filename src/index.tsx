import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import GlobalStyle from './GlobalStyle'
import { store, RootState } from './store'
import { fetchTournamentsThunk, createTournamentThunk } from './thunks'

import Button from './components/Button'
import H4 from './components/H4'
import Input from './components/Input'

import Tournaments from './components/Tournaments'
import Container from './components/Container'
import { ITournament } from './actions/tournaments.types'

const App: React.FC = () => {
  const tournaments = useSelector((state: RootState) => state.tournaments)
  const dispatch = useDispatch()

  const [searchInput, setSearchInput] = useState<string>('')

  useEffect(() => {
    dispatch(fetchTournamentsThunk())
  }, [dispatch])

  const createTournamentButtonClick = useCallback(() => {
    dispatch(createTournamentThunk())
  }, [dispatch])

  const retryFetch = useCallback(() => {
    dispatch(fetchTournamentsThunk())
  }, [dispatch])

  const searchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(event.target.value)
  }, [])

  const memoizedTournaments: ITournament[] = useMemo(() => {
    const searchQuery = searchInput.toLowerCase()
    const tournamentsData = tournaments.tournaments

    if(!Array.isArray(tournamentsData)) {
      return []
    }

    return tournamentsData.filter((tournament) => {
      return tournament.id.includes(searchQuery) ||
        tournament.name.toLowerCase().includes(searchQuery) ||
        tournament.organizer.toLowerCase().includes(searchQuery) ||
        tournament.game.toLowerCase().includes(searchQuery) ||
        tournament.startDate.toLowerCase().includes(searchQuery) ||
        tournament.participants.current.toString().includes(searchQuery) ||
        tournament.participants.max.toString().includes(searchQuery)
    })
  }, [searchInput, tournaments.tournaments])

  return (
    <Container>
      <header style={headerStyle}>
        <H4>FACEIT Tournaments</H4>
        <Input placeholder={'Search tournament...'} onChange={searchChange} />
        <Button style={createTournamentButtonStyle} onClick={createTournamentButtonClick}>CREATE TOURNAMENT</Button>
      </header>
      <div>
        {tournaments.loading === true && (
          <section style={loadingSectionStyle}>
            <p>Loading tournaments...</p>
          </section>
        )}
        {tournaments.loading === false && tournaments.error && (
          <section style={loadingSectionStyle}>
            <p>Oh noes! Something went wrong.</p>
            <Button onClick={retryFetch}>RETRY</Button>
          </section>
        )}
        {tournaments.loading === false && !tournaments.error && (
          <Tournaments tournaments={memoizedTournaments} />
        )}
      </div>
    </Container>
  )
}

const headerStyle: React.CSSProperties = {
  marginBottom: 24
}

const createTournamentButtonStyle: React.CSSProperties = {
  float: 'right'
}

const loadingSectionStyle: React.CSSProperties = {
  textAlign: 'center',
  marginTop: 10,
  marginBottom: 10
}

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
)
