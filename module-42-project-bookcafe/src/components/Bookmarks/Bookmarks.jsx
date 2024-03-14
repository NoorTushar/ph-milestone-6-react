import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
   console.log(bookmarks);
   return (
      <div className=" md:w-1/3">
         <h3>Bookmarks: {bookmarks.length}</h3>
         {bookmarks.map((eachBookmark) => {
            return (
               <Bookmark
                  key={eachBookmark.id}
                  eachBookmark={eachBookmark}
               ></Bookmark>
            );
         })}
      </div>
   );
};

Bookmarks.propTypes = {
   bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;
