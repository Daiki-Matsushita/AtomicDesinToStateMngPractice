import XXX from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
// recoilを使う前
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
// recoilを使うやり方
import { useSetRecoilState } from "recoil"; //今度は逆に更新関数だけを使う
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  // ★★Recoilを使うと更新関数を受け取っているだけの場合は、配下は再レンダリングされないという便利機能までついている
  const setUserInfo = useSetRecoilState(userState);

  /**
   * ★☆★stateのバケツリレー厳しいよって話★☆★
   *
   * Header.jsxの<SLink to="/users">Users</SLink>のように
   * react-router-domのLinkというメソッドを使って、画面遷移をするやり方もある
   *
   * 今回はuseHistoryというクラスのpushというメソッドを使って
   * pathnameと、stateを定義するやり方を使った
   *
   * しかし、このやり方だと、コンポーネント分けが激しいとstateのバケツリレーをすることになる
   * なので、Contextという機能を使う　→　Router.jsxを見てくれ
   *
   * const onClickAdmin = () =>
   *    history.push({ pathname: "/users", state: { isAdmin: true } });
   * const onClickGeneral = () =>
   *    history.push({ pathname: "/users", state: { isAdmin: false } });
   *
   */
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザ</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザ</SecondaryButton>
    </SContainer>
  );
};

const SContainer = XXX.div`
  text-align: center;
`;
