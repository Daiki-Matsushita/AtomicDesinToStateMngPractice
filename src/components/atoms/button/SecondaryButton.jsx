import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

/**
   ④Primaryと違うのはbackground-colorだけなので
   それ以下はサイトとしてボタンのデザインの、デザインの統一をしたい場合
   共通化したほうがいい

   例えば、サイト全体でpaddingを大きくしたい場合、個別でデザイン持っていると
   全ボタンファイルを一つ一つ直さないと行けなくなる
   →★ボタン固有のデザインと共通デザインを分けることは大切

  background-color: #11999e;
  color: #fff;
  padding: 6px 24px;
  border: none;
  outline: none;
  border-radius: 99999px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;

   */
const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
