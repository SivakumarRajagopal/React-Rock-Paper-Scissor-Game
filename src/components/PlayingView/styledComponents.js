import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding: 20px;
  padding-bottom: 50px;
`

export const MainContentContainer = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const GameScoreContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`

export const GameHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const GameScoreContentHeading = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 30px;
  margin: 0;
`

export const GameScoreDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: #223a5f;
  padding: 20px 40px;
  border-radius: 8px;
`

export const GameScoreHeading = styled.p`
  font-size: 25px;
  margin: 0;
  font-family: 'Bree Serif';
`

export const GameScore = styled.p`
  font-size: 30px;
  margin: 0;
  font-family: 'Roboto';
`

export const CustomRulesButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  padding: 10px 20px;
  font-size: 16px;
  font-family: 'Bree Serif';
  font-weight: 600;
  border: none;
  border-radius: 3px;
  align-self: flex-end;
`

export const ChoicesListContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`

export const EachChoiceList = styled.li`
  width: 30%;
  margin-right: 30px;
`

export const EachChoiceButton = styled.button`
  background-color: transparent;
  border: none;
`

export const EndGameChoiceList = styled.li`
  width: 30%;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ChoiceHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: #ffffff;
`

export const GameEndContainerView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GameResultHeading = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
`

export const CustomPlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  padding: 10px 40px;
  font-size: 18px;
  font-family: 'Bree Serif';
  font-weight: 600;
  border: none;
  border-radius: 8px;
`
