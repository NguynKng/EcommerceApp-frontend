import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function BlogCard({ blog }) {
  const { time, link_author, author, link_cat, category, title, link, image } =
    blog;

  return (  
    <div className="w-full max-w-xs rounded-xl bg-white shadow-md overflow-hidden flex-none">
      <Link to={link} className="w-full h-60 block overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </Link>

      <div className="p-4 flex flex-col justify-between gap-4 flex-grow">
        <div className="text-sm text-gray-500 flex flex-wrap items-center gap-2">
          <Link to={link_author} className="hover:text-blue-500 transition-colors">
            {author}
          </Link>   
          <span>&bull;</span>
          <Link to={link_cat} className="hover:text-blue-500 transition-colors">
            {category}
          </Link>
        </div>

        <Link
          to={link}
          className="text-lg font-medium leading-snug hover:text-orange-500 transition-colors min-h-[3rem] line-clamp-2"
        >
          {title}
        </Link>

        <div className="flex items-center justify-between mt-auto">
          <Link to={link}>
            <button className="px-4 py-1.5 bg-black text-white text-xs rounded-full hover:bg-orange-500 transition-colors">
              READ MORE
            </button>
          </Link>
          <span className="text-gray-400 text-xs">{time}</span>
        </div>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  blog: PropTypes.shape({
    time: PropTypes.string,
    link_author: PropTypes.string,
    author: PropTypes.string,
    link_cat: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default BlogCard;
