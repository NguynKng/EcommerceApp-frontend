import axios from "axios";
import Config from "../envVars";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export const useGetProduct = (category, query, brand) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                // Construct query params dynamically
                const params = new URLSearchParams();
                if (category) 
                    params.append("category", category);
                if (brand) 
                    params.append("brand", brand);
                if (query) 
                    params.append("query", query);

                const url = `${Config.BACKEND_URL}/api/v1/product?${params.toString()}`;

                const response = await axios.get(url, { withCredentials: true });
                setProducts(response.data.products);
            } catch (error) {
                console.error("Error fetching featured collection:", error);
                setError(error.response?.data?.message || "Failed to fetch products.");
                toast.error(error.response?.data?.message || "Something went wrong.");
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, [category, query, brand]); // Refetch when `category` changes

    return { products, loading, error };
};

export const useGetFeaturedCollection = () => {
    const [featuredCollection, setFeaturedCollection] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getFeaturedCollection = async () => {
            setLoading(true);
            setError(null);
            try {
                const url = `${Config.BACKEND_URL}/api/v1/product/get/featured-collection`;

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
    }, []); // Refetch when `category` changes

    return { featuredCollection, loading, error };
};

export const useGetSpecialProduct = () => {
    const [specialProducts, setSpecialProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getFeaturedCollection = async () => {
            setLoading(true);
            setError(null);
            try {
                const url = `${Config.BACKEND_URL}/api/v1/product/get/special-product`;

                const response = await axios.get(url, { withCredentials: true });
                setSpecialProducts(response.data.products);
            } catch (error) {
                console.error("Error fetching featured collection:", error);
                setError(error.response?.data?.message || "Failed to fetch products.");
                toast.error(error.response?.data?.message || "Something went wrong.");
            } finally {
                setLoading(false);
            }
        };
        getFeaturedCollection();
    }, []); // Refetch when `category` changes

    return { specialProducts, loading, error };
};

export const useGetPopularProduct = () => {
    const [popularProducts, setPopularProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getFeaturedCollection = async () => {
            setLoading(true);
            setError(null);
            try {
                const url = `${Config.BACKEND_URL}/api/v1/product/get/popular-product`;

                const response = await axios.get(url, { withCredentials: true });
                setPopularProducts(response.data.products);
            } catch (error) {
                console.error("Error fetching featured collection:", error);
                setError(error.response?.data?.message || "Failed to fetch products.");
                toast.error(error.response?.data?.message || "Something went wrong.");
            } finally {
                setLoading(false);
            }
        };
        getFeaturedCollection();
    }, []); // Refetch when `category` changes

    return { popularProducts, loading, error };
};
