import React, {useEffect, useState} from 'react'

import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CFormInput,
    CFormTextarea,
    CRow, CTable,
    CTableBody,
    CTableDataCell, CTableHead, CTableHeaderCell, CTableRow,
} from '@coreui/react'
import api from "../../../../Api";
import "../../../../styleNow.css";
import {useNavigate, useParams} from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2";

const EditarConsideracao = () => {
    const {id} = useParams();
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const navivate = useNavigate();
    const varCol = {
        'textAlign': "-webkit-center",
    }
  const [consideracao, setConsideracao] = useState({
  });

  useEffect(() => {
      api.get(`/api/consideracao/${id}`)
          .then((response) => {
              if(response.status == 200 && consideracao.dataRegistro === undefined){
                  setConsideracao(response.data)
              }
          })
          .catch((error) => console.error(error))
  })
  function gravar() {
    api.put((`/api/consideracao/${id}`),consideracao)
        .then((response) => {
            console.table(response);
            navivate('/lancamento/consideracao');
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
                                        style={{fontSize: "clamp(0rem, 3vw, 1rem"}}
                                        type="text"
                                        label="Descricao"
                                        rows={5}
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
                                        style={{fontSize: "clamp(0rem, 3vw, 1rem"}}
                                        type="date"
                                        label="Mês Referencia"
                                        value={consideracao.mesReferenciaDate}
                                        onChange={(e) => {
                                            setConsideracao({...consideracao, mesReferenciaDate: e.target.value})
                                        }
                                        }
                                    />
                                </CTableDataCell>
                            </CTableRow>
                        </CTableBody>
                    </CTable>
                    <CCard style={{border: "none",background: "transparent"}}>
                        <CTableDataCell>
                            <CButton
                                style={{borderColor: "unset",color: "black",backgroundColor: "rgba(150,150,150,100%)"}}
                                onClick={gravar}
                            >
                                Gravar
                            </CButton>
                        </CTableDataCell>
                    </CCard>
                </CCardBody>
            </CCol>
        </Grid2>
      </Grid2>
  )
}

export default EditarConsideracao
