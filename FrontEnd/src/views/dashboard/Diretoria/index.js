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
    api.get("/api/diretoria")
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
    api.get("/api/diretoria")
        .then((response) => {
          setTabela(response.data.content);
        })
  }

  return (
    <>
      <CRow>
        <CCol md={6}>
          <CButton className="mb-0 border-dark" color="light">
            <Link className="text-decoration-none" to="/cadastro/diretoria/novo">
              Novo
            </Link>
          </CButton>
        </CCol>
      </CRow>
      <br/>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
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
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Diretoria
