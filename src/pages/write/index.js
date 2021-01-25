import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import http from '../../axios'
const Home = (props) => {
    useEffect(() => {
        http.get('/home.json').then((res) => {
            const result = res.data.data
            const action = {
                type: 'change_home',
                topicList: result.topicList
            }
            props.changeHome(action)
        })
    }, [])
    return <div>{props.topicList}</div>
}
const mapStateToProps = (state) => {
    return {
        // 使用了immutable 管理 state 数据就要用 get() 方法拿数据
        topicList: state.home.get('topicList'),
    }
}
const mapDispathToProps = (dispatch) => ({
    changeHome(action) {
        dispatch(action)
    }
})
export default connect(mapStateToProps, mapDispathToProps)(Home)