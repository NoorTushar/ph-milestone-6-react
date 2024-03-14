import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
   const [blogs, setBlogs] = useState([]);

   useEffect(() => {
      fetch("blogs.json")
         .then((res) => res.json())
         .then((data) => setBlogs(data));
   }, []);

   return (
      <div className=" md:w-2/3">
         <h1 className="text-4xl">Blogs: {blogs.length}</h1>
         {blogs.map((eachBlog) => {
            return (
               <Blog
                  key={eachBlog.id}
                  handleMarkAsRead={handleMarkAsRead}
                  handleAddToBookmark={handleAddToBookmark}
                  blog={eachBlog}
               ></Blog>
            );
         })}
      </div>
   );
};

Blogs.propTypes = {
   handleAddToBookmark: PropTypes.func.isRequired,
   handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blogs;
