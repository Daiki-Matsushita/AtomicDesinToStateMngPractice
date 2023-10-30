import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

/*
box-shadow 色、X軸の距離、Y軸の距離、ぼかしの距離、どれだけ拡げるのか
*/
const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 10px;
`;
