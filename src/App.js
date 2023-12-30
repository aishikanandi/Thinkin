import {Topbar} from './topbar/TopBar.jsx'
import React, {useState, useEffect} from 'react';
import Home from './pages/home/home.jsx';
import About from './pages/About/about.jsx';
import Footer from './footer/footer.jsx';
import Template from './pages/home/Template/Template.jsx';
import Single from './pages/home/single/single.jsx'
import Author from './pages/Signup/author.jsx'
import Reader from './pages/Signup/reader.jsx'
import Create from './pages/home/create/create.jsx'
import {HashRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import {BASE_URL} from '../src/pages/home/single/helper.js'
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
        const postsData = await axios.get(`${BASE_URL}/api/posts`);
        setPosts(postsData.data); 
        const catsData = await axios.get(`${BASE_URL}/api/categories`);
        setCats(catsData.data); 
        
      } catch(err){
        console.log(err);
      }
    }
    fetchPosts();
   },[])
   useEffect(() => {
    const requests = cats.map((cat) => {
      return axios.get(`${BASE_URL}/api/posts?cat=${cat.name}`);
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
          <Route exact path='marketing' element={<Template posts={posts} cate={"Marketing"} isAuthenticated={isAuthenticated}/>} />
          <Route exact path='Human Resource' element={<Template posts={posts} cate={"Human Resource"} isAuthenticated={isAuthenticated}/>} />
          <Route exact path='economy' element={<Template posts={posts} cate={"Economy"}isAuthenticated={isAuthenticated}/>} />
          <Route exact path='leadership' element={<Template posts={posts} cate={"Leadership"}isAuthenticated={isAuthenticated}/>} />
          <Route exact path='philosophy' element={<Template posts={posts} cate={"Philosophy"} isAuthenticated={isAuthenticated}/>} />
          <Route exact path='technology' element={<Template posts={posts} cate={"Technology"}isAuthenticated={isAuthenticated}/>} />
          <Route exact path='strategy' element={<Template posts={posts} cate={"Strategy"}/>}isAuthenticated={isAuthenticated} />
          <Route exact path='operations' element={<Template posts={posts} cate={"Operations"}isAuthenticated={isAuthenticated}/>} />
          <Route exact path='finance' element={<Template posts={posts} cate={"Finance"} isAuthenticated={isAuthenticated}/>} />
          {posts.map((post, index) => {
            return <Route exact path={`/${post.title}`} element={<Single title={post.title} description ={post.description} date={post.date?post.date.slice(0,10):""} imageUrl={post.image} comments={post.comments} id={post._id} />} key={index}  />;
          })}
          <Route exact path='author' element={<Author updateIsAuthenticated={updateIsAuthenticated}/>} />
          <Route exact path='reader' element={<Reader/>} />
          <Route path="create" element={isAuthenticated?<Create  isAuthenticated={isAuthenticated} />:<Author updateIsAuthenticated={updateIsAuthenticated}/>}/>
          
        </Routes>
      
      </HashRouter>
      <Footer/>
      
      {/* <Home/> */}
     {/* <Business /> */}
      
    </div>
      
  );
}

export default App;
