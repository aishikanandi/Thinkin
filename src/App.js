import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthenticated } from './redux/authSlice';
import { HashRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../src/pages/home/single/helper.js';
import Topbar from './topbar/TopBar';
import Home from './pages/home/home';
import About from './pages/About/about';
import Footer from './footer/footer';
import Template from './pages/home/Template/Template';
import Single from './pages/home/single/single';
import Author from './pages/Signup/author';
import Reader from './pages/Signup/reader';
import Create from './pages/home/create/create';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [cats, setCats] = useState([]);
  const [catCount, setCatCount] = useState([]);
  const [postsFetched, setPostsFetched] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await axios.get(`${BASE_URL}/api/posts`);
        setPosts(postsData.data);
        const catsData = await axios.get(`${BASE_URL}/api/categories`);
        setCats(catsData.data);
        setPostsFetched(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

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

  const updateIsAuthenticated = (value) => {
    dispatch(setAuthenticated(value));
  };

  return (
    <div style={{ height: '100%' }}>
      <HashRouter>
        <Topbar />
        <Routes>
          <Route
            exact
            path=""
            element={<Home posts={posts} cats={cats} postsFetched={postsFetched} />}
          />
          <Route exact path="about" element={<About />} />
          <Route
            exact
            path="marketing"
            element={<Template posts={posts} cate="Marketing" postsFetched={postsFetched} />}
          />
          <Route
            exact
            path="Human Resource"
            element={<Template posts={posts} cate="Human Resource" postsFetched={postsFetched} />}
          />
          <Route
            exact
            path="economy"
            element={<Template posts={posts} cate="Economy" postsFetched={postsFetched} />}
          />
          <Route
            exact
            path="leadership"
            element={<Template posts={posts} cate="Leadership" postsFetched={postsFetched} />}
          />
          <Route
            exact
            path="philosophy"
            element={<Template posts={posts} cate="Philosophy" postsFetched={postsFetched} />}
          />
          <Route
            exact
            path="technology"
            element={<Template posts={posts} cate="Technology" postsFetched={postsFetched} />}
          />
          <Route
            exact
            path="strategy"
            element={<Template posts={posts} cate="Strategy" postsFetched={postsFetched} />}
          />
          <Route
            exact
            path="operations"
            element={<Template posts={posts} cate="Operations" postsFetched={postsFetched} />}
          />
          <Route
            exact
            path="finance"
            element={<Template posts={posts} cate="Finance" postsFetched={postsFetched} />}
          />
          {posts.map((post, index) => {
            return (
              <Route
                exact
                path={`/${post.title}`}
                element={
                  <Single
                    title={post.title}
                    description={post.description}
                    date={post.date ? post.date.slice(0, 10) : ''}
                    imageUrl={post.image}
                    comments={post.comments}
                    id={post._id}
                  />
                }
                key={index}
              />
            );
          })}
          <Route exact path="author" element={<Author updateIsAuthenticated={updateIsAuthenticated} />} />
          <Route exact path="reader" element={<Reader />} />
          <Route
            path="create"
            element={isAuthenticated ? <Create /> : <Author updateIsAuthenticated={updateIsAuthenticated} />}
          />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
