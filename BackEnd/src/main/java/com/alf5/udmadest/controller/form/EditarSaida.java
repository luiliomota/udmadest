package com.alf5.udmadest.controller.form;

import com.alf5.udmadest.model.Saida;
import com.alf5.udmadest.repository.SaidaRepository;

import java.math.BigDecimal;
import java.time.LocalDate;

public class EditarSaida {
    private String descricao;
    private LocalDate dataSaidaDate;
    private BigDecimal valor;

    public Saida editar(Long id, SaidaRepository saidaRepository) {
        Saida saida = saidaRepository.getReferenceById(id);
        saida.setDescricao(this.descricao);
        saida.setDataSaida(this.dataSaidaDate);
        saida.setValor(this.valor);
        return saida;
    }

    public String getDescricao() {
        return descricao;
    }

    public LocalDate getDataSaidaDate() {
        return dataSaidaDate;
    }

    public BigDecimal getValor() {
        return valor;
    }
}
