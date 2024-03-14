import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
   const [bookmarks, setBookmarks] = useState([]);

   const [readingTime, setReadingTime] = useState(0);

   const handleAddToBookmark = (blog) => {
      console.log(`book adding soon`, blog);
      const newBookMarks = [...bookmarks, blog];
      setBookmarks(newBookMarks);
   };

   const handleMarkAsRead = (id, time) => {
      // mark as read time updated
      const newReadingTime = readingTime + time;
      setReadingTime(newReadingTime);

      // remove the read blog from bookmark
      console.log(`remove bookmark of id: ${id}`);
      const remainingBookmarks = bookmarks.filter((eachBookMark) => {
         eachBookMark.id !== id;
      });

      setBookmarks(remainingBookmarks);
   };

   return (
      <>
         <Header></Header>
         <div className=" md:flex max-w-7xl mx-auto w-[90%] md:w-[82%]">
            <Blogs
               handleMarkAsRead={handleMarkAsRead}
               handleAddToBookmark={handleAddToBookmark}
            ></Blogs>
            <Bookmarks
               readingTime={readingTime}
               bookmarks={bookmarks}
            ></Bookmarks>
         </div>
      </>
   );
}

export default App;
