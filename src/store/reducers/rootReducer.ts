import { combineReducers } from 'redux'
import { popularReduce } from './popularBlock'
import { essentialReduce } from './essentialBlock'
import { freelanceReduce } from './freelanceBlock'

const rootReducer = combineReducers({
    popular: popularReduce,
    essential: essentialReduce,
    freelance: freelanceReduce,
})

export default rootReducer;