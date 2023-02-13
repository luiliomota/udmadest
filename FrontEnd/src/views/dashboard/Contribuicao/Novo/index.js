import React, {useEffect, useState} from 'react'

import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CFormInput,
    CRow,
    CTable, CTableBody, CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import api from "../../../../components/Api";
import "../../../../styleNow.css";
import {Autocomplete, IconButton, TextField} from "@mui/material";
import {Delete, Edit} from "@mui/icons-material";

const NovaContribuicao = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

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
      carne: "",
      oferta: "",
  });

    useEffect(() => {
        api.get("/api/congregacao")
            .then((response) => {
                setListaCongregacoes(response.data.content);
            })
            .catch((error) => console.error(error))
    },[]);

    function cadastrar() {
    api.post("/api/contribuicao",contribuicao)
        .then((response) => {
            console.table(response);
            resetContribuicao();
            resetCongregacao();
        })
        .catch((error) => console.error(error))
  }

  console.log(listaCongregacoes);
    console.log(contribuicao);
  function resetContribuicao () {
      setContribuicao({
          idCongregacao: "",
          dataContribuicao: "",
          carne: "",
          oferta: "",
      })
  }
  function resetCongregacao () {
      setCongregacao({
          nome: "",
      });
  }
  return (
        <CRow>
                <CCard style={{border: "none",background: "transparent"}} className="align-items-center text-center mb-4">
                    <CCardBody >
                            <CTableBody>
                                <CRow>
                                    <CCol style={varCol} className="mb-1" sm={12} lg={3}>
                                        <CTableDataCell width="40%">
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
                                    </CCol>
                                    <CCol style={varCol} className="mb-1" sm={12} lg={3}>
                                        <CTableDataCell>
                                            <CFormInput
                                                type="text"
                                                label="Data"
                                                value={contribuicao.dataContribuicao}
                                                onChange={(e) => {
                                                    setContribuicao({...contribuicao, dataContribuicao: e.target.value})
                                                }
                                                }
                                            />
                                        </CTableDataCell>
                                    </CCol>
                                    <CCol style={varCol} className="mb-1" sm={12} lg={3}>
                                        <CTableDataCell>
                                            <CFormInput
                                                label="Carnê"
                                                type="text"
                                                value={contribuicao.carne}
                                                onChange={(e) => {
                                                    setContribuicao({...contribuicao, carne: e.target.value})
                                                }
                                                }
                                            />
                                        </CTableDataCell>
                                    </CCol>
                                    <CCol style={varCol} className="mb-4" sm={12} lg={3}>
                                        <CTableDataCell>
                                            <CFormInput
                                                label="Oferta"
                                                type="text"
                                                value={contribuicao.oferta}
                                                onChange={(e) => {
                                                    setContribuicao({...contribuicao, oferta: e.target.value})
                                                }
                                                }
                                            />
                                        </CTableDataCell>
                                    </CCol>
                                </CRow>
                            </CTableBody>
                        <CCard style={{border: "none",background: "transparent"}}>
                            <CButton
                                style={{borderColor: "unset",color: "black",backgroundColor: "rgba(150,150,150,100%)"}}
                                onClick={cadastrar}
                            >
                                Salvar
                            </CButton>
                        </CCard>
                    </CCardBody>
                </CCard>
        </CRow>
  )
}

export default NovaContribuicao
