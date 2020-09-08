import _ from 'lodash'
import { TournamentActionTypes, ITournament, IFetchTournamentsStart, IFetchTournamentsSuccess, ITournamentsAPIError, IEditTournamentSuccess, ICreateTournamentSuccess, IDeleteTournamentSuccess } from '../actions/tournaments.types'

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
                   IEditTournamentSuccess |
                   IDeleteTournamentSuccess |
                   ICreateTournamentSuccess |
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
      return {
        ...state,
        loading: false,
        tournaments: action.tournaments,
        error: ''
      }
    }

    case TournamentActionTypes.EDIT_TOURNAMENT_SUCCESS: {
      // Updates the tournament inside of our *cloned* state.tournaments array
      const updatedTournaments = state.tournaments.map((tournament) => {
        if(tournament.id === action.updatedTournament.id){
          return action.updatedTournament
        }
        else {
          return tournament
        }
      })

      return {
        ...state,
        loading: false,
        tournaments: updatedTournaments,
        error: ''
      }
    }

    case TournamentActionTypes.CREATE_TOURNAMENT_SUCCESS: {
      let updatedTournaments = _.clone(state.tournaments)
      updatedTournaments.push(action.tournament)

      return {
        ...state,
        loading: false,
        tournaments: updatedTournaments,
        error: ''
      }
    }

    case TournamentActionTypes.DELETE_TOURNAMENT_SUCCESS: {
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
