import React, {useState} from 'react'

import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CFormInput,
    CRow,
    CTable, CTableBody, CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import api from "../../../../Api";
import "../../../../styleNow.css";
import {useNavigate} from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2";

const NovaDiretoria = () => {
  const varCol = {
      'textAlign': "-webkit-center",
  }
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const navivate = useNavigate();
  const [diretoria, setDiretoria] = useState({
      nome: "",
      cargo: "",
  });

  function cadastrar() {
    api.post("/api/diretoria",diretoria)
        .then((response) => {
            console.table(response);
            navivate('/cadastro/diretoria');
        })
        .catch((error) => console.error(error))
  }

  return (
      <Grid2 container style={{marginLeft: "0px", marginRight: "0px"}} item="true" textAlign="center" ml={6} mr={4.5} mb={4.5}>
          <Grid2 xs={12} md={12}>
            <CCol mb={-4}>
                <CCardBody>
                    <CTable style={{fontSize: "clamp(0rem, 4vw, 1rem"}} align="middle" className="bg-light mb-0" hover responsive>
                        <CTableBody>
                            <CTableRow>
                                <CTableDataCell>
                                    <CFormInput
                                        style={{fontSize: "clamp(0rem, 3vw, 1rem)"}}
                                        label="Nome"
                                        type="text"
                                        value={diretoria.nome}
                                        onChange={(e) => setDiretoria({
                                            ...diretoria, nome: e.target.value
                                        })
                                        }
                                    />
                                </CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableDataCell>
                                    <CFormInput
                                        style={{fontSize: "clamp(0rem, 3vw, 1rem"}}
                                        label="Cargo"
                                        type="text"
                                        value={diretoria.cargo}
                                        onChange={(e) => setDiretoria({
                                            ...diretoria, cargo: e.target.value
                                        })
                                        }
                                    />
                                </CTableDataCell>
                            </CTableRow>
                        </CTableBody>
                    </CTable>
                        <CCard style={{border: "none",background: "transparent"}}>
                            <CButton
                                style={{borderColor: "unset",color: "black",backgroundColor: "rgba(150,150,150,100%)"}}
                                onClick={cadastrar}
                            >
                                Salvar
                            </CButton>
                        </CCard>
                </CCardBody>
            </CCol>
          </Grid2>
      </Grid2>
  )
}

export default NovaDiretoria
