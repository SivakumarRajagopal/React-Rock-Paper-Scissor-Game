import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import './index.css'

import {
  MainContainer,
  MainContentContainer,
  GameScoreContainer,
  GameHeaderContainer,
  GameScoreContentHeading,
  GameScoreDisplayContainer,
  GameScoreHeading,
  GameScore,
  CustomRulesButton,
  ChoicesListContainer,
  EndGameChoiceList,
  EachChoiceButton,
  ChoiceHeading,
  GameResultHeading,
  GameEndContainerView,
  CustomPlayAgainButton,
} from './styledComponents'
import GamePlayView from '../GamePlayView'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class PlayingView extends Component {
  state = {
    gameScore: 0,
    isGameOver: false,
    playersChoice: '',
    opponentChoice: '',
  }

  renderRulesButton = () => (
    <>
      <Popup
        trigger={
          <CustomRulesButton type="button" className="button">
            Rules
          </CustomRulesButton>
        }
        modal
        nested
      >
        {close => (
          <div className="modal">
            <RiCloseLine onClick={close} className="close" />
            <div className="content">
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
                className="rules-img"
              />
            </div>
          </div>
        )}
      </Popup>
    </>
  )

  onChangePlayerChoice = id => {
    const playerSelectedChoice = choicesList.find(
      eachChoice => eachChoice.id === id,
    )
    const randomChoiceNumber = Math.floor(Math.random() * 3)
    const latestScore = this.getLatestScore(
      playerSelectedChoice,
      choicesList[randomChoiceNumber],
    )
    console.log(latestScore)
    this.setState({
      gameScore: latestScore,
      playersChoice: playerSelectedChoice,
      opponentChoice: choicesList[randomChoiceNumber],
      isGameOver: true,
    })
  }

  renderDisplayChoiceContainer = () => (
    <>
      <ChoicesListContainer>
        {choicesList.map(eachChoice => (
          <GamePlayView
            key={eachChoice.id}
            eachChoiceDetails={eachChoice}
            onChangePlayerChoice={this.onChangePlayerChoice}
          />
        ))}
      </ChoicesListContainer>
    </>
  )

  onChangeGameOver = () => {
    this.setState({isGameOver: false})
  }

  renderGameResultViewContainer = () => {
    const {playersChoice, opponentChoice} = this.state
    console.log(playersChoice)
    console.log(opponentChoice)

    let gameResult = ''
    console.log(opponentChoice.id)
    console.log(playersChoice.id)

    if (opponentChoice.id === 'ROCK') {
      if (playersChoice.id === 'PAPER') {
        gameResult = 'YOU WON'
      } else if (playersChoice.id === 'ROCK') {
        gameResult = 'IT IS DRAW'
      } else {
        gameResult = 'YOU LOSE'
      }
    }

    if (opponentChoice.id === 'PAPER') {
      if (playersChoice.id === 'SCISSORS') {
        gameResult = 'YOU WON'
      } else if (playersChoice.id === 'PAPER') {
        gameResult = 'IT IS DRAW'
      } else {
        gameResult = 'YOU LOSE'
      }
    }

    if (opponentChoice.id === 'SCISSORS') {
      if (playersChoice.id === 'ROCK') {
        gameResult = 'YOU WON'
      } else if (playersChoice.id === 'SCISSORS') {
        gameResult = 'IT IS DRAW'
      } else {
        gameResult = 'YOU LOSE'
      }
    }

    return (
      <>
        <GameEndContainerView>
          <ChoicesListContainer>
            <EndGameChoiceList key="playersChoiceOption">
              <ChoiceHeading>YOU</ChoiceHeading>
              <EachChoiceButton data-testid="playersChoice">
                <img
                  src={playersChoice.imageUrl}
                  alt="your choice"
                  className="choice-img"
                />
              </EachChoiceButton>
            </EndGameChoiceList>
            <EndGameChoiceList key="opponentChoiceOption">
              <ChoiceHeading>OPPONENT</ChoiceHeading>
              <EachChoiceButton data-testid="opponentChoice">
                <img
                  src={opponentChoice.imageUrl}
                  alt="opponent choice"
                  className="choice-img"
                />
              </EachChoiceButton>
            </EndGameChoiceList>
          </ChoicesListContainer>
          <GameResultHeading>{gameResult}</GameResultHeading>
          <CustomPlayAgainButton onClick={this.onChangeGameOver}>
            PLAY AGAIN
          </CustomPlayAgainButton>
        </GameEndContainerView>
      </>
    )
  }

  getLatestScore = (playersChoice, opponentChoice) => {
    const {gameScore} = this.state
    let latestScore = gameScore
    console.log(playersChoice)
    console.log(opponentChoice)

    let gameResult = ''

    if (opponentChoice.id === 'ROCK') {
      if (playersChoice.id === 'PAPER') {
        gameResult = 'YOU W0N'
      } else if (playersChoice.id === 'ROCK') {
        gameResult = 'IT IS DRAW'
      } else {
        gameResult = 'YOU LOSE'
      }
    }

    if (opponentChoice.id === 'PAPER') {
      if (playersChoice.id === 'SCISSORS') {
        gameResult = 'YOU W0N'
      } else if (playersChoice.id === 'PAPER') {
        gameResult = 'IT IS DRAW'
      } else {
        gameResult = 'YOU LOSE'
      }
    }

    if (opponentChoice.id === 'SCISSORS') {
      if (playersChoice.id === 'ROCK') {
        gameResult = 'YOU W0N'
      } else if (playersChoice.id === 'SCISSORS') {
        gameResult = 'IT IS DRAW'
      } else {
        gameResult = 'YOU LOSE'
      }
    }
    console.log(gameResult)

    switch (gameResult) {
      case 'YOU W0N':
        latestScore += 1
        return latestScore

      case 'YOU LOSE':
        latestScore -= 1
        return latestScore

      case 'IT IS DRAW':
        return latestScore

      default:
        console.log(latestScore)
        console.log(gameResult)
        return null
    }
  }

  renderChoiceListContainer = () => {
    const {isGameOver} = this.state
    return (
      <>
        {isGameOver
          ? this.renderGameResultViewContainer()
          : this.renderDisplayChoiceContainer()}
      </>
    )
  }

  renderScoreHeaderContainer = () => {
    const {gameScore} = this.state

    return (
      <>
        <GameScoreContainer>
          <GameHeaderContainer>
            <GameScoreContentHeading>
              Rock Paper Scissors
            </GameScoreContentHeading>
          </GameHeaderContainer>
          <GameScoreDisplayContainer>
            <GameScoreHeading>Score</GameScoreHeading>
            <GameScore>{gameScore}</GameScore>
          </GameScoreDisplayContainer>
        </GameScoreContainer>
      </>
    )
  }

  render() {
    return (
      <MainContainer>
        <MainContentContainer>
          {this.renderScoreHeaderContainer()}
          {this.renderChoiceListContainer()}
          {this.renderRulesButton()}
        </MainContentContainer>
      </MainContainer>
    )
  }
}

export default PlayingView
