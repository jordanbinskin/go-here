const initialState = []

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'THING':
        return { ...state, ...payload }

    default:
        return state
    }
}
