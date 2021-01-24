//compose: 是一个包装函数；传入的函数可以在里面一次执行；
import { createStore, compose } from 'redux'
import reducer from './reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers())
export default store