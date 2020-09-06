import { Action } from 'redux'
import { fetchTournaments, fetchTournamentsSuccess } from '../actions'
import { TournamentInterface} from '../actions/tournaments.types'

import { RootState } from '../store'
import { ThunkAction } from 'redux-thunk'

type ThunkResult<R> = ThunkAction<R, RootState, unknown, Action>;
export const fetchTournamentsThunk = (): ThunkResult<Promise<string>> => async dispatch => {
	dispatch(fetchTournaments())

  const retrievedTournaments: Array<TournamentInterface> = await exampleAPI()
  dispatch(fetchTournamentsSuccess(retrievedTournaments))

	return Promise.resolve('success')
}

function exampleAPI() {
  return Promise.resolve([]) // Continue here
}
