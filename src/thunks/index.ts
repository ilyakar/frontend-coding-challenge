import { Action } from 'redux'
import { fetchTournamentsStart, fetchTournamentsSuccess, tournamentsAPIError, deleteTournamentStart, deleteTournamentSuccess } from '../actions'
import { ITournament } from '../actions/tournaments.types'
import { API_TOURNAMENTS_URL } from '../constants/api'

import { RootState } from '../store'
import { ThunkAction } from 'redux-thunk'

type ThunkResult<R> = ThunkAction<R, RootState, unknown, Action>;
export const fetchTournamentsThunk = (): ThunkResult<void> => {
  return dispatch => {
		dispatch(fetchTournamentsStart())

    fetch(API_TOURNAMENTS_URL)
		  .then(tournamentsData => tournamentsData.json())
		  .then(tournamentsData => {
        setTimeout(() => { // To give it a realistic loading feel
          // dispatch(fetchTournamentsError('forced error'))
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
