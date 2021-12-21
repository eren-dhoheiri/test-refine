import { Refine, AuthProvider } from "@pankod/refine";
import routerProvider from "@pankod/refine-react-router";
import "styles/antd.less";
import simpleRestDataProvider from "@pankod/refine-simple-rest";
import { PostList } from "pages/posts";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "components/layout";
import { Login } from 'pages/login';


const API_URL = "https://stg-customer.service.efishery.com/leads";
const API_VERIFY_GOOGLE = `https://stg-auths.service.efishery.com`;

const App: React.FC = () => {

  const authProvider: AuthProvider = {
    login: () => {
      window.location.href = `${API_VERIFY_GOOGLE}/google/login?redirect_url=http://localhost:3000`
      return Promise.resolve();
    },
    logout: () => {
      localStorage.removeItem("token");
      return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () =>
      localStorage.getItem("token") ? Promise.resolve() : Promise.reject(),
    getPermissions: () => Promise.resolve(["admin"])
  };

  return (
    <Refine
      routerProvider={routerProvider}
      LoginPage={Login}
      authProvider={authProvider}
      dataProvider={simpleRestDataProvider(API_URL)}
      resources={[
        {
          name: "posts",
          list: PostList
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
