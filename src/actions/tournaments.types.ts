export enum TournamentActionTypes {
	FETCH_TOURNAMENTS_START = 'FETCH_TOURNAMENTS_START',
	FETCH_TOURNAMENTS_SUCCESS = 'FETCH_TOURNAMENTS_SUCCESS',

	DELETE_TOURNAMENT_START = 'DELETE_TOURNAMENT_ERROR',
	DELETE_TOURNAMENT_SUCCESS = 'DELETE_TOURNAMENT_SUCCESS',

	EDIT_TOURNAMENT_START = 'EDIT_TOURNAMENT_ERROR',
	EDIT_TOURNAMENT_SUCCESS = 'EDIT_TOURNAMENT_SUCCESS',

	ADD_TOURNAMENT_START = 'ADD_TOURNAMENT_ERROR',
	ADD_TOURNAMENT_SUCCESS = 'ADD_TOURNAMENT_SUCCESS',

	TOURNAMENTS_API_ERROR = 'TOURNAMENTS_API_ERROR'
}

export interface ITournament {
  id: string,
  name: string,
  organizer: string,
  game: string,
  participants: {
    current: number,
    max: number
  },
  startDate: string
}

export interface IFetchTournamentsStart {
	type: TournamentActionTypes.FETCH_TOURNAMENTS_START
}

export interface IFetchTournamentsSuccess {
	type: TournamentActionTypes.FETCH_TOURNAMENTS_SUCCESS,
	tournaments: ITournament[]
}

export interface IDeleteTournamentStart {
	type: TournamentActionTypes.DELETE_TOURNAMENT_START,
	tournament: ITournament
}

export interface IDeleteTournamentSuccess {
	type: TournamentActionTypes.DELETE_TOURNAMENT_SUCCESS,
	tournament: ITournament
}

export interface ITournamentsAPIError {
	type: TournamentActionTypes.TOURNAMENTS_API_ERROR,
	error: string
}
