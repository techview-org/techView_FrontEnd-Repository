import PostCard from './PostCard'

export default function PostCardsContainer () {
  const postContainerStyling = {
    marginLeft: '160px', marginTop: '89px', padding: '10px', display: 'flex', justifyContent: 'space-around', border: '2px solid red', flexWrap: 'wrap'
  }

  return (
    <div style={postContainerStyling}>
      <PostCard user='Emmanuel' message='Hello World!' />
      <PostCard user='Wayne' message='I hate Cris P.' />
      <PostCard user='Aaron' message='papucho!' />
      <PostCard user='Cris' message='2-1' />
    </div>
  )
}
