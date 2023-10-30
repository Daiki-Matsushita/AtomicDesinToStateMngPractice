import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { HeaderOnly } from "../components/templates/HeaderOnly";

/**
 * ★☆★Context使えば、stateのバケツリレーしなくて済むよの巻き★☆★
 *
 * ReactRouter使う場合は全て、<BrowserRouter>で囲ってあげれば、その機能が使えるお
 * って話をしたと思う。それと同じノリでContextを使う場合はproviderという物で囲えばいい
 *
 */

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
