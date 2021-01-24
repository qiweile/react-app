import * as actionTypes from './constants'
import { fromJS } from 'immutable'
// 把state变成不可改变的数据
const defaultState = fromJS({
    focused: false,
    hello: '你好啊！小米'
})
const reducer = (state = defaultState, action) => {
    if (action.type === actionTypes.SEARCH_FOCUS) {
        // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
        return state.set('focused', true)
    }
    if (action.type === actionTypes.SEARCH_BLUR) {
        return state.set('focused', false)
    }
    return state
}
export default reducer