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
    api.get("/api/congregacao")
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
    api.get("/api/congregacao")
        .then((response) => {
          setTabela(response.data.content);
        })
  }

  return (
    <>
      <CRow>
        <CCol md={6}>
          <CButton className="mb-0 border-dark" color="light">
            <Link className="text-decoration-none" to="/cadastro/congregacao/novo">
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
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Congregacao
