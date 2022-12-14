import Post from "./Post";

export default function PostContainer({ posts }) {
    return (
        <div>
            {posts.map(postInfo => <Post username={postInfo.username} postType={postInfo.post_type} postContent={postInfo.post_description} likes={postInfo.likes} />)}
        </div>
    );
}
