export interface ITask {
	id: number
	title: string
	cost: number
	state: string
	unreachable?: boolean
}