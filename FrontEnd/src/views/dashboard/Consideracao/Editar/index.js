import React, {useEffect, useState} from 'react'

import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CFormInput,
    CFormTextarea,
    CRow,
    CTableBody,
    CTableDataCell,
} from '@coreui/react'
import api from "../../../../Api";
import "../../../../styleNow.css";
import {useNavigate, useParams} from "react-router-dom";

const EditarConsideracao = () => {
    const {id} = useParams();
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const navivate = useNavigate();
    const varCol = {
        'textAlign': "-webkit-center",
    }
  const [consideracao, setConsideracao] = useState({
  });

  useEffect(() => {
      api.get(`/api/consideracao/${id}`)
          .then((response) => {
              if(response.status == 200 && consideracao.dataRegistro === undefined){
                  setConsideracao(response.data)
              }
          })
          .catch((error) => console.error(error))
  })
  function gravar() {
    api.put((`/api/consideracao/${id}`),consideracao)
        .then((response) => {
            console.table(response);
            navivate('/lancamento/consideracao');
        })
        .catch((error) => console.error(error))
  }
console.log(consideracao);
  return (
        <CRow >
            <CCard style={{border: "none",background: "transparent", display: "grid"}} className="align-items-center text-center mb-4">
                <CCardBody >
                        <CRow>
                            <CCol style={varCol} className="mb-1" sm={12}>
                                    <CFormTextarea
                                        type="text"
                                        label="Descricao"
                                        rows={5}
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
                                        label="Mês Referencia"
                                        value={consideracao.mesReferenciaDate}
                                        onChange={(e) => {
                                            setConsideracao({...consideracao, mesReferenciaDate: e.target.value})
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
                                onClick={gravar}
                            >
                                Gravar
                            </CButton>
                        </CTableDataCell>
                    </CCard>
                </CCardBody>
            </CCard>
        </CRow>
  )
}

export default EditarConsideracao
