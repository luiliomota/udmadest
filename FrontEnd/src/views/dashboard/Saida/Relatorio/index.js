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
import Grid2 from "@mui/material/Unstable_Grid2";

const RelatorioSaida = () => {
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

  function atualizarTabela() {
    api.get("/api/saida?size=1000&sort=id,desc")
        .then((response) => {
          setTabela(response.data.content);
        })
  }

  return (
    <>
        <Grid2 container style={{marginLeft: "0px", marginRight: "0px"}} item="true" textAlign="center" ml={6} mr={4.5} mb={4.5}>
          <Grid2 xs={12} md={12}>
            <CCol mb={-4}>
                <CCardBody>
                  <CTable style={{fontSize: "clamp(0rem, 2vw, 1rem"}} align="middle" className="bg-white mb-0" hover responsive>
                    <CTableHead color="light">
                      <CTableRow>
                        <CTableHeaderCell>Descrição</CTableHeaderCell>
                        <CTableHeaderCell>Data</CTableHeaderCell>
                        <CTableHeaderCell>Valor</CTableHeaderCell>
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
                            <div>{"R$ "+parseFloat(item.valor).toFixed(2).toString().replace(".",",")}</div>
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

export default RelatorioSaida
