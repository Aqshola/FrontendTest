import DesignerList from './components/pages/DesignerList';
import Landing from './components/pages/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/elements/Nav';

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
