import Loadable from 'react-loadable'
const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading () {
        return <div>这是一个正在加载的组件</div>
    }
});
export default () => <LoadableComponent />