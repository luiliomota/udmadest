import {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardText,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {cilLockLocked, cilUser} from '@coreui/icons';
import '../../../styleNow.css';
import imgLogo from "./../../../assets/images/logo.png";
import {Context} from "../../../context/auth";

function Login() {

  const { mensagens, handleLogin } = useContext(Context);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="imagem_de_fundo_login bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="text-center justify-content-center">
          <CCol md={6}>
            <img width="50%" src={imgLogo}/>
          </CCol>
        </CRow>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCardGroup>
              <CCard style={{backgroundColor: "rgb(157,157,157,50%)"}} className="p-2">
                <CCardBody>
                  <CForm>
                    <h2>Login</h2>
                    <p className="text-medium-emphasis">Entre em sua conta</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                          placeholder="Username"
                          autoComplete="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup>
                      <CCardText
                      color="error">
                        {mensagens}
                      </CCardText>
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                          <CButton color="secondary" className="px-4"
                                   onClick={() => handleLogin({username, password})}
                          >
                            Entrar
                          </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Esqueceu a senha?
                        </CButton>
                      </CCol>
                    </CRow>
                    <CRow>
                      <Link to="/register">
                        <CButton color="secondary" className="mt-3" active tabIndex={-1}>
                          Registrar-se Agora!
                        </CButton>
                      </Link>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/*<CCard className="text-bg-light py-2" style={{width: '100%' }}>*/}
              {/*  <CCardBody className="text-center">*/}
              {/*    <div>*/}
              {/*      <h2>Inscrever-se</h2>*/}
              {/*      <Link to="/register">*/}
              {/*        <CButton color="secondary" className="mt-3" active tabIndex={-1}>*/}
              {/*          Registrar Agora!*/}
              {/*        </CButton>*/}
              {/*      </Link>*/}
              {/*    </div>*/}
              {/*    <div>*/}
              {/*      <img width="50%" src={imgLogo}/>*/}
              {/*    </div>*/}
              {/*  </CCardBody>*/}
              {/*</CCard>*/}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
