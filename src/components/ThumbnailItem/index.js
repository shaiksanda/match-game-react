import './index.css'

const ThumbnailItem = props => {
  const {data, handleThumbnailClick} = props
  const {thumbnailUrl, id} = data
  const handleClick = () => {
    console.log('Thumbnail clicked:', id)
    handleThumbnailClick(id)
  }
  return (
    <li className="thumbnail-image">
      <button type="button">
        <img
          onClick={handleClick}
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-image"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
