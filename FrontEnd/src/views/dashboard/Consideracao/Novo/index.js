import React, {useState} from 'react'

import {CButton, CCard, CCardBody, CCol, CFormInput, CRow, CTableBody, CTableDataCell,} from '@coreui/react'
import api from "../../../../Api";
import "../../../../styleNow.css";
import {useNavigate} from "react-router-dom";

const NovaConsideracao = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const navigate = useNavigate();
  const varCol = {
      'textAlign': "-webkit-center",
  }
  const [consideracao, setConsideracao] = useState({
      descricao: "",
      mesReferencia: "",
  });

    function cadastrar() {
    api.post("/api/consideracao",consideracao)
        .then((response) => {
            console.table(response);
            navigate('/lancamento/consideracao');
        })
        .catch((error) => console.error(error))
  }

  return (
        <CRow>
                <CCard style={{border: "none",background: "transparent"}} className="align-items-center text-center mb-4">
                    <CCardBody >
                            <CTableBody>
                                <CRow>
                                    <CCol style={varCol} className="mb-1" sm={12} lg={6}>
                                        <CTableDataCell>
                                            <CFormInput
                                                type="text"
                                                label="Descrição"
                                                value={consideracao.descricao}
                                                onChange={(e) => {
                                                    setConsideracao({...consideracao, descricao: e.target.value})
                                                }
                                                }
                                            />
                                        </CTableDataCell>
                                    </CCol>
                                    <CCol style={varCol} className="mb-1" sm={12} lg={3}>
                                        <CTableDataCell>
                                            <CFormInput
                                                type="date"
                                                label="Data"
                                                value={consideracao.mesReferencia}
                                                onChange={(e) => {
                                                    setConsideracao({...consideracao, mesReferencia: e.target.value})
                                                }
                                                }
                                            />
                                        </CTableDataCell>
                                    </CCol>
                                </CRow>
                            </CTableBody>
                        <CCard style={{border: "none",background: "transparent"}}>
                            <CButton
                                style={{borderColor: "unset",color: "black",backgroundColor: "rgba(150,150,150,100%)"}}
                                onClick={cadastrar}
                            >
                                Salvar
                            </CButton>
                        </CCard>
                    </CCardBody>
                </CCard>
        </CRow>
  )
}

export default NovaConsideracao
