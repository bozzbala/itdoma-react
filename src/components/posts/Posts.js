import { useState, useRef } from 'react';
import PostList from "./PostList";

const Posts = (props) => {
    let postData = props.data.posts
    const [posts, setPosts] = useState(postData);
    const [text, setText] = useState('');
    const [postTitle, setTitle] = useState('');

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            text,
            postTitle
        }
        setPosts([...posts, newPost]);
        setTitle('');
        setText('');
        console.log(...posts)
    }

    return (
        <div>
            <form>
                <div className="form-post">
                    <div className="form-input">
                        <input value={postTitle}
                            onChange={e => setTitle(e.target.value)}
                            type="text"
                            placeholder="Название поста"/>
                    </div>
                    <div className="form-input">
                        <textarea value={text}
                            onChange={e => setText(e.target.value)}
                            type="text"
                            placeholder="Описание поста" rows="4" cols="60" />
                    </div>
                    <button type="button" onClick={addNewPost}>Отправить</button>
                </div>
            </form>
            <PostList posts={posts} />
        </div>
    );
}

export default Posts;