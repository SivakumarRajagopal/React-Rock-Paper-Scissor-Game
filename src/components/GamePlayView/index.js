import {EachChoiceList, EachChoiceButton} from './styledComponent'
import './index.css'

const GamePlayView = props => {
  const {eachChoiceDetails, onChangePlayerChoice} = props
  const {id, imageUrl} = eachChoiceDetails

  const onClickChangeChoice = () => {
    onChangePlayerChoice(id)
  }

  return (
    <>
      <EachChoiceList>
        <EachChoiceButton
          data-testid={`${id.toLowerCase()}Button`}
          onClick={onClickChangeChoice}
          value={id}
        >
          <img src={imageUrl} alt={id} className="choice-img" />
        </EachChoiceButton>
      </EachChoiceList>
    </>
  )
}

export default GamePlayView
