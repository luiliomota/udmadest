package com.alf5.udmadest.controller.dto;

import com.alf5.udmadest.model.Saida;
import org.springframework.data.domain.Page;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class SaidaDto {
    private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    private Long id;
    private LocalDate dataRegistro;
    private String descricao;
    private LocalDate dataSaidaDate;
    private String dataSaidaString;
    private BigDecimal valor;

    public SaidaDto(Saida saida) {
        this.id = saida.getId();
        this.dataRegistro = saida.getDataRegistro();
        this.descricao = saida.getDescricao();
        if(saida.getDataSaida() != null){
            this.dataSaidaString = saida.getDataSaida().format(formatter);
            this.dataSaidaDate = saida.getDataSaida();
        }
        this.valor = saida.getValor();
    }

    public static Page<SaidaDto> converter(Page<Saida> saidas) {
        return saidas.map(SaidaDto::new);
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

    public LocalDate getDataSaidaDate() {
        return dataSaidaDate;
    }

    public void setDataSaidaDate(LocalDate dataSaidaDate) {
        this.dataSaidaDate = dataSaidaDate;
    }

    public String getDataSaidaString() {
        return dataSaidaString;
    }

    public void setDataSaidaString(String dataSaidaString) {
        this.dataSaidaString = dataSaidaString;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }
}
