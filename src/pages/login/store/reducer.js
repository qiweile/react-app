import { fromJS } from 'immutable'
const defaultState = fromJS({
    login: {}
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'change_login':
            return state.set('login', fromJS(action.login))
        default:
            return state
    }
}