import { useState, useEffect, useContext, React } from "react";
import { AppContext } from "../../appContext";
import Post from "./Post/Post";

function Feedlist(post) {
    return (
        <div>
            {post.map((ele, i) => 
                <Post
                    key={i + 1}
                    desription={ele.post_description}

                />
            )}
        </div>
    )
}

function Feed() {
    const [posts, setPosts] = useState([]);
    const userInfo = useContext(AppContext);

    useEffect(() => {

        const getUrl = 'http://localhost:4005/post';
        async function fetchPost() {
            const response = await fetch(getUrl);
            const postData = await response.json()
            setPosts(postData)
        }
        fetchPost()
    }, []);

    return (
        <div>
            {Feedlist(posts)}
        </div>
    )
};

export default Feed;

