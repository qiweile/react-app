import { Provider } from 'react-redux' // Provider标签内的所有组件都可以使用该组件上的数据
import {BrowserRouter,Route} from 'react-router-dom'
import store from './store'
import { Globalstyle } from './style'
import Header from './common/header'
function App() {
    return (
        <Provider store={store}>
            <Globalstyle />
            <Header />
            <BrowserRouter>
                <Route path="/" exact render={() => <div>首页</div>}></Route>
                <Route path="/detail" exact render={() => <div>详情页</div>}></Route>
            </BrowserRouter>
        </Provider>
    );
}
export default App;
