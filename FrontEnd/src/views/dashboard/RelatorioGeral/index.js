import {
  CButton,
  CCard,
  CCardBody,
  CCardText, CCardTitle,
  CCol, CHeaderText,
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
import {CalendarMonth, DateRange, Print} from "@mui/icons-material";
import {useReactToPrint} from "react-to-print";
import logo from "../../../assets/images/logoUdmadest.png";
import logoCiadseta from "../../../assets/images/CIADSETA.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RelatorioGeral = () => {

  const componentRef = useRef(null);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
  });

  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
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
  );

  const [diretoria, setDiretoria] = useState([]);
  const [presidente, setPresidente] = useState({
    nome: "",
    cargo: "",
  })
  const [diretor, setDiretor] = useState({
    nome: "",
    cargo: "",
  })

  useEffect(() => {
    api.get("/api/diretoria")
      .then((response) => {
        setDiretoria(response.data.content);
        setPresidente(response.data.content.find((item) => item.cargo === "Presidente do campo"));
        setDiretor(response.data.content.find((item) => item.cargo === "Diretor de missões"));
      })
      .catch((error) => console.error(error));
  },[]);

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
      <Grid2 container item style={{textAlign:"center"}} spacing={2}>
        <Grid2 item xs={12} md={5}>
          <DatePicker
                label="Período"
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                dateFormat="dd/MM/yyyy"
                onChange={(update) => {
                  setDateRange(update);
                }}
                // peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                isClearable={true}
            />
        </Grid2>
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
      <Grid2 container item textAlign="center" sx={12} ml={6} mr={4.5} mt={6} mb={4.5} ref={componentRef}>
        <Grid2 container item xs={12} md={3} mb={2} style={{alignSelf: "baseline"}}>
          <img src={logo} alt="logo" style={{maxWidth: "-webkit-fill-available"}}/>
        </Grid2>
        <Grid2 xs={12} md={6} mb={2}>
          <CCard style={{backgroundColor: "unset", border: "none"}}>
          <CCardTitle style={{fontSize: "4em", color: "#980708", fontWeight: "1000", marginTop: "-2px", marginBottom: "-15px"}}>
            MISSÕES
          </CCardTitle>
          </CCard>
          <CCardTitle style={{fontSize: "20px", color: "#000", fontWeight: "1000", marginTop: "-2px", marginBottom: "20px"}}>
            Se faz indo, orando e contribuindo
          </CCardTitle>
          <CCardText style={{fontSize: "15px", marginTop: "-2px", marginBottom: "0", fontStyle: "italic"}}>
            Assembleia de Deus - CIADSETA-TAQUARALTO
          </CCardText>
          <CCardText style={{fontSize: "15px", fontWeight: "750", marginTop: "-2px", marginBottom: "0", fontStyle: "italic"}}>
            Presidente do campo: &nbsp;
            {presidente.nome}
          </CCardText>
          <CCardText style={{fontSize: "15px", fontWeight: "750", marginTop: "-2px", marginBottom: "0", fontStyle: "italic"}}>
            Diretor de missões: &nbsp;
            {diretor.nome}
          </CCardText>
        </Grid2>
        <Grid2 container item xs={12} md={3} mb={2} style={{alignSelf: "baseline"}}>
          <img src={logoCiadseta} alt="logoCiadseta" style={{maxWidth: "-webkit-fill-available"}}/>
        </Grid2>
        <Grid2 xs={12} md={12}>
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
        </Grid2>
      </Grid2>
    </>
  )
}

export default RelatorioGeral
