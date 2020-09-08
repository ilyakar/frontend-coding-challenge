import { Action } from 'redux'
import { fetchTournamentsStart, fetchTournamentsSuccess, tournamentsAPIError, editTournamentStart, editTournamentSuccess, createTournamentStart, createTournamentSuccess, deleteTournamentStart, deleteTournamentSuccess } from '../actions'
import { ITournament } from '../actions/tournaments.types'
import { API_TOURNAMENTS_URL } from '../constants/api'

import { RootState } from '../store'
import { ThunkAction } from 'redux-thunk'

type ThunkResult<R> = ThunkAction<R, RootState, unknown, Action>

export const fetchTournamentsThunk = (): ThunkResult<void> => {
  return dispatch => {
		dispatch(fetchTournamentsStart())

    fetch(API_TOURNAMENTS_URL)
		  .then(tournamentsData => tournamentsData.json())
		  .then(tournamentsData => {
        setTimeout(() => { // To give it a realistic loading feel
          // dispatch(tournamentsAPIError('forced error'))
  	      dispatch(fetchTournamentsSuccess(tournamentsData))
        }, 1000)
		  })
		  .catch(error => {
				dispatch(tournamentsAPIError(error))
		  })
  }
}

export const deleteTournamentThunk = (tournament: ITournament): ThunkResult<void> => {
  return dispatch => {
    const confirm = window.confirm('Do you really want to delete this tournament?')
    if(confirm == false) return

    dispatch(deleteTournamentStart(tournament))

    fetch(API_TOURNAMENTS_URL + '/' + tournament.id, {
      method: 'DELETE'
    })
		  .then(() => {
        dispatch(deleteTournamentSuccess(tournament))
		  })
		  .catch(error => {
				dispatch(tournamentsAPIError(error))
		  })
  }
}

export const editTournamentThunk = (tournament: ITournament): ThunkResult<void> => {
  return dispatch => {
    const newTournamentName = prompt('New Tournament Name')
    if(newTournamentName){
      dispatch(editTournamentStart(tournament, newTournamentName))

      fetch(API_TOURNAMENTS_URL + '/' + tournament.id, {
        method: 'PATCH',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          name: newTournamentName
        })
      })
        .then(updatedTournament => updatedTournament.json())
  		  .then((updatedTournament: ITournament) => {
          dispatch(editTournamentSuccess(updatedTournament))
  		  })
  		  .catch(error => {
  				dispatch(tournamentsAPIError(error))
  		  })
    }
  }
}

export const createTournamentThunk = (): ThunkResult<void> => {
  return dispatch => {
    const tournamentName = prompt('Tournament Name')
    if(tournamentName){
      dispatch(createTournamentStart(tournamentName))

      fetch(API_TOURNAMENTS_URL, {
        method: 'POST',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          name: tournamentName
        })
      })
        .then(newTournament => newTournament.json())
  		  .then((newTournament: ITournament) => {
          dispatch(createTournamentSuccess(newTournament))
  		  })
  		  .catch(error => {
  				dispatch(tournamentsAPIError(error))
  		  })
    }
  }
}
