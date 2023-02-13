import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cilMenu} from '@coreui/icons'
import {AppHeaderDropdown} from './header/index'
import {logoUdmadest} from "../assets/brand/logoUdmadest";
import {NavLink} from "react-router-dom";

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none">
          <CIcon icon={logoUdmadest} height={100} alt="logoUdmadest" />
        </CHeaderBrand>
        {/*<CHeaderNav className="d-none d-md-flex me-auto">*/}
          {/*<CNavItem>*/}
          {/*  <CNavLink className="font-monospace" to="/painel" component={NavLink}>*/}
          {/*    INICIO*/}
          {/*  </CNavLink>*/}
          {/*</CNavItem>*/}
          {/*<CNavItem>*/}
          {/*  <CNavLink href="#">Usuários</CNavLink>*/}
          {/*</CNavItem>*/}
          {/*<CNavItem>*/}
          {/*  <CNavLink href="#">Configurações</CNavLink>*/}
          {/*</CNavItem>*/}
        {/*</CHeaderNav>*/}
        <CHeaderNav>
          {/*<CNavItem>*/}
          {/*  <CNavLink href="#">*/}
          {/*    <CIcon icon={cilBell} size="lg" />*/}
          {/*  </CNavLink>*/}
          {/*</CNavItem>*/}
          {/*<CNavItem>*/}
          {/*  <CNavLink href="#">*/}
          {/*    <CIcon icon={cilList} size="lg" />*/}
          {/*  </CNavLink>*/}
          {/*</CNavItem>*/}
          {/*<CNavItem>*/}
          {/*  <CNavLink href="#">*/}
          {/*    <CIcon icon={cilEnvelopeOpen} size="lg" />*/}
          {/*  </CNavLink>*/}
          {/*</CNavItem>*/}
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      {/*<CContainer fluid>*/}
      {/*  <AppBreadcrumb />*/}
      {/*</CContainer>*/}
    </CHeader>
  )
}

export default AppHeader
