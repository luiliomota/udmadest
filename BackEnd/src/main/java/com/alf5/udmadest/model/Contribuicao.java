package com.alf5.udmadest.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
public class Contribuicao {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate dataRegistro = LocalDate.now();
    private LocalDate dataContribuicao;
    @ManyToOne
    private Congregacao congregacao;
    @ManyToOne
    private MesReferencia mesReferencia;
    private BigDecimal carne;
    private BigDecimal oferta;

    public Contribuicao() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDataContribuicao() {
        return dataContribuicao;
    }

    public void setDataContribuicao(LocalDate dataContribuicao) {
        this.dataContribuicao = dataContribuicao;
    }

    public LocalDate getDataRegistro() {
        return dataRegistro;
    }

    public void setDataRegistro(LocalDate dataRegistro) {
        this.dataRegistro = dataRegistro;
    }

    public MesReferencia getMesReferencia() {
        return mesReferencia;
    }

    public void setMesReferencia(MesReferencia mesReferencia) {
        this.mesReferencia = mesReferencia;
    }

    public Congregacao getCongregacao() {
        return congregacao;
    }

    public void setCongregacao(Congregacao congregacao) {
        this.congregacao = congregacao;
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
