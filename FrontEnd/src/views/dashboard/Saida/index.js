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

const PainelSaida = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const navigate = useNavigate();
  const [tabela, setTabela] = useState([
      {
        descricao: "",
        dataSaidaString: "",
        valor: "",
      },
    ]
  )

  useEffect (() => {
    api.get("/api/saida?size=1000&sort=id,desc")
        .then((response) => {
          setTabela(response.data.content);
        })
        .catch((error) => console.error(error));
  },[]);

  function deleteSaida(id) {
    api.delete(`/api/saida/${id}`)
        .then((response) => {
          console.log(response.status);
          atualizarTabela();
        })
  }

  function atualizarTabela() {
    api.get("/api/saida?size=1000&sort=id,desc")
        .then((response) => {
          setTabela(response.data.content);
        })
  }

  return (
    <>
      <CRow>
        <CCol md={6}>
          <CButton className="mb-0 border-dark" color="light" onClick={() => navigate("/lancamento/saida/novo")}>
              Novo
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
                    <CTableHeaderCell>Data</CTableHeaderCell>
                    <CTableHeaderCell>Valor</CTableHeaderCell>
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
                        <div>{item.dataSaidaString}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{"R$ "+item.valor}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <IconButton onClick={() => navigate(`/lancamento/saida/editar/${item.id}`)}>
                          <Edit fontSize="medium" />
                        </IconButton>
                        <IconButton onClick={() => deleteSaida(item.id)}>
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

export default PainelSaida
