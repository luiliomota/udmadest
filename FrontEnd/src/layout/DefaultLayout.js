import React, {useContext} from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import {Context} from "../context/auth";
import {useNavigate} from "react-router-dom";
const Login = React.lazy(() => import('./../views/pages/login/Login'));

const DefaultLayout = () => {
  const navigate = useNavigate();
  const {authenticated} = useContext(Context);
  if (authenticated) {
      return (
          <div>
              <AppSidebar/>
              <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                  <AppHeader/>
                  <div className="body flex-grow-1 px-3">
                      <AppContent/>
                  </div>
                  <AppFooter/>
              </div>
          </div>
      );
  } else {
      return (
          <Login />
      )
  }
}

export default DefaultLayout
