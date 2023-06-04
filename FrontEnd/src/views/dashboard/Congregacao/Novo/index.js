import React, {useState} from 'react'

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
import {useNavigate} from "react-router-dom";

const NovaCongregacao = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const navivate = useNavigate();
  const [congregacao, setCongregacao] = useState({
      nome: "",
  });

  function cadastrar() {
    api.post("/api/congregacao",congregacao)
        .then((response) => {
            console.table(response);
            navivate('/cadastro/congregacao');
        })
        .catch((error) => console.error(error))
  }

  return (
        <CRow >
            <CCol >
                <CCard style={{border: "none",background: "transparent"}} className="align-items-center mb-4">
                    <CCardBody style={{display: "contents"}}>
                        <CTable align="middle" className="mb-0" hover responsive>
                            <CTableHead color="light">
                                <CTableRow>
                                    <CTableHeaderCell>NOME DA CONGREGAÇÃO</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                        </CTable>
                        <CFormInput
                            type="text"
                            value={congregacao.nome}
                            onChange={(e) => setCongregacao({
                                    ...congregacao, nome: e.target.value
                                })
                            }
                        />
                        <br/>
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
            </CCol>
        </CRow>
  )
}

export default NovaCongregacao
