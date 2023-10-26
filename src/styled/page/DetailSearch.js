import styled from 'styled-components'
import theme from '../theme'

// 검색
export const SearchContainer = styled.div`
  position: relative;
  width: 300px;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 2px solid #BB99CD;
  border-radius: 6px;
`

export const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 8px;
`

// 선택
export const SelectDiv = styled.div`
position: relative;
display: inline-block;
`

export const Select = styled.select`
appearance: none; 
  -webkit-appearance: none; 
  -moz-appearance: none; 
  background-color: #fff;
  border: 2px solid #BB99CD;
  padding: 8px 30px 8px 8px; 
  border-radius: 6px;
`

export const CustomArrow = styled.div`
  position: absolute;
  right: 10px;
  top: 55%;
  transform: translateY(-50%);
  pointer-events: none;
`

// 전체 검색창
export const InputContainer = styled.div`
border-top: 1px solid #BB99CD;
border-bottom: 1px solid #BB99CD;
padding-top: 10px;
padding-bottom: 10px;
background-color: #FAFAFA; 
padding-right: 70px;
padding-left: 70px
`

export const InputDiv = styled.div`
display:flex;
flex-direction:row;
padding-top: 5px;
gap: 10px;
padding-top: 20px;
`