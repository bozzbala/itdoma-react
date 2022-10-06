import Post from "./Post";

const PostList = (props) => {
    return (
        <div>
            {props.posts.map(p => <Post postTitle={p.postTitle} text={p.text} id={p.id} />)}
        </div>
    );
}

export default PostList