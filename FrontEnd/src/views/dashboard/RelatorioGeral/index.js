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

import React, {useCallback, useEffect, useRef, useState} from 'react'
import {useNavigate} from "react-router-dom";
import api from "../../../Api";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Print} from "@mui/icons-material";
import {useReactToPrint} from "react-to-print";

const RelatorioGeral = () => {

  const componentRef = useRef(null);

  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
  });

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
      <Grid2 mt={2} container justifyContent="inherit" spacing={2}>
        <Grid2 item xs={12} md={5}>
          <CButton
              className="btn btn-secondary"
              startIcon={<Print/>}
              onClick={handlePrint}
          >
            Visualizar Impressão
          </CButton>
        </Grid2>
      </Grid2>
      <br/>
      <CRow ref={componentRef}>
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
                        <div>{"R$ "+item.carne}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{"R$ "+item.oferta}</div>
                      </CTableDataCell>
                      <CTableDataCell style={{fontWeight: "bold"}}>
                        <div>{"R$ "+(item.carne + item.oferta)}</div>
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

export default RelatorioGeral
