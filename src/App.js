import {Topbar} from './topbar/TopBar.jsx'
import React, {useState, useEffect} from 'react';
import Home from './pages/home/home.jsx';
import About from './pages/About/about.jsx';
import Footer from './footer/footer.jsx';
import Template from './pages/home/Template/Template.jsx';
import Single from './pages/home/single/single.jsx'
import Signup from './pages/Signup/signup.jsx'
import Author from './pages/Signup/author.jsx'
import Reader from './pages/Signup/reader.jsx'
import Create from './pages/home/create/create.jsx'
import {HashRouter, Routes, Route } from "react-router-dom";
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
          <Route exact path='marketing' element={<Template posts={posts} cate={"Marketing"}/>} />
          <Route exact path='Human Resource' element={<Template posts={posts} cate={"Human Resource"}/>} />
          <Route exact path='economy' element={<Template posts={posts} cate={"Economy"}/>} />
          <Route exact path='leadership' element={<Template posts={posts} cate={"Leadership"}/>} />
          <Route exact path='philosophy' element={<Template posts={posts} cate={"Philosophy"}/>} />
          <Route exact path='technology' element={<Template posts={posts} cate={"Technology"}/>} />
          <Route exact path='strategy' element={<Template posts={posts} cate={"Strategy"}/>} />
          <Route exact path='operations' element={<Template posts={posts} cate={"Operations"}/>} />
          <Route exact path='finance' element={<Template posts={posts} cate={"Finance"}/>}/>
          {posts.map((post, index) => {
            return <Route exact path={`/${post.title}`} element={<Single title={post.title} description ={post.description} date={post.date.slice(0,10)} imageUrl={post.image} />} key={index} />;
          })}
          <Route exact path='author' element={<Author updateIsAuthenticated={updateIsAuthenticated}/>} />
          <Route exact path='signup' element={<Signup/>} />
          <Route exact path='reader' element={<Reader/>} />
          <Route path="create" element={<Create  isAuthenticated={isAuthenticated} />}/>
          
        </Routes>
      
      </HashRouter>
      <Footer/>
      
      {/* <Home/> */}
     {/* <Business /> */}
      
    </div>
      
  );
}

export default App;
