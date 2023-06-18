import React from 'react'
import {AppContent, AppFooter, AppSidebar} from '../components/index'
import AppHeaderRelatorio from "../components/AppHeaderRelatorio";

const DefaultLayoutRelatorio = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeaderRelatorio />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayoutRelatorio
