import axios from "axios";
import Config from "../envVars";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useGetFeaturedCollection = (category, query) => {
    const [featuredCollection, setFeaturedCollection] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getFeaturedCollection = async () => {
            setLoading(true);
            setError(null);
            try {
                let url;
                if (category)
                    url = `${Config.BACKEND_URL}/api/v1/product?category=${category}`;
                else if (query)
                    url = `${Config.BACKEND_URL}/api/v1/product?query=${query}`;
                else
                    url = `${Config.BACKEND_URL}/api/v1/product`;

                const response = await axios.get(url, { withCredentials: true });
                setFeaturedCollection(response.data.products);
            } catch (error) {
                console.error("Error fetching featured collection:", error);
                setError(error.response?.data?.message || "Failed to fetch products.");
                toast.error(error.response?.data?.message || "Something went wrong.");
            } finally {
                setLoading(false);
            }
        };

        getFeaturedCollection();
    }, [category, query]); // Refetch when `category` changes

    return { featuredCollection, loading, error };
};

export default useGetFeaturedCollection;
