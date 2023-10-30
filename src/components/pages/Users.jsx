import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import imageFile from "../../img/LINE_ALBUM_20231023_231028_1.jpg";
//import { useLocation } from "react-router-dom";　バケツリレーで使う
import { SecondaryButton } from "../atoms/button/SecondaryButton";
// providersとReactのuseContextを使う場合
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
// Recoilを使う場合
import { useRecoilState } from "recoil"; // 参照と更新関数両方＝usesRecoilState
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `倉田桃花${val + 1}`,
    image: imageFile,
    email: "xxxxx@gmail.com",
    tel: "090-88888-7777",
    company: {
      name: "テスト株式会社",
    },
    website: "https://twitter.com/freedomofme4",
  };
});

export const Users = () => {
  /**
   * stateバケツリレーするための記述
   * 　→　グローバルstate（provider)を使ったり
   * 　　　Recoilを使ったりするので、こんな方法は使わない
   *
   * const { state } = useLocation();
   * const isAdmin = state ? state.isAdmin : false;
   */

  //const { userInfo, setUserInfo } = useContext(UserContext); recoilを使う前のreactのuseContextを使った場合
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>ユーザ一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((obj) => (
          /**
           * これもバケツリレーの記述
           * <UserCard key={user.id} user={user} isAdmin={isAdmin} />
           */
          <UserCard key={obj.id} user={obj} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 35px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
