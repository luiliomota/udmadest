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

const Congregacao = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const navigate = useNavigate();
  const [tabela, setTabela] = useState([
      {
        nome: "",
        dataCadastro: "",
      },
    ]
  )

  useEffect(() => {
    api.get("/api/congregacao?size=1000&sort=nome,asc")
        .then((response) => {
          setTabela(response.data.content);
        })
        .catch((error) => console.error(error))
  },[]);

  function deleteCongregacao(id) {
    api.delete(`/api/congregacao/${id}`)
        .then((response) => {
          console.log(response.status);
          atualizarTabela();
        })
  }

  function atualizarTabela() {
    api.get("/api/congregacao?size=1000&sort=nome,asc")
        .then((response) => {
          setTabela(response.data.content);
        })
  }

  return (
    <>
        <Grid2 container style={{marginLeft: "0px", marginRight: "0px"}} item="true" textAlign="center" ml={6} mr={4.5} mt={2} mb={4.5}>
          <Grid2>
            <CCol md={6}>
              <CButton className="mb-0 border-dark" color="light" onClick={() => navigate('/cadastro/congregacao/novo')}>
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
                        <CTableHeaderCell>Congregação</CTableHeaderCell>
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
                            <div>{item.dataCadastro}</div>
                          </CTableDataCell>
                          <CTableDataCell>
                            <IconButton onClick={() => navigate(`/cadastro/congregacao/editar/${item.id}`)}>
                              <Edit fontSize="medium" />
                            </IconButton>
                            <IconButton onClick={() => deleteCongregacao(item.id)}>
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

export default Congregacao
