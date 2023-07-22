import React, {useEffect, useState} from 'react'

import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CFormInput,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableRow,
} from '@coreui/react'
import api from "../../../../Api";
import "../../../../styleNow.css";
import {useNavigate, useParams} from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2";
import MediaQuery from "react-responsive";

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
      <Grid2 container style={{marginLeft: "0px", marginRight: "0px"}} item="true" textAlign="center" ml={6} mr={4.5} mb={4.5}>
          <Grid2 xs={12} md={12}>
              <CCol mb={-4}>
                  <CCardBody>
                      <MediaQuery minWidth={600}>
                          <CTable style={{fontSize: "clamp(0rem, 3vw, 1rem)"}} align="middle" className="bg-light mb-0" hover responsive>
                              <CTableBody>
                                  <CTableRow>
                                      <CTableDataCell className="w-50">
                                          <CFormInput
                                                style={{fontSize: "clamp(0rem, 3vw, 1rem"}}
                                                type="text"
                                                label="Descricao"
                                                value={saida.descricao}
                                                onChange={(e) => {
                                                    setSaida({...saida, descricao: e.target.value})
                                                }
                                                }
                                            />
                                      </CTableDataCell>
                                      <CTableDataCell className="w-25">
                                            <CFormInput
                                                style={{fontSize: "clamp(0rem, 3vw, 1rem"}}
                                                type="date"
                                                label="Data"
                                                value={saida.dataSaidaDate}
                                                onChange={(e) => {
                                                    setSaida({...saida, dataSaidaDate: e.target.value})
                                                }
                                                }
                                            />
                                      </CTableDataCell>
                                      <CTableDataCell className="vw-25">
                                            <CFormInput
                                                style={{fontSize: "clamp(0rem, 3vw, 1rem"}}
                                                label="Valor"
                                                type="text"
                                                value={saida.valor}
                                                onChange={(e) => {
                                                    setSaida({...saida, valor: e.target.value})
                                                }
                                                }
                                            />
                                      </CTableDataCell>
                                  </CTableRow>
                              </CTableBody>
                          </CTable>
                      </MediaQuery>
                      <MediaQuery maxWidth={599}>
                          <CTable style={{fontSize: "clamp(0rem, 3vw, 1rem"}} align="middle" className="bg-light mb-0" hover responsive>
                              <CTableBody>
                                  <CTableRow>
                                      <CTableDataCell className="w-100">
                                          <CFormInput
                                                style={{fontSize: "clamp(0rem, 3vw, 1rem"}}
                                                type="text"
                                                label="Descricao"
                                                value={saida.descricao}
                                                onChange={(e) => {
                                                    setSaida({...saida, descricao: e.target.value})
                                                }
                                                }
                                            />
                                      </CTableDataCell>
                                  </CTableRow>
                              </CTableBody>
                          </CTable>
                          <CTable style={{fontSize: "clamp(0rem, 3vw, 1rem"}} align="middle" className="bg-light mb-0" hover responsive>
                              <CTableBody>
                                  <CTableRow>
                                      <CTableDataCell >
                                            <CFormInput
                                                style={{fontSize: "clamp(0rem, 3vw, 1rem"}}
                                                type="date"
                                                label="Data"
                                                value={saida.dataSaidaDate}
                                                onChange={(e) => {
                                                    setSaida({...saida, dataSaidaDate: e.target.value})
                                                }
                                                }
                                            />
                                      </CTableDataCell>
                                      <CTableDataCell >
                                            <CFormInput
                                                style={{fontSize: "clamp(0rem, 3vw, 1rem"}}
                                                label="Valor"
                                                type="text"
                                                value={saida.valor}
                                                onChange={(e) => {
                                                    setSaida({...saida, valor: e.target.value})
                                                }
                                                }
                                            />
                                      </CTableDataCell>
                                  </CTableRow>
                              </CTableBody>
                          </CTable>
                      </MediaQuery>
                      <CCard style={{border: "none",background: "transparent"}}>
                          <CButton
                              style={{borderColor: "unset",color: "black",backgroundColor: "rgba(150,150,150,100%)"}}
                              onClick={gravar}
                          >
                              Gravar
                          </CButton>
                      </CCard>
                  </CCardBody>
              </CCol>
          </Grid2>
      </Grid2>
  )
}

export default EditarSaida
