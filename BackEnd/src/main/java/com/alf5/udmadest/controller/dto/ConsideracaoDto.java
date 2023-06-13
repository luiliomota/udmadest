package com.alf5.udmadest.controller.dto;

import com.alf5.udmadest.model.Consideracao;
import com.alf5.udmadest.model.Saida;
import org.springframework.data.domain.Page;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class ConsideracaoDto {
    private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    private Long id;
    private LocalDate dataRegistro;
    private String descricao;
    private LocalDate mesReferenciaDate;
    private String mesReferenciaString;

    public ConsideracaoDto(Consideracao consideracao) {
        this.id = consideracao.getId();
        this.dataRegistro = consideracao.getDataRegistro();
        this.descricao = consideracao.getDescricao();
        if(consideracao.getMesReferencia() != null){
            this.mesReferenciaString = consideracao.getMesReferencia().format(formatter);
            this.mesReferenciaDate = consideracao.getMesReferencia();
        }
    }

    public static Page<ConsideracaoDto> converter(Page<Consideracao> consideracoes) {
        return consideracoes.map(ConsideracaoDto::new);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public LocalDate getDataRegistro() {
        return dataRegistro;
    }

    public void setDataRegistro(LocalDate dataRegistro) {
        this.dataRegistro = dataRegistro;
    }

    public LocalDate getMesReferenciaDate() {
        return mesReferenciaDate;
    }

    public void setMesReferenciaDate(LocalDate mesReferenciaDate) {
        this.mesReferenciaDate = mesReferenciaDate;
    }

    public String getMesReferenciaString() {
        return mesReferenciaString;
    }

    public void setMesReferenciaString(String mesReferenciaString) {
        this.mesReferenciaString = mesReferenciaString;
    }
}
