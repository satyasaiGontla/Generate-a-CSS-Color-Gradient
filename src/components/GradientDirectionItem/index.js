import {CustomButton, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, isActive, clickGradientDirectionItem} = props
  const {displayText, value} = gradientDirectionDetails
  const onClickGradientDirectionItem = () => {
    clickGradientDirectionItem(value)
  }
  return (
    <ListItem>
      <CustomButton
        isActive={isActive}
        type="button"
        onClick={onClickGradientDirectionItem}
      >
        {displayText}
      </CustomButton>
    </ListItem>
  )
}

export default GradientDirectionItem
