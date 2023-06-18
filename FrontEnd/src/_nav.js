import React from 'react'
import CIcon from '@coreui/icons-react'
import {cilAccountLogout, cilHome, cilMoney, cilNotes, cilPencil,} from '@coreui/icons'
import {CNavGroup, CNavItem} from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'INICIO',
    to: '/painel',
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
      {
        component: CNavItem,
        name: 'Diretoria',
        to: '/cadastro/diretoria',
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
        name: 'Contribuição',
        to: '/lancamento/contribuicao',
      },
      {
        component: CNavItem,
        name: 'Saida',
        to: '/lancamento/saida',
      },
      {
        component: CNavItem,
        name: 'Considerações',
        to: '/lancamento/consideracao',
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
        name: 'Contribuição',
        to: '/relatorio/contribuicao',
      },
      {
        component: CNavItem,
        name: 'Saida',
        to: '/relatorio/saida',
      },
      {
        component: CNavItem,
        name: 'Geral',
        to: '/relatorio/geral',
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
