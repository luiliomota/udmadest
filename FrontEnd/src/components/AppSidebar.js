import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import {AppSidebarNav} from './AppSidebarNav'
import {sygnet} from '../assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import {logoUdmadest} from "../assets/brand/logoUdmadest";

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const vars = {
    '--cui-sidebar-bg': "rgb(255,255,255)",
    '--cui-sidebar-nav-title-color': "rgb(157,0,0)",
    '--cui-sidebar-nav-link-icon-color': "rgb(157,0,0)",
    '--cui-sidebar-nav-link-hover-icon-color': "rgb(157,157,157)",
    '--cui-sidebar-nav-link-active-icon-color': "rgb(157,0,0)",
    '--cui-sidebar-nav-link-color': "rgb(157,0,0)",
    '--cui-sidebar-nav-link-hover-color': "rgb(157,157,157)",
    '--cui-sidebar-nav-link-active-color': "rgb(157,0,0)",
    '--cui-sidebar-nav-group-toggle-show-color': "rgb(157,0,0)",
    '--cui-sidebar-nav-group-indicator': "url(\"data:image/svg+xml,%3csvg " +
        "xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' " +
        "fill='rgba%2857, 0, 0, 0.6%29'%3e%3cpath fill-rule='evenodd' " +
        "d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 " +
        ".708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")",
    '--cui-sidebar-nav-group-indicator-hover': "url(\"data:image/svg+xml,%3csvg " +
        "xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' " +
        "fill='rgba%28157, 157, 157, 0.6%29'%3e%3cpath fill-rule='evenodd' " +
        "d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 " +
        ".708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")",
  }

  return (
    <CSidebar
      style={vars}
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand style={{background: "white"}} className="d-none d-md-flex" to="/">
        <CIcon className="sidebar-brand-full" icon={logoUdmadest} height={100} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      <CSidebarNav >
        <SimpleBar >
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
