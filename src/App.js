import Navbar from './common/Nav/Navbar'
import Home from './Pages/home'
import About from './Pages/about'
import Misc from './Pages/misc'
import Work from './Pages/work'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    
    <>
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Route path='/work' exact component={Work}/>
          <Route path='/misc' exact component={Misc}/>
        </Switch>
    </Router>
      {/* <Nav /> */}
    
       {/* <About /> */}
{/*        
      <h1>Reacr portfoksio</h1>
      <h2>this is a test</h2> */}
    </>
  );
}

export default App;
// npm install styled-components
// npm install react-router-dom react-icons