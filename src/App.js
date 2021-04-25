import DesignerList from './Components/pages/DesignerList';
import Landing from './Components/pages/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <nav className="py-5 px-10 max-w-screen-xl mx-auto font-bold opensans">
        FD
      </nav>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/designer" component={DesignerList} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
