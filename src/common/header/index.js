import { Title, Log } from './style'
export default () => {
    return (
        <Title>
            你好啊！
            {/* Log 可以直接看做 a 标签使用 */}
            <Log href='/' />
        </Title>)
}