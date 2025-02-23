import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

function RefundPolicy(){
    return(
        <>
            <Meta title="Refund Policy" />
            <BreadCrumb />
            <div className="py-6 px-4 bg-gray-200 min-h-[70vh]">
                <div className="max-w-[80rem] mx-auto bg-white px-6 py-4 rounded-md">
                    <h1 className="text-3xl font-semibold mb-4 text-center">Refund Policy</h1>
                    <p className="text-gray-500 text-sm mt-4">Thanks for purchasing our products at [website] operated by NguynKng.</p>
                    <p className="text-gray-500 text-sm mt-4">In order to be eligible for a refund, you have to return the product within 30 calendar days of your purchase. The product must be in the same condition that you receive it and undamaged in any way.</p>
                    <p className="text-gray-500 text-sm mt-4">After we receive your item, our team of professionals will inspect it and process your refund. The money will be refunded to the original payment method you’ve used during the purchase. For credit card payments it may take 5 to 10 business days for a refund to show up on your credit card statement.</p>
                    <p className="text-gray-500 text-sm mt-4">If the product is damaged in any way, or you have initiated the return after 30 calendar days have passed, you will not be eligible for a refund.</p>
                    <p className="text-gray-500 text-sm mt-4">If anything is unclear or you have more questions feel free to contact our customer support team.</p>
                </div>
            </div>
        </>
    )
}

export default RefundPolicy;