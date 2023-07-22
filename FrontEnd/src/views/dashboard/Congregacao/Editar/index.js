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
import Grid2 from "@mui/material/Unstable_Grid2";

const EditarCongregacao = () => {
    const {id} = useParams();
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const navivate = useNavigate();
  const [congregacao, setCongregacao] = useState({
      nome: "",
  });

  useEffect(() => {
      api.get(`/api/congregacao/${id}`)
          .then((response) => {
              if(response.status == 200 && congregacao.dataCadastro === undefined){
                  setCongregacao(response.data)
              }
          })
          .catch((error) => console.error(error))
  })

  function gravar() {
    api.put((`/api/congregacao/${id}`),congregacao)
        .then((response) => {
            console.table(response);
            navivate('/cadastro/congregacao');
        })
        .catch((error) => console.error(error))
  }

  return (
      <Grid2 container style={{marginLeft: "0px", marginRight: "0px"}} item="true" textAlign="center" ml={6} mr={4.5} mb={4.5}>
          <Grid2 xs={12} md={12}>
              <CCol mb={-4}>
                    <CCardBody>
                        <CTable style={{fontSize: "clamp(0rem, 4vw, 1rem)"}} align="middle" className="bg-white mb-0" hover responsive>
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

export default EditarCongregacao
