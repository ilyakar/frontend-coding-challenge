import { TournamentActionTypes, ITournament, IFetchTournamentsStart, IFetchTournamentsSuccess, ITournamentsAPIError, IDeleteTournamentStart, IDeleteTournamentSuccess } from '../actions/tournaments.types'

interface TournamentState {
  loading: boolean,
  tournaments: ITournament[],
  error: string
}
const initialState: TournamentState = {
  loading: false,
  tournaments: [],
  error: ''
}

type ActionTypes = IFetchTournamentsStart |
                   IFetchTournamentsSuccess |
                   IDeleteTournamentStart |
                   IDeleteTournamentSuccess |
                   ITournamentsAPIError

const Tournaments = (state: TournamentState = initialState, action: ActionTypes) => {
  switch(action.type){
    case TournamentActionTypes.FETCH_TOURNAMENTS_START: {
      return {
        ...state,
        loading: true,
        error: ''
      }
    }

    case TournamentActionTypes.FETCH_TOURNAMENTS_SUCCESS: {
      console.log('action:', action)
      return {
        ...state,
        loading: false,
        tournaments: action.tournaments,
        error: ''
      }
    }

    case TournamentActionTypes.DELETE_TOURNAMENT_SUCCESS: {
      console.log('DELETE_TOURNAMENT_SUCCESS:', state.tournaments.filter(tournament => tournament !== action.tournament))
      return {
        ...state,
        loading: false,
        tournaments: state.tournaments.filter(tournament => tournament !== action.tournament),
        error: ''
      }
    }

    case TournamentActionTypes.TOURNAMENTS_API_ERROR: {
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
