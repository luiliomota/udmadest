import React, {useState} from 'react'

import {
    CButton,
    CCard,
    CCardBody,
    CCol, CForm,
    CFormInput, CFormText,
    CFormTextarea,
    CRow,
    CTableBody,
    CTableDataCell,
} from '@coreui/react'
import api from "../../../../Api";
import "../../../../styleNow.css";
import {useNavigate} from "react-router-dom";
import {TextField} from "@mui/material";

const NovaConsideracao = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const navigate = useNavigate();
  const varCol = {
      'textAlign': "-webkit-center",
  }
  const [consideracao, setConsideracao] = useState({
      descricao: "",
      mesReferencia: "",
  });

    function cadastrar() {
    api.post("/api/consideracao",consideracao)
        .then((response) => {
            console.table(response);
            navigate('/lancamento/consideracao');
        })
        .catch((error) => console.error(error))
  }

  return (
        <CRow>
                <CCard style={{border: "none",background: "transparent", display: "grid"}} className="align-items-center text-center mb-4">
                    <CCardBody >
                                <CRow>
                                    <CCol style={varCol} className="mb-1" sm={12}>
                                            <CFormTextarea
                                                type="text"
                                                rows={5}
                                                label="Descrição"
                                                value={consideracao.descricao}
                                                onChange={(e) => {
                                                      setConsideracao({...consideracao, descricao: e.target.value})
                                                    }
                                                }
                                            />
                                    </CCol>
                                    <CCol style={varCol} className="mb-1" sm={12}>
                                        <CTableDataCell>
                                            <CFormInput
                                                type="date"
                                                label="Data"
                                                value={consideracao.mesReferencia}
                                                onChange={(e) => {
                                                    setConsideracao({...consideracao, mesReferencia: e.target.value})
                                                  }
                                                }
                                            />
                                        </CTableDataCell>
                                    </CCol>
                                </CRow>
                        <CCard style={{border: "none",background: "transparent"}}>
                            <CTableDataCell>
                                <CButton
                                    style={{borderColor: "unset",color: "black",backgroundColor: "rgba(150,150,150,100%)"}}
                                    onClick={cadastrar}
                                >
                                    Salvar
                                </CButton>
                            </CTableDataCell>
                        </CCard>
                    </CCardBody>
                </CCard>
        </CRow>
  )
}

export default NovaConsideracao
