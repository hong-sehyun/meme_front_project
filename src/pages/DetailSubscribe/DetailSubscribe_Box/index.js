import React, { useState } from 'react';
// import { DetailSubscribe_BT as BT } from './DetailSubscribe_BT'
import axios from 'axios';
import { DetailSubscribe_version as Version } from './DetailSubscribe_version'
import { SubscribeBox, VersionDiv, PriceDiv, Price, Month, Discount, BtDiv } from '../../../styled'

export const DetailSubscribe_Box = ({ version, price, month, discount, list, bt }) => {
    const [token, setToken] = useState(null);

    const impKey = process.env.IMP_KEY;
    const impSecret = process.env.IMP_SECRET;

    const getIamportToken = async () => {
        try {
            const response = await axios.post('https://api.iamport.kr/users/getToken', {
                imp_key: impKey,
                imp_secret: impSecret,
            });

            setToken(response.data.response.access_token);
        } catch (error) {
            console.error('토큰 가져오기 에러', error);
        }
        
    };
    const handlePayment = async (price) => {
        try {
            // 1. 아임포트에서 토큰 가져오기
            const tokenResponse = await axios.post('https://api.iamport.kr/users/getToken', {
                imp_key: process.env.IMP_KEY, 
                imp_secret: process.env.IMP_SECRET 
            });
    
            const accessToken = tokenResponse.data.response.access_token;
    
            // 2. 가져온 토큰을 사용해 결제 진행
            const paymentData = {
                amount: price,
            };
    
            const paymentResponse = await axios.post('https://api.iamport.kr/subscribe/payments/onetime', paymentData, {
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            });
    
            if (paymentResponse.data.code === 0) {
                alert('결제가 완료되었습니다.');
            } else {
                alert('결제가 실패했습니다. 다시 시도해주세요.');
            }
    
        } catch (error) {
            console.error('결제 오류:', error);
            alert('결제 중 오류가 발생했습니다.');
        }
    };
    
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
                    <button onClick={() => {getIamportToken(); handlePayment();}}>구독하기</button>
                </BtDiv>
            }
        </SubscribeBox>
    )
}
