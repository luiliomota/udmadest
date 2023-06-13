package com.alf5.udmadest.controller.form;

import com.alf5.udmadest.model.Saida;
import com.alf5.udmadest.repository.SaidaRepository;

import java.math.BigDecimal;
import java.time.LocalDate;

public class SaidaForm {
    private String descricao;
    private LocalDate dataSaida;
    private String valor;

    public Saida registrar(SaidaRepository saidaRepository) {
        Saida saida = new Saida();
        saida.setDescricao(this.descricao);
        saida.setDataSaida(this.dataSaida);
        saida.setValor(new BigDecimal(this.valor));
        return saida;
    }

    public String getDescricao() {
        return descricao;
    }

    public LocalDate getDataSaida() {
        return dataSaida;
    }

    public String getValor() {
        return valor;
    }
}
