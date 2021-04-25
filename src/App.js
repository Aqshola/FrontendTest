import DesignerList from './Components/pages/DesignerList';
import Landing from './Components/pages/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/elements/Nav';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/designer" component={DesignerList} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
