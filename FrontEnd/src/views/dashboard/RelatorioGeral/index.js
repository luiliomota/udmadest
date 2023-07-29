import {
    CButton,
    CCard,
    CCardBody,
    CCardText,
    CCardTitle,
    CCol,
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
import {useReactToPrint} from "react-to-print";
import logo from "../../../assets/images/logoUdmadest2.png";
import logoCiadseta from "../../../assets/images/CIADSETA.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../styleNow.css";
import CIcon from "@coreui/icons-react";
import {cilPrint} from "@coreui/icons";
import MediaQuery from 'react-responsive';
import {TableBody} from "@mui/material";
import {red} from "@mui/material/colors";

const RelatorioGeral = () => {

  const componentRef = useRef(null);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    pageStyle: "@page { size: A4 portrait } ",
  });

  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const navigate = useNavigate();
  const [tabelaPeriodo, setTabelaPeriodo] = useState([{}]);
  const [tabelaContribuicao, setTabelaContribuicao] = useState([
      {
        nomeCongregacao: "",
        dataContribuicaoString: "",
        carne: "",
        oferta: "",
        total: "",
      },
    ]
  );
  const [tabelaContribuicaoFilter, setTabelaContribuicaoFilter] = useState([
    {
      nomeCongregacao: "",
      dataContribuicaoString: "",
      carne: "",
      oferta: "",
      total: "",
    }
  ]);
  const [consideracao, setConsideracao] = useState([
    {
      descricao: "",
      idMesReferencia: 0,
      mesReferenciaString: "",
    }
  ]);

  const [filterConsideracao, setFilterConsideracao] = useState([
    {
      descricao: "",
      idMesReferencia: 0,
      mesReferenciaString: "",
    }
  ]);

  const [diretoria, setDiretoria] = useState([]);
  const [presidente, setPresidente] = useState({
    nome: "",
    cargo: "",
  });
  const [diretor, setDiretor] = useState({
    nome: "",
    cargo: "",
  });

  useEffect(() => {
      api.get("/api/mesReferencia?size=1000&sort=id,asc")
          .then((response) => {
              setTabelaPeriodo(response.data.content);
          })
          .catch((error) => console.error(error));
  },[]);

  useEffect(() => {
      api.get("/api/consideracao?size=1000&sort=dataConsideracao,asc")
          .then((response) => {
              setConsideracao(response.data.content);
              setFilterConsideracao(response.data.content);
          })
          .catch((error) => console.error(error));
  },[]);

  useEffect(() => {
    api.get("/api/diretoria?size=1000")
      .then((response) => {
        setDiretoria(response.data.content);
        setPresidente(response.data.content.find((item) => item.cargo === "Presidente do campo"));
        setDiretor(response.data.content.find((item) => item.cargo === "Diretor de missões"));
      })
      .catch((error) => console.error(error));
  },[]);

  useEffect (() => {
    api.get("/api/contribuicao?size=1000&sort=id,asc")
        .then((response) => {
          setTabelaContribuicao(response.data.content);
          setTabelaContribuicaoFilter(response.data.content);
        })
        .catch((error) => console.error(error));
  },[]);

  function atualizarTabela() {
    api.get("/api/contribuicao?size=1000&sort=id,asc")
        .then((response) => {
          setTabelaContribuicao(response.data.content);
          setTabelaContribuicaoFilter(response.data.content);
        })
  }

  function mes (month) {
      switch (month) {
          case 1:
              return "Janeiro"
          case 2:
              return "Fevereiro"
          case 3:
              return "Março"
          case 4:
              return "Abril"
          case 5:
              return "Maio"
          case 6:
              return "Junho"
          case 7:
              return "Julho"
          case 8:
              return "Agosto"
          case 9:
              return "Setembro"
          case 10:
              return "Outubro"
          case 11:
              return "Novembro"
          case 12:
              return "Dezembro"
          default:
              return null
      }
  }

  function filterConsideracaoTabel (data, startFilter, endFilter) {
      let dayStart = startFilter.getDate();
      let monthStart = startFilter.getMonth()+1;
      let dayEnd = endFilter.getDate();
      let monthEnd = endFilter.getMonth()+1;

      if (dayStart < 10){
          dayStart = ('0' + dayStart);
      }
      if (monthStart < 10){
          monthStart = ('0' + monthStart);
      }
      if (dayEnd < 10) {
          dayEnd = ('0' + dayEnd);
      }
      if (monthEnd < 10) {
          monthEnd = ('0' + monthEnd);
      }
      let start = (startFilter.getFullYear()+"-"+monthStart+"-"+dayStart);
      let end = (endFilter.getFullYear()+"-"+monthEnd+"-"+dayEnd);
      let tab = data.filter(item => (item.dataConsideracao >= start && item.dataConsideracao <= end));
      return tab;
  }

  function filterTabelaContribuicao(data, startFilter, endFilter) {
    let dayStart = startFilter.getDate();
    let monthStart = startFilter.getMonth()+1;
    let dayEnd = endFilter.getDate();
    let monthEnd = endFilter.getMonth()+1;

    if (dayStart < 10){
      dayStart = ('0' + dayStart);
    }
    if (monthStart < 10){
      monthStart = ('0' + monthStart);
    }
    if (dayEnd < 10) {
      dayEnd = ('0' + dayEnd);
    }
    if (monthEnd < 10) {
      monthEnd = ('0' + monthEnd);
    }
    let start = (startFilter.getFullYear()+"-"+monthStart+"-"+dayStart);
    let end = (endFilter.getFullYear()+"-"+monthEnd+"-"+dayEnd);
    let tab = data.filter(item => (item.dataContribuicaoDate >= start && item.dataContribuicaoDate <= end));
    return tab;
  }

      return (
        <>
          <Grid2 container item="true" style={{textAlign:"center"}} spacing={2} ref={componentRef}>
            <Grid2 item="true" xl={6} lg={6} md={6} sm={6} xs={6}>
                <DatePicker
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd/MM/yyyy"
                    onChange={(update) => {
                      setDateRange(update);
                      let start = '1900-1-01';
                      let end = '2999-12-31';
                      if (update[0] != null) {
                        start = update[0];
                      }
                      if (update[1] != null) {
                        end = update[1];
                      }
                      setTabelaContribuicaoFilter (filterTabelaContribuicao(tabelaContribuicao, new Date(start), new Date(end)));
                      setFilterConsideracao (filterConsideracaoTabel(consideracao, new Date(start), new Date(end)));
                    }}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    isClearable={true}
                />
            </Grid2>
            <Grid2 item="true" xl={6} lg={6} md={6} sm={6} xs={6}>
                <CButton
                    className="btn btn-secondary"
                    onClick={handlePrint}
                >
                    <CIcon icon = {cilPrint}/>
                    <MediaQuery minWidth={530}>
                        &nbsp;
                        Visualizar Impressão
                    </MediaQuery>
                </CButton>
            </Grid2>
          </Grid2>
          <Grid2 container style={{marginLeft: "0px", marginRight: "0px"}} item="true" textAlign="center" ml={6} mr={4.5} mt={2} mb={4.5} ref={componentRef}>
              <MediaQuery maxWidth={529}>
                  <Grid2 item="true" xl={12} lg={12} md={12} sm={12} xs={12} >
                      <CCardText style={{fontSize: "clamp(0.55rem, 3vw, 1rem)", marginTop: "-2px", marginBottom: "0", fontStyle: "italic"}}>
                          Assembleia de Deus - CIADSETA-TAQUARALTO
                      </CCardText>
                      <CCardText style={{fontSize: "clamp(0.55rem, 3vw, 1rem)", fontWeight: "750", marginTop: "-2px", marginBottom: "0", fontStyle: "italic"}}>
                          Presidente do campo: &nbsp;
                          {presidente.nome}
                      </CCardText>
                      <CCardText style={{fontSize: "clamp(0.55rem, 3vw, 1rem)", fontWeight: "750", marginTop: "-2px", marginBottom: "0", fontStyle: "italic"}}>
                          Diretor de missões: &nbsp;
                          {diretor.nome}
                      </CCardText>
                  </Grid2>
                  <Grid2 item="true" xl={3} lg={3} md={3} sm={3} xs={3} style={{alignSelf: "baseline"}}>
                    <img src={logo} alt="logo"
                         style={{maxWidth: "80%"}}
                    />
                  </Grid2>
                  <Grid2 item="true" xl={6} lg={6} md={6} sm={6} xs={6} style={{alignSelf: "baseline"}}>
                      <CCard style={{backgroundColor: "unset", border: "none"}}>
                          <CCardTitle style={{fontSize: "clamp(2rem, 9vw, 5rem)", color: "#980708", fontWeight: "1000", marginTop: "-2px", marginBottom: "-7px"}}>
                              MISSÕES
                          </CCardTitle>
                          <CCardTitle style={{fontSize: "clamp(0rem, 3vw, 1.3rem)", color: "#000", fontWeight: "1000", marginTop: "1px", marginBottom: "0px"}}>
                              Se faz indo, orando e contribuindo
                          </CCardTitle>
                      </CCard>
                  </Grid2>
                  <Grid2 item="true" xl={3} lg={3} md={3} sm={3} xs={3} style={{alignSelf: "baseline"}}>
                    <img src={logoCiadseta} alt="logoCiadseta"
                         style={{maxWidth: "80%"}}
                    />
                  </Grid2>
              </MediaQuery>
              <MediaQuery minWidth={530}>
                  <Grid2 item="true" xl={12} lg={12} md={12} sm={12} xs={12} >
                      <CCardText style={{fontSize: "clamp(0.55rem, 3vw, 1rem)", marginTop: "-2px", marginBottom: "0", fontStyle: "italic"}}>
                          Assembleia de Deus - CIADSETA-TAQUARALTO
                      </CCardText>
                      <CCardText style={{fontSize: "clamp(0.55rem, 3vw, 1rem)", fontWeight: "750", marginTop: "-2px", marginBottom: "0", fontStyle: "italic"}}>
                          Presidente do campo: &nbsp;
                          {presidente.nome}
                      </CCardText>
                      <CCardText style={{fontSize: "clamp(0.55rem, 3vw, 1rem)", fontWeight: "750", marginTop: "-2px", marginBottom: "0", fontStyle: "italic"}}>
                          Diretor de missões: &nbsp;
                          {diretor.nome}
                      </CCardText>
                  </Grid2>
                  <Grid2 item="true" xl={3} lg={3} md={3} sm={3} xs={3} style={{alignSelf: "baseline"}}>
                      <img src={logo} alt="logo"
                           style={{maxWidth: "80%"}}
                      />
                  </Grid2>
                  <Grid2 item="true" xl={6} lg={6} md={6} sm={6} xs={6} style={{alignSelf: "baseline"}}>
                      <CCard style={{backgroundColor: "unset", border: "none"}}>
                          <CCardTitle style={{fontSize: "clamp(2rem, 9vw, 5rem)", color: "#980708", fontWeight: "1000", marginTop: "-2px", marginBottom: "-7px"}}>
                              MISSÕES
                          </CCardTitle>
                          <CCardTitle style={{fontSize: "clamp(0rem, 3vw, 1.3rem)", color: "#000", fontWeight: "1000", marginTop: "1px", marginBottom: "0px"}}>
                              Se faz indo, orando e contribuindo
                          </CCardTitle>
                      </CCard>
                  </Grid2>
                  <Grid2 item="true" xl={3} lg={3} md={3} sm={3} xs={3} style={{alignSelf: "baseline"}}>
                      <img src={logoCiadseta} alt="logoCiadseta"
                           style={{maxWidth: "80%"}}
                      />
                  </Grid2>
              </MediaQuery>
              <Grid2 className="logo_udmadest_fundo_table" xs={12} md={12} mt={3}>
                    {tabelaPeriodo.map((periodo, index) => {
                        if (filterConsideracao.filter((item) => item.idMesReferencia === periodo.id).length > 0 ||
                            tabelaContribuicaoFilter.filter((item) => item.idMesReferencia === periodo.id).length > 0) {
                            return (
                                <CTable>
                                    <CTable align="middle" className="mb-2" hover responsive>
                                        <CTableHead>
                                            <CTableRow color="primary" style={{fontSize: "clamp(0rem, 3vw, 1.5rem)"}}
                                                       v-for="item in tableItems" key={index}>
                                                <CTableHeaderCell>
                                                    <div>{periodo.nome}</div>
                                                </CTableHeaderCell>
                                            </CTableRow>
                                        </CTableHead>
                                        <CTableBody>
                                            {filterConsideracao.filter((itemFilter) => (itemFilter.idMesReferencia === periodo.id)).map((item, index) => (
                                                <CTableRow style={{fontSize: "clamp(0rem, 2vw, 1.5rem)"}}
                                                           v-for="item in tableItems" key={index}>
                                                    <CTableDataCell>
                                                        <div>{item.descricao}</div>
                                                    </CTableDataCell>
                                                </CTableRow>
                                            ))}
                                        </CTableBody>
                                    </CTable>
                                    <CTable align="middle" className="mb-5" hover responsive>
                                        <CTableHead>
                                            {tabelaContribuicaoFilter.filter((itemFilter) => (itemFilter.idMesReferencia === periodo.id)).length > 0 ?
                                                <CTableRow style={{fontSize: "clamp(0rem, 2vw, 1.5rem)"}}
                                                           v-for="item in tableItems" key={index}>
                                                    <CTableHeaderCell>Congregação</CTableHeaderCell>
                                                    <CTableHeaderCell>Data</CTableHeaderCell>
                                                    <CTableHeaderCell>Carnê</CTableHeaderCell>
                                                    <CTableHeaderCell>Oferta</CTableHeaderCell>
                                                    <CTableHeaderCell>Total</CTableHeaderCell>
                                                </CTableRow> : null
                                            }
                                        </CTableHead>
                                        <CTableBody>
                                            {tabelaContribuicaoFilter.filter((itemFilter) => (itemFilter.idMesReferencia === periodo.id)).map((item, index) => (
                                                <CTableRow style={{fontSize: "clamp(0rem, 2vw, 1.5rem)"}}
                                                           v-for="item in tableItems" key={index}>
                                                    <CTableDataCell>
                                                        <div>{item.nomeCongregacao}</div>
                                                    </CTableDataCell>
                                                    <CTableDataCell>
                                                        <div>{item.dataContribuicaoString}</div>
                                                    </CTableDataCell>
                                                    <CTableDataCell>
                                                        <div>{"R$ " + parseFloat(item.carne).toFixed(2).toString().replace(".", ",")}</div>
                                                    </CTableDataCell>
                                                    <CTableDataCell>
                                                        <div>{"R$ " + parseFloat(item.oferta).toFixed(2).toString().replace(".", ",")}</div>
                                                    </CTableDataCell>
                                                    <CTableDataCell style={{fontWeight: "bold"}}>
                                                        <div>{"R$ " + parseFloat(item.carne + item.oferta).toFixed(2).toString().replace(".", ",")}</div>
                                                    </CTableDataCell>
                                                </CTableRow>
                                            ))}
                                        </CTableBody>
                                    </CTable>
                                </CTable>
                            )
                        }
                    })}
              </Grid2>
          </Grid2>
        </>
      )
  }

export default RelatorioGeral
