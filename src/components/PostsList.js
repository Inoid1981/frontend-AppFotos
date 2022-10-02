import Post from "./Post";
const PostsList = ({posts}) => {
    return posts.length ? (
    <ul>
    {posts.map((post) =>(
        <li key= {post.id}>
        <Post post={post}/>
        </li>
        ))}
        </ul>
        ) : (
        <p>Todavía no hay ningún post</p>
        );
};

export default PostsList 