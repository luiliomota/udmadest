import {
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

import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import api from "../../../../Api";

const RelatorioContribuicao = () => {
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
    api.get("/api/contribuicao")
        .then((response) => {
          setTabela(response.data.content);
        })
        .catch((error) => console.error(error));
  },[]);

  function atualizarTabela() {
    api.get("/api/contribuicao")
        .then((response) => {
          setTabela(response.data.content);
        })
  }

  return (
    <>
      <CRow>
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
                        <div>{"R$ "+parseFloat(item.carne + item.oferta).toFixed(2).toString().replace(".",",")}</div>
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

export default RelatorioContribuicao
