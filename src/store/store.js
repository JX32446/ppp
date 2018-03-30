import {createStore} from 'redux'

import reducers from './reducer.js'

let store = createStore(reducers)

export default store
