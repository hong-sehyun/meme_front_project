/** 상세검색 페이지 */
import { DetailSearch_Input as Input } from "./DetailSearch_Input"
import { DetailSearch_Result as Result } from "./DetailSearch_Result"
import { InputContainer } from '../../styled'
import { StyledSection, StyledDiv } from "../../styled"
export const DetailSearch = () => {
  return (
    <StyledSection>
      <StyledDiv width="70%" alignitems="center" style={{ flexDirection: 'column' }}>
        <InputContainer>
          <h1>Discover the Popular Memes from a Specific Year!</h1>
          <Input />
        </InputContainer>
      </StyledDiv>

      <StyledDiv width="100%" justifycontents="left">
        <Result />
      </StyledDiv>
    </StyledSection>

  )
}
