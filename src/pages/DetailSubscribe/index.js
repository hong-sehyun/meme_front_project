/** 구독 페이지 */
import React from 'react';
import { DetailSubscribe_Box } from './DetailSubscribe_Box'
import { StyledSection, StyledTitle, NavBoxTest, SubscribeDiv, SubscribeTitle } from '../../styled'
export const DetailSubscribe = () => {

  const version1 = "demo"
  const price1 = "Free";
  const month1 = null;
  const discount1 = null;
  const list1 = ["내용1", "내용2", "내용3"];
  const bt1 = false;


  const version2 = "full version"
  const price2 = "500원";
  const month2 = "/ 1 month";
  const discount2 = null;
  const list2 = ["내용1", "내용2", "내용3"];
  const bt2 = true;


  const version3 = "full version"
  const price3 = "1000원";
  const month3 = "/ 3 months";
  const discount3 = "1500원";
  const list3 = ["내용1", "내용2", "내용3"];
  const bt3 = true;


  return (
    <StyledSection height="100vh">
      <NavBoxTest></NavBoxTest>
      <StyledTitle font="RedRose">Price</StyledTitle>
      <SubscribeTitle>지금 정치, 문화, 19금 등 모든 밈을 만나보세요</SubscribeTitle>
      <SubscribeDiv>
        <DetailSubscribe_Box version={version1} price={price1} month={month1} discount={discount1} list={list1} bt={bt1} />
        <DetailSubscribe_Box version={version2} price={price2} month={month2} discount={discount2} list={list2} bt={bt2} />
        <DetailSubscribe_Box version={version3} price={price3} month={month3} discount={discount3} list={list3} bt={bt3} />
      </SubscribeDiv>
    </StyledSection>
  );
}