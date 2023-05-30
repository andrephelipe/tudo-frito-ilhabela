import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Carrinho from './Pages/Carrinho';

// componetes
import RenderCombo from './Components/RenderCombo';
import RenderBebidas from './Components/RenderBebidas';
import RenderMolhos from './Components/RenderMolhos';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/carrinho" component={ Carrinho } />
      <Route path="/combos" component={ RenderCombo } />
      <Route path="/bebidas" component={ RenderBebidas } />
      <Route path="/molhos" component={ RenderMolhos } />
    </Switch>
  );
}

export default App;
