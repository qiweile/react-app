import { Title, Log } from './style'
import {connect} from 'react-redux'
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
const mapStateToProps = (state) => {
    return {
        focused: state.header.focused,
        hello: state.header.hello
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        submitBtn () {
            const action = {
                type: 'search_focus',
            }
            dispatch(action)
        },
        submitBtn1 () {
            const action = {
                type: 'search_focus1'
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Head)