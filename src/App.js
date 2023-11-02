import {Topbar} from './topbar/TopBar.jsx'
import React, {useState, useEffect} from 'react';
import Home from './pages/home/home.jsx';
import About from './pages/About/about.jsx';
import Footer from './footer/footer.jsx';
import Marketing from './pages/home/marketing/marketing.jsx';
import Economy from './pages/home/economy/economy.jsx';
import HR from './pages/home/HumanResource/HR.jsx';
import Strategy from './pages/home/Strategy/Strategy.jsx';
import Operations from './pages/home/Operations/Operations.jsx';
import Finance from './pages/home/Finance/Finance.jsx';
import Leadership from './pages/home/Leadership/leadership.jsx';
import MoralPhilosophy from './pages/home/Moral philosophy/moralphilosophy.jsx';
import Technology from './pages/home/Technology/technology.jsx';
import Single from './pages/home/single/single.jsx'
import Signup from './pages/Signup/signup.jsx'
import Author from './pages/Signup/author.jsx'
import Reader from './pages/Signup/reader.jsx'
import Create from './pages/home/create/create.jsx'
import {HashRouter, Routes, Route } from "react-router-dom";
import { useLocation} from "react-router-dom";
import axios from 'axios';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const updateIsAuthenticated = (value) => {
    setIsAuthenticated(value);
  };
  const [posts, setPosts] = useState([])
  const [cats, setCats] = useState([])
  const [catCount, setCatCount] = useState([]);
   useEffect(()=>{
    const fetchPosts = async()=>{
      try{
        const postsData = await axios.get("http://localhost:5000/api/posts");
        setPosts(postsData.data); 
        const catsData = await axios.get("http://localhost:5000/api/categories");
        setCats(catsData.data); 
        
      } catch(err){
        console.log(err);
      }
    }
    fetchPosts();
   },[])
   useEffect(() => {
    const requests = cats.map((cat) => {
      return axios.get(`http://localhost:5000/api/posts?cat=${cat.name}`);
    });
    Promise.all(requests)
      .then((responses) => {
        const newCatCount = {};

        responses.forEach((response, index) => {
          newCatCount[cats[index].name] = response.data.length;
        });

        setCatCount(newCatCount);
      })
      .catch((error) => {
        console.error(`Error fetching data for categories: ${error}`);
      });
  }, [cats]);
  return (
     <div style={{height:'100%'}}>
      
      {/* <Single /> */}
      
      <HashRouter>
      <Topbar isAuthenticated={isAuthenticated}/>
        <Routes>
        <Route exact path='' element={ <Home posts={posts} cats={cats} isAuthenticated={isAuthenticated}/>}/>
          <Route exact path='about' element={ <About/>}/>
          <Route exact path='marketing' element={<Marketing posts={posts}/>} />
          <Route exact path='humanResource' element={<HR posts={posts}/>} />
          <Route exact path='economy' element={<Economy posts={posts}/>} />
          <Route exact path='leadership' element={<Leadership posts={posts}/>} />
          <Route exact path='philosophy' element={<MoralPhilosophy posts={posts}/>} />
          <Route exact path='technology' element={<Technology posts={posts}/>} />
          <Route exact path='strategy' element={<Strategy posts={posts}/>} />
          <Route exact path='operations' element={<Operations posts={posts}/>} />
          <Route exact path='finance' element={<Finance posts={posts}/>} />
          {/* <Route exact path='tech3' element={<Tech3/>} />
          <Route exact path='tech4' element={<Tech4/>} />
          <Route exact path='eco1' element={<Eco1/>} />
          <Route exact path='eco2' element={<Eco2/>} />
          <Route exact path='eco4' element={<Eco4/>} />
          <Route exact path='mark1' element={<Mark1/>} />
          <Route exact path='mark2' element={<Mark2/>} />
          <Route exact path='mark3' element={<Mark3/>} /> */}
          {posts.map((post, index) => {
            return <Route exact path={`/${post.title}`} element={<Single title={post.title} description ={post.description} date={post.date.slice(0,10)} imageUrl={post.image} />} key={index} />;
          })}
          <Route exact path='author' element={<Author updateIsAuthenticated={updateIsAuthenticated}/>} />
          <Route exact path='signup' element={<Signup/>} />
          <Route exact path='reader' element={<Reader/>} />
          <Route exact path='create' element={<Create/>} />
        </Routes>
      
      </HashRouter>
      <Footer/>
      
      {/* <Home/> */}
     {/* <Business /> */}
      
    </div>
      
  );
}

export default App;
