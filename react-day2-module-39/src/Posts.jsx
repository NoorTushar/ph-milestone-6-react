import { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
         .then((res) => res.json())
         .then((data) => setPosts(data));
   }, []);
   return (
      <div>
         <h3>Posts : {posts.length}</h3>
         {posts.map((eachPost) => (
            <Post post={eachPost}></Post>
         ))}
      </div>
   );
};

export default Posts;
