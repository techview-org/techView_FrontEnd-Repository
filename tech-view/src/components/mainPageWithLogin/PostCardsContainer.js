import React from 'react';
import PostCard from './PostCard'


export default function PostCardsContainer () {
  const postContainerStyling = {
    padding: '20px', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'space-around', flexWrap: 'wrap'
  }

  return (
    <div style={postContainerStyling}>
      <PostCard user='Emmanuel' message='Post 1' />
      <PostCard user='Wayne' message='Post 2' />
      <PostCard user='Aaron' message='Post 3' />
      <PostCard user='Cris' message='Post 4' />
    </div>
  )
}
