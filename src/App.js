import { Provider } from 'react-redux' // Provider标签内的所有组件都可以使用该组件上的数据
import store from './store'
import { Globalstyle } from './style'
import Header from './common/header'
function App() {
    return (
        <Provider store={store}>
            <Globalstyle />
            <Header />
        </Provider>
    );
}
export default App;
