import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  /**
   ①Atomic Designのatomという一番小さい要素であるボタンを作ることから始めた
   そのために、comp→atoms→buttonという風に最小単位までファイル分けをした
   このatomという概念は一番小さい要素で汎用性を高めることが肝
   なので、ボタンの表示名はpropsで渡すという作るにする
   */
  /*
    ②App.jsで下記のように設定されて、【間の値】がpropsでメソッドの引数に渡される
    <PrimaryButton>テスト</PrimaryButton>

    const { children } = props;のように
    propsという変数から、childrenという内部の変数で【間の値】が取得できる
  */
  const { children } = props;
  return <SButton>{children}</SButton>;
};

/**
   ③スタイルも書くatom(最小単位)に直に当てる
   管理・保守がしやすい、サイトのデザインの統一
   他のデザインのボタンが必要な時は、別ファイルを作るべき

   ⑥これまで「styled.button`」で下記のようにデザインをhtmlに当ててたが
   const SButton = styled.button`
  　　background-color: #40514e;

    styled()で記述することで「BaseButton」のデザインを持っておきながら
    ＋のデザインを持つことができる
   */
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
