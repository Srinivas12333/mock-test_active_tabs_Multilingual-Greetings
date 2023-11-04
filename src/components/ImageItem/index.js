import './index.css'

const ImageItem = props => {
  const {imageDetails} = props
  const {imageUrl, imageAltText} = imageDetails

  return (
    <li className="list-item">
      <img src={imageUrl} alt={imageAltText} className="image" />
    </li>
  )
}
export default ImageItem
