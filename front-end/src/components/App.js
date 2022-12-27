import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";

import { path } from "../static/Router";
import {
  HomePage,
  IntroducePage,
  GiftPage,
  MenuPage,
  LoginPage,
  SignUpPage,
} from "../static/Pages";
import "./../assets/styles/App.scss";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const App = () => {
  return (
    <div className="App">
      <Routes>
        {Object.values(path).map((route) => (
          <Route
            key={route}
            path={route}
            element={
              <Layout className="h-full bg-white">
                <Header />
                {route === path.home ? <HomePage /> : null}
                {route === path.introduce ? <IntroducePage /> : null}
                {route === path.menu ? <MenuPage /> : null}
                {route === path.gift ? <GiftPage /> : null}
                {route === path.login ? <LoginPage /> : null}
                {route === path.signup ? <SignUpPage /> : null}
                <Footer />
              </Layout>
            }
          >
            {/* ROUTE MENU */}
            {route === path.menu ? (
              <Route
                key={route + "/menuid"}
                path=":menuid"
                element={<MenuPage />}
              >
                <Route
                  key={route + "/productid"}
                  path=":productid"
                  element={<MenuPage />}
                />
              </Route>
            ) : null}
          </Route>
        ))}
        <Route
          path="*"
          element={
            <Layout className="h-full">
              <Header />
              <HomePage />
              <Footer />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
