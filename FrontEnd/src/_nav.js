import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilAccountLogout,
  cilBell, cilCalculator,
  cilChartPie,
  cilCursor, cilDescription,
  cilDrop, cilHome, cilMoney,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import {CNavGroup, CNavItem, CNavTitle} from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'INICIO',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Cadastro',
    to: '/cadastro',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Congregação',
        to: '/cadastro/congregacao',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Lançamento',
    to: '/lancamento',
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Carnê / Oferta',
        to: '/cadastro/congregacao',
      },
    ],
  },
  // {
  //   component: CNavTitle,
  //   name: 'Relatório',
  // },
  {
    component: CNavGroup,
    name: 'Relatório',
    to: '/relatorio',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Anual',
        to: '/relatorio/anual',
      },
      {
        component: CNavItem,
        name: 'Mensal',
        to: '/relatorio/mensal',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Sair',
    to: '/login',
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />
  }
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://www.alf5.com.br/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
