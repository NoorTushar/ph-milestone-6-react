import PropTypes from "prop-types";

const Bookmark = ({ eachBookmark }) => {
   const { title } = eachBookmark;
   return (
      <div className="bg-slate-200 p-4 m-4 rounded-xl">
         <h3 className="text-2xl">{title}</h3>
      </div>
   );
};

Bookmark.propTypes = {
   eachBookmark: PropTypes.object.isRequired,
};
export default Bookmark;
