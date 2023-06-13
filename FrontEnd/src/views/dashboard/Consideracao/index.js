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
import {Link, useNavigate} from "react-router-dom";
import {IconButton} from "@mui/material";
import {Delete, Edit} from "@mui/icons-material";
import api from "../../../Api";

const PainelConsideracao = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const navigate = useNavigate();
  const [tabela, setTabela] = useState([
      {
        descricao: "",
        mesReferenciaString: "",
      },
    ]
  )

  useEffect (() => {
    api.get("/api/consideracao")
        .then((response) => {
          setTabela(response.data.content);
        })
        .catch((error) => console.error(error));
  },[]);

  function deleteConsideracao(id) {
    api.delete(`/api/consideracao/${id}`)
        .then((response) => {
          console.log(response.status);
          atualizarTabela();
        })
  }

  function atualizarTabela() {
    api.get("/api/consideracao")
        .then((response) => {
          setTabela(response.data.content);
        })
  }

  return (
    <>
      <CRow>
        <CCol md={6}>
          <CButton className="mb-0 border-dark" color="light">
            <Link className="text-decoration-none" to="/lancamento/consideracao/novo">
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
                    <CTableHeaderCell>Descrição</CTableHeaderCell>
                    <CTableHeaderCell>Mês Referencia</CTableHeaderCell>
                    <CTableHeaderCell>Alterar</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tabela.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell>
                        <div>{item.descricao}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.mesReferenciaString}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <IconButton onClick={() => navigate(`/lancamento/consideracao/editar/${item.id}`)}>
                          <Edit fontSize="medium" />
                        </IconButton>
                        <IconButton onClick={() => deleteConsideracao(item.id)}>
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

export default PainelConsideracao
