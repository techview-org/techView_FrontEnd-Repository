// component takes four parameters, imgOnLeft: boolean, imageSrc: string, imageAlt: string, descriptionOfImage: string
export default function ImageWithDescriptionOfImage ({ imgOnLeft, imageSrc, imageAlt, descriptionOfImage }) {
  if (imgOnLeft) {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <img src={imageSrc} alt={imageAlt} />
        <p>{descriptionOfImage}</p>
      </div>
    )
  } else {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>{descriptionOfImage}</p>
        <img src={imageSrc} alt={imageAlt} />
      </div>
    )
  }
}
