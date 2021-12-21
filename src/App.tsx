import { Refine } from "@pankod/refine";
import routerProvider from "@pankod/refine-react-router";

import "styles/antd.less";
import simpleRestDataProvider from "@pankod/refine-simple-rest";
import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "components/layout";

function App() {
  const API_URL = "https://api.fake-rest.refine.dev";
  const dataProvider = simpleRestDataProvider(API_URL);
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider}
      resources={[
        {
          name: "posts",
          list: PostList,
          create: PostCreate,
          edit: PostEdit,
          show: PostShow,
        },
      ]}
      Title={Title}
      Header={Header}
      Sider={Sider}
      Footer={Footer}
      Layout={Layout}
      OffLayoutArea={OffLayoutArea}
    ></Refine>
  );
}

export default App;
