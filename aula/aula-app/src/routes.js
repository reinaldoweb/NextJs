import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Produto from './pages/Produto';
import Error from './pages/Error';

import Header from './components/Header';


const Routes = () => {
    return (
        <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Sobre" component={Sobre} />
                <Route exact path="/Contato" component={Contato} />
                <Route exact path="/Produto/:id" component={Produto} />
                <Route path="*" component={Error}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;