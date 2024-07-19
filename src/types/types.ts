export type Item = Record<string | symbol, any>

export type Repositories = {
	total_count: number
	incomplete_results: boolean
	items: Item[]
}

export interface Storage {
	repositories: Repositories | null
	favoriteRepositories: Item[]
	state: string
	error: string
	fetchRepositories: (value: string, signal: AbortSignal) => Promise<void>
	addFavoriteRepo: (item: Item) => void
	getRepository: (name: string) => Item | undefined
}
