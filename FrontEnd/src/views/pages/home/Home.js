import React from 'react'
import {Link} from 'react-router-dom'
import {CButton, CCardBody, CCardGroup, CCardText, CCol, CContainer, CHeader, CRow,} from '@coreui/react'
import '../../../styleNow.css'
import CIcon from "@coreui/icons-react";
import {logo4b} from "../../../assets/brand/logo4b";
import mobile from "../../../assets/images/mobile.png";
import tablet from "../../../assets/images/tablet.png";
import {Grid} from "@mui/material";
import {whatsapp} from "../../../assets/brand/whatsapp";
import {telegram} from "../../../assets/brand/telegram";
import {github} from "../../../assets/brand/github";
import {linkedin} from "../../../assets/brand/linkedin";

const Home = () => {
  return (
      <>
          <div className="imagem_de_fundo_home">
              <div style={{background: "linear-gradient(-90deg, black, transparent)"}}>
                  <CHeader position="sticky" style={{background: "linear-gradient(gray,transparent)",border: "none"}}>
                      <Grid container item xs={12}>
                          <Grid item xs={12} md={12} ml={2}>
                              <CIcon icon={logo4b} height={85} alt="logo3b"/>
                          </Grid>
                      </Grid>
                  </CHeader>
                <div className="min-vh-100 d-flex flex-row">
                  <CContainer>
                    <CRow className="justify-content-center">
                      <CCol md={9}>
                        <CCardGroup>
                          <CCardBody className="text-center mt-3">
                              <Grid justifyContent="center" container item xs={12} md={10}>
                                  <CCardText style={{fontSize: "200%"}} className="texto1_home">
                                    Soluções em desenvolvimento de sistemas web e aplicativos mobile
                                  </CCardText>
                                  <Grid container item sx={12} mt={4}>
                                      <Grid item sx={6} md={6}>
                                          <img width="75%" src={mobile}/>
                                      </Grid>
                                      <Grid item sx={6} md={6}>
                                          <img width="100%" src={tablet}/>
                                      </Grid>
                                  </Grid>
                                  <Link to="/mensagem">
                                      <CButton style={{color: "black",fontSize: "20px"}} color="secondary" className="texto1_home mb-4 mt-3" active tabIndex={-1}>
                                          Contate-nos agora!
                                      </CButton>
                                  </Link>
                              </Grid>
                          </CCardBody>
                        </CCardGroup>
                      </CCol>
                    </CRow>
                  </CContainer>
                </div>
              </div>
          </div>
          <div className="imagem_de_fundo_home2">
              <div style={{background: "linear-gradient(-90deg, black, transparent"}}>
                  <div className="laptop_fundo min-vh-100 d-flex flex-row">
                      <CContainer>
                          <Grid container justifyContent="center" item sx={12} mt={15} className="text-center">
                              <Grid item sx={5} md={5} className="texto2_home" mb={4} justifyContent="right">
                                  <img style={{marginTop: "4rem", marginBottom: "2rem", borderRadius: "50%", width: "50%"}} src="https://github.com/luiliomota.png"/>
                                  <br/>Luilio S. Mota
                                  <br/>
                                  <a href="https://t.me/luiliomota">
                                      <CIcon icon={telegram} height={25} alt="telegram" />
                                  </a>
                                  <a href="https://wa.me/5563992120418">
                                      <CIcon icon={whatsapp} height={25} alt="whatsapp" />
                                      (63) 99212-0418
                                  </a>
                                  <br/>
                                  <a href="mailto:luilio@alf5.com.br" >
                                      luilio@alf5.com.br
                                  </a>
                                  <br/>
                                  <a href="https://github.com/luiliomota">
                                      <CIcon icon={github} height={25} alt="github" />
                                      https://github.com/luiliomota
                                  </a>
                                  <br/>
                                  <a href="https://www.linkedin.com/in/luiliomota/">
                                      <CIcon icon={linkedin} height={25} alt="linkedin" />
                                      https://www.linkedin.com/in/luiliomota/
                                  </a>
                              </Grid>
                              <Grid item sx={5} md={5} className="texto2_home" mb={4}>
                                  <img style={{marginTop: "4rem", marginBottom: "2rem", borderRadius: "50%",borderColor: "white", width: "50%"}} src="https://github.com/luidne.png"/>
                                  <br/>Luidne S. Mota
                                  <br/>
                                  <CIcon icon={telegram} height={25} alt="telegram" />
                                  <a href="https://wa.me/5563992000101">
                                      <CIcon icon={whatsapp} height={25} alt="whatsapp" />
                                      (63) 99200-0101
                                  </a>
                                  <br/>
                                  <a href="mailto:luidne@alf5.com.br">
                                      luidne@alf5.com.br
                                  </a>
                                  <br/>
                                  <a href="https://github.com/luidne/">
                                      <CIcon icon={github} height={25} alt="github" />
                                      https://github.com/luidne/
                                  </a>
                                  <br/>
                                  <a href="https://www.linkedin.com/in/luidne/">
                                      <CIcon icon={linkedin} height={25} alt="linkedin" />
                                      https://www.linkedin.com/in/luidne/
                                  </a>
                                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                              </Grid>
                          </Grid>
                      </CContainer>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Home
