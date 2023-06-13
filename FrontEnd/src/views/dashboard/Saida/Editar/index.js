import React, {useEffect, useState} from 'react'

import {CButton, CCard, CCardBody, CCol, CFormInput, CRow, CTableBody, CTableDataCell,} from '@coreui/react'
import api from "../../../../Api";
import "../../../../styleNow.css";
import {useNavigate, useParams} from "react-router-dom";

const EditarSaida = () => {
    const {id} = useParams();
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const navivate = useNavigate();
    const varCol = {
        'textAlign': "-webkit-center",
    }
  const [saida, setSaida] = useState({
  });

  useEffect(() => {
      api.get(`/api/saida/${id}`)
          .then((response) => {
              if(response.status == 200 && saida.dataRegistro === undefined){
                  setSaida(response.data)
              }
          })
          .catch((error) => console.error(error))
  })
  function gravar() {
    api.put((`/api/saida/${id}`),saida)
        .then((response) => {
            console.table(response);
            navivate('/lancamento/saida');
        })
        .catch((error) => console.error(error))
  }

  return (
        <CRow >
            <CCard style={{border: "none",background: "transparent"}} className="align-items-center text-center mb-4">
                <CCardBody >
                    <CTableBody>
                        <CRow>
                            <CCol style={varCol} className="mb-1" sm={12} lg={3}>
                                <CTableDataCell width="40%">
                                    <CFormInput
                                        type="text"
                                        label="Descricao"
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
                                        value={saida.dataSaidaDate}
                                        onChange={(e) => {
                                            setSaida({...saida, dataSaidaDate: e.target.value})
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
                            onClick={gravar}
                        >
                            Gravar
                        </CButton>
                    </CCard>
                </CCardBody>
            </CCard>
        </CRow>
  )
}

export default EditarSaida
