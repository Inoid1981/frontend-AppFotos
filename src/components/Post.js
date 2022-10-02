import { Link } from "react-router-dom";

const Post = ({post}) =>{
    return (<article>
        
    <p>{post.text}
        {post.image ? (
        <img
        src={`${process.env.REACT_APP_BACKEND}/uploads/${post.image}`}
        alt={post.text}
        />
    ) : null}
    </p>
    <p>
        <Link to={`/posts/${post.id}`}>
          {new Date(post.created_at).toLocaleString()}
        </Link>
      </p>

    </article>);
};

export default Post;