import { useState } from "react";

export const useImagePreview = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImagePreview = (src) => {
        setSelectedImage(src);
    };

    const closeImagePreview = () => {
        setSelectedImage(null);
    };

    const ImagePreviewModal = () => (
        selectedImage && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                <div className="relative">
                    <img src={selectedImage} alt="Preview" className="w-[40vw] h-[80vh] rounded-md" />
                </div>
                <button className="absolute top-2 right-2 size-10 bg-red-500 text-white px-3 py-2 rounded-full"
                        onClick={closeImagePreview}>
                    ✕
                </button>
            </div>
        )
    );

    return { openImagePreview, ImagePreviewModal };
};
