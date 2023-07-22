import React, {Component, Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import './scss/style.scss'
import routes from "./routes";
import PrivateRoute from "./components/PrivateRoute";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
      const getRoutes = (allRoutes) =>
        allRoutes.map((route) => {
            if (route.route) {
                if (route.isPrivate) {
                    return (
                        <Route exact path={route.route} element={<PrivateRoute perfis={route.perfis}/>}>
                            <Route exact path={route.route} element={route.component}/>;
                        </Route>
                    );
                } else {
                    return <Route exact path={route.route} element={route.component}/>;
                }
            }
            return null;
        });

      return (
        <Suspense fallback={loading}>
          <Routes>
            {getRoutes(routes)}
            <Route exact path="/login" name="Página de Login" element={<Login/>}/>
            <Route exact path="/register" name="Página de registro" element={<Register/>}/>
            <Route path="*" name="home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
    )
  }
}
export default App

