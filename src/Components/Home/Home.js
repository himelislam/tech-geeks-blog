import React, { useContext} from "react";
import { BlogsContext } from "../../App";
import Blog from "../Blog/Blog";
import "./Home.css";

const Home = () => {
  // const [blogs, setBlogs] = useState([]);
  const [blogs] = useContext(BlogsContext)


  return (
    <div className='blogs-container'>
      {blogs.map((blog, index) => (
        <Blog key={index} blog={blog} />
      ))}
    </div>
  );
};

export default Home;
