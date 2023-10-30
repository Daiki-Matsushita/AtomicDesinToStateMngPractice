import React, { memo } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { Input } from "../atoms/input/Input";

// menoを使わないと、差分ないのに、切り替えボタンでの再レンダリングが走る
export const SearchInput = memo(() => {
  console.log("SearchInput");
  return (
    /**
    ①最初はmolecuresを使わず
      <div>
        <input placeholder="検索条件を入力" />
        <PrimaryButton>検索</PrimaryButton>
      </div>
    */
    /**
      ④molecules化するために
        コンテナで囲い、inputを作り、検索はラッパーで囲いスタイルを当てていく
    */
    <>
      <div>
        <input placeholder="検索条件を入力" />
        <PrimaryButton>検索</PrimaryButton>
      </div>
      <SContainer>
        <Input placeholder="検索条件を入力" />
        <SButtonWrapper>
          <SecondaryButton>検索</SecondaryButton>
        </SButtonWrapper>
      </SContainer>
    </>
  );
});
/**
    ③molecules化するために
      １。SButtonWrapperというスタイルを作り、inputと検索ボタンの間を空ける

    　２。SContainerというスタイルを作り、横並びにしたり、真ん中よりにする
*/
const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
