import {Topbar} from './topbar/TopBar.jsx'
import React, {useState} from 'react';
import Home from './pages/home/home.jsx';
import About from './pages/About/about.jsx';
import Footer from './footer/footer.jsx';
import Business from './pages/home/business/business.jsx';
import Marketing from './pages/home/marketing/marketing.jsx';
import Economy from './pages/home/economy/economy.jsx';
import HumanResource from './pages/home/HumanResource/HR.jsx';
import Strategy from './pages/home/Strategy/Strategy.jsx';
import Operations from './pages/home/Operations/Operations.jsx';
import Finance from './pages/home/Finance/Finance.jsx';
import Leadership from './pages/home/Leadership/leadership.jsx';
import MoralPhilosophy from './pages/home/Moral philosophy/moralphilosophy.jsx';
import Technology from './pages/home/Technology/technology.jsx';
import Tech1 from './singlePages/tech1.jsx'
import Tech2 from './singlePages/tech2.jsx'
import Tech3 from './singlePages/tech3.jsx'
import Tech4 from './singlePages/tech4.jsx'
import Eco1 from './singlePages/eco1.jsx'
import Eco2 from './singlePages/eco2.jsx'
import Eco3 from './singlePages/eco3.jsx'
import Eco4 from './singlePages/eco4.jsx'
import Mark1 from './singlePages/mark1.jsx'
import Mark2 from './singlePages/mark2.jsx'
import Mark3 from './singlePages/mark3.jsx'
import Signup from './pages/Signup/signup.jsx'
import Author from './pages/Signup/author.jsx'
import Reader from './pages/Signup/reader.jsx'
import {HashRouter, Routes, Route } from "react-router-dom";
import { useLocation} from "react-router-dom";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const updateIsAuthenticated = (value) => {
    setIsAuthenticated(value);
  };
  return (
     <div style={{height:'100%'}}>
      
      {/* <Single /> */}
      
      <HashRouter>
      <Topbar isAuthenticated={isAuthenticated}/>
        <Routes>
        <Route exact path='' element={ <Home/>}/>
          <Route exact path='about' element={ <About/>}/>
          <Route exact path='marketing' element={<Marketing/>} />
          <Route exact path='business' element={<Business/>} />
          <Route exact path='economy' element={<Economy/>} />
          <Route exact path='leadership' element={<Leadership/>} />
          <Route exact path='moral-philosophy' element={<MoralPhilosophy/>} />
          <Route exact path='technology' element={<Technology/>} />
          <Route exact path='hr' element={<HumanResource/>} />
          <Route exact path='strategy' element={<Strategy/>} />
          <Route exact path='operations' element={<Operations/>} />
          <Route exact path='finance' element={<Finance/>} />
          <Route exact path='tech1' element={<Tech1/>} />
          <Route exact path='tech2' element={<Tech2/>} />
          <Route exact path='tech3' element={<Tech3/>} />
          <Route exact path='tech4' element={<Tech4/>} />
          <Route exact path='eco1' element={<Eco1/>} />
          <Route exact path='eco2' element={<Eco2/>} />
          <Route exact path='eco3' element={<Eco3/>} />
          <Route exact path='eco4' element={<Eco4/>} />
          <Route exact path='mark1' element={<Mark1/>} />
          <Route exact path='mark2' element={<Mark2/>} />
          <Route exact path='mark3' element={<Mark3/>} />
          <Route exact path='author' element={<Author updateIsAuthenticated={updateIsAuthenticated}/>} />
          <Route exact path='signup' element={<Signup/>} />
          <Route exact path='reader' element={<Reader/>} />
        </Routes>
      
      </HashRouter>
      <Footer/>
      
      {/* <Home/> */}
     {/* <Business /> */}
      
    </div>
      
  );
}

export default App;
