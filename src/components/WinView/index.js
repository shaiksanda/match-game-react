import './index.css'

const WinView = props => {
  const {score, onClickPlayAgain} = props

  const onPlayAgain = () => {
    onClickPlayAgain()
  }

  return (
    <div className="home-container">
      <div className="win-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
        <p style={{margin: '0px'}}>Your Score</p>
        <h1 style={{margin: '0px'}}>{score}</h1>
        <div>
          <button
            type="button"
            className="play-again-button"
            onClick={onPlayAgain}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
              className="reset"
            />
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default WinView
