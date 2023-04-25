import TopBar from './topbar/TopBar.jsx'
import Home from './pages/home/home.jsx';
import Footer from './footer/footer.jsx';
import Business from './pages/home/business/business.jsx';

function App() {
  return (
    <div style={{height:'100%'}}>
      <TopBar/>
      <Home/>
      {/* <Business /> */}
      <Footer/>
    </div>
      
  );
}

export default App;
