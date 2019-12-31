import { personList } from './reducer'
import { createStore, combineReducers } from 'redux'

const store = createStore(combineReducers({
    personList
}))

export default store