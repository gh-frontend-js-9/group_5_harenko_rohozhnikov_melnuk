export function popularReduce(state = {}, action: any) {
    switch (action.type) {
        case 'POPULAR_FETCH_DATA_SUCCESS':
            return {...state, ...action.payload}
        default:
            return state
    }
}