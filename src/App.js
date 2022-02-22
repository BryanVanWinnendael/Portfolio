import './App.css';
import Page1 from './Components/Pages/Page1';
import Page2 from './Components/Pages/Page2';
import Page3 from './Components/Pages/Page3';
import ReactFullpage from '@fullpage/react-fullpage';
import Navigation from './Components/Navigation/Navigation';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Clne from './Components/Projects/Clne';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed = {1000} 
    navigation = {true}
    showActiveTooltip = {true}
    anchors = {['home','competenties','projects','contact']}

    render={({ state, fullpageApi }) => {
      return (
      <ReactFullpage.Wrapper>
        <div className="section">
          <Page1/>
        </div>
        <div className="section">
          <Page2/>
        </div>
        <div className="section">
          <Page3/>
        </div>
        <div className="section">
          <Page3/>
        </div>
      </ReactFullpage.Wrapper>
      );
    }}
  />
);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Navigation/>
            <div className='pt-20'>
              <Fullpage />
            </div>
          </Route>

          <Route path="/clne">
            <div className='pt-20'>
              <Clne/>
            </div>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
