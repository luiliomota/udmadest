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
import api from "../../../../Api";
import "../../../../styleNow.css";
import {useNavigate, useParams} from "react-router-dom";
import {Autocomplete, TextField} from "@mui/material";
import {options} from "axios";

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
        <CRow >
            <CCard style={{border: "none",background: "transparent"}} className="align-items-center text-center mb-4">
                <CCardBody >
                    <CTableBody>
                        <CRow>
                            <CCol style={varCol} className="mb-1" sm={12} lg={3}>
                                <CTableDataCell width="40%">
                                    <CFormInput type="hidden" label="Contribuição"/>
                                    <Autocomplete
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
                            </CCol>
                            <CCol style={varCol} className="mb-1" sm={12} lg={3}>
                                <CTableDataCell>
                                    <CFormInput
                                        type="date"
                                        label="Data"
                                        value={contribuicao.dataContribuicaoDate}
                                        onChange={(e) => {
                                            setContribuicao({...contribuicao, dataContribuicaoDate: e.target.value})
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
                            onClick={gravar}
                        >
                            Gravar
                        </CButton>
                    </CCard>
                </CCardBody>
            </CCard>
        </CRow>
  )
}

export default EditarContribuicao
