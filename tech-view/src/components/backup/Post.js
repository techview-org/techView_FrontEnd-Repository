export default function Post({ username, postType, postContent, likes }) {
    const textStyle = {
        color: "white"
    }

    const mainDivStyle = {
        border: "1px solid red",
        width: "95%",
        marginTop: "15px"
    }

    return (
        <div style={mainDivStyle}>
            <div>
                <p style={textStyle}>@{username}</p>
                <p style={textStyle}>{postType}</p>
            </div>
            <p style={textStyle}>{postContent}</p>
            <CommentAndLikeButton textStyle={textStyle} likes={likes} />
        </div>
    );
}

function CommentAndLikeButton({ textStyle, likes }) {
    return (<div>
        <button>Comment</button>
        <div>
            <p style={textStyle}>{likes}</p>
            <button>Likes: {likes}</button>
        </div>
    </div>);
}
