import { Action } from 'redux'
import { fetchTournaments, fetchTournamentsSuccess, fetchTournamentsError } from '../actions'
import { API_TOURNAMENTS_URL } from '../constants/api'

import { RootState } from '../store'
import { ThunkAction } from 'redux-thunk'

type ThunkResult<R> = ThunkAction<R, RootState, unknown, Action>;
export const fetchTournamentsThunk = (): ThunkResult<void> => {
  return dispatch => {
		dispatch(fetchTournaments())

    fetch(API_TOURNAMENTS_URL)
		  .then(retrievedTournamentsData => retrievedTournamentsData.json())
		  .then(retrievedTournamentsData => {
	      dispatch(fetchTournamentsSuccess(retrievedTournamentsData))
		  })
		  .catch(error => {
				dispatch(fetchTournamentsError(error))
		  })
  }
}
