import {fromJS} from 'immutable'
const defaultState = fromJS({
    topicList: []
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'change_home':
            // return state.merge({
            //     //fromJS可以把 js 对象转化为 immutable 对象
            //     topicList: fromJS(action.topicList)
            // })
            return state.set('topicList', fromJS(action.topicList))
        default:
            return state
    }
}