import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Carrinho from './Pages/Carrinho';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/carrinho" component={ Carrinho } />
    </Switch>
  );
}

export default App;
