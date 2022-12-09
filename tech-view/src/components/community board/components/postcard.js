import PostInfo from "./postInfo"

export default function PostCard ({ user, message }) {
  return (
    // h3 can probably be later unless use for it is found later
    // style added was purely for testing purposes
    <div style={{position:"relative", border: '1px solid black', width: '20%' }}>
      <h3>Post</h3>
      <PostInfo user={user} message={message} />
      
    </div>
  )
}