export function essentialReduce(state = [], action: any) {
    switch (action.type) {
        case 'ESSENTIAL_FETCH_DATA_SUCCESS':
            return action.payload
        default:
            return state
    }
}