const defaultState = {
    focused: false,
    hello: '你好啊！小米'
}
export default (state = defaultState, action) => {
    if(action.type ==='search_focus') {
        return {
            ...state,
            focused: true
        }
    }
    if(action.type === 'search_focus1') {
        return {
            ...state,
            focused: false
        }
    }
    return state
}