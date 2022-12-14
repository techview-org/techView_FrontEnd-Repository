import PostContainer from "./PostContainer";

export default function MiddleSection({ posts }) {
    return (
        <div style={{
            border: "1px solid red",
            width: "50%",
            minHeight: "100%"
        }}>
            <PostContainer posts={posts} />
        </div>
    );
}
