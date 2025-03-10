import {Mail, Phone} from "lucide-react"
import { useState } from "react"
import useAuthStore from "../../store/authUser";

function Profile() {
    const [tab, setTab] = useState("Recent Activity")
    const { user } = useAuthStore()

    const toggleTab = (name) => {
        setTab(name)
    }

    return (
        <div className="p-4">
            <div className="rounded-md border-2 border-black mx-auto mt-10 mb-20 max-w-[48rem]">
                <div className="border-b-2 border-gray-200 px-6 py-4">
                    <h1 className="text-2xl">User profile</h1>
                </div>
                <div className="p-6">
                    <div className="flex items-center sm:items-start gap-4 py-4 sm:flex-row flex-col">
                        <img src="/images/avatar-2.jpg" className="rounded-full size-[13rem] border-2 border-gray-200" />
                        <div className="p-2 w-full">
                            <h1 className="text-2xl mb-4">{user.fullName}</h1>
                            <span>About:&nbsp;
                                <span className="text-gray-500">Frontend Developer</span>
                            </span>
                            <div className="flex items-center mt-4">
                                <Mail className="size-5 text-gray-500" />
                                <span className="text-gray-500">: {user.email}</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="size-5 text-gray-500" />
                                <span className="text-gray-500">: {user.phoneNumber}</span>
                            </div>
                            <div className="mt-6">
                                <h1>Web Applications</h1>
                                <div className="bg-gray-200 rounded-md h-3 relative">
                                    <div className="w-[85%] h-full bg-green-500 rounded-md"></div>
                                    <span className="absolute top-0 right-[15%] -translate-y-6 text-gray-500">85%</span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h1>Web Design</h1>
                                <div className="bg-gray-200 rounded-md h-3 relative">
                                    <div className="w-[78%] h-full bg-green-500 rounded-md"></div>
                                    <span className="absolute top-0 right-[22%] -translate-y-6 text-gray-500">78%</span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h1>Automation & Testing</h1>
                                <div className="bg-gray-200 rounded-md h-3 relative">
                                    <div className="w-[47%] h-full bg-green-500 rounded-md"></div>
                                    <span className="absolute top-0 right-[53%] -translate-y-6 text-gray-500">47%</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h1>UI / UX</h1>
                                <div className="bg-gray-200 rounded-md h-3 relative">
                                    <div className="w-[65%] h-full bg-green-500 rounded-md"></div>
                                    <span className="absolute top-0 right-[35%] -translate-y-6 text-gray-500">65%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className={`${tab === "Recent Activity" ? "bg-orange-500 text-white" : "text-gray-500"} py-2 sm:px-6 px-2 cursor-pointer`} onClick={() => toggleTab("Recent Activity")}>
                                <h1>Recent Activity</h1>
                            </div>
                            <div className={`${tab === "Projects Worked on" ? "bg-orange-500 text-white" : "text-gray-500"} py-2 sm:px-6 px-2 cursor-pointer`} onClick={() => toggleTab("Projects Worked on")}>
                                <h1>Projects Worked on</h1>
                            </div>
                            <div className={`${tab === "Profile" ? "bg-orange-500 text-white" : "text-gray-500"} py-2 sm:px-6 px-2 cursor-pointer`} onClick={() => toggleTab("Profile")}>
                                <h1>Profile</h1>
                            </div>
                        </div>
                        {tab === "Recent Activity" ? (
                            <div className="px-6 py-4">
                                <div className="flex items-center gap-4 border-b-[1px] border-gray-200 px-2 py-4">
                                    <img src="/images/avatar-admin.jpg" className="rounded-full size-20 border-[2px]" />
                                    <div className="w-[65%]">
                                        <span className="text-lg block">Taison Jack</span>
                                        <span className="text-gray-500 block">Sed ut perspiciatis unde omnis.</span>
                                    </div>
                                    <span className="text-gray-500">12 min ago</span>
                                </div>
                                <div className="flex items-center gap-4 border-b-[1px] border-gray-200 px-2 py-4">
                                    <img src="/images/avatar-admin.jpg" className="rounded-full size-20 border-[2px]" />
                                    <div className="w-[65%]">
                                        <span className="text-lg block">Mike John</span>
                                        <span className="text-gray-500 block">On the other hand, we denounce.</span>
                                    </div>
                                    <span className="text-gray-500">12 min ago</span>
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-500 px-6 py-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile