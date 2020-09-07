import { TournamentActionTypes, ITournament, IFetchTournamentsStart, IFetchTournamentsSuccess, IDeleteTournamentStart, IDeleteTournamentSuccess, ITournamentsAPIError } from './tournaments.types'

export const fetchTournamentsStart = (): IFetchTournamentsStart => {
	return {
		type: TournamentActionTypes.FETCH_TOURNAMENTS_START,
	}
}

export const fetchTournamentsSuccess = (tournaments: Array<ITournament>): IFetchTournamentsSuccess => {
	return {
		type: TournamentActionTypes.FETCH_TOURNAMENTS_SUCCESS,
		tournaments: tournaments
	}
}

export const tournamentsAPIError = (error: string): ITournamentsAPIError => {
	return {
		type: TournamentActionTypes.TOURNAMENTS_API_ERROR,
		error: error
	}
}

export const deleteTournamentStart = (tournament: ITournament): IDeleteTournamentStart => {
	return {
		type: TournamentActionTypes.DELETE_TOURNAMENT_START,
		tournament: tournament
	}
}

export const deleteTournamentSuccess = (tournament: ITournament): IDeleteTournamentSuccess => {
	return {
		type: TournamentActionTypes.DELETE_TOURNAMENT_SUCCESS,
		tournament: tournament
	}
}
