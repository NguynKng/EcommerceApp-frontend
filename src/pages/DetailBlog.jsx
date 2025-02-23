import { Clock, Eye, Facebook, Instagram, MessageCircle, MoveLeft, Twitch, Twitter, UserRound } from "lucide-react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

function DetailBlog(){
    return (
        <>
            <Meta title="Blog" />
            <BreadCrumb />
            <div className="py-6 px-4 bg-gray-200">
                <div className="max-w-[86rem] mx-auto flex md:flex-row flex-col gap-4">
                    <div className="flex flex-col gap-4 w-[16rem]">
                        <div className="py-2 px-4 bg-white rounded-md w-full">
                            <h3 className="font-medium mb-4 text-lg">Find By Categories</h3>
                            <div>
                                <Link to="#" className="block text-gray-400 text-sm leading-8 hover:text-black">Watch</Link>
                                <Link to="#" className="block text-gray-400 text-sm leading-8 hover:text-black">TV</Link>
                                <Link to="#" className="block text-gray-400 text-sm leading-8 hover:text-black">Camera</Link>
                                <Link to="#" className="block text-gray-400 text-sm leading-8 hover:text-black">Laptop</Link>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[68rem]">
                        <div className="flex flex-col gap-4 py-4 border-b-2 border-gray-300">
                            <h1 className="text-2xl font-medium">A Beautiful Sunday Morning Renaissance</h1>
                            <div className="flex gap-2 sm:text-sm text-xs">
                                <div className="flex gap-1 items-center text-gray-400">
                                    <Clock />
                                    <span>May 20, 2021</span>
                                </div>
                                <div className="flex gap-1 items-center text-gray-400">
                                    <UserRound />
                                    <span>Admin</span>
                                </div>
                                <div className="flex gap-1 items-center text-gray-400">
                                    <Eye />
                                    <span>100 Views</span>
                                </div>
                                <div className="flex gap-1 items-center text-gray-400">
                                    <MessageCircle />
                                    <span>10 Comments</span>
                                </div>
                            </div>
                        </div>
                        <div className="py-4 leading-8 text-lg text-gray-500">
                            <img src="/images/blog.jpg" className="w-full h-[30rem] object-cover mb-4" />
                            <p>Sunday mornings have a way of bringing a sense of calm and renewal to our busy lives. As the sun rises gently, casting a golden glow across the horizon, the world seems to slow down, offering a perfect moment for reflection and relaxation.</p>
                            <p>A beautiful Sunday often begins with the aroma of freshly brewed coffee filling the air, accompanied by the soft melodies of birds chirping outside. It’s a time to savor simple pleasures—whether it’s enjoying a leisurely breakfast with loved ones, diving into a good book, or taking a peaceful stroll through a nearby park.</p>
                            <p>For many, Sundays serve as a reset button, a chance to recharge and prepare for the week ahead. Whether you spend it exploring new places, indulging in hobbies, or simply unwinding at home, the beauty of Sunday lies in its ability to remind us to embrace the present moment.</p>
                            <p>So, take a deep breath, enjoy the stillness, and make the most of your beautiful Sunday.</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <Link to="/blogs" className="flex items-center gap-2 text-blue-600 hover:underline underline-offset-2">
                                <MoveLeft />
                                <span>Back to Blog</span>
                            </Link>
                            <div className="flex items-center gap-4">
                                <Facebook className="bg-black fill-white" />
                                <Twitter className="fill-white" />
                                <Twitch className="fill-white" />
                                <Instagram className="fill-white" />
                            </div>
                        </div>
                        <div className="bg-white rounded-md p-4 mt-6 flex flex-col gap-4">
                            <h1 className="text-lg font-medium text-gray-400">Leave A Comment</h1>
                            <div className="flex sm:flex-row flex-col gap-4">
                                <input type="text" className="text-sm py-2 px-4 bg-gray-200 rounded-md flex-grow" placeholder="Name" />
                                <input type="email" className="text-sm py-2 px-4 bg-gray-200 rounded-md flex-grow" placeholder="Email" />
                            </div>
                            <textarea className="text-sm py-2 px-4 bg-gray-200 rounded-md h-28" placeholder="Comment"></textarea>
                            <button className="self-start w-40 text-white bg-blue-950 rounded-full py-2 px-4 hover:opacity-90 text-sm">Post Comment</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailBlog;