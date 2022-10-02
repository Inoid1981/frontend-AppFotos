import ErrorMessage from "../components/ErrorMessage";
import PostsList from "../components/PostsList";
import usePosts from "../hooks/usePosts"

const HomePage = () => {
    const {posts, loading, error} = usePosts();
    console.log(posts, loading, error)
    if(loading) return <p>Cargando Posts.....</p>;
    if(error) return <ErrorMessage message ={error}/>;

    return <section>
        <h1>Últimas publicaciones</h1>
<PostsList posts={posts}/>
    </section>
}

export default HomePage;