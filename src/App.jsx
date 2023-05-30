import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Carrinho from './Pages/Carrinho';
import Combos from './Components/Combos';

// data
import quarta from './Data/PromocaoQuarta';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/carrinho" component={ Carrinho } />
      <Route path="/combos" render={ () => <Combos products={ quarta } /> } />
    </Switch>
  );
}

export default App;
