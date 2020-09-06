import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import { store, RootState } from './store';
import { fetchTournamentsThunk } from './thunks'
import Container from './components/Container';
import H4 from './components/H4';

const App: React.FC = () => {
  const tournaments = useSelector((state: RootState) => state.tournaments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTournamentsThunk())
  }, [])

  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      {tournaments.loading === true && (
        <p>Loading...</p>
      )}
      {tournaments.loading === false && (
        <p>LOADED</p>
      )}
    </Container>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
