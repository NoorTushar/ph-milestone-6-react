import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
   const [blogs, setBlogs] = useState([]);

   useEffect(() => {
      fetch("blogs.json")
         .then((res) => res.json())
         .then((data) => setBlogs(data));
   }, []);

   console.log(blogs);

   return (
      <div className=" md:w-2/3">
         <h1 className="text-4xl">Blogs: {blogs.length}</h1>
         <Blog blog={blogs}></Blog>
      </div>
   );
};

export default Blogs;
