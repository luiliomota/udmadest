package com.alf5.udmadest.controller.dto;

import com.alf5.udmadest.model.Consideracao;
import com.alf5.udmadest.model.Saida;
import org.springframework.data.domain.Page;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;

public class ConsideracaoDto {
//    private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    private Long id;
    private LocalDate dataRegistro;
    private LocalDate dataConsideracao;
    private String descricao;
    private Long idMesReferencia;
    private String mesReferenciaString;

    public ConsideracaoDto(Consideracao consideracao) {
        this.id = consideracao.getId();
        this.dataRegistro = consideracao.getDataRegistro();
        this.dataConsideracao = consideracao.getDataConsideracao();
        this.descricao = consideracao.getDescricao();
        if(consideracao.getMesReferencia() != null){
            this.idMesReferencia = consideracao.getMesReferencia().getId();
            this.mesReferenciaString = consideracao.getMesReferencia().getNome();
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

    public LocalDate getDataConsideracao() {
        return dataConsideracao;
    }

    public void setDataConsideracao(LocalDate dataConsideracao) {
        this.dataConsideracao = dataConsideracao;
    }

    public String getMesReferenciaString() {
        return mesReferenciaString;
    }

    public void setMesReferenciaString(String mesReferenciaString) {
        this.mesReferenciaString = mesReferenciaString;
    }

    public Long getIdMesReferencia() {
        return idMesReferencia;
    }

    public void setIdMesReferencia(Long idMesReferencia) {
        this.idMesReferencia = idMesReferencia;
    }
}
