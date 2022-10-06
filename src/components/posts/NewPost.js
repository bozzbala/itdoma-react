import { useState, useRef } from 'react';

const NewPost = (props) => {
    let postData = props.posts
    const [posts, setPosts] = useState(postData);
    const [body, setBody] = useState('');
    const [title, setTitle] = useState('');
    const inputRef = useRef()
    const addNewPost = (e) =>{
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            body,
            title
        }
        setPosts([...posts, newPost])
        console.log(postData.map(p => p.postTitle + p.text + p.id))
    }
    return (
        <form>
            <div className="form-post">
                <div className="form-input">
                    <input value={title}
                onChange={e => setTitle(e.target.value)}
                type="text"
                placeholder="Название поста"
                ref={inputRef}/>
                </div>
                <div className="form-input">
                    <textarea value={body}
                onChange={e => setBody(e.target.value)}
                type="text"
                placeholder="Описание поста" rows="4" cols="60" />
                </div>
                <button type="button" onClick={addNewPost}>Отправить</button>
            </div>
        </form>
    );
}

export default NewPost;