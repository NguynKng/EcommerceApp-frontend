import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function BlogCard(props) {
    const { page } = props;

    return (
        page === "home" ? (
            <div className="w-[21rem] rounded-md bg-white flex-none">
                <Link className="relative w-full hover:opacity-90">
                    <img src="/images/blog-1.jpg" alt="Blog" className="size-full rounded-t-md object-cover" />
                </Link>
                <div className="w-full px-4 py-4 flex flex-col gap-2">
                    <h3 className="text-gray-500 text-xs leading-6">21 SEPTEMBER, 2024</h3>
                    <Link className="font-medium leading-6 hover:opacity-50 transition-opacity duration-200">
                        A Beautiful Sunday Morning
                    </Link>
                    <p className="text-gray-500 text-xs leading-6">
                        {`A Sunday morning is often seen as a moment of calm amidst the hustle of life. But when it takes the form of a renaissance, it becomes a revival of both the spirit and the senses—a perfect blend of nature, mindfulness, and gratitude.`.slice(0, 100)}...
                    </p>
                    <button className="bg-black text-gray-300 rounded-2xl w-24 p-2 text-xs hover:text-orange-400">
                        READ MORE
                    </button>
                </div>
            </div>
        ) : (
            <div className="max-w-[44rem] rounded-md bg-white flex md:flex-row flex-col gap-2">
                <Link className="w-full hover:opacity-90">
                    <img src="/images/blog-1.jpg" className="size-full object-cover"/>
                </Link>
                <div className="p-4">
                    <Link className="font-medium text-xl leading-10 hover:text-gray-500">A Beautiful Sunday Morning</Link>
                    <h3 className="text-gray-500 text-xs leading-10">21 SEPTEMBER, 2024</h3>
                    <p className="text-sm">
                        {`A Sunday morning is often seen as a moment of calm amidst the hustle of life. But when it takes the form of a renaissance, it becomes a revival of both the spirit and the senses—a perfect blend of nature, mindfulness, and gratitude.`.slice(0, 100)}...
                    </p>
                    <button className="bg-black text-gray-300 rounded-2xl w-24 p-2 text-xs hover:text-orange-400 mt-2">
                        READ MORE
                    </button>
                </div>
            </div>
        )
    );
}

BlogCard.propTypes = {
    page: PropTypes.string.isRequired,
};

export default BlogCard;
