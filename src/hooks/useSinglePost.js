    import { useEffect, useState } from "react";
    import { getSinglePostService } from "../services";
   
   
    const useSinglePost = (id) => {

    const [singlePost, setSinglePost] = useState (null);
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState ("");

    useEffect(() => {

    const loadSinglePost = async () => {
    try {
        setLoading (true);
        const data= await getSinglePostService();

        setSinglePost (data);

    } catch (error) {
       setError(error.message) 
    }finally {
setLoading(false);
    }
};
loadSinglePost();
        
    }, []);
    return {singlePost, loading, error};
    };

export default useSinglePost