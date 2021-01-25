import { combineReducers } from 'redux' // 将多个小的reducer组装成一个大的 reducer
import headerReducer from '../common/header/store/reducer'
import homeReducer from '../../src/pages/home/store/reducer'
import loginReducer from '../../src/pages/login/store/reducer'

export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    login: loginReducer
})

