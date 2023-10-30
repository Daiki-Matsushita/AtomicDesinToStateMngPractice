import React, { createContext, useState } from "react";

/**
 * よく値を提供するものをproviderとreactでは読んだりするらしいので覚えておくように
 *
 *
 */

// 初期化
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  /**
   * useStateはreactのフックス（既存メソッド）で
   * 配列の形で2番目をstateを更新するためのメソッド
   * 1番目をその状態変化の変数（state）となる。
   */
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
