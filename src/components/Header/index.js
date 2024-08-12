import {Component} from 'react'

import './index.css'

class Header extends Component {
  render() {
    const {countdown, score} = this.props
    return (
      <div className="header">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
            alt="website logo"
            className="website-logo"
          />
        </div>
        <ul
          style={{display: 'flex', alignItems: 'center', listStyleType: 'none'}}
        >
          <li>
            <p className="score">
              Score: <span className="score-count">{score}</span>
            </p>
          </li>
          <li style={{display: 'flex', alignItems: 'center'}}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer"
            />
            <p className="timer-text">{countdown} sec</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header
