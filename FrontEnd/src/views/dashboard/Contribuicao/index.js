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
import {Link} from "react-router-dom";
import {IconButton} from "@mui/material";
import {Delete, Edit} from "@mui/icons-material";
import api from "../../../components/Api";

const PainelContribuicao = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const [tabela, setTabela] = useState([
      {
        nomeCongregacao: "",
        dataContribuicao: "",
        carne: "",
        oferta: "",
        total: "",
      },
    ]
  )

  useEffect (() => {
    api.get("/api/contribuicao")
        .then((response) => {
          setTabela(response.data.content);
        })
        .catch((error) => console.error(error));
  },[]);

  function deleteContribuicao(id) {
    api.delete(`/api/contribuicao/${id}`)
        .then((response) => {
          console.log(response.status);
          atualizarTabela();
        })
  }

  function atualizarTabela() {
    api.get("/api/contribuicao")
        .then((response) => {
          setTabela(response.data.content);
        })
  }

  return (
    <>
      <CRow>
        <CCol md={6}>
          <CButton className="mb-0 border-dark" color="light">
            <Link className="text-decoration-none" to="/lancamento/contribuicao/novo">
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
                    <CTableHeaderCell>Data</CTableHeaderCell>
                    <CTableHeaderCell>Carnê</CTableHeaderCell>
                    <CTableHeaderCell>Oferta</CTableHeaderCell>
                    <CTableHeaderCell>Total</CTableHeaderCell>
                    <CTableHeaderCell>Alterar</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tabela.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell>
                        <div>{item.nomeCongregacao}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.dataContribuicao}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{"R$ "+item.carne}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{"R$ "+item.oferta}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{"R$ "+(item.carne + item.oferta)}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <IconButton >
                          <Edit fontSize="medium" />
                        </IconButton>
                        <IconButton onClick={() => deleteContribuicao(item.id)}>
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

export default PainelContribuicao
