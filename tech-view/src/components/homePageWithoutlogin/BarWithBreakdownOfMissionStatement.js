import './BarWithBreakdownOfMissionStatement.css'

export default function BarWithBreakdownOfMissionStatement () {
  return (
    <div className='subDivStyling'>
      <div className='innerDivStyling'>
        <p>Community</p>
        <img src='https://img.icons8.com/sf-regular/48/null/crowd.png' alt='icon' className='icon'/>
      </div>
      <div className='innerDivStyling'>
        <p>Support</p>
        <img src='https://img.icons8.com/ios-filled/48/null/helping.png' alt='icon' className='icon'/>
      </div>
      <div className='innerDivStyling'>
        <p>Discussion</p>
        <img src='https://img.icons8.com/ios-filled/50/null/comments.png' alt='icon' className='icon'/>
      </div>
    </div>
  )
}
