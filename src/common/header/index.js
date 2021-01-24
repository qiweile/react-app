import {actionCreators} from './store'
import { Title, Log } from './style'
import {connect} from 'react-redux'
const mapStateToProps = (state) => {
    return {
        focused: state.header.focused,
        hello: state.header.hello
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        submitBtn () {
            dispatch(actionCreators.searchFocus())
        },
        submitBtn1 () {
            dispatch(actionCreators.searchBlur())
        }
    }
}
const Head = props => {
    console.log(props)
    return (
        <Title>
            {props.hello}
            {props.focused + ''}
            {/* Log 可以直接看做 a 标签使用 */}
            <button onClick={props.submitBtn}>改为true</button>
            <button onClick={props.submitBtn1}>改为false</button>
            <Log href='/' />
        </Title>
    )
}
export default connect(mapStateToProps, mapDispathToProps)(Head)