const Post = (props) => {
    return (
        <div className="post">
            <h2>{props.postTitle}</h2>
            <div className="post-content">
                <div className="post-text">
                    {props.text}
                </div>
                <div className="post-id">
                    {props.id}
                </div>
            </div>
        </div>
    );
}

export default Post;