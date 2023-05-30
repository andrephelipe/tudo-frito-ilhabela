import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Carrinho from './Pages/Carrinho';

// data
import combos from './Data/Combos';
import cardapio from './Data/Cardapio';

// componetes
import Combos from './Components/Combos';
import Cards from './Components/Cards';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/carrinho" component={ Carrinho } />
      <Route path="/combos" render={ () => <Combos products={ combos } /> } />
      <Route path="/molhos" render={ () => <Cards products={ cardapio } /> } />
      <Route path="/bebidas" render={ () => <Cards products={ cardapio } /> } />
    </Switch>
  );
}

export default App;
