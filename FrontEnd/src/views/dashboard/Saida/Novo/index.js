import React, {useState} from 'react'

import {CButton, CCard, CCardBody, CCol, CFormInput, CRow, CTableBody, CTableDataCell,} from '@coreui/react'
import api from "../../../../Api";
import "../../../../styleNow.css";
import {useNavigate} from "react-router-dom";

const NovaContribuicao = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const navigate = useNavigate();
  const varCol = {
      'textAlign': "-webkit-center",
  }
  const [saida, setSaida] = useState({
      descricao: "",
      dataSaida: "",
      valor: 0,
  });

    function cadastrar() {
    api.post("/api/saida",saida)
        .then((response) => {
            console.table(response);
            navigate('/lancamento/saida');
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
                                                value={saida.descricao}
                                                onChange={(e) => {
                                                    setSaida({...saida, descricao: e.target.value})
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
                                                value={saida.dataSaida}
                                                onChange={(e) => {
                                                    setSaida({...saida, dataSaida: e.target.value})
                                                }
                                                }
                                            />
                                        </CTableDataCell>
                                    </CCol>
                                    <CCol style={varCol} className="mb-1" sm={12} lg={3}>
                                        <CTableDataCell>
                                            <CFormInput
                                                label="Valor"
                                                type="text"
                                                value={saida.valor}
                                                onChange={(e) => {
                                                    setSaida({...saida, valor: e.target.value})
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

export default NovaContribuicao
