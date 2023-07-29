package com.alf5.udmadest.controller.dto;

import com.alf5.udmadest.model.Contribuicao;
import org.springframework.data.domain.Page;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class ContribuicaoDto {
    private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    private Long id;
    private Long idCongregacao;
    private Long idMesReferencia;
    private LocalDate dataRegistro;
    private LocalDate dataContribuicaoDate;
    private String dataContribuicaoString;
    private String nomeCongregacao;
    private String mesReferenciaString;
    private BigDecimal carne;
    private BigDecimal oferta;

    public ContribuicaoDto(Contribuicao contribuicao) {
        this.id = contribuicao.getId();
        this.dataRegistro = contribuicao.getDataRegistro();
        if(contribuicao.getDataContribuicao() != null){
            this.dataContribuicaoString = contribuicao.getDataContribuicao().format(formatter);
            this.dataContribuicaoDate = contribuicao.getDataContribuicao();
        }
        this.idCongregacao = contribuicao.getCongregacao().getId();
        this.nomeCongregacao = contribuicao.getCongregacao().getNome();
        if (contribuicao.getMesReferencia() != null) {
            this.idMesReferencia = contribuicao.getMesReferencia().getId();
            this.mesReferenciaString = contribuicao.getMesReferencia().getNome();
        }
        this.carne = contribuicao.getCarne();
        this.oferta = contribuicao.getOferta();
    }

    public static Page<ContribuicaoDto> converter(Page<Contribuicao> contribuicoes) {
        return contribuicoes.map(ContribuicaoDto::new);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDataContribuicaoDate() {
        return dataContribuicaoDate;
    }

    public void setDataContribuicaoDate(LocalDate dataContribuicaoDate) {
        this.dataContribuicaoDate = dataContribuicaoDate;
    }

    public String getDataContribuicaoString() {
        return dataContribuicaoString;
    }

    public void setDataContribuicaoString(String dataContribuicaoString) {
        this.dataContribuicaoString = dataContribuicaoString;
    }

    public LocalDate getDataRegistro() {
        return dataRegistro;

    }

    public void setDataRegistro(LocalDate dataRegistro) {
        this.dataRegistro = dataRegistro;
    }

    public String getNomeCongregacao() {
        return nomeCongregacao;
    }

    public void setNomeCongregacao(String nomeCongregacao) {
        this.nomeCongregacao = nomeCongregacao;
    }

    public BigDecimal getCarne() {
        return carne;
    }

    public void setCarne(BigDecimal carne) {
        this.carne = carne;
    }

    public BigDecimal getOferta() {
        return oferta;
    }

    public void setOferta(BigDecimal oferta) {
        this.oferta = oferta;
    }

    public Long getIdCongregacao() {
        return idCongregacao;
    }

    public void setIdCongregacao(Long idCongregacao) {
        this.idCongregacao = idCongregacao;
    }

    public Long getIdMesReferencia() {
        return idMesReferencia;
    }

    public void setIdMesReferencia(Long idMesReferencia) {
        this.idMesReferencia = idMesReferencia;
    }

    public String getMesReferenciaString() {
        return mesReferenciaString;
    }

    public void setMesReferenciaString(String mesReferenciaString) {
        this.mesReferenciaString = mesReferenciaString;
    }
}
