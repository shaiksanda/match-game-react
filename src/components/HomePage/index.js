import {Component} from 'react'
import TabItem from '../TabItem'
import ThumbnailItem from '../ThumbnailItem'
import './index.css'

class HomePage extends Component {
  render() {
    const {
      tabsList,
      handleThumbnailClick,
      imageUrl,
      filteredImages,
      onClickTabItem,
    } = this.props

    const buttonList = Array.from({length: 13}, (_, index) => (
      <li key={`button-${index}`}>
        <button type="button">Button {index + 1}</button>
      </li>
    ))

    return (
      <div className="home-container">
        <img src={imageUrl} alt="match" className="image" />
        <ul className="tab-item-container">
          {tabsList.map(each => (
            <TabItem
              onClickTabItem={onClickTabItem}
              key={each.tabId}
              data={each}
            />
          ))}
        </ul>
        <ul className="images-item-container">
          {filteredImages.map(each => (
            <ThumbnailItem
              handleThumbnailClick={handleThumbnailClick}
              key={each.id}
              data={each}
            />
          ))}
        </ul>
        <ul className="button-list-container" style={{display: 'none'}}>
          {buttonList}
        </ul>
      </div>
    )
  }
}

export default HomePage
