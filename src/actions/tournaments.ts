import { TournamentActionTypes, ITournament, IFetchTournamentsStart, IFetchTournamentsSuccess, IEditTournamentStart, IEditTournamentSuccess, IDeleteTournamentStart, IDeleteTournamentSuccess, ICreateTournamentStart, ICreateTournamentSuccess, ITournamentsAPIError } from './tournaments.types'

export const fetchTournamentsStart = (): IFetchTournamentsStart => {
	return {
		type: TournamentActionTypes.FETCH_TOURNAMENTS_START,
	}
}

export const fetchTournamentsSuccess = (tournaments: ITournament[]): IFetchTournamentsSuccess => {
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

export const editTournamentStart = (tournament: ITournament, newTournamentName: string): IEditTournamentStart => {
	return {
		type: TournamentActionTypes.EDIT_TOURNAMENT_START,
		tournament: tournament,
		newTournamentName: newTournamentName
	}
}

export const editTournamentSuccess = (updatedTournament: ITournament): IEditTournamentSuccess => {
	return {
		type: TournamentActionTypes.EDIT_TOURNAMENT_SUCCESS,
		updatedTournament: updatedTournament
	}
}

export const deleteTournamentStart = (tournament: ITournament): IDeleteTournamentStart => {
	return {
		type: TournamentActionTypes.DELETE_TOURNAMENT_START,
		tournament: tournament
	}
}

export const createTournamentStart = (tournamentName: string): ICreateTournamentStart => {
	return {
		type: TournamentActionTypes.CREATE_TOURNAMENT_START,
		tournamentName: tournamentName
	}
}

export const createTournamentSuccess = (tournament: ITournament): ICreateTournamentSuccess => {
	return {
		type: TournamentActionTypes.CREATE_TOURNAMENT_SUCCESS,
		tournament: tournament
	}
}

export const deleteTournamentSuccess = (tournament: ITournament): IDeleteTournamentSuccess => {
	return {
		type: TournamentActionTypes.DELETE_TOURNAMENT_SUCCESS,
		tournament: tournament
	}
}
