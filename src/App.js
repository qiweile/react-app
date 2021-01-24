import { Provider } from 'react-redux' // Provider标签内的所有组件都可以使用该组件上的数据
import {BrowserRouter,Route} from 'react-router-dom'
import store from './store'
import { Globalstyle } from './style'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
function App() {
    return (
        <Provider store={store}>
            <Globalstyle />
            <Header />
            <BrowserRouter>
                <Route path="/" exact component={Home}></Route>
                <Route path="/detail" exact component={Detail}></Route>
            </BrowserRouter>
        </Provider>
    );
}
export default App;
