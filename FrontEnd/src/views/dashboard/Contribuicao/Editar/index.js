import React, {useEffect, useState} from 'react'

import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CFormInput,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableRow,
} from '@coreui/react'
import api from "../../../../Api";
import "../../../../styleNow.css";
import {useNavigate, useParams} from "react-router-dom";
import {Autocomplete, TextField} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import MediaQuery from "react-responsive";

const EditarContribuicao = () => {
    const {id} = useParams();
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const navivate = useNavigate();
    const varCol = {
        'textAlign': "-webkit-center",
    }
  const [listaCongregacoes, setListaCongregacoes] = useState([]);
  const [contribuicao, setContribuicao] = useState({
      idCongregacao: 0,
  });

    useEffect(() => {
        api.get("/api/congregacao")
            .then((response) => {
                setListaCongregacoes(response.data.content);
            })
            .catch((error) => console.error(error))
    },[]);

  useEffect(() => {
      api.get(`/api/contribuicao/${id}`)
          .then((response) => {
              if(response.status == 200 && contribuicao.dataRegistro === undefined){
                  setContribuicao(response.data)
              }
          })
          .catch((error) => console.error(error))
  })
  function gravar() {
    api.put((`/api/contribuicao/${id}`),contribuicao)
        .then((response) => {
            console.table(response);
            navivate('/lancamento/contribuicao');
        })
        .catch((error) => console.error(error))
  }

  return (
      <Grid2 container style={{marginLeft: "0px", marginRight: "0px"}} item="true" textAlign="center" ml={6} mr={4.5} mb={4.5}>
          <Grid2 xs={12} md={12}>
              <CCol mb={-4}>
                  <CCardBody>
                      <MediaQuery minWidth={600}>
                          <CTable style={{fontSize: "clamp(0rem, 3vw, 1rem)"}} align="middle" className="bg-light mb-0" hover responsive>
                              <CTableBody>
                                  <CTableRow>
                                      <CTableDataCell className="w-25">
                                            <CFormInput type="hidden" label="Congregação"/>
                                            <Autocomplete
                                                style={{fontSize: "clamp(0rem, 3vw, 1rem)"}}
                                                className="bg-white"
                                                value={contribuicao.idCongregacao}
                                                options={listaCongregacoes}
                                                getOptionLabel={(option) =>
                                                {
                                                    const congregacao = listaCongregacoes.find(item => item.id === option);
                                                    return option ? (congregacao ? congregacao.nome : option.nome) : "";
                                                }}
                                                isOptionEqualToValue={(option, value) => option ? option.nome === value: false}
                                                onChange={(e, value) => {
                                                    setContribuicao({...contribuicao, idCongregacao: value.id});
                                                }}
                                                renderInput={(params) =>
                                                    <TextField
                                                        {...params}
                                                        InputLabelProps={{shrink:true}}
                                                    />
                                                }
                                            />
                                      </CTableDataCell>
                                      <CTableDataCell className="w-25">
                                            <CFormInput
                                                style={{fontSize: "clamp(0rem, 3vw, 1rem)"}}
                                                type="date"
                                                label="Data"
                                                value={contribuicao.dataContribuicaoDate}
                                                onChange={(e) => {
                                                    setContribuicao({...contribuicao, dataContribuicaoDate: e.target.value})
                                                }
                                                }
                                            />
                                      </CTableDataCell>
                                      <CTableDataCell className="w-25">
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
                                      <CTableDataCell className="w-25">
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
                                  <CTableRow>
                                      <CTableDataCell className="w-50">
                                            <CFormInput type="hidden" label="Congregação"/>
                                            <Autocomplete
                                                style={{fontSize: "clamp(0rem, 3vw, 1rem)"}}
                                                className="bg-white"
                                                value={contribuicao.idCongregacao}
                                                options={listaCongregacoes}
                                                getOptionLabel={(option) =>
                                                {
                                                    const congregacao = listaCongregacoes.find(item => item.id === option);
                                                    return option ? (congregacao ? congregacao.nome : option.nome) : "";
                                                }}
                                                isOptionEqualToValue={(option, value) => option ? option.nome === value: false}
                                                onChange={(e, value) => {
                                                    setContribuicao({...contribuicao, idCongregacao: value.id});
                                                }}
                                                renderInput={(params) =>
                                                    <TextField
                                                        {...params}
                                                        InputLabelProps={{shrink:true}}
                                                    />
                                                }
                                            />
                                      </CTableDataCell>
                                      <CTableDataCell className="w-50">
                                            <CFormInput
                                                style={{fontSize: "clamp(0rem, 3vw, 1rem)"}}
                                                type="date"
                                                label="Data"
                                                value={contribuicao.dataContribuicaoDate}
                                                onChange={(e) => {
                                                    setContribuicao({...contribuicao, dataContribuicaoDate: e.target.value})
                                                }
                                                }
                                            />
                                      </CTableDataCell>
                                  </CTableRow>
                                  <CTableRow>
                                      <CTableDataCell className="w-50">
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
                                      <CTableDataCell className="w-50">
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
                              onClick={gravar}
                          >
                              Gravar
                          </CButton>
                      </CCard>
                  </CCardBody>
              </CCol>
          </Grid2>
      </Grid2>
  )
}

export default EditarContribuicao
