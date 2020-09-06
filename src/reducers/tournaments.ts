import { TournamentActionTypes, TournamentInterface, FetchTournaments, FetchTournamentsSuccess, FetchTournamentsError } from '../actions/tournaments.types'

interface TournamentState {
  loading: boolean,
  retrievedTournaments: Array<TournamentInterface>
}
const initialState: TournamentState = {
  loading: false,
  retrievedTournaments: []
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
      return {
        ...state,
        loading: false,
        retrievedTournaments: action.payload
      }
    }

    case TournamentActionTypes.FETCH_TOURNAMENTS_ERROR: {
      return {
        ... state,
        loading: false
      }
    }

    default: {
      return state
    }
  }
}

export default Tournaments
