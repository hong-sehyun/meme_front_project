import styled from 'styled-components'
import theme from './theme'

/**
 * @param textSize: 폰트 크기 지정
 * @param font: font 이름 ex) font="RedRose", font="Inter", font="PressStart2P", font="poppins"
 * @param bold: bold
 * @param color: 텍스트 색상
 * @param width: width
 * @param height: height
 */
export const Title = styled.div`
  font-size: ${props => props.textSize || theme.fontSize.xl3};
  font-family: ${props => props.font};
  font-weight: ${props => props.bold || 'bold'};
  color: ${props => props.color};
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
`
/**
 * @param textSize: 폰트 크기 지정
 * @param font: font 이름 ex) font="RedRose", font="Inter", font="PressStart2P", font="poppins"
 * @param bold: bold
 * @param color: 텍스트 색상
 * @param width: width
 * @param height: height
 */
export const SubTitle = styled.div`
  font-size: ${props => props.textSize || theme.fontSize.lg};
  font-family: ${props => props.font};
  font-weight: ${props => props.bold || 'semibold'};
  color: ${props => props.color};
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
`

/** Nav바 자리 임의로 box만 둘려고 만듬 */
export const NavBoxTest = styled.div`
  width: 100%;
  height: 100px;
  background-color: #e91b1b;
`

/** community, mypage의 title style */
export const StyledTitle = styled.div`
  font-size: 60px;
  font-family: ${props => props.font};
  font-weight: ${props => props.bold || 'bold'};
  width: 100%;
  height: 100px;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #643579;
`
