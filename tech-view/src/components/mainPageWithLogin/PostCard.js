import React from 'react';
import LikeAndCommentButtonContainer from './LikeAndCommentButtonContainer'
import PostInfo from './PostInfo'

export default function PostCard ({ user, message }) {
  return (
    // h3 can probably be later unless use for it is found later
    // style added was purely for testing purposes
    <div style={{ border: '1px solid black', width: '80%', margin: '10px 0' }}>
      <h3>Post</h3>
      <PostInfo user={user} message={message} />
      <LikeAndCommentButtonContainer />
    </div>
  )
}
