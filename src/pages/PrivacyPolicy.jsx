import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

function PrivacyPolicy(){
    return(
        <>
            <Meta title="Privacy Policy" />
            <BreadCrumb />
            <div className="py-6 px-4 bg-gray-200 min-h-[70vh]">
                <div className="max-w-[80rem] mx-auto bg-white px-6 py-4 rounded-md">
                    <h1 className="text-3xl font-semibold mb-4 text-center">Privacy Policy</h1>
                    <h2 className="text-lg font-medium">The Standard Lorem Ipsum Passage</h2>
                    <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan turpis posuere cursus ultricies. Ut nunc justo, faucibus eget elit quis, vehicula rhoncus nulla. Phasellus convallis sem nec facilisis commodo. Fusce ut molestie turpis. Suspendisse aliquet sed massa in vulputate. Quisque gravida suscipit tincidunt.</p>
                    <h2 className="text-lg font-medium mt-4">At Vero Eos Et Accumsan Et Iusto Odio Dignissimos</h2>
                    <p className="text-gray-500 text-sm mt-2">Mauris elementum scelerisque elit non egestas. Cras lacus nibh, pretium quis bibendum nec, dapibus a metus. Morbi eros lectus, aliquam eu aliquam id, fringilla nec eros. Praesent suscipit commodo diam, non viverra turpis dapibus malesuada. Duis cursus metus eu sem eleifend, id rhoncus odio porttitor.</p>
                    <h2 className="text-lg font-medium mt-4">Certain Circumstances And Owing To The Claims Of Duty Or The Obligations</h2>
                    <p className="text-gray-500 text-sm mt-2">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes.</p>
                    <h2 className="text-lg font-medium mt-4">Integer Ultrices Laoreet Nunc In Gravida</h2>
                    <p className="text-gray-500 text-sm mt-2">Sed lobortis pulvinar viverra. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris suscipit dolor scelerisque, bibendum tellus ac, pharetra sapien. Praesent lacinia scelerisque odio et consequat. In a facilisis lacus. Maecenas vel lobortis tellus.</p>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy;