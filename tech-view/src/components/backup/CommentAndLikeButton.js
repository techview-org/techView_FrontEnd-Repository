export default function CommentAndLikeButton({ likes }) {
    return (
        <div>
            <button>Comment</button>
            <button>Likes: {likes}</button>
        </div>
    );
}
