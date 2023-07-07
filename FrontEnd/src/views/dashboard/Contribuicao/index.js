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
import {useNavigate} from "react-router-dom";
import {IconButton} from "@mui/material";
import {Delete, Edit} from "@mui/icons-material";
import api from "../../../Api";

const PainelContribuicao = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const navigate = useNavigate();
  const [tabela, setTabela] = useState([
      {
        nomeCongregacao: "",
        dataContribuicaoString: "",
        carne: "",
        oferta: "",
        total: "",
      },
    ]
  )

  useEffect (() => {
    api.get("/api/contribuicao?size=1000&sort=id,desc")
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
    api.get("/api/contribuicao?size=1000&sort=id,desc")
        .then((response) => {
          setTabela(response.data.content);
        })
  }

  return (
    <>
      <CRow>
        <CCol md={6}>
          <CButton className="mb-0 border-dark" color="light" onClick={() => navigate("/lancamento/contribuicao/novo")}>
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
                        <div>{item.dataContribuicaoString}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{"R$ "+parseFloat(item.carne).toFixed(2).toString().replace(".",",")}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{"R$ "+parseFloat(item.oferta).toFixed(2).toString().replace(".",",")}</div>
                      </CTableDataCell>
                      <CTableDataCell style={{fontWeight: "bold"}}>
                        <div>{"R$ " + parseFloat(item.carne + item.oferta).toFixed(2).toString().replace(".",",")}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <IconButton onClick={() => navigate(`/lancamento/contribuicao/editar/${item.id}`)}>
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
