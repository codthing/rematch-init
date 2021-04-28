import { createModel } from '@rematch/core'
import { delay } from './utils'
import { RootModel } from '.'

export const dolphins = createModel<RootModel>()({
	state: 0,
	reducers: {
		increment: (state, payload: number) => state + payload,
	},
	effects: (dispatch) => ({
		async incrementAsync(payload: number) {
			await delay(500)
			dispatch.dolphins.increment(payload)
		},
	}),
})
