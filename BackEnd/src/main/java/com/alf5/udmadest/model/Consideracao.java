package com.alf5.udmadest.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Consideracao {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate dataRegistro = LocalDate.now();
    @Column(length = 4000)
    private String descricao;
    private LocalDate mesReferencia;

    public Consideracao() {
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDataRegistro() {
        return dataRegistro;
    }

    public void setDataRegistro(LocalDate dataRegistro) {
        this.dataRegistro = dataRegistro;
    }

    public LocalDate getMesReferencia() {
        return mesReferencia;
    }

    public void setMesReferencia(LocalDate mesReferencia) {
        this.mesReferencia = mesReferencia;
    }
}
