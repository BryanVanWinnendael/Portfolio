import './App.css';
import Page1 from './Components/Page1/Page1';
import Page2 from './Components/Page2/page2';
import Page3 from './Components/Page3/page3';
import ReactFullpage from '@fullpage/react-fullpage';
import Navigation from './Components/Navigation/Navigation';



const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed = {1000} 
    navigation = {true}
    showActiveTooltip = {true}
    anchors = {['home','competenties','projects','contact']}
    // navigationTooltips =  {['Home','second','third']}
    // navigationPosition = {'left'}
  

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
      <Navigation/>
      <div>
        <Fullpage />
      </div>

    </div>
  );
}

export default App;
