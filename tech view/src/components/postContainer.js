import PostCard from './postcard'
import React, { useContext, useEffect, useState } from "react";

export default function PostCardsContainer(props) {



  const postContainerStyling = {
    top: "0", position: "relative", marginLeft: '0', padding: '10px', display: 'flex', justifyContent: 'space-around', border: '2px solid red', flexWrap: 'wrap'
  }

 
  return (

    <div className="modal" onClick={(props.onClick)}>
      <div className="modal-content" onClick={(e=>e.stopPropagation)}>
        <div className="modal-header">
          <h4 className="modal-title"> Make posts here</h4>
        </div>
        <div className="modal-body" style={postContainerStyling}>
          <PostCard user='Emmanuel' message='Hello World!' />
          <PostCard user='Wayne' message='I Love Cris P.' />
          <PostCard user='Aaron' message='papucho!' />
          <PostCard user='Cris' message='2-1' />
        </div>
        <div className="modal-footer">
          <button className="button" onClick={(props.onClick)}>Close</button>
        </div>
      </div>
    </div>





  )
}