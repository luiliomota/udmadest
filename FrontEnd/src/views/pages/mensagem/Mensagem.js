import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput, CFormText, CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cilTextSquare, cilUser} from '@coreui/icons'
import '../../../styleNow.css'

const Mensagem = () => {
  return (
    <div className="imagem_de_fundo_mensagem bg-light min-vh-100 d-flex flex-row text-center">
      <CContainer>
        <CRow className="justify-content-center mt-5">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Mensagem</h1>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Seu nome" autoComplete="name" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Seu email" autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilTextSquare} />
                    </CInputGroupText>
                    <CFormTextarea
                      type="text"
                      placeholder="Texto"
                      height="150px"
                      style={{height: "150px"}}
                      autoComplete="texto"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type="submit" href="/" color="secondary">Enviar</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Mensagem
