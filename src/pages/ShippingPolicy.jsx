import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

function ShippingPolicy(){
    return(
        <>
            <Meta title="Shipping Policy" />
            <BreadCrumb />
            <div className="py-6 px-4 bg-gray-200 min-h-[70vh]">
                <div className="max-w-[80rem] mx-auto bg-white px-6 py-4 rounded-md">
                    <h1 className="text-3xl font-semibold mb-4 text-center">Shipping Policy</h1>
                    <p className="text-gray-500 text-sm mt-4">This document sets out the shipping policy that applies to customers that make a purchase at NguynKng Shop. If you have any questions, please contact our customer service team on 123456789 or harrybin2109@gmail.com.</p>
                    <h2 className="text-lg font-medium mt-4">Shipping Options & Delivery Costs</h2>
                    <p className="text-gray-500 text-sm mt-2">We offer the following shipping options - you will be asked to select a shipping method at checkout.</p>
                    <h2 className="text-lg font-medium mt-4">Order Processing Time</h2>
                    <p className="text-gray-500 text-sm mt-2">All orders placed before 2 PM Monday to Friday are processed and dispatched the same day, all orders placed after will be dispatched the next day. All orders placed during the weekend or on a public holiday will be sent from our warehouse on Monday or on the next business day.</p>
                    <h2 className="text-lg font-medium mt-4">Delivery Address & P.O. Boxes</h2>
                    <p className="text-gray-500 text-sm mt-2">Please note that we are unable to modify the delivery address once you have placed your order. We are sorry but we do not ship to P.O. boxes.</p>
                    <h2 className="text-lg font-medium mt-4">International Orders</h2>
                    <p className="text-gray-500 text-sm mt-2">Your package may be subject to import duties and taxes. You, as the customer, are responsible for paying those fees. We recommend that you check with your local customs office before placing an order on our website as these fees can sometimes be significant and we are unable to calculate these for you.</p>
                    <h2 className="text-lg font-medium mt-4">Tracking Your Order</h2>
                    <p className="text-gray-500 text-sm mt-2">Once your order has been dispatched, we will send you a confirmation email with tracking information. You will be able to track your package directly on the carrier’s website.</p>
                    <h2 className="text-lg font-medium mt-4">Returns, Refunds, and Exchanges</h2>
                    <p className="text-gray-500 text-sm mt-2">We want you to be completely happy with your purchase - please read our return & refund policy for detailed information about our processes.</p>
                </div>
            </div>
        </>
    )
}

export default ShippingPolicy;