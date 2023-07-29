import React, {useEffect, useState} from 'react'

import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CFormInput,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableRow,
} from '@coreui/react'
import api from "../../../../Api";
import "../../../../styleNow.css";
import {Autocomplete, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2";
import MediaQuery from "react-responsive";

const NovaContribuicao = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const navigate = useNavigate();
  const varCol = {
      'textAlign': "-webkit-center",
  }
  const [congregacao, setCongregacao] = useState({
      nome: "",
  });
  const [listaCongregacoes, setListaCongregacoes] = useState([]);
  const [contribuicao, setContribuicao] = useState({
      idCongregacao: "",
      dataContribuicao: "",
      carne: 0,
      oferta: 0,
  });

    useEffect(() => {
        api.get("/api/congregacao?size=1000&sort=nome,asc")
            .then((response) => {
                setListaCongregacoes(response.data.content);
            })
            .catch((error) => console.error(error))
    },[]);

    function cadastrar() {
    api.post("/api/contribuicao",contribuicao)
        .then((response) => {
            console.table(response);
            navigate('/lancamento/contribuicao');
        })
        .catch((error) => console.error(error))
  }

  function resetCongregacao () {
      setCongregacao({
          nome: "",
      });
  }
  return (
      <Grid2 container style={{marginLeft: "0px", marginRight: "0px"}} item="true" textAlign="center" ml={6} mr={4.5} mb={4.5}>
          <Grid2 xs={12} md={12}>
              <CCol mb={-4}>
                  <CCardBody>
                      <MediaQuery minWidth={600}>
                          <CTable style={{fontSize: "clamp(0rem, 2vw, 1rem"}} align="middle" className="bg-light mb-0" hover responsive>
                              <CTableBody>
                                  <CTableRow className="col-12">
                                      <CTableDataCell className="col-5">
                                            <CFormInput type="hidden" label="Congregação"/>
                                            <Autocomplete
                                                className="bg-white"
                                                options={listaCongregacoes}
                                                getOptionLabel={(option) => option ? option.nome : ""}
                                                isOptionEqualToValue={(option, value) => option ? value : ""}
                                                onChange={(e, value) => {
                                                    if(value) {
                                                        setContribuicao({...contribuicao, idCongregacao: value.id});
                                                    } else {
                                                        setContribuicao({...contribuicao, idCongregacao: ""});
                                                    }
                                                }}
                                                renderInput={(params) =>
                                                    <TextField
                                                        {...params}
                                                        InputLabelProps={{shrink:true}}
                                                    />
                                                }
                                            />
                                      </CTableDataCell>
                                      <CTableDataCell className="col-3">
                                            <CFormInput
                                                style={{fontSize: "clamp(0rem, 3vw, 1rem)"}}
                                                type="date"
                                                label="Data"
                                                value={contribuicao.dataContribuicao}
                                                onChange={(e) => {
                                                    setContribuicao({...contribuicao, dataContribuicao: e.target.value})
                                                }
                                                }
                                            />
                                      </CTableDataCell>
                                      <CTableDataCell className="col-2">
                                            <CFormInput
                                                style={{fontSize: "clamp(0rem, 3vw, 1rem)"}}
                                                label="Carnê"
                                                type="text"
                                                value={contribuicao.carne}
                                                onChange={(e) => {
                                                    setContribuicao({...contribuicao, carne: e.target.value})
                                                }
                                                }
                                            />
                                      </CTableDataCell>
                                      <CTableDataCell className="col-2">
                                            <CFormInput
                                                style={{fontSize: "clamp(0rem, 3vw, 1rem)"}}
                                                label="Oferta"
                                                type="text"
                                                value={contribuicao.oferta}
                                                onChange={(e) => {
                                                    setContribuicao({...contribuicao, oferta: e.target.value})
                                                }
                                                }
                                            />
                                      </CTableDataCell>
                                  </CTableRow>
                              </CTableBody>
                          </CTable>
                      </MediaQuery>
                      <MediaQuery maxWidth={599}>
                          <CTable style={{fontSize: "clamp(0rem, 3vw, 1rem)"}} align="middle" className="bg-light mb-0" hover responsive>
                              <CTableBody>
                                  <CTableRow className="col-12">
                                      <CTableDataCell className="col-8">
                                            <CFormInput type="hidden" label="Congregação"/>
                                            <Autocomplete
                                                className="bg-white"
                                                options={listaCongregacoes}
                                                getOptionLabel={(option) => option ? option.nome : ""}
                                                isOptionEqualToValue={(option, value) => option ? value : ""}
                                                onChange={(e, value) => {
                                                    if(value) {
                                                        setContribuicao({...contribuicao, idCongregacao: value.id});
                                                    } else {
                                                        setContribuicao({...contribuicao, idCongregacao: ""});
                                                    }
                                                }}
                                                renderInput={(params) =>
                                                    <TextField
                                                        {...params}
                                                        style={{fontSize: "clamp(0rem, 2.5vw, 1rem)"}}
                                                        InputLabelProps={{shrink:true}}
                                                    />
                                                }
                                            />
                                      </CTableDataCell>
                                      <CTableDataCell className="col-4">
                                            <CFormInput
                                                style={{fontSize: "clamp(0rem, 3vw, 1rem)"}}
                                                type="date"
                                                label="Data"
                                                value={contribuicao.dataContribuicao}
                                                onChange={(e) => {
                                                    setContribuicao({...contribuicao, dataContribuicao: e.target.value})
                                                }
                                                }
                                            />
                                      </CTableDataCell>
                                  </CTableRow>
                                  <CTableRow className="col-12">
                                      <CTableDataCell className="col-6">
                                            <CFormInput
                                                style={{fontSize: "clamp(0rem, 3vw, 1rem)"}}
                                                label="Carnê"
                                                type="text"
                                                value={contribuicao.carne}
                                                onChange={(e) => {
                                                    setContribuicao({...contribuicao, carne: e.target.value})
                                                }
                                                }
                                            />
                                      </CTableDataCell>
                                      <CTableDataCell className="col-6">
                                            <CFormInput
                                                style={{fontSize: "clamp(0rem, 3vw, 1rem)"}}
                                                label="Oferta"
                                                type="text"
                                                value={contribuicao.oferta}
                                                onChange={(e) => {
                                                    setContribuicao({...contribuicao, oferta: e.target.value})
                                                }
                                                }
                                            />
                                      </CTableDataCell>
                                  </CTableRow>
                              </CTableBody>
                          </CTable>
                      </MediaQuery>
                      <CCard style={{border: "none",background: "transparent"}}>
                          <CButton
                              style={{borderColor: "unset",color: "black",backgroundColor: "rgba(150,150,150,100%)"}}
                              onClick={cadastrar}
                          >
                              Salvar
                          </CButton>
                      </CCard>
                  </CCardBody>
              </CCol>
          </Grid2>
      </Grid2>
  )
}

export default NovaContribuicao
