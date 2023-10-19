import React from 'react'
import { DetailSubscribe_BT as BT } from './DetailSubscribe_BT'
import { DetailSubscribe_version as Version } from './DetailSubscribe_version'
import { SubscribeBox, VersionDiv, PriceDiv, Price, Month, Discount, BtDiv } from '../../../styled'

export const DetailSubscribe_Box = ({ version, price, month, discount, list, bt }) => {

    return (
        <SubscribeBox>
                <VersionDiv>
                    <Version version={version} />
                </VersionDiv>
                <Discount>
                    {discount}
                </Discount>
            <PriceDiv>
                <Price>
                    {price}
                </Price>
                <Month>
                    {month}
                </Month>
            </PriceDiv>
            <ul>
                {list.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            {bt && 
            <BtDiv>
                <BT />
            </BtDiv>
            }
        </SubscribeBox>
    )
}
