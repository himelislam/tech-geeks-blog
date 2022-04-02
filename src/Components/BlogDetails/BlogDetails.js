import "./BlogDetails.css";
import { BsChevronLeft } from "react-icons/bs";
import { useContext } from "react";
import { BlogsContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";

const BlogDetails = () => {
  const [blogs] = useContext(BlogsContext);
  const navigate = useNavigate();
  const {id} = useParams()
  const blog = blogs.find(blog => blog._id === id)
  return (
    <>
      <div className='header-gradient' />
      <div>
        <button className='back-button' onClick={() => navigate(-1)}>
          <BsChevronLeft />
          <p>Back</p>
        </button>
        <div className='blog-details'>
          <div className='blog-image'>
            <img src={blog?.imageURL} alt='' />
          </div>
          <h1>{blog?.title}</h1>
          <p>{blog?.blog}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
