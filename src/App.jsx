import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Carrinho from './Pages/Carrinho';
import RenderCombo from './Components/RenderCombo';
import RenderBebidas from './Components/RenderBebidas';
// import RenderMolhos from './Components/RenderMolhos';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/carrinho" component={ Carrinho } />
        <Route path="/combos" component={ RenderCombo } />
        <Route path="/bebidas" component={ RenderBebidas } />
        {/* <Route path="/molhos" component={ RenderMolhos } /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
