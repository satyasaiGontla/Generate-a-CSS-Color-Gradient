import {Component} from 'react'
import {
  GradientContainer,
  GradientGeneratorContainer,
  Heading,
  SubHeading,
  GradientDirectionList,
  ColorPickerContainer,
  CustomInputAndColorContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onGenerate = () => {
    const {firstColor, secondColor, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${firstColor}, ${secondColor}`,
    })
  }

  onChangeToColor = event => {
    this.setState({secondColor: event.target.value})
  }

  onChangeFromColor = event => {
    this.setState({firstColor: event.target.value})
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  render() {
    const {
      activeGradientDirection,
      firstColor,
      secondColor,
      gradientValue,
    } = this.state

    return (
      <GradientContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <GradientGeneratorContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <SubHeading>Choose Direction</SubHeading>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                gradientDirectionDetails={eachDirection}
                isActive={activeGradientDirection === eachDirection.value}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
              />
            ))}
          </GradientDirectionList>
          <SubHeading>Pick the Colors</SubHeading>
          <ColorPickerContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{firstColor}</ColorValue>
              <CustomInput
                onChange={this.onChangeFromColor}
                value={firstColor}
                type="color"
              />
            </CustomInputAndColorContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{secondColor}</ColorValue>
              <CustomInput
                onChange={this.onChangeToColor}
                value={secondColor}
                type="color"
              />
            </CustomInputAndColorContainer>
          </ColorPickerContainer>
          <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
        </GradientGeneratorContainer>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
