import styled from 'styled-components'
import log from '../../statics/log.png'
const Title = styled.h1`
    position: reletive;
    background-color: red;
`
const Log = styled.a.attrs({
    href: '/'  // 可以添加自定义属性
})`
    width: 100px;
    height: 30px;
    position: absolute;
    background: url(${log});
    background-size: contain;
`
export {
    Title,
    Log
}