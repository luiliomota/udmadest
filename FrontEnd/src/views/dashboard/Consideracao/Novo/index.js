import React, {useState} from 'react'

import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CFormInput,
    CFormTextarea,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableRow,
} from '@coreui/react'
import api from "../../../../Api";
import "../../../../styleNow.css";
import {useNavigate} from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2";

const NovaConsideracao = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const navigate = useNavigate();
  const varCol = {
      'textAlign': "-webkit-center",
  }
  const [consideracao, setConsideracao] = useState({
      descricao: "",
      dataConsideracao: "",
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
      <Grid2 container style={{marginLeft: "0px", marginRight: "0px"}} item="true" textAlign="center" ml={6} mr={4.5} mb={4.5}>
          <Grid2 xs={12} md={12}>
              <CCol mb={-4}>
                  <CCardBody>
                      <CTable style={{fontSize: "clamp(0rem, 4vw, 1rem)"}} align="middle" className="bg-light mb-0" hover responsive>
                            <CTableBody>
                                <CTableRow v-for="item in tableItems">
                                    <CTableDataCell>
                                        <CFormTextarea
                                            style={{fontSize: "clamp(0rem, 3vw, 1rem)"}}
                                            type="text"
                                            rows={5}
                                            label="Descrição"
                                            value={consideracao.descricao}
                                            onChange={(e) => {
                                                  setConsideracao({...consideracao, descricao: e.target.value})
                                                }
                                            }
                                        />
                                    </CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableDataCell>
                                        <CFormInput
                                            style={{fontSize: "clamp(0rem, 3vw, 1rem)"}}
                                            type="date"
                                            label="Data"
                                            value={consideracao.dataConsideracao}
                                            onChange={(e) => {
                                                setConsideracao({...consideracao, dataConsideracao: e.target.value})
                                              }
                                            }
                                        />
                                    </CTableDataCell>
                                </CTableRow>
                            </CTableBody>
                            <CCard style={{border: "none",background: "transparent"}}>
                                <CTableDataCell>
                                    <CButton
                                        style={{borderColor: "unset",color: "black",backgroundColor: "rgba(150,150,150,100%)"}}
                                        onClick={cadastrar}
                                    >
                                        Salvar
                                    </CButton>
                                </CTableDataCell>
                            </CCard>
                      </CTable>
                  </CCardBody>
              </CCol>
          </Grid2>
      </Grid2>
  )
}

export default NovaConsideracao
