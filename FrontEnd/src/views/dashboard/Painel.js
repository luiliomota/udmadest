import React from 'react'

import {CCard, CCardBody, CCardLink, CCardTitle, CCol, CRow,} from '@coreui/react'
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Painel = (withCharts) => {

  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }

  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const varTitle = {
    'fontSize': '2rem',
    'color': 'black',
    'textAlign': 'center',
  }

  const varLink = {
    'textDecoration': 'none',
  }

  const varClasse = "border-dark bg-dark bg-opacity-50 text-center font-monospace"

    return (
    <>
      <CCard className="mb-4">
        <CCardBody >
          <CRow>
            <CCol className="mb-4" sm={12} lg={4}>
              <CCard className={varClasse}>
                <CCardBody>
                  <CCardTitle style={varTitle}  >
                    Cadastro
                  </CCardTitle>
                  <CCard>
                    <Link style={varLink} to="/cadastro/congregacao">
                      Congregação
                    </Link>
                  </CCard>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol className="mb-4" sm={12} lg={4}>
              <CCard className={varClasse} >
                <CCardBody >
                  <CCardTitle style={varTitle} >
                    Lançamento
                  </CCardTitle>
                  <CCard>
                    <Link style={varLink} to="/lancamento/contribuicao">
                      Contribuição
                    </Link>
                  </CCard>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol className="mb-4" sm={12} lg={4}>
              <CCard className={varClasse} >
                <CCardBody >
                  <CCardTitle style={varTitle} >
                    Relatório
                  </CCardTitle>
                  <CRow>
                    <CCol sm={12} lg={6}>
                      <CCard className="mb-1">
                        <Link style={varLink} to="/relatorio/anual">
                          Anual
                        </Link>
                      </CCard>
                    </CCol>
                    <CCol sm={12} lg={6}>
                      <CCard>
                        <Link style={varLink} to="/relatorio/mensal">
                          Mensal
                        </Link>
                      </CCard>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

Painel.propTypes = {
  withCharts: PropTypes.bool,
}
export default Painel
