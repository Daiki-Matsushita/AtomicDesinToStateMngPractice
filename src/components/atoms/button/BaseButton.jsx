import styled from "styled-components";

/*
  ⑤他のコンポーネントでも使えるボタンのベースデザインである
*/

export const BaseButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  border: none;
  outline: none;
  border-radius: 99999px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
