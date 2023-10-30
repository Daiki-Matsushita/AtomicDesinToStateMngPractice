import styled from "styled-components";

export const Input = (props) => {
  // デフォルトで空文字指定しておく
  // propsを渡してplaceholderをパラメータで渡して適応する
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;
