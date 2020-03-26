import { combineReducers } from 'redux'
import { essentialReduce } from './essentialBlock'

const rootReducer = combineReducers({
    essential: essentialReduce
})

export default rootReducer;