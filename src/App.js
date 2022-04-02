import { Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home'
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Videos from "./Components/Videos/Videos";
import { createContext, useEffect, useState } from "react";
import BlogDetails from "./Components/BlogDetails/BlogDetails";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";

export const BlogsContext = createContext('blogs')

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <BlogsContext.Provider value={[blogs, setBlogs]}>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/videos' element={<Videos></Videos>}></Route>
        <Route path='/blog/:id' element={<BlogDetails></BlogDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      </BlogsContext.Provider>
    </div>
  );
}

export default App;
