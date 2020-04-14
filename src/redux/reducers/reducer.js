import { TOGGLE_SELECTION } from '../constants/index';

const initialState = {
    selections: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case TOGGLE_SELECTION:
        return {
            ...state,
            selections: state.selections
                .map(selection => {
                    if (selection === payload.selection) {
                        return {
                            ...selection,
                            status: !selection.status
                        }
                    } else return selection
                })
        }

    default:
        return state
    }
}
