import {Component} from 'react'

import Header from '../Header'
import WinView from '../WinView'
import HomePage from '../HomePage'
import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    const {imagesList, tabsList} = props
    this.state = {
      initialImagesList: imagesList,
      activeTabId: tabsList[0].tabId,
      countdown: 60,
      score: 0,
      winView: false,
      currentImageUrl: imagesList[0]?.imageUrl || '',
    }
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    const {countdown} = this.state
    if (countdown === 0) {
      clearInterval(this.timerId)
      this.setState({countdown: 60})
    }
  }

  startTimer = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {countdown} = this.state
    if (countdown > 0) {
      this.setState({countdown: countdown - 1})
    } else {
      clearInterval(this.timerId)
      this.setState({winView: true})
    }
  }

  handleThumbnailClick = imageId => {
    const {currentImageUrl, initialImagesList, countdown, score} = this.state
    const {imagesList} = this.props

    // Ensure countdown is greater than 0 before processing
    if (countdown > 0) {
      // Find the selected image based on currentImageUrl
      const selectedImage = initialImagesList.find(
        each => each.imageUrl === currentImageUrl,
      )

      // Proceed only if selectedImage is found
      if (selectedImage) {
        const {id} = selectedImage

        // Check if the clicked image ID matches the selected image ID
        if (id === imageId) {
          // Increment score and update current image URL
          this.setState(
            prevState => {
              const newImageUrl = this.getImageUrl(imagesList)
              return {
                score: prevState.score + 1, // Adjust increment as needed
                currentImageUrl: newImageUrl,
              }
            },
            () => {
              // Log updated state inside callback to ensure it's the latest state
              console.log('New score after click:', score)
              console.log('New currentImageUrl:', currentImageUrl)
            },
          )
        } else {
          // If IDs do not match, end the game
          clearInterval(this.timerId)
          this.setState({winView: true})
        }
      }
    } else {
      console.log('Countdown has ended.')
    }
  }

  onClickTabItem = id => {
    this.setState({
      activeTabId: id,
    })
  }

  getImageUrl = imagesList => {
    const randomNumber = Math.floor(Math.random() * imagesList.length)
    const {imageUrl} = imagesList[randomNumber]
    return imageUrl
  }

  getFilteredImages = () => {
    const {initialImagesList, activeTabId} = this.state
    const results = initialImagesList.filter(
      each => each.category === activeTabId,
    )
    return results
  }

  onClickPlayAgain = () => {
    clearInterval(this.timerId)
    this.setState({score: 0, countdown: 60, winView: false}, () => {
      this.startTimer()
    })
  }

  render() {
    const {countdown, score, currentImageUrl, winView} = this.state
    const {tabsList, imagesList} = this.props
    const filteredImages = this.getFilteredImages()
    return (
      <div>
        <Header countdown={countdown} score={score} />
        {winView ? (
          <WinView score={score} onClickPlayAgain={this.onClickPlayAgain} />
        ) : (
          <HomePage
            handleThumbnailClick={this.handleThumbnailClick}
            imageUrl={currentImageUrl}
            tabsList={tabsList}
            imagesList={imagesList}
            filteredImages={filteredImages}
            onClickTabItem={this.onClickTabItem}
          />
        )}
      </div>
    )
  }
}

export default MatchGame
