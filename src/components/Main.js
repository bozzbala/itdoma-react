import {Route, Routes} from "react-router-dom";
import About from "./about/about";
import Posts from "./posts/Posts";

const Main = (props) =>{
    return(
        <main>
            <Routes>
                <Route path="/" element={<Posts data={props.data.PostPage}/>} />
                <Route path="/about" element={<About />} />
            </Routes>
        </main>
    );
}

export default Main;