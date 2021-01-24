import * as actionTypes from './constants'
const defaultState = {
    focused: false,
    hello: '你好啊！小米'
}
const reducer = (state = defaultState, action) => {
    if (action.type === actionTypes.SEARCH_FOCUS) {
        return {
            ...state,
            focused: true
        }
    }
    if (action.type === actionTypes.SEARCH_BLUR) {
        return {
            ...state,
            focused: false
        }
    }
    return state
}
export default reducer