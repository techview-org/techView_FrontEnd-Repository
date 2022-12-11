const items = [
    { id: "You could use the sort method" },
    { id: "i think you should consider the time complexity" },
    { id: "Space complexity is very important as well" },
   
  ]
  
  export default function CommentList() {
    return (
      <ul role="list" className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="py-4">
          Allison : You could use the sort method
          </li>
        ))}
      </ul>
    )
  }