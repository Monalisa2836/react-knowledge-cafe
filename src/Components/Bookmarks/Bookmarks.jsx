import PropTypes from "prop-types";
import Bookmark from "../Bookmark.jsx/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  console.log(bookmarks);
  return (
    <div className="md:w-1/3 text-center bg-gray-300 ml-4 mt-3 pt-4">
      <div>
        <h3 className="text-3xl bg-slate-200 m-4 p-4 rounded-lg">Spent time on read : {readingTime} min</h3>
      </div>
      <h2 className="text-3xl mt-4">Bookmarked Blogs: {bookmarks.length}</h2>
      {bookmarks.map((bookmark, index) => (
        <Bookmark key={index} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number,
};

export default Bookmarks;
