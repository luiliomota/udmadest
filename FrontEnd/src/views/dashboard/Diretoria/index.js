import React, {useEffect, useState} from 'react'

import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import api from "../../../Api";
import {Link, useNavigate} from "react-router-dom";
import {Delete, Edit} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

const Diretoria = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const navigate = useNavigate();
  const [tabela, setTabela] = useState([
      {
        nome: "",
        cargo: "",
        dataCadastro: "",
      },
    ]
  )

  useEffect(() => {
    api.get("/api/diretoria?size=1000")
        .then((response) => {
          setTabela(response.data.content);
        })
        .catch((error) => console.error(error))
  },[]);

  function deleteDiretoria(id) {
    api.delete(`/api/diretoria/${id}`)
        .then((response) => {
          console.log(response.status);
          atualizarTabela();
        })
  }

  function atualizarTabela() {
    api.get("/api/diretoria?size=1000")
        .then((response) => {
          setTabela(response.data.content);
        })
  }

  return (
    <>
      <Grid2 container style={{marginLeft: "0px", marginRight: "0px"}} item="true" textAlign="center" ml={6} mr={4.5} mt={2} mb={4.5}>
          <Grid2>
            <CCol md={6}>
              <CButton className="mb-0 border-dark" color="light" onClick={() => navigate("/cadastro/diretoria/novo")}>
                  Novo
              </CButton>
            </CCol>
          </Grid2>
          <Grid2 xs={12} md={12} mt={3}>
            <CCol mb={-4}>
                <CCardBody>
                  <CTable style={{fontSize: "clamp(0rem, 2vw, 1rem"}} align="middle" className="bg-white mb-0" hover responsive>
                    <CTableHead color="light">
                      <CTableRow>
                        <CTableHeaderCell>Nome</CTableHeaderCell>
                          <CTableHeaderCell>Cargo</CTableHeaderCell>
                        <CTableHeaderCell>Data de Cadastro</CTableHeaderCell>
                        <CTableHeaderCell>Alterar</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {tabela.map((item, index) => (
                        <CTableRow v-for="item in tableItems" key={index}>
                          <CTableDataCell>
                            <div>{item.nome}</div>
                          </CTableDataCell>
                          <CTableDataCell>
                            <div>{item.cargo}</div>
                          </CTableDataCell>
                          <CTableDataCell>
                            <div>{item.dataCadastro}</div>
                          </CTableDataCell>
                          <CTableDataCell>
                            <IconButton onClick={() => navigate(`/cadastro/diretoria/editar/${item.id}`)}>
                              <Edit fontSize="medium" />
                            </IconButton>
                            <IconButton onClick={() => deleteDiretoria(item.id)}>
                              <Delete fontSize="medium" />
                            </IconButton>
                          </CTableDataCell>
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                </CCardBody>
            </CCol>
          </Grid2>
      </Grid2>
    </>
  )
}

export default Diretoria
