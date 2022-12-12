// component takes four parameters, imgOnLeft: boolean, imageSrc: string, imageAlt: string, descriptionOfImage: string
// imgOnLeft decides on whether the image is on the left or not
import React from 'react';
export default function ImageWithDescriptionOfImage ({ imgOnLeft, imageSrc, imageAlt, descriptionOfImage }) {
  const textStyling = {
    padding: '40px',
    fontFamily: 'Monospace',
    fontSize: '20px',
    fontWeight: 'bold'
  }

  const mainDivStyling = {
    display: 'flex',
    padding: '20px',
    justifyContent: 'space-between'
  }

  if (imgOnLeft) {
    return (
      <div style={mainDivStyling}>
        <img src={imageSrc} alt={imageAlt} />
        <p style={textStyling}>{descriptionOfImage}</p>
      </div>
    )
  } else {
    return (
      <div style={mainDivStyling}>
        <p style={textStyling}>{descriptionOfImage}</p>
        <img src={imageSrc} alt={imageAlt} />
      </div>
    )
  }
}
