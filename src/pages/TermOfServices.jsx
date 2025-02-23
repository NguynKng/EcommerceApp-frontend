import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

function TermOfServices(){
    return(
        <>
            <Meta title="Terms of Services" />
            <BreadCrumb />
            <div className="py-6 px-4 bg-gray-200 min-h-[70vh]">
                <div className="max-w-[80rem] mx-auto bg-white px-6 py-4 rounded-md">
                    <h1 className="text-3xl font-semibold mb-4 text-center">Terms Of Services</h1>
                    <p className="text-gray-500 text-sm mt-4">Please read all these Terms Of Services</p>
                    <p className="text-gray-500 text-sm mt-4">As we can accept your order and make a legally enforceable agreement without further reference to you, you must read these Terms and Conditions to make sure that they contain all that you want and nothing that you are not happy with.</p>
                    <h2 className="text-lg font-medium mt-4">Application</h2>
                    <p className="text-gray-500 text-sm mt-4">1. These Terms and Conditions will apply to the purchase of the services and goods by you (the Customer or you). (the Supplier or us or we).</p>
                    <p className="text-gray-500 text-sm mt-4">2. These are the terms on which we sell all Services to you. You can only purchase the Services and Goods from the Website if you are eligible to enter into a contract and are at least 18 years old.</p>
                    <h2 className="text-lg font-medium mt-4">Interpretation</h2>
                    <p className="text-gray-500 text-sm mt-4">1. Consumer means an individual acting for purposes which are wholly or mainly outside their trade, business, craft or profession;</p>
                    <p className="text-gray-500 text-sm mt-4">2. Contract means the legally-binding agreement between you and us for the supply of the Services;</p>
                    <p className="text-gray-500 text-sm mt-4">{"3. Delivery Location means the Supplier's premises or other location where the Services are to be supplied, as set out in the Order;"}</p>
                    <p className="text-gray-500 text-sm mt-4">4. Durable Medium means paper or email, or any other medium that allows information to be addressed personally to the recipient, enables the recipient to store the information in a way accessible for future reference for a period that is long enough for the purposes of the information, and allows the unchanged reproduction of the information stored;</p>
                    <p className="text-gray-500 text-sm mt-4">5. Goods means any goods that we supply to you with the Services, of the number and description as set out in the Order;</p>
                    <p className="text-gray-500 text-sm mt-4">{"6. Order means the Customer's order for the Services from the Supplier as submitted following the step by step process set out on the Website;"}</p>
                    <p className="text-gray-500 text-sm mt-4">7. Privacy Policy means the terms which set out how we will deal with confidential and personal information received from you via the Website;</p>
                </div>
            </div>
        </>
    )
}

export default TermOfServices;