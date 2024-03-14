import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
   const {
      id,
      title,
      cover,
      author,
      author_img,
      posted_date,
      reading_time,
      hashtags,
   } = blog;

   return (
      <div className=" border-t py-10 space-y-4">
         <div>
            <img className="  w-full" src={cover} alt="" />
         </div>
         <div className="flex justify-between items-center">
            {/* left */}
            <div className="flex items-center gap-4">
               <img className=" w-14" src={author_img} alt="" />
               <div>
                  <h4 className=" text-2xl font-bold">{author}</h4>
                  <p>{posted_date}</p>
               </div>
            </div>

            {/* right */}
            <div className="flex items-center gap-3">
               <p>{reading_time} min read</p>
               <button
                  onClick={() => {
                     handleAddToBookmark(blog);
                  }}
                  className=" text-xl"
               >
                  <FaBookmark />
               </button>
            </div>
         </div>

         {/* title */}
         <h2 className=" text-4xl font-bold">{title}</h2>

         {/* hashtags */}
         <div className="flex gap-4">
            {hashtags.map((eachHashtag, index) => (
               <span key={index}>
                  <a href="">#{eachHashtag}</a>
               </span>
            ))}
         </div>
         <p
            onClick={() => {
               handleMarkAsRead(id, reading_time);
            }}
            className="underline cursor-pointer font-semibold text-green-700"
         >
            Mark as read
         </p>
      </div>
   );
};

Blog.propTypes = {
   blog: PropTypes.object.isRequired,
   handleAddToBookmark: PropTypes.func.isRequired,
   handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
