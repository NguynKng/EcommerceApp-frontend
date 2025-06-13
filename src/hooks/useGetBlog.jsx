import { useEffect, useState } from "react";
import Config from "../envVars";
import axios from "axios";

export const useGetBlog = (pageNumber) => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError(null);
      try {
        let url;
        if (pageNumber) {
          url = `${Config.BACKEND_URL}/api/v1/crawl-blog?pageNumber=${pageNumber}`;
        } else {
          url = `${Config.BACKEND_URL}/api/v1/crawl-blog`;
        }
        const response = await axios.get(url, { withCredentials: true });
        setBlog(response.data.articles);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError(error.response?.data?.message || "Failed to fetch blog.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [pageNumber]); // Refetch when `pageNumber` changes
  return { blog, loading, error };
};
