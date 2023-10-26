/** 구독 페이지 */
import React, { useState } from 'react';
import axios from 'axios';

export const DetailSubscribe_payment = () => {
  const [subscriptionStatus, setSubscriptionStatus] = useState('무료버전 사용 중');

  const impKey = process.env.IMP_KEY;
  const impSecret = process.env.IMP_SECRET;
  require('dotenv').config();
  const handleSubscription = async () => {
    try {
      const response = await axios.post('https://api.iamport.kr/users/getToken', {
        imp_key: impKey,
        imp_secret: impSecret,
      });

      const accessToken = response.data.response.access_token;

      console.log("response ", response);
      const paymentData = {
        amount: 1000, // 결제 금액
      };

      const paymentResponse = await axios({
        url: 'https://api.iamport.kr/subscribe/payment',
        method: "get", // GET method
        headers: {
          // "Content-Type": "application/json"
          "Content-Type": "application/json",
          // 발행된 액세스 토큰
          "Authorization": `Bearer ${accessToken}`,
        }
      });

      if (paymentResponse.data.code === 0) {
        setSubscriptionStatus('Subscribed');
      } else {
      }
    } catch (error) {
      console.error('구독 결제 중 오류 발생:', error.response.data);
    }
  };

  // return (
  //   <div>
  //     <button onClick={handleSubscription}>구독하기</button>
  //     <p>구독 상태: {subscriptionStatus}</p>
  //   </div>
  // );
}