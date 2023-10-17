import styled from 'styled-components'
import theme from './theme'

/** 배경 입힌 section
 * @param width: 가로
 * @param height: 세로
 */
export const StyledSection = styled.section`
  background-color: #f5edf7;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
`

/** 중앙 정렬 선택 div */
export const StyledDiv = styled.div`
  display: flex;
  justify-content: ${props => props.justifycontents || 'center'};
  align-items: ${props => props.alignitems || 'center'};
  margin: auto;
  width: ${props => props.width};
  height: ${props => props.height};
`
