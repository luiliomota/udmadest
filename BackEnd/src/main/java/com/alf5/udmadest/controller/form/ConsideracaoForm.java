package com.alf5.udmadest.controller.form;

import com.alf5.udmadest.model.Consideracao;
import com.alf5.udmadest.repository.ConsideracaoRepository;

import java.time.LocalDate;

public class ConsideracaoForm {
    private String descricao;
    private LocalDate mesReferencia;

    public Consideracao registrar(ConsideracaoRepository consideracaoRepository) {
        Consideracao consideracao = new Consideracao();
        consideracao.setDescricao(this.descricao);
        consideracao.setMesReferencia(this.mesReferencia);
        return consideracao;
    }

    public String getDescricao() {
        return descricao;
    }

    public LocalDate getMesReferencia() {
        return mesReferencia;
    }
}
