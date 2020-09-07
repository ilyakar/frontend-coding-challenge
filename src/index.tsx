import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import { store, RootState } from './store';
import { fetchTournamentsThunk } from './thunks'

import Button from './components/Button'
import H4 from './components/H4';
import Input from './components/Input'

import Tournaments from './components/Tournaments'
import Container from './components/Container';

const App: React.FC = () => {
  const tournaments = useSelector((state: RootState) => state.tournaments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTournamentsThunk())
  }, [])

  const retryFetch = () => {
    dispatch(fetchTournamentsThunk())
  }

  return (
    <Container>
      <header style={headerStyle}>
        <H4>FACEIT Tournaments</H4>
        <Input placeholder={'Search tournament...'} />
        <Button style={createTournamentButtonStyle}>CREATE TOURNAMENT</Button>
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
          <Tournaments tournaments={tournaments.tournaments} />
        )}
      </div>
    </Container>
  );
};

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
);
