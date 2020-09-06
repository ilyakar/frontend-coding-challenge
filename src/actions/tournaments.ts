import { TournamentActionTypes, TournamentInterface, FetchTournaments, FetchTournamentsSuccess, FetchTournamentsError } from './tournaments.types'

export const fetchTournaments = (): FetchTournaments => {
	return {
		type: TournamentActionTypes.FETCH_TOURNAMENTS,
	}
}

export const fetchTournamentsSuccess = (retrievedTournaments: Array<TournamentInterface>): FetchTournamentsSuccess => {
	return {
		type: TournamentActionTypes.FETCH_TOURNAMENTS_SUCCESS,
		payload: retrievedTournaments
	}
}

export const fetchTournamentsError = (error: string): FetchTournamentsError => {
	return {
		type: TournamentActionTypes.FETCH_TOURNAMENTS_ERROR,
		error: error
	}
}
