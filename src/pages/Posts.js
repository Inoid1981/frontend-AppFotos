import { useParams } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import Post from "../components/Post";
import useSinglePost from "../hooks/useSinglePost";

const Posts = () => {
    
    const {id} = useParams();
    const {post, loading, error} = useSinglePost(id);

if (loading) return <p>Cargando.....</p>;
if (error) return <ErrorMessage message ={error}/>;

    return( 
    <section>
    <h1>Listado de Posts</h1>
    <Post post={post}/>
    </section>
    );
};

export default Posts