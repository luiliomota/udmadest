package com.alf5.udmadest.controller.dto;

import com.alf5.udmadest.model.Contribuicao;
import org.springframework.data.domain.Page;

import java.math.BigDecimal;
import java.time.format.DateTimeFormatter;

public class ContribuicaoDto {
    private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    private Long id;
    private String dataRegistro;
    private String dataContribuicao;
    private String nomeCongregacao;
    private BigDecimal carne;
    private BigDecimal oferta;

    public ContribuicaoDto(Contribuicao contribuicao) {
        this.id = contribuicao.getId();
        this.dataRegistro = contribuicao.getDataRegistro().format(formatter);
        if(contribuicao.getDataContribuicao() != null){
            this.dataContribuicao = contribuicao.getDataContribuicao().format(formatter);
        }
        this.nomeCongregacao = contribuicao.getCongregacao().getNome();
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

    public String getDataContribuicao() {
        return dataContribuicao;
    }

    public void setDataContribuicao(String dataContribuicao) {
        this.dataContribuicao = dataContribuicao;
    }

    public String getDataRegistro() {
        return dataRegistro;

    }

    public void setDataRegistro(String dataRegistro) {
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
}
