import {  Clock, Mail, MapPinHouse, Phone } from "lucide-react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <>
        <Meta title="Contact Us"/>
        <BreadCrumb />
        <div className="py-6 px-4 bg-gray-200">
            <div className="max-w-[86rem] mx-auto flex flex-col gap-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.69084866029!2d106.66626407485663!3d10.758292289389404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee4cac162d9%3A0xfebdaafdf000ea12!2zVHLGsOG7nW5nIFRIUFQgVHLhuqduIEtoYWkgTmd1ecOqbg!5e0!3m2!1svi!2s!4v1737348264677!5m2!1svi!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
                <div className="flex md:flex-row flex-col gap-6 bg-white p-4 rounded-md">
                    <div className="block md:w-1/2 w-full">
                        <h3 className="font-medium text-lg">Contact Us</h3>
                        <div className="mt-4 flex flex-col gap-4">
                            <input type="text" placeholder="Name" className="py-2 px-4 text-sm block w-full h-10 bg-gray-200 rounded-md " />
                            <input type="email" placeholder="Email" className="py-2 px-4 text-sm block w-full h-10 bg-gray-200 rounded-md" />
                            <input type="text" placeholder="Phone number" className="py-2 px-4 text-sm block w-full h-10 bg-gray-200 rounded-md" />
                            <textarea rows="4" placeholder="Comment" className="py-2 px-4 text-sm block w-full h-20 bg-gray-200 rounded-md"/>
                            <button className="text-white bg-orange-400 rounded-md py-2 px-4 hover:opacity-90">Submit</button>
                        </div>
                    </div>
                    <div className="block md:w-1/2 w-full">
                        <h3 className="font-medium text-lg">Get In Touch With Us</h3>
                        <div className="mt-4">
                            <div className="flex gap-2">
                                <MapPinHouse />
                                <Link to="https://maps.app.goo.gl/qqaBZip73EsJWGhx5" className="text-gray-500">225 Đ. Nguyễn Tri Phương, Phường 9, Quận 5, Hồ Chí Minh 70000, Việt Nam</Link>
                            </div>
                            <div className="flex gap-2 mt-4">
                                <Phone />
                                <Link className="text-blue-600">(+84) 123456789</Link>
                            </div>
                            <div className="flex gap-2 mt-4">
                                <Mail />
                                <Link className="text-blue-600">harrybin2109@gmail.com</Link>
                            </div>
                            <div className="flex gap-2 mt-4">
                                <Clock />
                                <p className="text-gray-500">Monday - Friday 10 AM - 8 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactPage