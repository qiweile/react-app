import { combineReducers } from 'redux' // 将多个小的reducer组装成一个大的 reducer
import headerReducer from '../common/header/store/reducer'

export default combineReducers({
    header: headerReducer
})

