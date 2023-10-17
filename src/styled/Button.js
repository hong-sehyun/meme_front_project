import styled from 'styled-components'
import theme from './theme'

/**
 * @param color: 글자 색
 * @param background: 배경 색
 * @param borderColor: 테두리 색
 * @param width: 가로
 * @param height: 세로
 * @param font: 폰트종류
 * @param fontWeight: 폰트굵기
 */
export const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  font-family: ${props => props.font};
  font-weight: ${props => props.fontWeight || 'semibold'};
  border: 1px solid ${props => props.borderColor || 'lightgray'};
  cursor: pointer;
  color: ${props => props.color || 'gray'};
  width: ${props => props.width};
  height: ${props => props.height};
  max-width: 200px;
  max-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: ${props => props.background || 'white'};
`
