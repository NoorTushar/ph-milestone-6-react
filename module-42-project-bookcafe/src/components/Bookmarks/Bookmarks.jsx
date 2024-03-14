import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
   console.log(bookmarks);
   return (
      <div className=" md:w-1/3">
         <div className="bg-gray-200 p-4 m-4 rounded-xl">
            <h2>Reading Time: {readingTime}</h2>
         </div>
         <h3 className="text-xl text-center">Bookmarks: {bookmarks.length}</h3>
         {bookmarks.map((eachBookmark, index) => {
            return (
               <Bookmark key={index} eachBookmark={eachBookmark}></Bookmark>
            );
         })}
      </div>
   );
};

Bookmarks.propTypes = {
   bookmarks: PropTypes.array.isRequired,
   readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
