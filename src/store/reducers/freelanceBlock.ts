export function freelanceReduce(state = {}, action: any) {
    switch (action.type) {
        case 'FREELANCE_FETCH_DATA_SUCCESS':
            return {...state, ...action.payload}
        default:
            return state
    }
}