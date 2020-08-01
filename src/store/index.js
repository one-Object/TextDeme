import { personList } from './reducer'
import { createStore, combineReducers } from 'redux'

const store = createStore(combineReducers({
    personList
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
