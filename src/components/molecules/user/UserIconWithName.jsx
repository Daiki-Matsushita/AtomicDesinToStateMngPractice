import React, { memo, useContext } from "react";
import styled from "styled-components";

import { UserContext } from "../../../providers/UserProvider";
// recoil　値を参照するだけ、更新関数は不要なので、別のものを使う
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

/*
画像のulrと名前さえ渡せば、こんな感じで表示できるコンポーネントできました。
画像の大きさなども渡せば、まちまちの大きさにできる
が、サイトデザイン乱雑になる
*/
export const UserIconWithName = memo((props) => {
  console.log("UserIconWithName");
  /**
   * バケツリレーの時は下記のように,isAdminを受けから受け取り受け取りしていた
   * const { image, name, isAdmin } = props;
   */
  const { image, name } = props;
  //const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImg height={160} width={170} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
