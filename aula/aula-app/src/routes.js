import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

import Header from './components/Header';


const Routes = () => {
    return (
        <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Sobre" component={Sobre} />
                <Route exact path="/Contato" component={Contato} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;