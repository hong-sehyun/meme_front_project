import styled from 'styled-components'
import theme from '../theme'


export const SubscribeTitle = styled.div`
color: #BB99CD;
font-size: 24px;
font-weight: 700;
text-align: center;
margin-bottom: 70px;
margin-top: 70px;
`
export const SubscribeDiv = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 20px;
@media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const SubscribeBox = styled.div`
border-radius: 10px;
border: 1px solid #643579;
padding: 20px;

background-color: #FAFAFA;
`

export const VersionDiv = styled.div`
display: inline-block; 
border-radius: 5px;
border: 1px solid #3D1860;
padding: 5px;
margin-bottom: 10px;
color: #3D1860;
`
export const BtDiv = styled.div`
display: flex;
justify-content: center;
`
export const SubscribeBT = styled.div`
border-radius: 7px;
display: inline-block; 
background-color: #7929FF;
padding:7px;
color: white;
margin-top: 20px;
`

export const PriceDiv = styled.div`
font-family: 'Red Rose', serif;
display : flex;
flex-direction: row;
margin-bottom: 10px;
padding-bottom: 10px;
border-bottom: 1px solid #643579;
`

export const Price = styled.div`
font-size: 34px;
font-weight: 700;
`

export const Month = styled.div`
color: #4A4A4A;
`


export const Discount = styled.div`
text-decoration: line-through;
height: 15px
`

