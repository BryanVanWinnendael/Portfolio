import './App.css';
import Page1 from './Components/Pages/Page1';
import Page2 from './Components/Pages/Page2';
import Page3 from './Components/Pages/Page3';
import Page4 from './Components/Pages/Page4';
import ReactFullpage from '@fullpage/react-fullpage';
import Navigation from './Components/Navigation/Navigation';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Clne from './Components/Projects/Clne';
import ChatApp from './Components/Projects/ChatApp';
import ToDo from './Components/Projects/ToDo';

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
          <Page4/>
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
            <div className='pt-15'>
              <Fullpage />
            </div>
          </Route>

          <Route path="/clne">
            <div className='pt-15 w-full'>
              <Clne/>
            </div>
          </Route>

          <Route path="/chatapp">
            <div className='pt-15 w-full'>
              <ChatApp/>
            </div>
          </Route>

          <Route path="/todo">
            <div className='pt-15 w-full'>
              <ToDo/>
            </div>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
