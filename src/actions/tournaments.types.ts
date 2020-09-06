export enum TournamentActionTypes {
	FETCH_TOURNAMENTS = 'FETCH_TOURNAMENTS',
	FETCH_TOURNAMENTS_SUCCESS = 'FETCH_TOURNAMENTS_SUCCESS',
	FETCH_TOURNAMENTS_ERROR = 'FETCH_TOURNAMENTS_ERROR',
}

export interface TournamentInterface {
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

export interface FetchTournaments {
	type: TournamentActionTypes.FETCH_TOURNAMENTS
}

export interface FetchTournamentsSuccess {
	type: TournamentActionTypes.FETCH_TOURNAMENTS_SUCCESS,
	payload: TournamentInterface[]
}

export interface FetchTournamentsError {
	type: TournamentActionTypes.FETCH_TOURNAMENTS_ERROR,
	error: string
}
