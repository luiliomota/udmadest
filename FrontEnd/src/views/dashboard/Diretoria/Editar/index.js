import React, {useEffect, useState} from 'react'

import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CFormInput,
    CRow,
    CTable,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import api from "../../../../Api";
import "../../../../styleNow.css";
import {useNavigate, useParams} from "react-router-dom";

const EditarDiretoria = () => {

    const varCol = {
        'textAlign': "-webkit-center",
    }
    const {id} = useParams();
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const navivate = useNavigate();
  const [diretoria, setDiretoria] = useState({
      nome: "",
      cargo: "",
  });

  useEffect(() => {
      api.get(`/api/diretoria/${id}`)
          .then((response) => {
              if(response.status == 200 && diretoria.dataCadastro === undefined){
                  setDiretoria(response.data)
              }
          })
          .catch((error) => console.error(error))
  })

  function gravar() {
    api.put((`/api/diretoria/${id}`),diretoria)
        .then((response) => {
            console.table(response);
            navivate('/cadastro/diretoria');
        })
        .catch((error) => console.error(error))
  }

  return (
        <CRow >
            <CCol >
                <CCard style={{border: "none",background: "transparent"}} className="align-items-center mb-4">
                    <CCardBody style={{display: "contents"}}>
                        <CCol style={varCol} className="mb-1" sm={12} lg={6}>
                            <CTable align="middle" className="mb-0" hover responsive>
                                <CTableHead color="light">
                                    <CTableRow>
                                        <CTableHeaderCell>Nome</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                            </CTable>
                            <CFormInput
                                type="text"
                                value={diretoria.nome}
                                onChange={(e) => setDiretoria({
                                        ...diretoria, nome: e.target.value
                                    })
                                }
                            />
                        </CCol>
                        <CCol style={varCol} className="mb-1" sm={12} lg={6}>
                            <CTable align="middle" className="mb-0" hover responsive>
                                <CTableHead color="light">
                                    <CTableRow>
                                        <CTableHeaderCell>Cargo</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                            </CTable>
                            <CFormInput
                                type="text"
                                value={diretoria.cargo}
                                onChange={(e) => setDiretoria({
                                    ...diretoria, cargo: e.target.value
                                })
                                }
                            />
                        </CCol>
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
            </CCol>
        </CRow>
  )
}

export default EditarDiretoria
