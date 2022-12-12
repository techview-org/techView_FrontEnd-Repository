import React from 'react';
export default function BarWithBreakdownOfMissionStatement () {
  const mainDivStyling = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '30px',
    backgroundColor: 'grey'
  }

  const innerDivStyling = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center'
  }

  return (
    <div style={mainDivStyling}>
      <div style={innerDivStyling}>
        <p>Community</p>
        <img src='https://img.icons8.com/sf-regular/48/null/crowd.png' alt='icon' style={{ width: '48px' }} />
      </div>
      <div style={innerDivStyling}>
        <p>Support</p>
        <img src='https://img.icons8.com/ios-filled/48/null/helping.png' alt='icon' style={{ width: '48px' }} />
      </div>
      <div style={innerDivStyling}>
        <p>Discussion</p>
        <img src='https://img.icons8.com/ios-filled/50/null/comments.png' alt='icon' style={{ width: '48px' }} />
      </div>
    </div>
  )
}
