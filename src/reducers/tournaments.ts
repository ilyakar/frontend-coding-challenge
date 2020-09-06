import { TournamentActionTypes, TournamentInterface, FetchTournaments, FetchTournamentsSuccess, FetchTournamentsError } from '../actions/tournaments.types'

interface TournamentState {
  loading: boolean,
  retrievedTournaments: Array<TournamentInterface>,
  error: string
}
const initialState: TournamentState = {
  loading: false,
  retrievedTournaments: [],
  error: ''
}

type ActionTypes = FetchTournaments | FetchTournamentsSuccess | FetchTournamentsError
const Tournaments = (state: TournamentState = initialState, action: ActionTypes) => {
  switch(action.type){
    case TournamentActionTypes.FETCH_TOURNAMENTS: {
      return {
        ...state,
        loading: true
      }
    }

    case TournamentActionTypes.FETCH_TOURNAMENTS_SUCCESS: {
      console.log('FETCH_TOURNAMENTS_SUCCESS', action.payload)
      return {
        ...state,
        loading: false,
        retrievedTournaments: action.payload
      }
    }

    case TournamentActionTypes.FETCH_TOURNAMENTS_ERROR: {
      console.log('FETCH_TOURNAMENTS_ERROR', action.error)
      return {
        ... state,
        loading: false,
        error: action.error
      }
    }

    default: {
      return state
    }
  }
}

export default Tournaments
